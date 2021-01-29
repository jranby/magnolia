$(document).ready(function(){

	// ---------------------------------------------------------------------

	/*
	 * Stock Data
	 *
	 * Function handler for displaying the stock
	 * index current data miscellaneous information.
	 */
	if ($('#stock-data').length > 0) {

 		var url = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/" + marketId + "/instruments/" + instrumentAlpha;

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
		    	    //timestamp = moment(data[i]['timestamp']).format("MM/DD/YYYY - hh:mm:ss");

		    	if (response.bidPrice && response.bidPrice != 'undefined') {
		    		$(stockCurrent).html('<span class="stock-currency">' + response.currencyIso + '</span>' + response.bidPrice);
		    	}
		    	
		    	if (response.dayHigh && response.dayHigh != 'undefined') {
		    		$(stockHigh).html('<span class="day-high">Day High:</span> ' + response.dayHigh);
		    	}
		    	if (response.dayLow && response.dayLow != 'undefined') {
		    		$(stockLow).html('<span class="day-low">Day Low:</span> ' + response.dayLow);
		    	}
		    	if (response.isin && response.isin != 'undefined') {
		    		$(stockIsin).html('<strong>ISIN:</strong> ' + response.isin);
		    	}

		    	if (response.volume && response.volume != 'undefined') {
		    		$(stockVolume).html('<strong>Volume:</strong> ' + response.volume.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
		    	}

		    	if (response.closePrice && response.closePrice != 'undefined') {
		    		$(stockLastClose).html('<strong>Last Close:</strong> ' + response.closePrice);
		    	}

		    	if ((response.dayLow && response.dayLow != 'undefined') && (response.dayHigh && response.dayHigh != 'undefined')) {
		    		$(stockChange).show();
		    		$(stockChangeIntro).html('Day Change:');
		    		$(stockDayRange).html('<strong>Day Range:</strong> ' + response.dayLow + ' - ' + response.dayHigh);
		    	}

		    	if (response.priceChangeOnDay && response.priceChangeOnDay != 'undefined') {
		    		$(stockValueChange).html(response.priceChangeOnDay);
		    	}		    	

		    	if (response.dayPercentageChange && response.dayPercentageChange != 'undefined') {
		    		$(stockPercentChange).html('(' + response.dayPercentageChange + '%)');
		    	}

		    	if (response.quoteTimeFormatted && response.quoteTimeFormatted != 'undefined') {
		    		$(stockTimestamp).html('As of <span>' + response.quoteTimeFormatted + '</span> BST. Minimum 15 minutes delay.');
		    	}		    	

				if (response.bidPrice < response.closePrice) {
					$(stockChange).addClass('stock-decrease').find('.fa').addClass('fa-arrow-down');
				} else {
					$(stockChange).addClass('stock-increase').find('.fa').addClass('fa-arrow-up');
				}
            },
            error: function(e) {
            	
            	console.log(e);

            }
        });
	}

    // ---------------------------------------------------------------------

    /*
     * View Detailed Report More Handler
     *
     * Bacon ipsum dolor amet tenderloin cow tongue,
     * filet mignon kielbasa brisket salami biltong.
     */

    // ---------------------------------------------------------------------
    
    $('.view-report').click(function(e) {
        
        //e.preventDefault();
        
        $('.view-report').text(function(i, text) {
            return text === 'View Detailed Report' ? 'Hide Detailed Report' : 'View Detailed Report';
        });

        var tdIframe = document.getElementById('iframe-td');

        $(tdIframe).toggleClass('hidden');
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
	    if (window.location.hash.indexOf('iframe-td') == 1) {
	        $('#iframe-td').removeClass('hidden');
	        $('.view-report').text(function(i, text) {
	            return text === 'View Detailed Report' ? 'Hide Detailed Report' : 'View Detailed Report';
	        });
	    }
	    else if (window.location.hash.indexOf('iframe-td') != -1) {
	    }
	    else {
	    }
	}    

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
	 * Share Index Stock AmCharts
	 *
	 * Functions and handlers for displaying the market
	 * index AmCharts over defined time periods.
	 */
	if ($('#stock-chart').length > 0) {

		createToday();
		
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
					createToday();
				} else if ($(this).hasClass('ydy')) {
					createYesterday();
					changeDate = moment().subtract(1, 'days').format('DD-MM-YYYY');
				} else if ($(this).hasClass('last-close')) {
					createLastClose();					
				} else if ($(this).hasClass('1m')) {
					changeDate = moment().subtract(1, 'months').format('DD-MM-YYYY');
					createPrevious(changeDate);					
				} else if($(this).hasClass('3m')) {
					changeDate = moment().subtract(3, 'months').format('DD-MM-YYYY');
					createPrevious(changeDate);
				} else if($(this).hasClass('6m')) {
					changeDate = moment().subtract(6, 'months').format('DD-MM-YYYY');
					createPrevious(changeDate);
				} else if($(this).hasClass('ytd')) {
					changeDate = '01-01-'+new Date().getFullYear();
					createPrevious(changeDate);
				} else if($(this).hasClass('1y')) {
					changeDate = moment().subtract(1, 'years').format('DD-MM-YYYY');
					createPrevious(changeDate);
				} else if($(this).hasClass('3y')) {
					changeDate = moment().subtract(3, 'years').format('DD-MM-YYYY');
					createPrevious(changeDate);
				} else if($(this).hasClass('5y')) {
					changeDate = moment().subtract(5, 'years').format('DD-MM-YYYY');
					createPrevious(changeDate);
				} else if($(this).hasClass('10y')) {
					changeDate = moment().subtract(10, 'years').format('DD-MM-YYYY');
					createPrevious(changeDate);
				}
			});
		});

		// ---------------------------------------------------------------------

		/*
		 * Get Today's Data
		 */
		function createToday() {

			var pattern = /\./;
			var instrumentAlphaParsed = instrumentAlpha.replace(pattern, '/');
			var origDate = moment().format('DD-MM-YYYY');

			if (marketId === 'US') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + origDate + '&stime=13:30:00&edate=' + origDate + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:31:00&type=minbar';
			}
			
			$('.stock-chart-preloader').show();

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
                        
                        createLastClose();
					
					} else {

					    buildToday(data);
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
		function createYesterday() {

			var pattern = /\./;
			var instrumentAlphaParsed = instrumentAlpha.replace(pattern, '/');
			var origDate = moment().add(-1, 'days').format('DD-MM-YYYY');

			if (marketId === 'US') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + origDate + '&stime=13:30:00&edate=' + origDate + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + origDate + '&stime=07:00:00&edate=' + origDate + '&etime=15:31:00&type=minbar';
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
			        buildToday(data);
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
		function createLastClose() {

			var pattern = /\./;
			var instrumentAlphaParsed = instrumentAlpha.replace(pattern, '/');
			var origDate = moment();
			var zeDay = origDate.isoWeekday();
			
			if ((zeDay == 0) || (zeDay == 1)) {
				var lastClose = origDate.day(-2).format('DD-MM-YYYY');
			} else {
				var lastClose = origDate.add(-1, 'days').format('DD-MM-YYYY');
			}

			if (marketId === 'US') {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + lastClose + '&stime=13:30:00&edate=' + lastClose + '&etime=20:01:00&type=minbar';
			} else {
				var	marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + lastClose + '&stime=07:00:00&edate=' + lastClose + '&etime=15:31:00&type=minbar';
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
			        buildToday(data);
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
		function buildToday(data) {

			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {
			    var origTime = value.D952;
			    var newTime = moment(origTime, 'HH:mm').format('HH:mm');			
			    value.timestamp = value.D953 + " " + newTime;
			});

			todayData.sort(function(a, b) {
			    return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("stock-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 12,  	
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#9DA4A9",
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
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
		function createPrevious(changeDate) {

			var pattern = /\./;
			var instrumentAlphaParsed = instrumentAlpha.replace(pattern, '/');
		    var todayDate = moment().format('DD-MM-YYYY');

			if (marketId === 'US') {
				var marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + changeDate + '&stime=13:30:00&edate=' + todayDate + '&etime=21:15:00&type=dailybar';
			} else {
				var marketUrl = 'https://capco.steelpandas.net/msxml/IndexTS/?Instrument=' + instrumentNumeric + '.' + instrumentAlphaParsed + '&sdate=' + changeDate + '&stime=07:00:00&edate=' + todayDate + '&etime=15:30:00&type=dailybar';
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
			        buildPrevious(data);
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
		function buildPrevious(data){
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {
				var origTime = value.D952;
				var newTime = moment(origTime, 'HH:mm').format('HH:mm');
				value.timestamp = value.D953 + " " + newTime;
			});
			
			todayData.sort(function(a, b) {
				return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("stock-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 12,
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
					"startOnAxis": false,
					//"title": "Time",
					"minPeriod": "mm",
					"color": "#9DA4A9",
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
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
	
});