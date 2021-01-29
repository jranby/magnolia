$(document).ready(function(){

    // ---------------------------------------------------------------------

    var fundData;
    var graphDiv = 'fund-graph';
    var chartDiv = 'fund-chart';
    var capcoUrl = 'https://capco.steelpandas.net/TD/api/rest.svc/oghzrsd780/security_details/';
    var capcoUrlFields = '?viewId=snapshot&idtype=sedol&responseViewFormat=json&useCache=true&cacheDurationMins=240';
    var stagingCapcoUrl = 'https://mstarproxy-staging.steelpandas.net/TD/api/rest.svc/oghzrsd780/security_details/';

    // ---------------------------------------------------------------------

    /*
     * Fund Chart
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    var fetchUrl = capcoUrl + sedol + capcoUrlFields;

    $.ajax({
        url: fetchUrl,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        success: function(data) {

            fundData = data[0];

            console.log(data);

            // define ytd
            var yearToDate = findFundYearToDate(fundData.TrailingPerformance);
            
            if (fundData['Portfolios'][0]['AssetAllocations'] == undefined) {
                var assets = fundData['Portfolios'][1]['AssetAllocations'];
            } else {
                var assets = fundData['Portfolios'][0]['AssetAllocations'];
            }

            var pieData = getFundPieChartData(assets);
            
            buildFundPieChart(pieData, chartDiv);

            var growth10k = findFundGrowthof10k(fundData['GrowthOf10K']);
            var lineChartData = findFundBenchmarkData(fundData['Benchmark'], growth10k);
            
            getFundLineChartData(growth10k);
            buildFundLineChart(lineChartData, graphDiv);
            
        },
        error: function(e) {

        }
    });        

    // ---------------------------------------------------------------------

    /*
     * Show Morning * Iframe If Hash In Url
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    if (window.location.hash) {
        // not 0 because # is first character of window.location.hash
        if (window.location.hash.indexOf('iframe-td') == 1) {
            // it's at the start
            $('#iframe-td').removeClass('hidden');
        }
        else if (window.location.hash.indexOf('iframe-td') != -1) {
            // it's there, but not at the start
        }
        else {
            // not there
        }
    }    

    // ---------------------------------------------------------------------

    /*
     * Fund Data
     *
     * Function handler for displaying the fund
     * index current data miscellaneous information.
     */
    if ($('#fund-data').length > 0) {

        var remoteFundUrl = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/UkFunds/instruments/" + sedol;

        $.ajax({
            method: 'GET',
            url: remoteFundUrl,
            async: true,
            crossDomain: true,
            processData: false,
            data: '',
            headers: {
                "TD-User-Agent": "PUBLIC (webbroker)",
                "content-type": "application/json",
                "accept": "application/uk.co.tdwh.borealis-v1+json",
                "cache-control": "no-cache"
            },
            success: function(response) {

                console.log(response);

                var fundCurrent = $('.fund-current'),
                    fundCurrency = $('.fund-currency'),
                    fundTimestamp = $('.fund-timestamp'),
                    fundType = $('.fund-type'),
                    fundProvider = $('.fund-provider'),
                    fundIsin = $('.fund-id'),
                    fundSedol = $('.fund-sedol');

                var stockType = response.stockType;
                var stockTypeString = stockType.charAt(0).toUpperCase() + stockType.slice(1).toLowerCase();
                var price = response.bidPrice ? response.bidPrice : response.nav;

                $(fundCurrent).html('<span class="fund-currency">' + response.currencyIso + '</span>' + price);
                $(fundType).html('<strong>Type:</strong> ' + stockTypeString);
                $(fundProvider).html('<strong>Provider:</strong> ' + response.fundProvider);
                $(fundIsin).html('<strong>ISIN:</strong> ' + response.isin);
                $(fundSedol).html('<strong>Sedol:</strong> ' + response.sedol);
                $(fundTimestamp).html('As of <span>' + response.quoteTimeFormatted + '</span> BST. Minimum 15 minutes delay.');
            },
            error: function(e) {
                
                console.log(e);

            }
        });
    };

    // ---------------------------------------------------------------------

    /*
     * View Detailed Report More Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    $('.view-report').click(function(e) {
                
        var tdIframe = document.getElementById('iframe-td');

        $('.view-report').text(function(i, text) {
            return text === 'View Detailed Report' ? 'Hide Detailed Report' : 'View Detailed Report';
        });

        $(tdIframe).toggleClass('hidden');
    });

    // ---------------------------------------------------------------------

    /*
     * Fund Buy Button Modal Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    $('.fund-buy').click(function(e) {
        
        e.preventDefault();
        
        $('#iframe-modal').modal();
        
        // build the buy url
        var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&amp;destination_bos=BUY&amp;destination_isin=&amp;destination_sedol='+sedol+'&amp;destination_secid&amp;destination_exchange=&amp;destination_epic=&amp;destination_token';
        
        // login buy link
        var loginBuyLink = $('.login-buy-link');

        // append vars to href
        $(loginBuyLink).attr('href', buyUrl);
    });

    // ---------------------------------------------------------------------
    
    /*
     * Get Pie Chart Data
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function getFundPieChartData(AssetAllocations) {
        assets = $.grep(AssetAllocations, function(e) {
            return e.Type == 'MorningstarUK6'
        });
        refined_assets = $.grep(assets, function(e) {
            return e.SalePosition == 'N'
        });
        BreakdownValues = refined_assets[0].BreakdownValues;
        dataProvider = [];
        $.each(BreakdownValues, function(index, value) {
            if (value.Type != '99' && value.Value) {
                data = {
                    'title': switchFundTitle(value.Type),
                    'value': value.Value.toFixed(2)
                };
                dataProvider.push(data);
            }
        });
        //console.log(dataProvider);
        return dataProvider;
    }

    // ---------------------------------------------------------------------

    /*
     * Build Fund Pie Chart
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function buildFundPieChart(dataProvider, chartDiv) {
        var fundChart = AmCharts.makeChart(chartDiv, {
            "type": "pie",
            "theme": "light",
            "fontFamily": "Lato",
            "legend": {
                "position": "bottom",
                "align": "center",
                "autoMargins": false,
                "textClickEnabled": false,
                "switchable": false,
                "fontSize": 12,
                "markerLabelGap": 10,
                "horizontalGap": 10
            },
            "labelsEnabled": false,
            "dataProvider": dataProvider,
            "valueField": "value",
            "titleField": "title",
            "startEffect": "bounce",
            "startDuration": 1,
            "startRadius": '150%',
            "labelRadius": 15,
            "innerRadius": "50%",
            "depth3D": 10,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "angle": 15,
            "export": {
                "enabled": true
            }
        });
    }

    // ---------------------------------------------------------------------

    /*
     * Switch Title Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function switchFundTitle(type_value) {
        type = '';
        switch (type_value) {
            case '1':
                type = 'UK/Euro Equity';
                break;
            case '2':
                type = 'NA Equity';
                break;
            case '3':
                type = 'Other Equity';
                break;
            case '4':
                type = 'Bonds';
                break;
            case '5':
                type = 'Cash';
                break;
            case '6':
                type = 'Property';
                break;
            case '7':
                type = 'Other';
                break;
        }
        return type;
    }

    // ---------------------------------------------------------------------

    /*
     * Find QSF Year To Date
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function findFundYearToDate(TrailingPerformance) {
        gbp_performances = $.grep(TrailingPerformance, function(e) {
            return e.CurrencyId == 'GBP'
        })
        gbp_performance = $.grep(gbp_performances, function(e) {
            return e.Type == "DayEnd"
        })
        returns = $.grep(gbp_performance[0].Return, function(e) {
                return e.TimePeriod == "M0"
            })
            // two of the same appear?
        return returns[0].Value.toFixed(2);
    }

    // ---------------------------------------------------------------------

    /*
     * Find QSF Growth Of 10K
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function findFundGrowthof10k(growth10k) {
        gbp_growth = $.grep(growth10k, function(e) {
            return e.CurrencyId == 'GBP'
        })
        //Two of the same appear?
        return gbp_growth[0].HistoryDetails;
    }

    // ---------------------------------------------------------------------

    /*
     * Find QSF Benchmark Data
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function findFundBenchmarkData(benchmark, growth10k) {
        category_primary_benchmark = $.grep(benchmark, function(e) {
            return e.Type == 'CategoryPrimaryIndex'
        });
        category_primary_gbp_growth = $.grep(category_primary_benchmark[0]['GrowthOf10K'], function(e) {
            return e.CurrencyId == 'GBP'
        })
        category_benchmark = $.grep(benchmark, function(e) {
            return e.Type == 'Category'
        });
        category_benchmark_gbp_growth = $.grep(category_benchmark[0]['GrowthOf10K'], function(e) {
            return e.CurrencyId == 'GBP'
        })
        category_primary_gbp_growth_details = category_primary_gbp_growth[0]['HistoryDetails'];
        category_benchmark_gbp_growth_details = category_benchmark_gbp_growth[0]['HistoryDetails'];
        data = [];
        $.each(growth10k, function(index, value) {
            date = value.EndDate;
            value = value.Value;
            value_1 = $.grep(category_primary_gbp_growth_details, function(e) {
                return e.EndDate == date
            });
            value_2 = $.grep(category_benchmark_gbp_growth_details, function(e) {
                return e.EndDate == date
            });
            if (value_1.length > 0 && value_2.length > 0) {
                line = {
                    'date': date,
                    'val-one': value.toFixed(2),
                    'val-two': value_1[0].Value.toFixed(2),
                    'val-three': value_2[0].Value.toFixed(2)
                }
                data.push(line);
            }
        });
        return data;
    }

    // ---------------------------------------------------------------------

    /*
     * Get Line Chart Data
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function getFundLineChartData(growthof10k) {
        dataProvider = [];
        $.each(growthof10k, function(index, value) {
            data = {
                'val-three': value.Value.toFixed(2)
            };
            dataProvider.push(data);
        });
        return dataProvider;
    }

    // ---------------------------------------------------------------------

    /*
     * Build Line Chart
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------

    function buildFundLineChart(dataProvider, graphDiv) {
        var chart = AmCharts.makeChart(graphDiv, {
            "type": "serial",
            "theme": "light",
            "fontFamily": "Lato",
            "legend": {
                "position": "bottom",
                "align": "center",
                "autoMargins": false,
                "switchable": false,
                "fontSize": 12,
                "marginTop": 10
            },
            "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
            "labelsEnabled": false,
            "marginRight": 30,
            "autoMarginOffset": 0,
            "autoMargins": true,
            "marginLeft": 0,
            "marginRight": 0,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left"
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g3",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "Fund Category",
                "lineColor": "#87D37C",
                "useLineColorForBulletBorder": true,
                "valueField": "val-three",
                "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
            }, {
                "id": "g1",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "Fund Performance",
                "lineColor": "#F7CA18",
                "useLineColorForBulletBorder": true,
                "valueField": "val-one",
                "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
            }, {
                "id": "g2",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "Benchmark",
                "lineColor": "#E87E04",
                "useLineColorForBulletBorder": true,
                "valueField": "val-two",
                "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#363636"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.2
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": dataProvider
        });
    }

    // ---------------------------------------------------------------------

});