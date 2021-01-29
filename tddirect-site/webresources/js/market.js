$(document).ready(function(){

	// ---------------------------------------------------------------------

	/*
	 * Market Index Data
	 *
	 * Function handler for displaying the market
	 * index current data and risers and fallers.
	 */
	if ($('#market-data').length > 0) {

		$.getJSON('https://capco.steelpandas.net/TD/MarketDetails', function(data) {
		    
		    for (var i in data) {
			    if (data[i]['H1'] == marketAlpha) {

			    	var marketCurrent = $('.market-current'),
			    	    marketCurrency = $('.market-currency'),
			    	    marketHigh = $('.market-high'),
			    	    marketLow = $('.market-low'),
			    	    marketChange = $('.market-change'),
			    	    marketChangeIntro = $('.market-change-intro'),
			    	    marketValueChange = $('.market-value-change'),
			    	    marketPercentChange = $('.market-percent-change'),
			    	    marketTimestamp = $('.market-timestamp'),
			    	    timestamp = moment(data[i]['timestamp']).format("MM/DD/YYYY - hh:mm:ss");

			    	$(marketCurrent).html('<span class="market-currency">' + data[i]['S9'] + "</span>" + data[i]['D2']);
			    	$(marketHigh).html('<span class="day-high">Day High:</span> ' + data[i]['D18']);
			    	$(marketLow).html('<span class="day-low">Day Low:</span> ' + data[i]['D19']);
			    	$(marketChangeIntro).html('Day Change:');
			    	$(marketValueChange).html(data[i]['H8']);
			    	$(marketPercentChange).html('(' + data[i]['H14'] + '%)');
			    	$(marketTimestamp).html('As of <span>' + timestamp + '</span> BST. Minimum 15 minutes delay.');

					if (data[i]['D2'] < data[i]['D17']) {
						$(marketChange).addClass('market-decrease').find('.fa').addClass('fa-arrow-down');
					} else {
						$(marketChange).addClass('market-increase').find('.fa').addClass('fa-arrow-up');
					}
					
					var tradeLink = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&destination_bos=BUY&destination_exchange=L&destination_epic=';
					var capcoUrl = "https://capco.steelpandas.net/TD/MarketDetails";

					elRisers = data[i]['risers'];
					elFallers = data[i]['fallers'];
					tracking = "dataLayer.push({'event' : 'GAEvent','category': 'home2_existing', 'action': 'risers' ,'label': 'home2_existing_risers_trade'});";

					if (elRisers.length > 0 || elFallers.length > 0) {
					
						$.each(elRisers, function(key, val) {
							$('#market-risers').append('<div class="market-stock row">'
							+ '<div class="col-xs-9">'
							+ '<span class="stock-name">' + elRisers[key].name + '</span><br />' 
							+ '<span class="stock-gain stock-gain-up"><i class="glyphicon glyphicon-arrow-up"></i> ' + parseFloat(elRisers[key].gain).toFixed(2) + '%' + '</span>'
							+ '</div>'
							+ '<div class="col-xs-3">'
							+ '<a class="btn btn-green" href="' + tradeLink + elRisers[key].instrumentId + '" onclick="' + tracking + '">Trade</a>'
							+ '</div>'
							+ '</div>');
						});
						
						$.each(elFallers, function(key, val) {
							$('#market-fallers').append('<div class="market-stock row">'
							+ '<div class="col-xs-9">'
							+ '<span class="stock-name">' + elFallers[key].name + '</span><br />' 
							+ '<span class="stock-gain stock-gain-down"><i class="glyphicon glyphicon-arrow-down"></i> ' + parseFloat(elFallers[key].gain).toFixed(2) + '%' + '</span>'
							+ '</div>'
							+ '<div class="col-xs-3">'
							+ '<a class="btn btn-green" href="' + tradeLink + elFallers[key].instrumentId + '" onclick="' + tracking + '">Trade</a>'
							+ '</div>'
							+ '</div>');
						});

					} else {
						
						$('#market-riser-fallers').addClass('hidden');
						$('#market-chart-wrap').toggleClass('col-md-8 col-md-12');
						console.log('error');
					}
				}
		    }
		});

		if ($('ul.market-links li').length > 0) {

			var marketEbb = $('ul.market-links').find('.current').attr('data-ebb');

			if (marketEbb == 'risers') {
				$('#market-risers').show();
				$('#market-fallers').hide();
			} else {
				$('#market-fallers').show();
				$('#market-risers').hide();
			}

			$('ul.market-links li').click(function () {
		        
		        var marketEbb = $(this).attr('data-ebb');

				$('ul.market-links li').removeClass('current');
				$(this).addClass('current');

				if (marketEbb == 'risers') {
					$('#market-risers').show();
					$('#market-fallers').hide();
				} else {
					$('#market-fallers').show();
					$('#market-risers').hide();
				}
		    });
	    }
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Index AmCharts
	 *
	 * Functions and handlers for displaying the market
	 * index AmCharts over defined time periods.
	 */
	if ($('#market-chart').length > 0) {

		createToday();
		
		var origDate = moment().format('DD-MM-YYYY');

		//var dayOfWeek = moment().isoWeekday();
		//console.log(dayOfWeek);
		
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

			var origDate = moment();

			var zeDay = origDate.isoWeekday();
			
			if ((zeDay == 0) || (zeDay == 1)) {
				var lastClose = origDate.day(-2).format('DD-MM-YYYY');
			} else {
				var lastClose = origDate.add(-1, 'days').format('DD-MM-YYYY');
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

			console.log(data)
			
			var todayData = data.ts.results[0].data;
			
			todayData.forEach(function(value) {			
			    var origTime = value.D952;
			    var newTime = moment(origTime, 'HH:mm').format('HH:mm');			
			    value.timestamp = value.D953 + " " + newTime;
			});

			todayData.sort(function(a, b) {
			    return AmCharts.stringToDate(a.timestamp, "DD-MM-YYYY HH:NN") - AmCharts.stringToDate(b.timestamp, "DD-MM-YYYY HH:NN");
			});
			
			var chart = AmCharts.makeChart("market-chart", {
				"addClassNames": true,
				"fontFamily": "Arial",
				"fontSize": 12,  	
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
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
			
			var chart = AmCharts.makeChart("market-chart", {
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
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
					//"gridAlpha": 0.75,
					"gridColor": "#E2E4E5",
					"axisColor": "#E2E4E5",
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
	
});