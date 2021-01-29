$(document).ready(function(){

	// ---------------------------------------------------------------------

	/*
	 * Search Tabs Display
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {
		$('.search-tab').click(function(e){
			$('.search-tab').removeClass('current');
			$(this).addClass('current');
            if ($(this).attr('data-search-tab')) {
            	e.preventDefault();
            	var searchTab = $(this).attr('data-search-tab');
            	$('.search-block').hide();
            	$('#search-'+ searchTab).show();
            }
	    });
	    var currentTab = $('.search-tab.current').attr('data-search-tab');
	    $('#search-'+ currentTab).addClass('current');
	});

    // ---------------------------------------------------------------------

    /*
     * Stock Buy Button Modal Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    $('.stock-buy').click(function(e) {
        
        e.preventDefault();
        
        var sedol = $(this).attr('data-sedol');

        $('#buy-modal').modal();
        
        // build the buy url
        var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&amp;destination_bos=BUY&amp;destination_isin=&amp;destination_sedol='+sedol+'&amp;destination_secid&amp;destination_exchange=&amp;destination_epic=&amp;destination_token';
        
        // login buy link
        var loginBuyLink = $('.login-buy-link');

        // append vars to href
        $(loginBuyLink).attr('href', buyUrl);
    });

	// ---------------------------------------------------------------------

	/*
	 * Stock Data
	 *
	 * Function handler for displaying the stock
	 * index current data miscellaneous information.
	 */
	if ($('#stock-search-data').length > 0) {

 		var url = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/" + stockMarketId + "/instruments/" + stockAlpha;

 		$.ajax({
 			method: 'GET',
 			url: url,
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

		    	var stockCurrent = $('.stock-current'),
		    	    stockCurrency = $('.stock-currency'),
		    	    stockHigh = $('.stock-high'),
		    	    stockLow = $('.stock-low'),
		    	    stockChange = $('.stock-change'),
		    	    stockChangeIntro = $('.stock-change-intro'),
		    	    stockValueChange = $('.stock-value-change'),
		    	    stockPercentChange = $('.stock-percent-change'),
		    	    stockTimestamp = $('.stock-timestamp'),
		    	    stockLastClose = $('.stock-last-close'),
		    	    stock52WkRange = $('.stock-52wk-range'),
		    	    stockDayRange = $('.stock-day-range'),
		    	    stockMktCap = $('.stock-mkt-cap'),
		    	    stockYield = $('.stock-yield'),
		    	    stockIsin = $('.stock-isin'),
		    	    stockVolume = $('.stock-volume'),
		    	    stockPe = $('.stock-pe'),
		    	    stockPs = $('.stock-ps'),
		    	    stockPcf = $('.stock-pcf');

		    	$(stockCurrent).html('<span class="stock-currency">' + response.currencyIso + '</span>' + '<i class="fa"></i> ' + response.bidPrice);
		    	
		    	if (response.dayHigh && response.dayHigh != 'undefined') {
		    		$(stockHigh).html('<span class="day-high"><strong>Day High:</strong></span> ' + response.dayHigh);
		    	}
		    	if (response.dayLow && response.dayLow != 'undefined') {
		    		$(stockLow).html('<span class="day-low"><strong>Day Low:</strong></span> ' + response.dayLow);
		    	}
		    	
		    	$(stockChangeIntro).html('Day Change:');
		    	$(stockIsin).html('<strong>ISIN:</strong> ' + response.isin);
		    	
		    	if (response.volume && response.volume != 'undefined') {
		    		$(stockVolume).html('<strong>Volume:</strong> ' + response.volume.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
		    	}

		    	$(stockLastClose).html('<strong>Last Close:</strong> ' + response.closePrice);
		    	$(stockDayRange).html('<strong>Day Range:</strong> ' + response.dayLow + ' - ' + response.dayHigh);
		    	$(stockValueChange).html(response.priceChangeOnDay);
		    	$(stockPercentChange).html(response.dayPercentageChange + '%');
		    	$(stockTimestamp).html('As of <span>' + response.quoteTimeFormatted + '</span> BST. Minimum 15 minutes delay.');

				if (response.bidPrice < response.closePrice) {
					$(stockCurrent).addClass('stock-decrease').find('.fa').addClass('fa-caret-down');
					$(stockChange).addClass('stock-decrease');
				} else {
					$(stockCurrent).addClass('stock-increase').find('.fa').addClass('fa-caret-up');
					$(stockChange).addClass('stock-increase');
				}
            },
            error: function(e) {
            	
            	console.log(e);

            }
        });
	}


    // ---------------------------------------------------------------------
    
    $('.fund-buy').click(function(e) {
        
        e.preventDefault();
        
        var sedol = $(this).attr('data-sedol');

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
     * Stock Buy Button Modal Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    $('.stock-buy').click(function(e) {
        
        e.preventDefault();
        
        var sedol = $(this).attr('data-sedol');

        var modalTitle = $('.modal-title');

        $('#iframe-modal').modal();
        
        // build the buy url
        var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&amp;destination_bos=BUY&amp;destination_isin=&amp;destination_sedol='+sedol+'&amp;destination_secid&amp;destination_exchange=&amp;destination_epic=&amp;destination_token';
        
        // login buy link
        var loginBuyLink = $('.login-buy-link');

        // set correct modal title
        $(modalTitle).text('Buy Selected Stock');

        // append vars to href
        $(loginBuyLink).attr('href', buyUrl);
    });

	// ---------------------------------------------------------------------

	/*
	 * Stock Search AmCharts
	 *
	 * Functions and handlers for displaying the market
	 * index AmCharts over defined time periods.
	 */
	if ($('#stock-search-chart').length > 0) {

		stockCreateToday();
		
		var origDate = moment().format('DD-MM-YYYY');
		
		date = $('.date');
		date.html(origDate);
		
		$('.tdy').addClass('active');
		
		$('.switch-graph').each(function(index, el) {
			
			$(this).on('click', function(event) {
				
				$('.switch-graph').removeClass('active');
				$(this).addClass('active');
				
				event.preventDefault();
				
				if ($(this).hasClass('tdy')) {
					stockCreateToday();
				} else if ($(this).hasClass('ydy')) {
					stockCreateYesterday();
					changeDate = moment().subtract(1, 'days').format('DD-MM-YYYY');
				} else if ($(this).hasClass('last-close')) {
					stockCreateLastClose();						
				} else if ($(this).hasClass('1m')) {
					changeDate = moment().subtract(1, 'months').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);					
				} else if($(this).hasClass('3m')) {
					changeDate = moment().subtract(3, 'months').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('6m')) {
					changeDate = moment().subtract(6, 'months').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('ytd')) {
					changeDate = '01-01-'+new Date().getFullYear();
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('1y')) {
					changeDate = moment().subtract(1, 'years').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('3y')) {
					changeDate = moment().subtract(3, 'years').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('5y')) {
					changeDate = moment().subtract(5, 'years').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				} else if($(this).hasClass('10y')) {
					changeDate = moment().subtract(10, 'years').format('DD-MM-YYYY');
					stockCreatePrevious(changeDate);
				}
			});
		});

		// ---------------------------------------------------------------------

		/*
		 * Get Today's Data
		 */
		function stockCreateToday() {

			var pattern = /\./;
			var stockAlphaParsed = stockAlpha.replace(pattern, '/');
			var origDate = moment().format('DD-MM-YYYY');

			if (stockMarketId === 'US') {
				var	stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + origDate + '&stime=13:30:00&edate=' + origDate + '&etime=20:01:00&type=minbar';
			} else {
				var	stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:31:00&type=minbar';
			}
			
			$.ajax({
			    type: 'GET',
			    url: stockUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {

					if (data.ts.error && (data.ts.error[0] === 'No Data' || data.ts.error[0] === 'Invalid request')) {
						
						$('.tdy').removeClass('active').addClass('disabled');
						//$('.ydy').removeClass('hidden').addClass('active');
						$('.last-close').removeClass('hidden').addClass('active');
                        
                        stockCreateLastClose();
					
					} else {
					    stockBuildToday(data);	
					}
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Yesterday's Data
		 */
		function stockCreateYesterday() {
			
			var pattern = /\./;
			var stockAlphaParsed = stockAlpha.replace(pattern, '/');
			var origDate = moment().add(-1, 'days').format('DD-MM-YYYY'),
		  		stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:30:00&type=minbar';
			
			$.ajax({
			    type: 'GET',
			    url: stockUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        stockBuildToday(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Last Close (Friday) Data
		 */
		function stockCreateLastClose() {

			var pattern = /\./;
			var stockAlphaParsed = stockAlpha.replace(pattern, '/');
			var origDate = moment();
			var zeDay = origDate.isoWeekday();
			
			if ((zeDay == 0) || (zeDay == 1)) {
				var lastClose = origDate.day(-2).format('DD-MM-YYYY');
			} else {
				var lastClose = origDate.add(-1, 'days').format('DD-MM-YYYY');
			}

			if (stockMarketId === 'US') {
				var	stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + lastClose + '&stime=13:30:00&edate=' + lastClose + '&etime=20:01:00&type=minbar';
			} else {
				var	stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + lastClose + '&stime=07:00:00&edate=' + lastClose + '&etime=15:31:00&type=minbar';
			}

			$.ajax({
			    type: 'GET',
			    url: stockUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        stockBuildToday(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Build Today's AmChart
		 */
		function stockBuildToday(data) {
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {			
			    var origTime = value.D952;
			    var newTime = moment(origTime, 'HH:mm').format('HH:mm');			
			    value.timestamp = value.D953 + " " + newTime;
			});

			todayData.sort(function(a, b) {
			    return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("stock-search-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 10,  	
				"type": "serial",			
				"autoMarginOffset": 0,
				"categoryField": "timestamp",
				"listeners": [{
					"event": "rendered",
					"method": function(e) {
						$('.stock-chart-preloader').hide();
					}
				}],			
				//"backgroundAlpha": 1,
				//"backgroundColor":"#000000",
				"dataDateFormat": "DD-MM-YYYY HH:NN",
				"dataProvider": todayData,
				"categoryAxis": {
					"gridPosition": "start",
					"parseDates": true,
					"equalSpacing": true,
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#9DA4A9",
					"labelFunction": function(value, valueText, valueAxis) {
						//if (marketNumeric === '29.10' || marketNumeric === '30.10') {
							//var t = moment(value, 'HH:mm A').subtract(4, 'hours').format('HH:mm');
						//} else {
							//var t = moment(value, 'HH:mm A').add(1, 'hours').format('HH:mm');
						//}
						var t = moment(value, 'HH:mm A').add(1, 'hours').format('HH:mm');
						return t;
			        }
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				},
				"graphs": [{
					"valueField": "D17",
					//"type": "smoothedLine",
					"lineColor": "#0074E0",
					"lineThickness": 2,
					"balloonText": "[[category]]: [[value]]",
					"balloonFunction": function(graphDataItem, graph) {
						var value = graphDataItem.values.value;
						var category = graphDataItem.category;
						return moment(category).add(1, 'hours').format('DD-MM-YYYY HH:mm') + ' - ' + value;
					},					
					//"fillAlphas": 0.65,
			        //"fillColors": ['#b2c6be', '#d5e2dd'],
				}],
				"valueAxes": [{
					//"stackType": "regular",
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#ffffff",
					//"title": "Price",
					//"baseValue": "D2",
					"includeAllValues": true,
					"color": "#9DA4A9",
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				}],
				"chartCursor": {
					"color": "#ffffff",
					"cursorAlpha": 0,
					"categoryBalloonColor": "#004127",
					"categoryBalloonDateFormat": "DD-MM-YYYY HH:NN",
					"categoryBalloonFunction": function(date) {
						return moment(date).add(1, 'hours').format('DD-MM-YYYY HH:mm');
					},
					"categoryBalloonEnabled": false
				},
				"chartScrollbar": {
					"color": "FFFFFF",
					"enabled": false
				}

			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Previous Data
		 */
		function stockCreatePrevious(changeDate) {
		    
			var pattern = /\./;
			var stockAlphaParsed = stockAlpha.replace(pattern, '/');
		    var todayDate = moment().format('DD-MM-YYYY');

			if (stockMarketId === 'US') {
				var stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + changeDate + '&stime=13:30:00&edate=' + todayDate + '&etime=21:15:00&type=dailybar';
			} else {
				var stockUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + stockNumeric + '.' + stockAlphaParsed + '&sdate=' + changeDate + '&stime=07:00:00&edate=' + todayDate + '&etime=15:30:00&type=dailybar';
			}
		    
			$.ajax({
			    type: 'GET',
			    url: stockUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        stockBuildPrevious(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
		    });
		}

		// ---------------------------------------------------------------------

		/*
		 * Build Previous AmChart
		 */
		function stockBuildPrevious(data){
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {
				var origTime = value.D952;
				var newTime = moment(origTime, 'HH:mm').format('HH:mm');
				value.timestamp = value.D953 + " " + newTime;
			});
			
			todayData.sort(function(a, b) {
				return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("stock-search-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 10,
				"type": "serial",
				"autoMarginOffset": 0,
				"listeners": [{
					"event": "rendered",
					"method": function(e) {
						$('.stock-chart-preloader').hide();
					}
				}],				
				"categoryField": "timestamp",
				"dataDateFormat": "DD-MM-YYYY HH:NN",
				"dataProvider": todayData,
				"categoryAxis": {
					"gridPosition": "start",
					"parseDates": true,
					"equalSpacing": true,
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#000000",				
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				},
				"graphs": [{
					"valueField": "D17",
					"type": "smoothedLine",
					"lineColor": "#0074E0",
					"lineThickness": 2,
					"balloonText": "[[category]]: [[value]]",
					//"fillAlphas": 0.65,
			        //"fillColors": ['#b2c6be', '#d5e2dd'],
				}],
				"valueAxes": [{
					//"stackType": "regular",
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					//"title": "Price",
					//"baseValue": "D2",
					"includeAllValues": true,
					"color": "#000000",
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				}],
				"chartCursor": {
					"color": "#ffffff",
					"cursorAlpha": 0,
					"categoryBalloonColor": "#004127",
					"categoryBalloonDateFormat": "DD-MM-YYYY HH:NN",
					"categoryBalloonEnabled": false
				},
				"chartScrollbar": {
					"color": "FFFFFF",
					"enabled": false
				}
			});

		}
	
	}

	// ---------------------------------------------------------------------

	/*
	 * Stock Search AmCharts
	 *
	 * Functions and handlers for displaying the market
	 * index AmCharts over defined time periods.
	 */
	if ($('#fund-search-graph').length > 0) {	

		// ---------------------------------------------------------------------

	    var fundData;
	    var graphDiv = 'fund-search-graph';
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
	    
	    var fetchUrl = capcoUrl + fundSedol + capcoUrlFields;

	    $.ajax({
	        url: fetchUrl,
	        cache: false,
	        crossDomain: true,
	        dataType: 'json',
	        success: function(data) {

	            fundData = data[0];

	            console.log(fundData);
	            
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
	     * Fund Buy Button Modal Handler
	     *
	     * Bacon ipsum dolor amet tenderloin cow tongue,
	     * filet mignon kielbasa brisket salami biltong.
	     */

	    // ---------------------------------------------------------------------
	    
	    $('.fund-buy').click(function(e) {
	        
	        e.preventDefault();
	        
	        $('#buy-modal').modal();
	        
	        // build the buy url
	        var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&amp;destination_bos=BUY&amp;destination_isin=&amp;destination_sedol='+sedol+'&amp;destination_secid&amp;destination_exchange=&amp;destination_epic=&amp;destination_token';
	        
	        // login buy link
	        var loginBuyLink = $('.login-buy-link');

	        // append vars to href
	        $(loginBuyLink).attr('href', buyUrl);
	    });

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
	
	}

    // ---------------------------------------------------------------------

    /*
     * Fund Data
     *
     * Function handler for displaying the fund
     * index current data miscellaneous information.
     */
    if ($('#fund-search-data').length > 0) {

        var remoteFundUrl = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/UkFunds/instruments/" + fundSedol;

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

                $(fundCurrent).html('<span class="fund-currency">' + response.currencyIso + '</span>' + response.nav);
                $(fundType).html('<strong>Type:</strong> ' + stockTypeString);
                $(fundProvider).html('<strong>Provider:</strong> ' + response.fundProvider);
                $(fundIsin).html('<strong>ISIN:</strong> ' + response.isin);
                $(fundSedol).html('<strong>Sedol:</strong> ' + response.sedol);
                $(fundTimestamp).html('As of <span>' + response.quoteTimeFormatted + '</span> BST. Minimum 15 minutes delay.');

                if (response.bidPrice < response.lastTradePrice) {
                    $(fundChange).addClass('fund-decrease').find('.fa').addClass('fa-arrow-down');
                } else {
                    $(fundChange).addClass('fund-increase').find('.fa').addClass('fa-arrow-up');
                }
            },
            error: function(e) {
                
                console.log(e);

            }
        });
    };

	// ---------------------------------------------------------------------

	/*
	 * Market Index Data
	 *
	 * Function handler for displaying the market
	 * index current data and risers and fallers.
	 */
	if ($('#market-search-data').length > 0) {

		$.getJSON('https://capco.steelpandas.net/TD/MarketDetails', function(data) {
		    
		    for (var i in data) {
			    if (data[i]['H1'] == marketAlpha) {

			    	var marketCurrent = $('.market-current'),
			    	    marketCurrency = $('.market-currency'),
			    	    marketChange = $('.market-change'),
			    	    marketHigh = $('.market-high'),
			    	    marketLow = $('.market-low'),
			    	    marketChange = $('.market-change'),
			    	    marketChangeIntro = $('.market-change-intro'),
			    	    marketValueChange = $('.market-value-change'),
			    	    marketPercentChange = $('.market-percent-change'),
			    	    marketTimestamp = $('.market-timestamp'),
			    	    timestamp = moment(data[i]['timestamp']).format("MM/DD/YYYY - hh:mm:ss");

			    	$(marketCurrent).html('<span class="market-currency">' + data[i]['S9'] + '</span><i class="fa"></i>' + data[i]['D2']);
			    	$(marketHigh).html('<span class="day-high"><strong>Day High:</strong></span> ' + data[i]['D18']);
			    	$(marketLow).html('<span class="day-low"><strong>Day Low:</strong></span> ' + data[i]['D19']);
			    	$(marketChangeIntro).html('Day Change:');
			    	$(marketValueChange).html(data[i]['H8']);
			    	$(marketPercentChange).html(data[i]['H14'] + '%');
			    	$(marketTimestamp).html('As of <span>' + timestamp + '</span> BST. Minimum 15 minutes delay.');

					if (data[i]['D2'] < data[i]['D17']) {
						$(marketCurrent).addClass('market-decrease').find('.fa').addClass('fa-caret-down');
						$(marketChange).addClass('market-decrease');
					} else {
						$(marketCurrent).addClass('market-increase').find('.fa').addClass('fa-caret-up');
						$(marketChange).addClass('market-increase');
					}
			    }
		    }
		});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Search AmCharts
	 *
	 * Functions and handlers for displaying the market
	 * index AmCharts over defined time periods.
	 */
	if ($('#market-search-chart').length > 0) {

		marketCreateToday();
		
		var origDate = moment().format('DD-MM-YYYY');
		
		date = $('.date');
		date.html(origDate);
		
		$('.tdy').addClass('active');
		
		$('.switch-graph').each(function(index, el) {
			
			$(this).on('click', function(event) {
				
				$('.switch-graph').removeClass('active');
				$(this).addClass('active');
				
				event.preventDefault();
				
				if ($(this).hasClass('tdy')) {
					marketCreateToday();
				} else if ($(this).hasClass('ydy')) {
					marketCreateYesterday();
					changeDate = moment().subtract(1, 'days').format('DD-MM-YYYY');
				} else if ($(this).hasClass('last-close')) {
					marketCreateLastClose();					
				} else if ($(this).hasClass('1m')) {
					changeDate = moment().subtract(1, 'months').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);					
				} else if($(this).hasClass('3m')) {
					changeDate = moment().subtract(3, 'months').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('6m')) {
					changeDate = moment().subtract(6, 'months').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('ytd')) {
					changeDate = '01-01-'+new Date().getFullYear();
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('1y')) {
					changeDate = moment().subtract(1, 'years').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('3y')) {
					changeDate = moment().subtract(3, 'years').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('5y')) {
					changeDate = moment().subtract(5, 'years').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				} else if($(this).hasClass('10y')) {
					changeDate = moment().subtract(10, 'years').format('DD-MM-YYYY');
					marketCreatePrevious(changeDate);
				}
			});
		});

		// ---------------------------------------------------------------------

		/*
		 * Get Today's Data
		 */
		function marketCreateToday() {

			var origDate = moment().format('DD-MM-YYYY');

			if (marketNumeric === '29.10' || marketNumeric === '30.10') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + origDate + '&stime=13:30:00&edate=' + origDate + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:31:00&type=minbar';
			}

			$('.market-chart-preloader').show();

			$.ajax({
			    type: 'GET',
			    url: marketUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {

					if (data.ts.error && (data.ts.error[0] === 'No Data' || data.ts.error[0] === 'Invalid request')) {
						
						$('.tdy').removeClass('active').addClass('disabled');
						//$('.ydy').removeClass('hidden').addClass('active');
						$('.last-close').removeClass('hidden').addClass('active');
                        
                        marketCreateLastClose();
					
					} else {

					    marketBuildToday(data);
					}
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Yesterday's Data
		 */
		function marketCreateYesterday() {

			var origDate = moment().add(-1, 'days').format('DD-MM-YYYY');

			if (marketNumeric === '29.10' || marketNumeric === '30.10') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + origDate + '&stime=13:30:00&edate=' + origDate + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:31:00&type=minbar';
			}
			
			$.ajax({
			    type: 'GET',
			    url: marketUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        marketBuildToday(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Last Close (Friday) Data
		 */
		function marketCreateLastClose() {

			var origDate = moment();
			
			if (origDate.isoWeekday() <= 5) {
				var lastClose = origDate.add(-1, 'days').format('DD-MM-YYYY');
			} else {
				var lastClose = origDate.day(-2).format('DD-MM-YYYY');
			}

			if (marketNumeric === '29.10' || marketNumeric === '30.10') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + lastClose + '&stime=13:30:00&edate=' + lastClose + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + lastClose + '&stime=07:00:00&edate=' + lastClose + '&etime=15:31:00&type=minbar';
			}

			$.ajax({
			    type: 'GET',
			    url: marketUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        marketBuildToday(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Build Today's AmChart
		 */
		function marketBuildToday(data) {
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {			
			    var origTime = value.D952;
			    var newTime = moment(origTime, 'HH:mm').format('HH:mm');			
			    value.timestamp = value.D953 + " " + newTime;
			});

			todayData.sort(function(a, b) {
			    return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("market-search-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 10,  	
				"type": "serial",			
				"categoryField": "timestamp",
				"autoMarginOffset": 0,
				"listeners": [{
					"event": "rendered",
					"method": function(e) {
						$('.market-chart-preloader').hide();
					}
				}],			
				//"backgroundAlpha": 1,
				//"backgroundColor":"#000000",
				"dataDateFormat": "DD-MM-YYYY HH:NN",
				"dataProvider": todayData,
				"categoryAxis": {
					"gridPosition": "start",
					"parseDates": true,
					"equalSpacing": true,
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#000000",
					"labelFunction": function(value, valueText, valueAxis) {
						var t = moment(value, 'HH:mm A').add(1, 'hours').format('HH:mm');
						return t;
			        }				
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				},
				"graphs": [{
					"valueField": "D17",
					//"type": "smoothedLine",
					"lineColor": "#0074E0",
					"lineThickness": 2,
					"balloonText": "[[category]]: [[value]]",
					"balloonFunction": function(graphDataItem, graph) {
						var value = graphDataItem.values.value;
						var category = graphDataItem.category;
						return moment(category).add(1, 'hours').format('DD-MM-YYYY HH:mm') + ' - ' + value;
					},
					//"fillAlphas": 0.65,
			        //"fillColors": ['#b2c6be', '#d5e2dd'],
				}],
				"valueAxes": [{
					//"stackType": "regular",
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					//"title": "Price",
					//"baseValue": "D2",
					"includeAllValues": true,
					"color": "#000000",
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				}],
				"chartCursor": {
					"color": "#ffffff",
					"cursorAlpha": 0,
					"categoryBalloonColor": "#004127",
					"categoryBalloonDateFormat": "DD-MM-YYYY HH:NN",
					"categoryBalloonFunction": function(date) {
						return moment(date).add(1, 'hours').format('DD-MM-YYYY HH:mm');
					},					
					"categoryBalloonEnabled": false
				},
				"chartScrollbar": {
					"color": "FFFFFF",
					"enabled": false
				}
			});
		}

		// ---------------------------------------------------------------------

		/*
		 * Get Previous Data
		 */
		function marketCreatePrevious(changeDate) {
		    
		    var todayDate = moment().format('DD-MM-YYYY');

			if (marketNumeric === '29.10' || marketNumeric === '30.10') {
				var marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + changeDate + '&stime=13:30:00&edate=' + todayDate + '&etime=21:15:00&type=dailybar';
			} else {
				var marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + marketNumeric + '.' + marketAlpha + '&sdate=' + changeDate + '&stime=07:00:00&edate=' + todayDate + '&etime=15:30:00&type=dailybar';
			}
		    		    
			$.ajax({
			    type: 'GET',
			    url: marketUrl,
			    contentType: "application/json",
			    dataType: 'json',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    success: function(data) {
			        marketBuildPrevious(data);
			    },
			    error: function(e) {
			        console.log(e)
			    }
		    });
		}

		// ---------------------------------------------------------------------

		/*
		 * Build Previous AmChart
		 */
		function marketBuildPrevious(data){
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {
				var origTime = value.D952;
				var newTime = moment(origTime, 'HH:mm').format('HH:mm');
				value.timestamp = value.D953 + " " + newTime;
			});
			
			todayData.sort(function(a, b) {
				return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("market-search-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 12,
				"type": "serial",
				"autoMarginOffset": 0,
				"listeners": [{
					"event": "rendered",
					"method": function(e) {
						$('.market-chart-preloader').hide();
					}
				}],				
				"categoryField": "timestamp",
				"dataDateFormat": "DD-MM-YYYY HH:NN",
				"dataProvider": todayData,
				"categoryAxis": {
					"gridPosition": "start",
					"parseDates": true,
					"equalSpacing": true,
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#000000",
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				},
				"graphs": [{
					"valueField": "D17",
					"type": "smoothedLine",
					"lineColor": "#0074E0",
					"lineThickness": 2,
					"balloonText": "[[category]]: [[value]]",
					//"fillAlphas": 0.65,
			        //"fillColors": ['#b2c6be', '#d5e2dd'],
				}],
				"valueAxes": [{
					//"stackType": "regular",
					//"gridAlpha": 0.07,
					"gridAlpha": 0,
					"gridColor": "#b8cac3",
					"axisAlpha": 0,
					"axisColor": "#858585",
					//"title": "Price",
					//"baseValue": "D2",
					"includeAllValues": true,
					"color": "#000000",
			        //"fillAlpha": 1,
			        //"fillColor": '#000000',
				}],
				"chartCursor": {
					"color": "#ffffff",
					"cursorAlpha": 0,
					"categoryBalloonColor": "#004127",
					"categoryBalloonDateFormat": "DD-MM-YYYY HH:NN",
					"categoryBalloonEnabled": false
				},
				"chartScrollbar": {
					"color": "FFFFFF",
					"enabled": false
				}
			});
		}
	}
});