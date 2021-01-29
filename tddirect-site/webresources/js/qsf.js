$(document).ready(function(){

    // ---------------------------------------------------------------------

    var fundData;
    var capcoUrl = 'https://capco.steelpandas.net/TD/api/rest.svc/oghzrsd780/security_details/';
    var capcoUrlFields = '?viewId=snapshot&idtype=sedol&responseViewFormat=json&useCache=true&cacheDurationMins=240';
    var stagingCapcoUrl = 'https://mstarproxy-staging.steelpandas.net/TD/api/rest.svc/oghzrsd780/security_details/';

    // ---------------------------------------------------------------------

    /*
     * Fund Panel Read More Toggler
     *
     * Handler for the on click read more button for
     * opening, closing and resizing our fund panel and
     * contains the necessary ajax call to get our data.
     */
    $('.qsf-toggler').click(function(e) {
            
        e.preventDefault();
                                                                    
        var sedol = $(this).attr('data-sedol');
        var fundId = $(this).attr('data-fund-uuid');
        var fetchUrl = capcoUrl + sedol + capcoUrlFields;

        $('.qsf-performance').hide();
        $('.qsf-more').text('Read More');
        $('.qsf-view-graph').text('View Performance Chart');

        //$(this).closest('.qsf-panel-wrap').siblings('.shrink').find('.qsf-top').removeClass('col-xs-9');         

        $.ajax({
            url: fetchUrl,
            cache: false,
            crossDomain: true,
            dataType: 'json',
            success: function(data) {

                fundData = data[0];

                //console.log(fundData);

                // define qsf meta
                var outMeta = $('#qsf-meta-' + sedol);
                var yearToDate = findQsfYearToDate(fundData.TrailingPerformance);
                
                // set qsf meta
                outMeta.find('.ytd-return').text(yearToDate);
                outMeta.find('.ongoing-charge').text(fundData.OngoingCharge);

                if (fundData['Portfolios'][0]['AssetAllocations'] == undefined) {
                    var assets = fundData['Portfolios'][1]['AssetAllocations'];
                } else {
                    var assets = fundData['Portfolios'][0]['AssetAllocations'];
                }

                var chartDiv = 'qsf-chart-' + sedol;                        
                var pieData = getQsfPieChartData(assets);
                
                buildQsfPieChart(pieData, chartDiv);
            },
            error: function(e) {

            }
        });
        
        // closed
        if ($(this)
            .closest('.qsf-panel-wrap')
            .hasClass('col-md-4')) {
            $(this)
                .closest('.qsf-panel-wrap')
                .toggleClass('col-md-4 col-md-8')
                .toggleClass('closed open')
                .siblings('.col-md-4')
                .toggleClass('col-md-4 col-md-2')
                .addClass('shrink')
                .find('.qsf-reasons')
                .hide();
            $(this)
                .closest('.qsf-panel-wrap')
                .siblings('.shrink')
                .find('.qsf-top')
                .removeClass('col-md-9');

        // open
        } else if ($(this)
            .closest('.qsf-panel-wrap')
            .hasClass('col-md-8')) {
            $('.qsf-panel-wrap')
                .removeClass('col-md-2 col-md-8 open shrink')
                .addClass('col-md-4 closed');
        
        // shrink
        } else {
            $(this)
                .closest('.qsf-panel-wrap')
                .toggleClass('col-md-2 col-md-8')
                .toggleClass('closed open')
                .removeClass('shrink')
                .siblings('.qsf-panel-wrap')
                .removeClass('col-md-8 open')
                .addClass('col-md-2 closed shrink')
                .find('.qsf-more')
                .text(function(i, text) {
                    return text === 'Read More' ? 'Read Less' : 'Read More';
                })
                .closest('.qsf-objective')
                .next()
                .hide();
            $(this)
                .closest('.qsf-panel-wrap')
                .siblings('.shrink')
                .find('.qsf-top')
                .removeClass('col-md-9');                
        }

        $(this).closest('.qsf-panel-wrap').siblings('.qsf-panel-wrap').each(function() {

            var video = $(this).find('.qsf-video-src');
            var videoSrc = video.attr('src');

            video.attr('src', '');
            video.attr('src', videoSrc);
        });

    });

    // ---------------------------------------------------------------------

    /*
     * View Performance Graph Handler
     *
     * Handler for the display and hide of the performance,
     * graph, and the creation of the AmChart graph itself.
     */
    $('.qsf-view-graph').click(function(e) {
        
        e.preventDefault();

        var sedol = $(this).attr('data-sedol');
        var graphDiv = 'qsf-graph-' + sedol;
        
        $(this).text(function(i, text) {
            return text === 'View Performance Chart' ? 'Hide Performance Chart' : 'View Performance Chart';
        }).closest('.qsf-panel-wrap').find('.qsf-performance').slideToggle('slow');

        var growth10k = findQsfGrowthof10k(fundData['GrowthOf10K']);
        var lineChartData = findQsfBenchmarkData(fundData['Benchmark'], growth10k);
        
        getQsfLineChartData(growth10k);
        buildQsfLineChart(lineChartData, graphDiv);
    });

    // ---------------------------------------------------------------------

    /*
     * Find QSF Year To Date
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    function findQsfYearToDate(TrailingPerformance) {
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
    function findQsfGrowthof10k(growth10k) {
        gbp_growth = $.grep(growth10k, function(e) {
            return e.CurrencyId == 'GBP'
        })
        // two of the same appear?
        return gbp_growth[0].HistoryDetails;
    }

    // ---------------------------------------------------------------------

    /*
     * Find QSF Benchmark Data
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    function findQsfBenchmarkData(benchmark, growth10k) {

    	data = [];

    	if (benchmark.Type == 'CategoryPrimaryIndex') {
	        category_primary_benchmark = $.grep(benchmark, function(e) {
	            return e.Type == 'CategoryPrimaryIndex'
	        });
	        category_primary_gbp_growth = $.grep(category_primary_benchmark[0]['GrowthOf10K'], function(e) {
	            return e.CurrencyId == 'GBP'
	        })
	        category_primary_gbp_growth_details = category_primary_gbp_growth[0]['HistoryDetails'];
    	}

        category_benchmark = $.grep(benchmark, function(e) {
            return e.Type == 'Category'
        });
        category_benchmark_gbp_growth = $.grep(category_benchmark[0]['GrowthOf10K'], function(e) {
            return e.CurrencyId == 'GBP'
        })
        category_benchmark_gbp_growth_details = category_benchmark_gbp_growth[0]['HistoryDetails'];

        $.each(growth10k, function(index, value) {
            date = value.EndDate;
            value = value.Value;

            if (benchmark.Type == 'CategoryPrimaryIndex') {

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
        	
        	} else {

	            value_2 = $.grep(category_benchmark_gbp_growth_details, function(e) {
	                return e.EndDate == date
	            });

	            if (value_2.length > 0) {
	                line = {
	                    'date': date,
	                    'val-one': value.toFixed(2),
	                    'val-two': null,
	                    'val-three': value_2[0].Value.toFixed(2)
	                }
	                data.push(line);
	            }
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
    function getQsfLineChartData(growthof10k) {
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
    function buildQsfLineChart(dataProvider, graphDiv) {
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
    
    /*
     * Get Pie Chart Data
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    function getQsfPieChartData(AssetAllocations) {
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
                    'title': switchQsfTitle(value.Type),
                    'value': value.Value.toFixed(2)
                };
                dataProvider.push(data);
            }
        });
        return dataProvider;
    }

    // ---------------------------------------------------------------------

    /*
     * Build QSF Pie Chart
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    function buildQsfPieChart(dataProvider, chartDiv) {
        var chart = AmCharts.makeChart(chartDiv, {
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
            labelsEnabled: false,
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
     * Quick Start Fund Bootstrap Popovers
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    // ---------------------------------------------------------------------

    /*
     * Switch Title Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    function switchQsfTitle(type_value) {
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
     * Fund Read More Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    $('.qsf-more').click(function(e) {
        
        e.preventDefault();
        
        $(this).text(function(i, text) {
            return text === 'Read More' ? 'Read Less' : 'Read More';
        }).closest('.qsf-objective').next().slideToggle('slow');
    });

    // ---------------------------------------------------------------------

    /*
     * Fund Buy Button Modal Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */
    $('.qsf-buy').click(function(e) {
        
        e.preventDefault();
        
        var sedol = $(this).attr('data-sedol');

        $('#qsf-modal').modal();
        
        // build the buy url
        var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&amp;destination_bos=BUY&amp;destination_isin=&amp;destination_sedol='+sedol+'&amp;destination_secid&amp;destination_exchange=&amp;destination_epic=&amp;destination_token';
        
        // login buy link
        var loginBuyLink = $('.login-buy-link');

        // append vars to href
        $(loginBuyLink).attr('href', buyUrl);
    });    
});