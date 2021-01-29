	
	// ---------------------------------------------------------------------

	/*
	 * Market Chart YTD summer 2017
	 *
	 */
	if ($('#market-chart-ytd-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-ytd-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Asia Pacific equities", "value": "14.1"},
				{"fund": "Europe ex UK equities", "value": "12.7"},
				{"fund": "Emerging Markets", "value": "12.5"},
				{"fund": "IT", "value": "12.2"},
				{"fund": "Health Care", "value": "10.7"},
				{"fund": "Industrials", "value": "7.7"},
				{"fund": "World ex UK equities", "value": "6.4"},
				{"fund": "Consumer Staples", "value": "6.3"},
				{"fund": "Consumer Discretionary", "value": "6"},
				{"fund": "Japanese equities", "value": "6"},
				{"fund": "Utilities", "value": "6"},
				{"fund": "UK equities", "value": "5.5"},
				{"fund": "Financials", "value": "5.2"},
				{"fund": "Materials", "value": "4.8"},
				{"fund": "Global high yield", "value": "4.5"},
				{"fund": "US equities", "value": "4"},
				{"fund": "European IG bonds", "value": "3.5"},
				{"fund": "Real Estate", "value": "2.9"},
				{"fund": "Hedge funds", "value": "2.7"},
				{"fund": "UK IG bonds", "value": "2.3"},
				{"fund": "Gold", "value": "2"},
				{"fund": "US IG bonds", "value": "1.9"},
				{"fund": "European gov't bonds", "value": "1.5"},
				{"fund": "Global Bonds", "value": "1"},
				{"fund": "UK Gilts", "value": "0.3"},
				{"fund": "Global property", "value": "0.2"},
				{"fund": "UK index-linkers", "value": "-0.6"},
				{"fund": "Telecom Services", "value": "-2.3"},
				{"fund": "US Treasuries", "value": "-3"},
				{"fund": "Energy", "value": "-13.7"},
				{"fund": "Oil Brent Crude", "value": "-19.8"}
			],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 5.5,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart QTD summer 2017
	 *
	 */
	if ($('#market-chart-qtd-summer-2017').length > 0) {
	 	
	 	var chart = AmCharts.makeChart("market-chart-qtd-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Europe ex UK equities", "value": "5"},
				{"fund": "Health Care", "value": "3.1"},
				{"fund": "European IG bonds", "value": "3"},
				{"fund": "Asia Pacific equities", "value": "2.3"},
				{"fund": "European gov't bonds", "value": "2.3"},
				{"fund": "Emerging Markets", "value": "1.9"},
				{"fund": "Japanese equities", "value": "1.9"},
				{"fund": "Industrials", "value": "1.9"},
				{"fund": "Global high yield", "value": "1.8"},
				{"fund": "Financials", "value": "1.5"},
				{"fund": "UK equities", "value": "1.4"},
				{"fund": "IT", "value": "1.1"},
				{"fund": "Global Bonds", "value": "0.8"},
				{"fund": "Hedge funds", "value": "0.5"},
				{"fund": "Utilities", "value": "0.5"},
				{"fund": "UK IG bonds", "value": "0.5"},
				{"fund": "World ex UK equities", "value": "0.5"},
				{"fund": "Consumer Staples", "value": "0.3"},
				{"fund": "Consumer Discretionary", "value": "-0.1"},
				{"fund": "Real Estate", "value": "-0.2"},
				{"fund": "US IG bonds", "value": "-0.3"},
				{"fund": "US equities", "value": "-0.8"},
				{"fund": "Global property", "value": "-0.8"},
				{"fund": "Materials", "value": "-1"},
				{"fund": "UK Gilts", "value": "-1.3"},
				{"fund": "UK index-linkers", "value": "-2.2"},
				{"fund": "Telecom Services", "value": "-2.3"},
				{"fund": "US Treasuries", "value": "-2.5"},
				{"fund": "Gold", "value": "-3.6"},
				{"fund": "Energy", "value": "-8.3"},
				{"fund": "Oil Brent Crude", "value": "-12.7"}
			],
			"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 1.4,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart 5YRS summer 2017
	 *
	 */
	if ($('#market-chart-5yrs-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-5yrs-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "IT", "value": "160.4"},
				{"fund": "Health Care", "value": "148.3"},
				{"fund": "Consumer Discretionary", "value": "143"},
				{"fund": "US equities", "value": "139"},
				{"fund": "Financials", "value": "130.5"},
				{"fund": "Industrials", "value": "127.9"},
				{"fund": "World ex UK equities", "value": "109.7"},
				{"fund": "Europe ex UK equities", "value": "108.2"},
				{"fund": "Consumer Staples", "value": "106.7"},
				{"fund": "Japanese equities", "value": "99"},
				{"fund": "Real Estate", "value": "83.1"},
				{"fund": "Global property", "value": "80.4"},
				{"fund": "Utilities", "value": "79.6"},
				{"fund": "Asia Pacific equities", "value": "75.1"},
				{"fund": "US IG bonds", "value": "73.7"},
				{"fund": "UK equities", "value": "65.2"},
				{"fund": "Telecom Services", "value": "63.7"},
				{"fund": "Materials", "value": "56.4"},
				{"fund": "Emerging Markets", "value": "50.1"},
				{"fund": "UK index-linkers", "value": "49.3"},
				{"fund": "Global high yield", "value": "43.2"},
				{"fund": "UK IG bonds", "value": "39.2"},
				{"fund": "European gov't bonds", "value": "35.7"},
				{"fund": "European IG bonds", "value": "34.9"},
				{"fund": "US Treasuries", "value": "29.4"},
				{"fund": "Hedge funds", "value": "29.3"},
				{"fund": "Energy", "value": "22.7"},
				{"fund": "UK Gilts", "value": "22.4"},
				{"fund": "Global Bonds", "value": "18.3"},
				{"fund": "Gold", "value": "-4.4"},
				{"fund": "Oil Brent Crude", "value": "-40.9"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 65.2,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Funds Chart 5YRS summer 2017
	 *
	 */
	if ($('#funds-chart-qtd-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-qtd-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "8.6"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "6.8"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "6.3"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "6.2"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "6.1"},
				{"fund": "Veritas Asian A GBP", "value": "6.1"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "6"},
				{"fund": "Jupiter European Special Situations", "value": "5.9"},
				{"fund": "H2O Multireturns I/A GBP", "value": "5.9"},
				{"fund": "Artemis UK Select I Acc", "value": "5.4"},
				{"fund": "MFM Slater Growth P Acc", "value": "4.9"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "4.8"},
				{"fund": "FP WHEB Sustainability C", "value": "4.5"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "4.4"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "4.1"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "3.9"},
				{"fund": "Baillie Gifford International B Acc", "value": "3.8"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "3.7"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "3.7"},
				{"fund": "GAM Multistock Luxury Brands Eq GBP Ra", "value": "3.6"},
				{"fund": "Henderson Global Technology I Acc", "value": "3.6"},
				{"fund": "BlackRock UK A Acc", "value": "3.1"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "3"},
				{"fund": "IP Global Smaller Companies Acc", "value": "2.9"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "2.2"},
				{"fund": "Kames Ethical Equity B Acc", "value": "2.2"},
				{"fund": "Kames High Yield Bond D Inc", "value": "2"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "1.9"},
				{"fund": "AXA Global High Income Z Inc", "value": "1.9"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "1.7"},
				{"fund": "Kames Strategic Bond D Inc", "value": "1.6"},
				{"fund": "Schroder Asian Income Acc", "value": "1.4"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "1.4"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "1.3"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "1.1"},
				{"fund": "Newton Real Return A GBP Inc", "value": "1"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "0.8"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "0.7"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "0.6"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "0.5"},
				{"fund": "IP Global Bond Acc", "value": "0.4"},
				{"fund": "Schroder Income Fd Z Inc", "value": "0.2"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "0.1"},
				{"fund": "Majedie UK Equity X Acc", "value": "0"},
				{"fund": "Schroder Tokyo Z Acc", "value": "0"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "-0.5"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "-0.7"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "-0.7"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "-0.9"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "-1.3"},
				{"fund": "Jupiter India I Acc", "value": "-1.4"},
				{"fund": "HSBC American Index C Inc", "value": "-1.5"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "-1.6"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "-1.8"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "-2"},
				{"fund": "Artemis Global Income I Inc", "value": "-2.3"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "-2.5"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "-2.7"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-3"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "-4.6"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-7.5"},
				{"fund": "First State Global Resources B Acc", "value": "-8.1"},
				{"fund": "Guinness Global Energy C", "value": "-12"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 1.4,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart YTD summer 2017
	 *
	 */
	if ($('#funds-chart-ytd-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-ytd-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Veritas Asian A GBP", "value": "20.4"},
				{"fund": "Henderson Global Technology I Acc", "value": "16.4"},
				{"fund": "Jupiter India I Acc", "value": "16.2"},
				{"fund": "MFM Slater Growth P Acc", "value": "16"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "15.5"},
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "15.3"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "15.1"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "15.1"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "14.3"},
				{"fund": "Jupiter European Special Situations", "value": "14"},
				{"fund": "GAM Multistock Luxury Brands Eq GBP Ra", "value": "13"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "12.9"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "11.9"},
				{"fund": "Baillie Gifford International B Acc", "value": "11.8"},
				{"fund": "FP WHEB Sustainability C", "value": "11.4"},
				{"fund": "Artemis UK Select I Acc", "value": "11.1"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "10.9"},
				{"fund": "Schroder Asian Income Acc", "value": "10.8"},
				{"fund": "IP Global Smaller Companies Acc", "value": "10.2"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "9.5"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "8.7"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "8.6"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "8.2"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "8.1"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "8"},
				{"fund": "BlackRock UK A Acc", "value": "7"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "7"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "6.4"},
				{"fund": "H2O Multireturns I/A GBP", "value": "6"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "5.6"},
				{"fund": "AXA Global High Income Z Inc", "value": "4.7"},
				{"fund": "Kames Ethical Equity B Acc", "value": "4.4"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "4.2"},
				{"fund": "Artemis Global Income I Inc", "value": "4.2"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "4.1"},
				{"fund": "Kames High Yield Bond D Inc", "value": "3.6"},
				{"fund": "Schroder Tokyo Z Acc", "value": "3.3"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "3.2"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "3.1"},
				{"fund": "Kames Strategic Bond D Inc", "value": "3"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "3"},
				{"fund": "HSBC American Index C Inc", "value": "2.8"},
				{"fund": "Majedie UK Equity X Acc", "value": "2.8"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "2.8"},
				{"fund": "Newton Real Return A GBP Inc", "value": "2.7"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "2.4"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "2.3"},
				{"fund": "Schroder Income Fd Z Inc", "value": "2.2"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "2"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "2"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "2"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "1.4"},
				{"fund": "IP Global Bond Acc", "value": "0.8"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "0.6"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "0.3"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "0.3"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "0.2"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "-0.5"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "-1"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-2.2"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-3.9"},
				{"fund": "First State Global Resources B Acc", "value": "-5.8"},
				{"fund": "Guinness Global Energy C", "value": "-20.1"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 5.5,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart 5YRS summer 2017
	 *
	 */
	if ($('#funds-chart-5yrs-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-5yrs-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "162.1"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "160.6"},
				{"fund": "Henderson Global Technology I Acc", "value": "150.6"},
				{"fund": "Jupiter India I Acc", "value": "147.3"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "147.1"},
				{"fund": "Baillie Gifford International B Acc", "value": "137.4"},
				{"fund": "HSBC American Index C Inc", "value": "133.5"},
				{"fund": "MFM Slater Growth P Acc", "value": "126.9"},
				{"fund": "Artemis Global Income I Inc", "value": "126.7"},
				{"fund": "Veritas Asian A GBP", "value": "126.1"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "124.6"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "123.8"},
				{"fund": "IP Global Smaller Companies Acc", "value": "122.2"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "117.2"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "111.1"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "109.6"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "106.4"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "104.9"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "104.8"},
				{"fund": "FP WHEB Sustainability C", "value": "101.9"},
				{"fund": "Jupiter European Special Situations", "value": "99.7"},
				{"fund": "Schroder Tokyo Z Acc", "value": "96.9"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "95.1"},
				{"fund": "Schroder Income Fd Z Inc", "value": "94.9"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "93.9"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "93.8"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "92.7"},
				{"fund": "Artemis UK Select I Acc", "value": "91.8"},
				{"fund": "Majedie UK Equity X Acc", "value": "88"},
				{"fund": "Kames Ethical Equity B Acc", "value": "84.9"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "79.8"},
				{"fund": "Schroder Asian Income Acc", "value": "78.4"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "75"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "70.9"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "67.4"},
				{"fund": "BlackRock UK A Acc", "value": "65.3"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "64.7"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "48.2"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "45.1"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "43.6"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "41"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "39.9"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "36.9"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "33.6"},
				{"fund": "AXA Global High Income Z Inc", "value": "32.5"},
				{"fund": "Kames High Yield Bond D Inc", "value": "30.1"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "28.3"},
				{"fund": "Kames Strategic Bond D Inc", "value": "23.4"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "21.7"},
				{"fund": "IP Global Bond Acc", "value": "21.5"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "17.6"},
				{"fund": "Newton Real Return A GBP Inc", "value": "17"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "15.9"},
				{"fund": "Guinness Global Energy C", "value": "0"},
				{"fund": "First State Global Resources B Acc", "value": "-6.3"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-19.3"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 65.2,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart Highest and Lowest summer 2017
	 *
	 */
	if ($('#funds-chart-handl-summer-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-handl-summer-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "8.6"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "6.8"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "6.3"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "6.2"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "6.1"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-3"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "-4.6"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-7.5"},
				{"fund": "First State Global Resources B Acc", "value": "-8.1"},
				{"fund": "Guinness Global Energy C", "value": "-12"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			}
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Funds Chart Q3
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-q3').length > 0) {

		var chart = AmCharts.makeChart("funds-chart-q3", {
			"type": "serial",
			"theme": "none",
			"rotate": true,
			"marginBottom": 50,
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},
			"dataProvider": [{
				"fund": "Man GLG Japan CoreAlpha Profl Inc D",
				"value": "20.9"
			}, {
				"fund": "Henderson Global Technology I Acc",
				"value": "18.3"
			}, {
				"fund": "Liontrust UK Smaller Companies I Inc",
				"value": "17.8"
			}, {
				"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc",
				"value": "16.2"
			}, {
				"fund": "Schroder Tokyo Z Acc",
				"value": "16"
			}, {
				"fund": "M&G Global Emerging Markets GBP A Acc",
				"value": "14.5"
			}, {
				"fund": "Veritas Asian A GBP",
				"value": "13.6"
			}, {
				"fund": "Baillie Gifford International B Acc",
				"value": "13.2"
			}, {
				"fund": "Schroder Asian Income Acc",
				"value": "13.2"
			}, {
				"fund": "Legg Mason CB US Agrsv Gr X GBP Acc",
				"value": "12.7"
			}, {
				"fund": "First State Global Resources B Acc",
				"value": "12.4"
			}, {
				"fund": "Old Mutual UK Alpha R GBP Acc",
				"value": "12.3"
			}, {
				"fund": "JPM Emerging Markets Income C Inc",
				"value": "11.9"
			}, {
				"fund": "Artemis UK Select I Acc",
				"value": "11.9"
			}, {
				"fund": "Franklin UK Mid Cap W Acc",
				"value": "11.9"
			}, {
				"fund": "Man GLG Undervalued Assets Profl Acc C",
				"value": "11.8"
			}, {
				"fund": "IP Global Smaller Companies Acc",
				"value": "11.7"
			}, {
				"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist",
				"value": "11.7"
			}, {
				"fund": "Kames Ethical Equity B Acc",
				"value": "11.6"
			}, {
				"fund": "JOHCM UK Dynamic B Acc",
				"value": "11.6"
			}, {
				"fund": "Legg Mason IF Royce US Smlr Coms X Acc",
				"value": "11.3"
			}, {
				"fund": "MFM Slater Growth P Acc",
				"value": "10.8"
			}, {
				"fund": "Fidelity Emerging Markets W Acc",
				"value": "10.7"
			}, {
				"fund": "Majedie UK Equity X Acc",
				"value": "10.5"
			}, {
				"fund": "Schroder US Mid Cap Z Acc",
				"value": "10.3"
			}, {
				"fund": "Artemis Global Income I Inc",
				"value": "10.2"
			}, {
				"fund": "Old Mutual North American Eq A GBP Acc",
				"value": "9.9"
			}, {
				"fund": "Royal London Sustainable Leaders A Inc",
				"value": "9.7"
			}, {
				"fund": "BlackRock UK A Acc",
				"value": "9.6"
			}, {
				"fund": "Royal London UK Equity Income M Acc",
				"value": "9.5"
			}, {
				"fund": "JB EF Luxury Brands-GBP Ra",
				"value": "9.4"
			}, {
				"fund": "FP WHEB Sustainability C",
				"value": "9.2"
			}, {
				"fund": "Threadneedle UK Eq Inc ZNI",
				"value": "8.8"
			}, {
				"fund": "HSBC American Index C Inc",
				"value": "8.7"
			}, {
				"fund": "Jupiter European Special Situations",
				"value": "8.5"
			}, {
				"fund": "Investec UK Special Situations I Inc Net",
				"value": "7.7"
			}, {
				"fund": "BlackRock Continental Euro A Acc",
				"value": "7.5"
			}, {
				"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc",
				"value": "7.3"
			}, {
				"fund": "M&G European Corporate Bond GBP I Inc",
				"value": "6.6"
			}, {
				"fund": "JPM US Equity Income C Inc",
				"value": "6.6"
			}, {
				"fund": "Royal London Corporate Bond Z Inc",
				"value": "6.6"
			}, {
				"fund": "Polar Capital Global Insurance I GBP Inc",
				"value": "6.5"
			}, {
				"fund": "Henderson Eurp Selected Opps I Inc",
				"value": "6.4"
			}, {
				"fund": "Pictet-Global Emerging Debt P USD",
				"value": "6.2"
			}, {
				"fund": "BlackRock Global Prty Secs Eq Trkr D Acc",
				"value": "6.1"
			}, {
				"fund": "Fidelity MoneyBuilder Income Net Y",
				"value": "6.1"
			}, {
				"fund": "First State Glbl Lstd Infras B GBP Inc",
				"value": "6.1"
			}, {
				"fund": "Veritas Global Equity Income A GBP",
				"value": "5.4"
			}, {
				"fund": "AXA Global High Income Z Inc",
				"value": "4.4"
			}, {
				"fund": "Kames High Yield Bond D Inc",
				"value": "4"
			}, {
				"fund": "Guinness Global Energy C",
				"value": "3.8"
			}, {
				"fund": "Kames Strategic Bond D Inc",
				"value": "3.7"
			}, {
				"fund": "IP Global Bond Acc",
				"value": "3.6"
			}, {
				"fund": "Royal London UK Government Bond Z Inc",
				"value": "3.6"
			}, {
				"fund": "Fidelity Strategic Bond Net Y",
				"value": "2.9"
			}, {
				"fund": "BlackRock Gold and General D Acc",
				"value": "2.2"
			}, {
				"fund": "Henderson UK Absolute Return A Acc",
				"value": "2.1"
			}, {
				"fund": "H2O Multireturns I/A(GBP)",
				"value": "1.5"
			}, {
				"fund": "Newton Real Return A",
				"value": "1.2"
			}, {
				"fund": "Kames UK Equity Absolute Return A Acc",
				"value": "1.1"
			}, {
				"fund": "L&G UK Property Feeder I Dist",
				"value": "1"
			}],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				"fullColor": "#1A5336",
				"lineColor": "#1A5336",
				"negativeFillColors": '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "%";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				// "fontFamily": "'Lato', Calibri, Arial, sans-serif",
				"fontSize": "10",
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"mouseWheelScrollEnabled": false,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 7.8,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Funds Chart YTD
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-ytd').length > 0) {

		var chart = AmCharts.makeChart("funds-chart-ytd", {
			"type": "serial",
			"theme": "none",
			"rotate": true,
			"marginBottom": 50,
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},
			"dataProvider": [{
				"fund": "BlackRock Gold and General D Acc",
				"value": "108.9"
			}, {
				"fund": "First State Global Resources B Acc",
				"value": "60.5",
			}, {
				"fund": "JPM Emerging Markets Income C Inc",
				"value": "38.0",
			}, {
				"fund": "M&G Global Emerging Markets GBP A Acc",
				"value": "34.9",
			}, {
				"fund": "First State Glbl Lstd Infras B GBP Inc",
				"value": "33.2",
			}, {
				"fund": "Guinness Global Energy C",
				"value": "32.0",
			}, {
				"fund": "Veritas Asian A GBP",
				"value": "29.2",
			}, {
				"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist",
				"value": "28.7",
			}, {
				"fund": "Pictet-Global Emerging Debt P USD",
				"value": "27.8",
			}, {
				"fund": "Schroder Asian Income Acc",
				"value": "27.6",
			}, {
				"fund": "Schroder US Mid Cap Z Acc",
				"value": "27.5",
			}, {
				"fund": "Veritas Global Equity Income A GBP",
				"value": "26.3",
			}, {
				"fund": "BlackRock Global Prty Secs Eq Trkr D Acc",
				"value": "25.5",
			}, {
				"fund": "Old Mutual Eurp Ex UK Smlr Coms R Â£ Acc",
				"value": "24.64",
			}, {
				"fund": "Legg Mason IF Royce US Smlr Coms X Acc",
				"value": "24.4",
			}, {
				"fund": "M&G European Corporate Bond GBP I Inc",
				"value": "23.8",
			}, {
				"fund": "Henderson Global Technology I Acc",
				"value": "22.8",
			}, {
				"fund": "Fidelity Emerging Markets W Acc",
				"value": "22.1",
			}, {
				"fund": "HSBC American Index C Inc",
				"value": "20.7",
			}, {
				"fund": "JPM US Equity Income C Inc",
				"value": "20.7",
			}, {
				"fund": "Old Mutual North American Eq A GBP Acc",
				"value": "20.6",
			}, {
				"fund": "Baillie Gifford International B Acc",
				"value": "20.5",
			}, {
				"fund": "Polar Capital Global Insurance I GBP Inc",
				"value": "20.5",
			}, {
				"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc",
				"value": "20.5",
			}, {
				"fund": "IP Global Smaller Companies Acc",
				"value": "19.3",
			}, {
				"fund": "Schroder Tokyo Z Acc",
				"value": "18.6",
			}, {
				"fund": "Legg Mason CB US Agrsv Gr X GBP Acc",
				"value": "18.0",
			}, {
				"fund": "FP WHEB Sustainability C",
				"value": "17.1",
			}, {
				"fund": "Man GLG Japan CoreAlpha Profl Inc D",
				"value": "14.9",
			}, {
				"fund": "JB EF Luxury Brands-GBP Ra",
				"value": "14.6",
			}, {
				"fund": "Royal London UK Government Bond Z Inc",
				"value": "13.7",
			}, {
				"fund": "Artemis Global Income I Inc",
				"value": "12.7",
			}, {
				"fund": "Fidelity MoneyBuilder Income Net Y",
				"value": "12.6",
			}, {
				"fund": "Royal London Corporate Bond Z Inc",
				"value": "12.5",
			}, {
				"fund": "Majedie UK Equity X Acc",
				"value": "11.6",
			}, {
				"fund": "JOHCM UK Dynamic B Acc",
				"value": "11.5",
			}, {
				"fund": "Threadneedle UK Eq Inc ZNI",
				"value": "11.1",
			}, {
				"fund": "IP Global Bond Acc",
				"value": "10.4",
			}, {
				"fund": "Liontrust UK Smaller Companies I Inc",
				"value": "10.2",
			}, {
				"fund": "Royal London UK Equity Income M Acc",
				"value": "9.9",
			}, {
				"fund": "Henderson Eurp Selected Opps I Inc",
				"value": "9.4",
			}, {
				"fund": "Newton Real Return A",
				"value": "9.1",
			}, {
				"fund": "AXA Global High Income Z Inc",
				"value": "9.1",
			}, {
				"fund": "BlackRock Continental Euro A Acc",
				"value": "9.0",
			}, {
				"fund": "Jupiter European Special Situations",
				"value": "8.7",
			}, {
				"fund": "Royal London Sustainable Leaders A Inc",
				"value": "8.2",
			}, {
				"fund": "Fidelity Strategic Bond Net Y",
				"value": "8.2",
			}, {
				"fund": "Kames High Yield Bond D Inc",
				"value": "6.7",
			}, {
				"fund": "Investec UK Special Situations I Inc Net",
				"value": "6.3",
			}, {
				"fund": "Kames Strategic Bond D Inc",
				"value": "5.7",
			}, {
				"fund": "Old Mutual UK Alpha R GBP Acc",
				"value": "5.3",
			}, {
				"fund": "BlackRock UK A Acc",
				"value": "2.8",
			}, {
				"fund": "Man GLG Undervalued Assets Profl Acc C",
				"value": "1.7",
			}, {
				"fund": "Henderson UK Absolute Return A Acc",
				"value": "1.2",
			}, {
				"fund": "Kames Ethical Equity B Acc",
				"value": "-1.3",
			}, {
				"fund": "L&G UK Property Feeder I Dist",
				"value": "-1.3",
			}, {
				"fund": "Franklin UK Mid Cap W Acc",
				"value": "-2.4",
			}, {
				"fund": "Kames UK Equity Absolute Return A Acc",
				"value": "-3.3",
			}, {
				"fund": "MFM Slater Growth P Acc",
				"value": "-5.0",
			}, {
				"fund": "Artemis UK Select I Acc",
				"value": "-5.6",
			}, {
				"fund": "H2O Multireturns I/A(GBP)",
				"value": "-11.2"
			}],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "%";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				// "fontFamily": "'Lato', Calibri, Arial, sans-serif",
				"fontSize": "10",
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"mouseWheelScrollEnabled": false,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 12.4,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Funds Chart 5Yrs
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-5yrs').length > 0) {

		var chart = AmCharts.makeChart("funds-chart-5yrs", {
			"type": "serial",
			"theme": "none",
			"rotate": true,
			"marginBottom": 50,
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},
			"dataProvider": [{
				"fund": "Schroder US Mid Cap Z Acc",
				"value": "153.9"
			}, {
				"fund": "Liontrust UK Smaller Companies I Inc",
				"value": "153.8",
			}, {
				"fund": "Old Mutual North American Eq A GBP Acc",
				"value": "153.4",
			}, {
				"fund": "HSBC American Index C Inc",
				"value": "145",
			}, {
				"fund": "JPM US Equity Income C Inc",
				"value": "130.4",
			}, {
				"fund": "Henderson Global Technology I Acc",
				"value": "129.8",
			}, {
				"fund": "Artemis Global Income I Inc",
				"value": "123.4",
			}, {
				"fund": "Baillie Gifford International B Acc",
				"value": "115.4",
			}, {
				"fund": "Royal London UK Equity Income M Acc",
				"value": "114.6",
			}, {
				"fund": "Franklin UK Mid Cap W Acc",
				"value": "114.4",
			}, {
				"fund": "BlackRock Global Prty Secs Eq Trkr D Acc",
				"value": "111.8",
			}, {
				"fund": "First State Glbl Lstd Infras B GBP Inc",
				"value": "105.1",
			}, {
				"fund": "Royal London Sustainable Leaders A Inc",
				"value": "104.2",
			}, {
				"fund": "Veritas Asian A GBP",
				"value": "103.9",
			}, {
				"fund": "IP Global Smaller Companies Acc",
				"value": "101.7",
			}, {
				"fund": "Henderson Eurp Selected Opps I Inc",
				"value": "100.7",
			}, {
				"fund": "JOHCM UK Dynamic B Acc",
				"value": "99.4",
			}, {
				"fund": "Threadneedle UK Eq Inc ZNI",
				"value": "98.8",
			}, {
				"fund": "Kames Ethical Equity B Acc",
				"value": "96.7",
			}, {
				"fund": "BlackRock Continental Euro A Acc",
				"value": "94.8",
			}, {
				"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc",
				"value": "93.7",
			}, {
				"fund": "MFM Slater Growth P Acc",
				"value": "91.9",
			}, {
				"fund": "Schroder Asian Income Acc",
				"value": "84.3",
			}, {
				"fund": "Majedie UK Equity X Acc",
				"value": "84",
			}, {
				"fund": "Schroder Tokyo Z Acc",
				"value": "83.5",
			}, {
				"fund": "FP WHEB Sustainability C",
				"value": "82.8",
			}, {
				"fund": "Jupiter European Special Situations",
				"value": "81.3",
			}, {
				"fund": "Artemis UK Select I Acc",
				"value": "79.9",
			}, {
				"fund": "Legg Mason IF Royce US Smlr Coms X Acc",
				"value": "79.4",
			}, {
				"fund": "Man GLG Japan CoreAlpha Profl Inc D",
				"value": "75",
			}, {
				"fund": "Old Mutual UK Alpha R GBP Acc",
				"value": "74.7",
			}, {
				"fund": "BlackRock UK A Acc",
				"value": "69.3",
			}, {
				"fund": "Fidelity Emerging Markets W Acc",
				"value": "67",
			}, {
				"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist",
				"value": "64.4",
			}, {
				"fund": "Investec UK Special Situations I Inc Net",
				"value": "64",
			}, {
				"fund": "Pictet-Global Emerging Debt P USD",
				"value": "63.8",
			}, {
				"fund": "Veritas Global Equity Income A GBP",
				"value": "61.8",
			}, {
				"fund": "Royal London Corporate Bond Z Inc",
				"value": "54.9",
			}, {
				"fund": "Fidelity MoneyBuilder Income Net Y",
				"value": "43.5",
			}, {
				"fund": "Kames High Yield Bond D Inc",
				"value": "39.7",
			}, {
				"fund": "L&G UK Property Feeder I Dist",
				"value": "38.5",
			}, {
				"fund": "Fidelity Strategic Bond Net Y",
				"value": "38",
			}, {
				"fund": "Henderson UK Absolute Return A Acc",
				"value": "37.8",
			}, {
				"fund": "AXA Global High Income Z Inc",
				"value": "35.7",
			}, {
				"fund": "M&G Global Emerging Markets GBP A Acc",
				"value": "35.2",
			}, {
				"fund": "M&G European Corporate Bond GBP I Inc",
				"value": "32.6",
			}, {
				"fund": "Royal London UK Government Bond Z Inc",
				"value": "31.3",
			}, {
				"fund": "Kames Strategic Bond D Inc",
				"value": "30.3",
			}, {
				"fund": "Newton Real Return A",
				"value": "25",
			}, {
				"fund": "IP Global Bond Acc",
				"value": "24.4",
			}, {
				"fund": "Guinness Global Energy C",
				"value": "13.5",
			}, {
				"fund": "Kames UK Equity Absolute Return A Acc",
				"value": "9.1",
			}, {
				"fund": "First State Global Resources B Acc",
				"value": "-14.7",
			}, {
				"fund": "BlackRock Gold and General D Acc",
				"value": "-20.3"
			}],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "%";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				// "fontFamily": "'Lato', Calibri, Arial, sans-serif",
				"fontSize": "10",
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"mouseWheelScrollEnabled": false,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 68.9,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Market Chart Ytd
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-chart-ytd').length > 0) {

		var chart = AmCharts.makeChart("market-chart-ytd", {
			"type": "serial",
			"theme": "none",
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},			
			"rotate": true,
			"marginLeft": 50,
			"marginBottom": 50,
			"dataProvider": [{
				"fund": "Oil Brent Crude",
				"value": "49.3"
			}, {
				"fund": "Gold",
				"value": "41.8"
			}, {
				"fund": "Materials",
				"value": "35.6"
			}, {
				"fund": "Energy",
				"value": "34.6"
			}, {
				"fund": "Emerging Markets",
				"value": "30.9"
			}, {
				"fund": "UK index-linkers",
				"value": "28.6"
			}, {
				"fund": "Asia Pacific equities",
				"value": "27.7"
			}, {
				"fund": "IT",
				"value": "26.7"
			}, {
				"fund": "Industrials",
				"value": "25.9"
			}, {
				"fund": "Global property",
				"value": "25.9"
			}, {
				"fund": "Utilities",
				"value": "25.0"
			}, {
				"fund": "Real Estate",
				"value": "24.9"
			}, {
				"fund": "European IG bonds",
				"value": "24.5"
			}, {
				"fund": "European gov't bonds",
				"value": "22.8"
			}, {
				"fund": "Consumer Staples",
				"value": "22.8"
			}, {
				"fund": "US equities",
				"value": "22.4"
			}, {
				"fund": "US IG bonds",
				"value": "22.2"
			}, {
				"fund": "World ex UK equities",
				"value": "22.0"
			}, {
				"fund": "US Treasuries",
				"value": "19.6"
			}, {
				"fund": "Japanese equities",
				"value": "17.6"
			}, {
				"fund": "Consumer Discretionary",
				"value": "15.3"
			}, {
				"fund": "Europe ex UK equities",
				"value": "14.1"
			}, {
				"fund": "UK Gilts",
				"value": "14.0"
			}, {
				"fund": "Global high yield",
				"value": "13.9"
			}, {
				"fund": "UK IG bonds",
				"value": "13.7"
			}, {
				"fund": "UK equities",
				"value": "12.4"
			}, {
				"fund": "Health Care",
				"value": "12.2"
			}, {
				"fund": "Financials",
				"value": "12.0"
			}, {
				"fund": "Hedge funds",
				"value": "7.1"
			}, {
				"fund": "Global Bonds",
				"value": "6.6"
			}, {
				"fund": "Telecom Services",
				"value": "5.8"
			}, ],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				"fontSize": "10",
				"labelRotation": 45
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 12.4,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Market Chart 5yrs
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-chart-5yrs').length > 0) {

		var chart = AmCharts.makeChart("market-chart-5yrs", {
			"type": "serial",
			"theme": "none",
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},			
			"rotate": true,
			"marginLeft": 50,
			"marginBottom": 50,
			"dataProvider": [{
				"fund": "Health Care",
				"value": "164.3"
			}, {
				"fund": "IT",
				"value": "158.4"
			}, {
				"fund": "US equities",
				"value": "156.0"
			}, {
				"fund": "Consumer Discretionary",
				"value": "152.3"
			}, {
				"fund": "Industrials",
				"value": "126.9"
			}, {
				"fund": "Consumer Staples",
				"value": "125.6"
			}, {
				"fund": "Global property",
				"value": "122.5"
			}, {
				"fund": "Real Estate",
				"value": "119.8"
			}, {
				"fund": "World ex UK equities",
				"value": "108.4"
			}, {
				"fund": "Financials",
				"value": "106.8"
			}, {
				"fund": "Europe ex UK equities",
				"value": "86.0"
			}, {
				"fund": "US IG bonds",
				"value": "85.8"
			}, {
				"fund": "Telecom Services",
				"value": "82.3"
			}, {
				"fund": "Japanese equities",
				"value": "76.0"
			}, {
				"fund": "Utilities",
				"value": "72.0"
			}, {
				"fund": "UK equities",
				"value": "68.9"
			}, {
				"fund": "Asia Pacific equities",
				"value": "67.7"
			}, {
				"fund": "UK index-linkers",
				"value": "65.7"
			}, {
				"fund": "Global high yield",
				"value": "54.2"
			}, {
				"fund": "UK IG bonds",
				"value": "50.5"
			}, {
				"fund": "Materials",
				"value": "43.2"
			}, {
				"fund": "Emerging Markets",
				"value": "43.1"
			}, {
				"fund": "Energy",
				"value": "39.8"
			}, {
				"fund": "European gov't bonds",
				"value": "38.4"
			}, {
				"fund": "UK Gilts",
				"value": "35.2"
			}, {
				"fund": "US Treasuries",
				"value": "34.8"
			}, {
				"fund": "European IG bonds",
				"value": "34.8"
			}, {
				"fund": "Global Bonds",
				"value": "25.1"
			}, {
				"fund": "Hedge funds",
				"value": "22.1"
			}, {
				"fund": "Gold",
				"value": "-2.2"
			}, {
				"fund": "Oil Brent Crude",
				"value": "-43.1"
			}, ],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				"fontSize": "10",
				"labelRotation": 45
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 68.9,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Market Chart Q3
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-performance-q3').length > 0) {

		var chart = AmCharts.makeChart("market-performance-q3", {
			"type": "serial",
			"theme": "none",
			"mouseWheelScrollEnabled": false,
			"legend": {
				"position": "bottom",
				"align": "center",
				"marginRight": 100,
				"autoMargins": false,
				"data": [{
					title: "FTSE All Share",
					color: "#00B2FF"
				}]
			},			
			"rotate": true,
			"marginLeft": 50,
			"marginBottom": 50,
			"dataProvider": [{
				"fund": "IT",
				"value": "16.4"
			}, {
				"fund": "Asia Pacific equities",
				"value": "13.0"
			}, {
				"fund": "Materials",
				"value": "12.9"
			}, {
				"fund": "Emerging Markets",
				"value": "12.1"
			}, {
				"fund": "Japanese equities",
				"value": "11.7"
			}, {
				"fund": "Financials",
				"value": "10.1"
			}, {
				"fund": "UK index-linkers",
				"value": "10.1"
			}, {
				"fund": "Industrials",
				"value": "9.4"
			}, {
				"fund": "Consumer Discretionary",
				"value": "9.4"
			}, {
				"fund": "Europe ex UK equities",
				"value": "9.1"
			}, {
				"fund": "World ex UK equities",
				"value": "8.5"
			}, {
				"fund": "UK equities",
				"value": "7.8"
			}, {
				"fund": "US equities",
				"value": "6.9"
			}, {
				"fund": "US IG bonds",
				"value": "6.9"
			}, {
				"fund": "European IG bonds",
				"value": "6.1"
			}, {
				"fund": "UK IG bonds",
				"value": "6.0"
			}, {
				"fund": "Global high yield",
				"value": "5.1"
			}, {
				"fund": "Energy",
				"value": "4.6"
			}, {
				"fund": "Global property",
				"value": "4.4"
			}, {
				"fund": "European gov't bonds",
				"value": "4.3"
			}, {
				"fund": "Hedge funds",
				"value": "4.0"
			}, {
				"fund": "Real Estate",
				"value": "3.8"
			}, {
				"fund": "Gold",
				"value": "3.8"
			}, {
				"fund": "Health Care",
				"value": "3.1"
			}, {
				"fund": "US Treasuries",
				"value": "2.6"
			}, {
				"fund": "Consumer Staples",
				"value": "2.4"
			}, {
				"fund": "UK Gilts",
				"value": "2.3"
			}, {
				"fund": "Oil Brent Crude",
				"value": "1.6"
			}, {
				"fund": "Global Bonds",
				"value": "0.5"
			}, {
				"fund": "Utilities",
				"value": "-0.6"
			}, {
				"fund": "Telecom Services",
				"value": "-2.4"
			}, ],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "value",
				"title": "Value",
				"labelText": "[[value]]",
				"clustered": true,
				"labelFunction": function(item) {
					return item.values.value + "";
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + "%";
				}
			}],
			"categoryField": "fund",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.3,
				"axisAlpha": 0,
				"fontSize": "10",
				"labelRotation": 90
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"fontSize": "10",
				"ignoreAxisWidth": true,
				"labelFunction": function(value) {
					return Math.abs(value) + '%';
				},
				"guides": [{
					"value": 7.8,
					"lineAlpha": 1.2,
					lineColor: "#00B2FF",
					dashLength: 7,
					lineThickness: 2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"export": {
				"enabled": false
			},
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Highest and Lowest Chart
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#b-and-w').length > 0) {

		var chart = AmCharts.makeChart("b-and-w", {
			"type": "serial",
			"theme": "none",
			"rotate": true,
			"mouseWheelScrollEnabled": false,
			"marginBottom": 50,
			"dataProvider": [{
				"sector": "Man GLG Japan CoreAlpha Profl Inc D",
				"performance": 20.9,
				"color": '#00A221'
			}, {
				"sector": "Henderson Global Technology I Acc",
				"performance": 18.3,
				"color": '#00A221'
			}, {
				"sector": "Liontrust UK Smaller Companies I Inc",
				"performance": 17.8,
				"color": '#00A221'
			}, {
				"sector": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc",
				"performance": 16.2,
				"color": '#00A221'
			}, {
				"sector": "Schroder Tokyo Z Acc",
				"performance": 16.0,
				"color": '#00A221'
			}, {
				"sector": "Henderson UK Absolute Return A Acc",
				"performance": 2.1,
				"color": '#1A5336'
			}, {
				"sector": "H2O Multireturns I/A(GBP)",
				"performance": 1.5,
				"color": '#1A5336'
			}, {
				"sector": "Newton Real Return A",
				"performance": 1.2,
				"color": '#1A5336'
			}, {
				"sector": "Kames UK Equity Absolute Return A Acc",
				"performance": 1.1,
				"color": '#1A5336'
			}, {
				"sector": "L&G UK Property Feeder I Dist",
				"performance": 1.0,
				"color": '#1A5336'
			}],
			"startDuration": 1,
			"graphs": [{
				"fillAlphas": 0.8,
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "performance",
				fullColor: "#1A5336",
				lineColor: "#1A5336",
				negativeFillColors: '#DA4949',
				"title": "performance",
				"labelText": "[[value]]",
				"clustered": false,
				"labelFunction": function(item) {
					return item.values.value + '%';
				},
				"balloonFunction": function(item) {
					return item.category + ": " + item.values.value + '%';
				}
			}],
			"fontFamily": "Verdana, Arial, Helvetica, sans-serif",
			"fontSize": "13",
			"categoryField": "sector",
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0.2,
				"axisAlpha": 0,
			},
			"valueAxes": [{
				"gridAlpha": 0,
				"ignoreAxisWidth": true,
				"labelFunction": function(value) {
					return value + '%';
				},
				"guides": [{
					"value": 0,
					"lineAlpha": 0.2
				}]
			}],
			"balloon": {
				"fixedPosition": true
			},
			"chartCursor": {
				"valueBalloonsEnabled": false,
				"cursorAlpha": 0.05,
				"fullWidth": true
			},
			"allLabels": [{
				"text": "Performance",
				"x": "57%",
				"y": "97%",
				"bold": true,
				"align": "middle"
			}],
			"export": {
				"enabled": true
			}
		});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Market Chart YTD Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-chart-ytd-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-ytd-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [{
	 			"fund": "Oil Brent Crude",
	 			"value": "81.8"
	 		}, {
	 			"fund": "Energy",
	 			"value": "52.2"
	 		}, {
	 			"fund": "Materials",
	 			"value": "46.8"
	 		}, {
	 			"fund": "Industrials",
	 			"value": "35.4"
	 		}, {
	 			"fund": "Financials",
	 			"value": "35.0"
	 		}, {
	 			"fund": "IT",
	 			"value": "33.6"
	 		}, {
	 			"fund": "US equities",
	 			"value": "33.5"
	 		}, {
	 			"fund": "Emerging Markets",
	 			"value": "31.6"
	 		}, {
	 			"fund": "World ex UK equities",
	 			"value": "30.3"
	 		}, {
	 			"fund": "Gold",
	 			"value": "30.2"
	 		}, {
	 			"fund": "Asia Pacific equities",
	 			"value": "27.7"
	 		}, {
	 			"fund": "Utilities",
	 			"value": "27.5"
	 		}, {
	 			"fund": "US IG bonds",
	 			"value": "25.5"
	 		}, {
	 			"fund": "UK index-linkers",
	 			"value": "25.4"
	 		}, {
	 			"fund": "Global property",
	 			"value": "25.2"
	 		}, {
	 			"fund": "Real Estate",
	 			"value": "23.8"
	 		}, {
	 			"fund": "Consumer Discretionary",
	 			"value": "23.6"
	 		}, {
	 			"fund": "US Treasuries",
	 			"value": "19.6"
	 		}, {
	 			"fund": "Japanese equities",
	 			"value": "17.6"
	 		}, {
	 			"fund": "Consumer Discretionary",
	 			"value": "15.3"
	 		}, {
	 			"fund": "Japanese equities",
	 			"value": "23.4"
	 		}, {
	 			"fund": "Consumer Staples",
	 			"value": "22.0"
	 		}, {
	 			"fund": "European IG bonds",
	 			"value": "21.3"
	 		}, {
	 			"fund": "US Treasuries",
	 			"value": "20.6"
	 		}, {
	 			"fund": "Europe ex UK equities",
	 			"value": "19.7"
	 		}, {
	 			"fund": "European gov't bonds",
	 			"value": "17.6"
	 		}, {
	 			"fund": "UK equities",
	 			"value": "16.8"
	 		}, {
	 			"fund": "Global high yield",
	 			"value": "15.7"
	 		}, {
	 			"fund": "Health Cares",
	 			"value": "11.7"
	 		}, {
	 			"fund": "UK IG bonds",
	 			"value": "10.6"
	 		}, {
	 			"fund": "UK Gilts",
	 			"value": "10.1"
	 		}, {
	 			"fund": "Hedge funds",
	 			"value": "9.1"
	 		}, {
	 			"fund": "Telecom Services",
	 			"value": "8.9"
	 		}, {
	 			"fund": "Global Bonds",
	 			"value": "3.7"
	 		} ],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 16.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart QTD Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-chart-qtd-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-qtd-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [{
	 			"fund": "Oil Brent Crude",
	 			"value": "21.8"
	 		}, {
	 			"fund": "Financial",
	 			"value": "20.6"
	 		}, {
	 			"fund": "Energy",
	 			"value": "13.1"
	 		}, {
	 			"fund": "US Equities",
	 			"value": "9.1"
	 		}, {
	 			"fund": "Materials",
	 			"value": "8.2"
	 		}, {
	 			"fund": "Industrials",
	 			"value": "7.5"
	 		}, {
	 			"fund": "Consumer Discretionary",
	 			"value": "7.3"
	 		}, {
	 			"fund": "World ex UK equities",
	 			"value": "6.8"
	 		}, {
	 			"fund": "IT",
	 			"value": "5.5"
	 		}, {
	 			"fund": "Japanese equities",
	 			"value": "4.9"
	 		}, {
	 			"fund": "Europe ex UK equities",
	 			"value": "4.8"
	 		}, {
	 			"fund": "UK equities",
	 			"value": "3.9"
	 		}, {
	 			"fund": "Telecom Services",
	 			"value": "2.9"
	 		}, {
	 			"fund": "US IG bonds",
	 			"value": "2.7"
	 		}, {
	 			"fund": "Utilities",
	 			"value": "2.0"
	 		}, {
	 			"fund": "Hedge Funds",
	 			"value": "1.9"
	 		}, {
	 			"fund": "Global high yield",
	 			"value": "1.5"
	 		}, {
	 			"fund": "US Treasuries",
	 			"value": "0.8"
	 		}, {
	 			"fund": "Emerging Markets",
	 			"value": "0.5"
	 		}, {
	 			"fund": "Asia Pacific equities",
	 			"value": "0.0"
	 		}, {
	 			"fund": "Health Care",
	 			"value": "-0.4"
	 		}, {
	 			"fund": "Global property",
	 			"value": "-0.5"
	 		}, {
	 			"fund": "Consumer Staples",
	 			"value": "-0.6"
	 		}, {
	 			"fund": "Real Estate",
	 			"value": "-0.9"
	 		}, {
	 			"fund": "UK index-linkers",
	 			"value": "-2.5"
	 		}, {
	 			"fund": "European IG bonds",
	 			"value": "-2.6"
	 		}, {
	 			"fund": "Global Bonds",
	 			"value": "-2.7"
	 		}, {
	 			"fund": "UK IG Bonds",
	 			"value": "-2.8"
	 		}, {
	 			"fund": "UK Gilts",
	 			"value": "-3.4"
	 		}, {
	 			"fund": "European gov't bonds",
	 			"value": "-4.2"
	 		}, {
	 			"fund": "Gold",
	 			"value": "-8.2"
	 		}, ],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 3.9,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart 5YRS Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#market-chart-5yrs-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-5yrs-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
	 		{"fund": "IT", "value": "154.2" },
	 		{"fund": "Consumer Discretionary", "value": "151.8" },
	 		{"fund": "US equities", "value": "149.3" },
	 		{"fund": "Health Care", "value": "143.0" },
	 		{"fund": "Financials", "value": "138.7" },
	 		{"fund": "Industrials", "value": "120.1" },
	 		{"fund": "World ex UK equities", "value": "107.6" },
	 		{"fund": "Consumer Staples", "value": "107.3" },
	 		{"fund": "Global property", "value": "105.6" },
	 		{"fund": "Real Estate", "value": "103.8" },
	 		{"fund": "Japanese equities", "value": "91.9" },
	 		{"fund": "Europe ex UK equities", "value": "88.2" },
	 		{"fund": "US IG bonds", "value": "85.1" },
	 		{"fund": "Telecom Services", "value": "78.5" },
	 		{"fund": "Utilities", "value": "72.3" },
	 		{"fund": "UK equities", "value": "61.8" },
	 		{"fund": "Asia Pacific equities", "value": "60.3" },
	 		{"fund": "UK index-linkers", "value": "49.0" },
	 		{"fund": "Global high yield", "value": "48.2" },
	 		{"fund": "Materials", "value": "45.9" },
	 		{"fund": "UK IG bonds", "value": "42.9" },
	 		{"fund": "Emerging Markets", "value": "38.2" },
	 		{"fund": "Energy", "value": "35.3" },
	 		{"fund": "European gov't bonds", "value": "34.5" },
	 		{"fund": "US Treasuries", "value": "34.3" },
	 		{"fund": "European IG bonds", "value": "33.6" },
	 		{"fund": "Hedge funds", "value": "25.1" },
	 		{"fund": "UK Gilts", "value": "24.4" },
	 		{"fund": "Global Bonds", "value": "20.6" },
	 		{"fund": "Gold", "value": "-7.4" },
	 		{"fund": "Oil Brent Crude", "value": "-33.6" }
	 		],

	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 61.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Funds Chart 5YRS Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-qtd-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-qtd-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
	 		{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "19.9" },
	 		{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "15.2" },
	 		{"fund": "Guinness Global Energy C", "value": "14.7" },
	 		{"fund": "JPM US Equity Income C Inc", "value": "13.3" },
	 		{"fund": "H2O Multireturns I/A(GBP)", "value": "13.0" },
	 		{"fund": "Old Mutual North American Eq A GBP Acc", "value": "12.5" },
	 		{"fund": "Polar Capital Global Insurance I Inc", "value": "11.6" },
	 		{"fund": "Schroder US Mid Cap Z Acc", "value": "11.3" },
	 		{"fund": "Investec UK Special Situations I Inc Net", "value": "10.7" },
	 		{"fund": "HSBC American Index C Inc", "value": "10.6" },
	 		{"fund": "Artemis Global Income I Inc", "value": "8.7" },
	 		{"fund": "Majedie UK Equity X Acc", "value": "8.6" },
	 		{"fund": "JOHCM UK Dynamic B Acc", "value": "8.2" },
	 		{"fund": "Artemis UK Select I Acc", "value": "7.8" },
	 		{"fund": "Schroder Tokyo Z Acc", "value": "7.3" },
	 		{"fund": "IP Global Smaller Companies Acc", "value": "7.0" },
	 		{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "6.8" },
	 		{"fund": "First State Global Resources B Acc", "value": "6.4" },
	 		{"fund": "Henderson Eurp Selected Opps I Inc", "value": "6.2" },
	 		{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "5.8" },
	 		{"fund": "Baillie Gifford International B Acc", "value": "5.0" },
	 		{"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc", "value": "4.7" },
	 		{"fund": "Henderson Global Technology I Acc", "value": "4.0" },
	 		{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "4.0" },
	 		{"fund": "BlackRock Continental Euro A Acc", "value": "3.7" },
	 		{"fund": "BlackRock UK A Acc", "value": "3.7" },
	 		{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "3.5" },
	 		{"fund": "L&G UK Property Feeder I Dist", "value": "3.4" },
	 		{"fund": "JB EF Luxury Brands-GBP Ra", "value": "3.3" },
	 		{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "3.3" },
	 		{"fund": "AXA Global High Income Z Inc", "value": "3.2" },
	 		{"fund": "Jupiter European Special Situations", "value": "3.1" },
	 		{"fund": "MFM Slater Growth P Acc", "value": "2.8" },
	 		{"fund": "Liontrust UK Smaller Companies I Inc", "value": "2.8" },
	 		{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "2.4" },
	 		{"fund": "Veritas Global Equity Income A GBP", "value": "2.2" },
	 		{"fund": "Franklin UK Mid Cap W Acc", "value": "2.2" },
	 		{"fund": "JPM Emerging Markets Income C Inc", "value": "2.1" },
	 		{"fund": "FP WHEB Sustainability C", "value": "2.0" },
	 		{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "1.9" },
	 		{"fund": "Schroder Asian Income Acc", "value": "1.1" },
	 		{"fund": "Royal London UK Equity Income M Acc", "value": "1.0" },
	 		{"fund": "Kames Ethical Equity B Acc", "value": "1.0" },
	 		{"fund": "Kames High Yield Bond D Inc", "value": "0.8" },
	 		{"fund": "Pictet-Global Emerging Debt P USD", "value": "0.6" },
	 		{"fund": "IP Global Bond Acc", "value": "0.2" },
	 		{"fund": "Henderson UK Absolute Return A Acc", "value": "-0.1" },
	 		{"fund": "Royal London Sustainable Leaders A Inc", "value": "-0.3" },
	 		{"fund": "Kames UK Equity Absolute Return A Acc", "value": "-0.6" },
	 		{"fund": "Kames Strategic Bond D Inc", "value": "-0.7" },
	 		{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "-1.3" },
	 		{"fund": "M&G European Corporate Bond GBP I Inc", "value": "-1.5" },
	 		{"fund": "Fidelity Emerging Markets W Acc", "value": "-2.0" },
	 		{"fund": "Royal London Corporate Bond Z Inc", "value": "-2.5" },
	 		{"fund": "Fidelity Strategic Bond Net Y", "value": "-2.7" },
	 		{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "-3.5" },
	 		{"fund": "Royal London UK Government Bond Z Inc", "value": "-4.0" },
	 		{"fund": "Newton Real Return A GBP Inc", "value": "-5.3" },
	 		{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "-5.6" },
	 		{"fund": "Veritas Asian A GBP", "value": "-5.8" },
	 		{"fund": "BlackRock Gold and General D Acc", "value": "-13.8" }
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 3.9,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
    }

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart YTD Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-ytd-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-ytd-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
	 		{"fund": "BlackRock Gold and General D Acc", "value": "80.0" },
	 		{"fund": "First State Global Resources B Acc", "value": "70.9" },
	 		{"fund": "Guinness Global Energy C", "value": "51.4" },
	 		{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "49.2" },
	 		{"fund": "Schroder US Mid Cap Z Acc", "value": "42.0" },
	 		{"fund": "JPM Emerging Markets Income C Inc", "value": "40.9" },
	 		{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "39.3" },
	 		{"fund": "JPM US Equity Income C Inc", "value": "36.7" },
	 		{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "35.8" },
	 		{"fund": "Old Mutual North American Eq A GBP Acc", "value": "35.7" },
	 		{"fund": "Polar Capital Global Insurance I Inc", "value": "34.5" },
	 		{"fund": "HSBC American Index C Inc", "value": "33.5" },
	 		{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "32.4" },
	 		{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "29.6" },
	 		{"fund": "Veritas Global Equity Income A GBP", "value": "29.1" },
	 		{"fund": "Schroder Asian Income Acc", "value": "29.0" },
	 		{"fund": "Pictet-Global Emerging Debt P USD", "value": "28.6" },
	 		{"fund": "Henderson Global Technology I Acc", "value": "27.7" },
	 		{"fund": "IP Global Smaller Companies Acc", "value": "27.6" },
	 		{"fund": "Schroder Tokyo Z Acc", "value": "27.2" },
	 		{"fund": "Baillie Gifford International B Acc", "value": "26.6" },
	 		{"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc", "value": "26.1" },
	 		{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "24.9" },
	 		{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "24.0" },
	 		{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "23.8" },
	 		{"fund": "Artemis Global Income I Inc", "value": "22.5" },
	 		{"fund": "M&G European Corporate Bond GBP I Inc", "value": "21.9" },
	 		{"fund": "Veritas Asian A GBP", "value": "21.7" },
	 		{"fund": "Majedie UK Equity X Acc", "value": "21.3" },
	 		{"fund": "JOHCM UK Dynamic B Acc", "value": "20.6" },
	 		{"fund": "Fidelity Emerging Markets W Acc", "value": "19.7" },
	 		{"fund": "FP WHEB Sustainability C", "value": "19.4" },
	 		{"fund": "JB EF Luxury Brands-GBP Ra", "value": "18.5" },
	 		{"fund": "Investec UK Special Situations I Inc Net", "value": "17.7" },
	 		{"fund": "Henderson Eurp Selected Opps I Inc", "value": "16.2" },
	 		{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "13.8" },
	 		{"fund": "Liontrust UK Smaller Companies I Inc", "value": "13.3" },
	 		{"fund": "BlackRock Continental Euro A Acc", "value": "13.0" },
	 		{"fund": "AXA Global High Income Z Inc", "value": "12.6" },
	 		{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "12.5" },
	 		{"fund": "Jupiter European Special Situations", "value": "12.1" },
	 		{"fund": "Royal London UK Equity Income M Acc", "value": "11.0" },
	 		{"fund": "IP Global Bond Acc", "value": "10.7" },
	 		{"fund": "Royal London Corporate Bond Z Inc", "value": "9.7" },
	 		{"fund": "Royal London UK Government Bond Z Inc", "value": "9.2" },
	 		{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "8.7" },
	 		{"fund": "Royal London Sustainable Leaders A Inc", "value": "8.0" },
	 		{"fund": "Kames High Yield Bond D Inc", "value": "7.5" },
	 		{"fund": "BlackRock UK A Acc", "value": "6.6" },
	 		{"fund": "Fidelity Strategic Bond Net Y", "value": "5.3" },
	 		{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "5.3" },
	 		{"fund": "Kames Strategic Bond D Inc", "value": "4.9" },
	 		{"fund": "Newton Real Return A GBP Inc", "value": "3.4" },
	 		{"fund": "L&G UK Property Feeder I Dist", "value": "2.0" },
	 		{"fund": "Artemis UK Select I Acc", "value": "1.8" },
	 		{"fund": "Henderson UK Absolute Return A Acc", "value": "1.1" },
	 		{"fund": "H2O Multireturns I/A(GBP)", "value": "0.3" },
	 		{"fund": "Franklin UK Mid Cap W Acc", "value": "-0.2" },
	 		{"fund": "Kames Ethical Equity B Acc", "value": "-0.3" },
	 		{"fund": "MFM Slater Growth P Acc", "value": "-2.4" },
	 		{"fund": "Kames UK Equity Absolute Return A Acc", "value": "-3.9" }
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 16.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
    }

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart 5YRS Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-5yrs-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-5yrs-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
	 		{"fund": "Old Mutual North American Eq A GBP Acc", "value": "162.5" },
	 		{"fund": "Liontrust UK Smaller Companies I Inc", "value": "155.8" },
	 		{"fund": "Schroder US Mid Cap Z Acc", "value": "150.1" },
	 		{"fund": "HSBC American Index C Inc", "value": "142.4" },
	 		{"fund": "JPM US Equity Income C Inc", "value": "132.8" },
	 		{"fund": "Artemis Global Income I Inc", "value": "127.6" },
	 		{"fund": "Henderson Global Technology I Acc", "value": "127.2" },
	 		{"fund": "Baillie Gifford International B Acc", "value": "114.0" },
	 		{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "112.1" },
	 		{"fund": "IP Global Smaller Companies Acc", "value": "110.4" },
	 		{"fund": "JOHCM UK Dynamic B Acc", "value": "104.8" },
	 		{"fund": "Franklin UK Mid Cap W Acc", "value": "104.1" },
	 		{"fund": "Royal London UK Equity Income M Acc", "value": "104.1" },
	 		{"fund": "Henderson Eurp Selected Opps I Inc", "value": "102.6" },
	 		{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "101.9" },
	 		{"fund": "Schroder Tokyo Z Acc", "value": "99.7" },
	 		{"fund": "MFM Slater Growth P Acc", "value": "99.1" },
	 		{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "96.0" },
	 		{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "94.1" },
	 		{"fund": "BlackRock Continental Euro A Acc", "value": "93.5" },
	 		{"fund": "Veritas Asian A GBP", "value": "92.8" },
	 		{"fund": "BNY Mellon Lg-Trm Glbl Eq Int WNet Acc", "value": "91.2" },
	 		{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "90.5" },
	 		{"fund": "Royal London Sustainable Leaders A Inc", "value": "90.1" },
	 		{"fund": "Kames Ethical Equity B Acc", "value": "89.4" },
	 		{"fund": "Majedie UK Equity X Acc", "value": "86.8" },
	 		{"fund": "FP WHEB Sustainability C", "value": "81.4" },
	 		{"fund": "Jupiter European Special Situations", "value": "79.5" },
	 		{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "78.7" },
	 		{"fund": "Artemis UK Select I Acc", "value": "76.4" },
	 		{"fund": "Schroder Asian Income Acc", "value": "74.1" },
	 		{"fund": "Investec UK Special Situations I Inc Net", "value": "69.8" },
	 		{"fund": "BlackRock UK A Acc", "value": "61.4" },
	 		{"fund": "Pictet-Global Emerging Debt P USD", "value": "58.1" },
	 		{"fund": "Veritas Global Equity Income A GBP", "value": "53.6" },
	 		{"fund": "Fidelity Emerging Markets W Acc", "value": "52.8" },
	 		{"fund": "Royal London Corporate Bond Z Inc", "value": "46.6" },
	 		{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "46.2" },
	 		{"fund": "L&G UK Property Feeder I Dist", "value": "41.3" },
	 		{"fund": "Henderson UK Absolute Return A Acc", "value": "37.2" },
	 		{"fund": "Kames High Yield Bond D Inc", "value": "35.5" },
	 		{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "35.4" },
	 		{"fund": "AXA Global High Income Z Inc", "value": "34.6" },
	 		{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "34.3" },
	 		{"fund": "M&G European Corporate Bond GBP I Inc", "value": "32.9" },
	 		{"fund": "Fidelity Strategic Bond Net Y", "value": "29.9" },
	 		{"fund": "Kames Strategic Bond D Inc", "value": "27.7" },
	 		{"fund": "IP Global Bond Acc", "value": "23.5" },
	 		{"fund": "Royal London UK Government Bond Z Inc", "value": "19.2" },
	 		{"fund": "Guinness Global Energy C", "value": "16.4" },
	 		{"fund": "Newton Real Return A GBP Inc", "value": "15.2" },
	 		{"fund": "Kames UK Equity Absolute Return A Acc", "value": "7.4" },
	 		{"fund": "First State Global Resources B Acc", "value": "-13.6" },
	 		{"fund": "BlackRock Gold and General D Acc", "value": "-28.9" }
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 61.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
    }

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart 5YRS Winter 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#funds-chart-handl-winter-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-handl-winter-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
			{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "19.9" },
	 		{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "15.2" },
	 		{"fund": "Guinness Global Energy C", "value": "14.7" },
	 		{"fund": "JPM US Equity Income C Inc", "value": "13.3" },
	 		{"fund": "H2O Multireturns I/A(GBP)", "value": "13.0" },
	 		{"fund": "Royal London UK Government Bond Z Inc", "value": "-4.0" },
	 		{"fund": "Newton Real Return A GBP Inc", "value": "-5.3" },
	 		{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "-5.6" },
	 		{"fund": "Veritas Asian A GBP", "value": "-5.8" },
	 		{"fund": "BlackRock Gold and General D Acc", "value": "-13.8" }
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			}
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
    }

	// ---------------------------------------------------------------------

	/*
	 * Market Chart YTD Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */	
	 if ($('#market-chart-ytd-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-ytd-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Asia Pacific equities", "value": "11.5"},
				{"fund": "IT", "value": "11"},
				{"fund": "Emerging Markets", "value": "10.4"},
				{"fund": "Europe ex UK equities", "value": "7.4"},
				{"fund": "Health Care", "value": "7.4"},
				{"fund": "Consumer Discretionary", "value": "6.2"},
				{"fund": "Consumer Staples", "value": "5.9"},
				{"fund": "World ex UK equities", "value": "5.9"},
				{"fund": "Gold", "value": "5.9"},
				{"fund": "Materials", "value": "5.8"},
				{"fund": "Industrials", "value": "5.7"},
				{"fund": "Utilities", "value": "5.5"},
				{"fund": "US equities", "value": "4.8"},
				{"fund": "UK equities", "value": "4"},
				{"fund": "Japanese equities", "value": "4"},
				{"fund": "Financials", "value": "3.6"},
				{"fund": "Real Estate", "value": "3.1"},
				{"fund": "Global high yield", "value": "2.7"},
				{"fund": "US IG bonds", "value": "2.2"},
				{"fund": "Hedge funds", "value": "2.1"},
				{"fund": "UK IG bonds", "value": "1.8"},
				{"fund": "UK index-linkers", "value": "1.7"},
				{"fund": "UK Gilts", "value": "1.6"},
				{"fund": "Global property", "value": "1.1"},
				{"fund": "European IG bonds", "value": "0.4"},
				{"fund": "Global Bonds", "value": "0.2"},
				{"fund": "Telecom Services", "value": "0"},
				{"fund": "US Treasuries", "value": "-0.5"},
				{"fund": "European gov't bonds", "value": "-0.7"},
				{"fund": "Energy", "value": "-5.9"},
				{"fund": "Oil Brent Crude", "value": "-8.1"}
			],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 4.0,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	 }

	// ---------------------------------------------------------------------

	/*
	 * Market Chart QTD Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */		
	 if ($('#market-chart-qtd-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-qtd-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Asia Pacific equities", "value": "11.5"},
				{"fund": "IT", "value": "11"},
				{"fund": "Emerging Markets", "value": "10.4"},
				{"fund": "Europe ex UK equities", "value": "7.4"},
				{"fund": "Health Care", "value": "7.4"},
				{"fund": "Consumer Discretionary", "value": "6.2"},
				{"fund": "Consumer Staples", "value": "5.9"},
				{"fund": "World ex UK equities", "value": "5.9"},
				{"fund": "Gold", "value": "5.9"},
				{"fund": "Materials", "value": "5.8"},
				{"fund": "Industrials", "value": "5.7"},
				{"fund": "Utilities", "value": "5.5"},
				{"fund": "US equities", "value": "4.8"},
				{"fund": "UK equities", "value": "4"},
				{"fund": "Japanese equities", "value": "4"},
				{"fund": "Financials", "value": "3.6"},
				{"fund": "Real Estate", "value": "3.1"},
				{"fund": "Global high yield", "value": "2.7"},
				{"fund": "US IG bonds", "value": "2.2"},
				{"fund": "Hedge funds", "value": "2.1"},
				{"fund": "UK IG bonds", "value": "1.8"},
				{"fund": "UK index-linkers", "value": "1.7"},
				{"fund": "UK Gilts", "value": "1.6"},
				{"fund": "Global property", "value": "1.1"},
				{"fund": "European IG bonds", "value": "0.4"},
				{"fund": "Global Bonds", "value": "0.2"},
				{"fund": "Telecom Services", "value": "0"},
				{"fund": "US Treasuries", "value": "-0.5"},
				{"fund": "European gov't bonds", "value": "-0.7"},
				{"fund": "Energy", "value": "-5.9"},
				{"fund": "Oil Brent Crude", "value": "-8.1"}
			],
			"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 4.0,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	 }

	// ---------------------------------------------------------------------

	/*
	 * Market Chart 5YRS Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */		
	 if ($('#market-chart-5yrs-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-5yrs-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Health Care", "value": "148.6"},
				{"fund": "IT", "value": "141.6"},
				{"fund": "US equities", "value": "138.6"},
				{"fund": "Consumer Discretionary", "value": "133.2"},
				{"fund": "Financials", "value": "114.9"},
				{"fund": "Industrials", "value": "113.5"},
				{"fund": "Consumer Staples", "value": "111.4"},
				{"fund": "World ex UK equities", "value": "101"},
				{"fund": "Real Estate", "value": "91.7"},
				{"fund": "Global property", "value": "89.3"},
				{"fund": "Japanese equities", "value": "85.2"},
				{"fund": "Europe ex UK equities", "value": "84.4"},
				{"fund": "Utilities", "value": "83.5"},
				{"fund": "US IG bonds", "value": "79.7"},
				{"fund": "Telecom Services", "value": "78.1"},
				{"fund": "Asia Pacific equities", "value": "63.3"},
				{"fund": "UK equities", "value": "58.7"},
				{"fund": "UK index-linkers", "value": "53.7"},
				{"fund": "Materials", "value": "44"},
				{"fund": "Global high yield", "value": "42.2"},
				{"fund": "UK IG bonds", "value": "41.5"},
				{"fund": "US Treasuries", "value": "39.3"},
				{"fund": "Emerging Markets", "value": "37"},
				{"fund": "European gov't bonds", "value": "30.8"},
				{"fund": "UK Gilts", "value": "28.6"},
				{"fund": "Hedge funds", "value": "27.4"},
				{"fund": "European IG bonds", "value": "27.3"},
				{"fund": "Energy", "value": "26.1"},
				{"fund": "Global Bonds", "value": "19.3"},
				{"fund": "Gold", "value": "-4.5"},
				{"fund": "Oil Brent Crude", "value": "-45.2"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 58.7,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	 }

	// ---------------------------------------------------------------------

	/*
	 * Funds Chart 5YRS Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */		
	 if ($('#funds-chart-qtd-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-qtd-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Jupiter India I Acc", "value": "17.8"},
				{"fund": "Veritas Asian A GBP", "value": "13.5"},
				{"fund": "Henderson Global Technology I Acc", "value": "12.4"},
				{"fund": "MFM Slater Growth P Acc", "value": "10.7"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "10.2"},
				{"fund": "Schroder Asian Income Acc", "value": "9.2"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "9.2"},
				{"fund": "JB EF Luxury Brands-GBP Ra", "value": "9.1"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "9"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "8.4"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "8.2"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "8.1"},
				{"fund": "Baillie Gifford International B Acc", "value": "7.7"},
				{"fund": "Jupiter European Special Situations", "value": "7.6"},
				{"fund": "IP Global Smaller Companies Acc", "value": "7.1"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "6.9"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "6.8"},
				{"fund": "FP WHEB Sustainability C", "value": "6.6"},
				{"fund": "Artemis Global Income I Inc", "value": "6.6"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "6.5"},
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "6.1"},
				{"fund": "BlackRock Gold and General D Acc", "value": "5.8"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "5.8"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "5.4"},
				{"fund": "Artemis UK Select I Acc", "value": "5.4"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "5.3"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "5.3"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "5.1"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "4.4"},
				{"fund": "HSBC American Index C Inc", "value": "4.4"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "4.3"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "4"},
				{"fund": "BlackRock UK A Acc", "value": "3.7"},
				{"fund": "Schroder Tokyo Z Acc", "value": "3.3"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "3.3"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "3.1"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "3"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "2.9"},
				{"fund": "Majedie UK Equity X Acc", "value": "2.7"},
				{"fund": "AXA Global High Income Z Inc", "value": "2.7"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "2.7"},
				{"fund": "First State Global Resources B Acc", "value": "2.5"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "2.2"},
				{"fund": "Kames Ethical Equity B Acc", "value": "2.1"},
				{"fund": "Schroder Income Fd Z Inc", "value": "2"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "1.9"},
				{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "1.9"},
				{"fund": "Newton Real Return A GBP Inc", "value": "1.8"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "1.6"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "1.6"},
				{"fund": "Kames High Yield Bond D Inc", "value": "1.5"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "1.5"},
				{"fund": "Kames Strategic Bond D Inc", "value": "1.3"},
				{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "1.2"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "1.2"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "1.2"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "0.9"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "0.9"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "0.5"},
				{"fund": "IP Global Bond Acc", "value": "0.3"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "0.2"},
				{"fund": "H2O Multireturns I/A(GBP)", "value": "0.1"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-0.9"},
				{"fund": "Kames UK Equity Absolute Return A Acc", "value": "-1"},
				{"fund": "Guinness Global Energy C", "value": "-9.2"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 4.0,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart YTD Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */		
	 if ($('#funds-chart-ytd-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-ytd-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Jupiter India I Acc", "value": "17.8"},
				{"fund": "Veritas Asian A GBP", "value": "13.5"},
				{"fund": "Henderson Global Technology I Acc", "value": "12.4"},
				{"fund": "MFM Slater Growth P Acc", "value": "10.7"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "10.2"},
				{"fund": "Schroder Asian Income Acc", "value": "9.2"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "9.2"},
				{"fund": "JB EF Luxury Brands-GBP Ra", "value": "9.1"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "9"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "8.4"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "8.2"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "8.1"},
				{"fund": "Baillie Gifford International B Acc", "value": "7.7"},
				{"fund": "Jupiter European Special Situations", "value": "7.6"},
				{"fund": "IP Global Smaller Companies Acc", "value": "7.1"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "6.9"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "6.8"},
				{"fund": "FP WHEB Sustainability C", "value": "6.6"},
				{"fund": "Artemis Global Income I Inc", "value": "6.6"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "6.5"},
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "6.1"},
				{"fund": "BlackRock Gold and General D Acc", "value": "5.8"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "5.8"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "5.4"},
				{"fund": "Artemis UK Select I Acc", "value": "5.4"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "5.3"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "5.3"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "5.1"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "4.4"},
				{"fund": "HSBC American Index C Inc", "value": "4.4"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "4.3"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "4"},
				{"fund": "BlackRock UK A Acc", "value": "3.7"},
				{"fund": "Schroder Tokyo Z Acc", "value": "3.3"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "3.3"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "3.1"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "3"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "2.9"},
				{"fund": "Majedie UK Equity X Acc", "value": "2.7"},
				{"fund": "AXA Global High Income Z Inc", "value": "2.7"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "2.7"},
				{"fund": "First State Global Resources B Acc", "value": "2.5"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "2.2"},
				{"fund": "Kames Ethical Equity B Acc", "value": "2.1"},
				{"fund": "Schroder Income Fd Z Inc", "value": "2"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "1.9"},
				{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "1.9"},
				{"fund": "Newton Real Return A GBP Inc", "value": "1.8"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "1.6"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "1.6"},
				{"fund": "Kames High Yield Bond D Inc", "value": "1.5"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "1.5"},
				{"fund": "Kames Strategic Bond D Inc", "value": "1.3"},
				{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "1.2"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "1.2"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "1.2"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "0.9"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "0.9"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "0.5"},
				{"fund": "IP Global Bond Acc", "value": "0.3"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "0.2"},
				{"fund": "H2O Multireturns I/A(GBP)", "value": "0.1"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-0.9"},
				{"fund": "Kames UK Equity Absolute Return A Acc", "value": "-1"},
				{"fund": "Guinness Global Energy C", "value": "-9.2"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 4.0,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart 5YRS Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */		
	 if ($('#funds-chart-5yrs-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-5yrs-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "154.8"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "146.6"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "144.5"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "141.9"},
				{"fund": "HSBC American Index C Inc", "value": "134.9"},
				{"fund": "Jupiter India I Acc", "value": "129.7"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "127.9"},
				{"fund": "Artemis Global Income I Inc", "value": "124.3"},
				{"fund": "Henderson Global Technology I Acc", "value": "119.4"},
				{"fund": "Baillie Gifford International B Acc", "value": "112.1"},
				{"fund": "First State Glbl Lstd Infras B GBP Inc", "value": "109.7"},
				{"fund": "Veritas Asian A GBP", "value": "106.9"},
				{"fund": "MFM Slater Growth P Acc", "value": "100.8"},
				{"fund": "IP Global Smaller Companies Acc", "value": "98.1"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "97.2"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "97.1"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "93.8"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "88.9"},
				{"fund": "Schroder Tokyo Z Acc", "value": "88.4"},
				{"fund": "Schroder Income Fd Z Inc", "value": "87.4"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "86.6"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "85"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "84.2"},
				{"fund": "BlackRock Global Prty Secs Eq Trkr D Acc", "value": "82.7"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "80.8"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "80.5"},
				{"fund": "Majedie UK Equity X Acc", "value": "80.4"},
				{"fund": "FP WHEB Sustainability C", "value": "79.5"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "78.4"},
				{"fund": "Artemis UK Select I Acc", "value": "74.8"},
				{"fund": "Jupiter European Special Situations", "value": "74.8"},
				{"fund": "Kames Ethical Equity B Acc", "value": "74.3"},
				{"fund": "Schroder Asian Income Acc", "value": "72.4"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "65.8"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "59.9"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "58.3"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "58.2"},
				{"fund": "BlackRock UK A Acc", "value": "56.7"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "52.6"},
				{"fund": "L&G All Stocks Idx Lnkd Gilt Idx I Dist", "value": "51.9"},
				{"fund": "JB EF Luxury Brands-GBP Ra", "value": "46.7"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "45.9"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "41.1"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "35.8"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "34.2"},
				{"fund": "JPM Emerging Markets A Acc", "value": "33.2"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "33"},
				{"fund": "AXA Global High Income Z Inc", "value": "31"},
				{"fund": "Kames High Yield Bond D Inc", "value": "28.1"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "27.9"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "27.7"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "23.2"},
				{"fund": "Kames Strategic Bond D Inc", "value": "22"},
				{"fund": "IP Global Bond Acc", "value": "22"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "19.7"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "18.6"},
				{"fund": "Newton Real Return A GBP Inc", "value": "16.7"},
				{"fund": "Kames UK Equity Absolute Return A Acc", "value": "6"},
				{"fund": "Guinness Global Energy C", "value": "1.4"},
				{"fund": "First State Global Resources B Acc", "value": "-13.9"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-21.8"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 58.7,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}
	
	// ---------------------------------------------------------------------

	/*
	 * Fund Chart Highest and Lowest Spring 2017
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */	
	 if ($('#funds-chart-handl-spring-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-handl-spring-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Jupiter India I Acc", "value": "17.8"},
				{"fund": "Veritas Asian A GBP", "value": "13.5"},
				{"fund": "Henderson Global Technology I Acc", "value": "12.4"},
				{"fund": "MFM Slater Growth P Acc", "value": "10.7"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "10.2"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "0.2"},
				{"fund": "H2O Multireturns I/A(GBP)", "value": "0.1"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-0.9"},
				{"fund": "Kames UK Equity Absolute Return A Acc", "value": "-1"},
				{"fund": "Guinness Global Energy C", "value": "-9.2"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "10",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "10",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			}
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------
	
	/*
	 * Market Chart YTD autumn 2017
	 *
	 */
	if ($('#market-chart-ytd-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-ytd-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "IT", "value": "17.9"},
				{"fund": "Emerging Markets", "value": "17.4"},
				{"fund": "Asia Pacific equities", "value": "17.1"},
				{"fund": "Europe ex UK equities", "value": "16.9"},
				{"fund": "Materials", "value": "10.6"},
				{"fund": "Industrials", "value": "10.1"},
				{"fund": "Health Care", "value": "9.9"},
				{"fund": "World ex UK equities", "value": "8.4"},
				{"fund": "UK equities", "value": "7.8"},
				{"fund": "Financials", "value": "7.4"},
				{"fund": "Japanese equities", "value": "7.3"},
				{"fund": "Global high yield", "value": "6.4"},
				{"fund": "Consumer Discretionary", "value": "6.2"},
				{"fund": "Utilities", "value": "5.8"},
				{"fund": "US equities", "value": "5.2"},
				{"fund": "European IG bonds", "value": "5"},
				{"fund": "Hedge funds", "value": "3.6"},
				{"fund": "Consumer Staples", "value": "2.6"},
				{"fund": "UK IG bonds", "value": "2.4"},
				{"fund": "Gold", "value": "2.3"},
				{"fund": "European gov't bonds", "value": "2.2"},
				{"fund": "Real Estate", "value": "1.8"},
				{"fund": "Global Bonds", "value": "1.5"},
				{"fund": "Telecom Services", "value": "0.4"},
				{"fund": "US IG bonds", "value": "0.3"},
				{"fund": "UK Gilts", "value": "-0.1"},
				{"fund": "Global property", "value": "-1.2"},
				{"fund": "UK index-linkers", "value": "-1.4"},
				{"fund": "US Treasuries", "value": "-5.7"},
				{"fund": "Oil Brent Crude", "value": "-6.7"},
				{"fund": "Energy", "value": "-8.7"}
			],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 7.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart QTD autumn 2017
	 *
	 */
	if ($('#market-chart-qtd-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-qtd-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Oil Brent Crude", "value": "16.3"},
				{"fund": "Energy", "value": "5.8"},
				{"fund": "Materials", "value": "5.5"},
				{"fund": "IT", "value": "5.1"},
				{"fund": "Emerging Markets", "value": "4.3"},
				{"fund": "Europe ex UK equities", "value": "3.7"},
				{"fund": "Telecom Services", "value": "2.7"},
				{"fund": "Asia Pacific equities", "value": "2.7"},
				{"fund": "Industrials", "value": "2.3"},
				{"fund": "UK equities", "value": "2.1"},
				{"fund": "Financials", "value": "2.1"},
				{"fund": "World ex UK equities", "value": "1.9"},
				{"fund": "Global high yield", "value": "1.9"},
				{"fund": "European IG bonds", "value": "1.5"},
				{"fund": "Japanese equities", "value": "1.2"},
				{"fund": "US equities", "value": "1.2"},
				{"fund": "Hedge funds", "value": "0.9"},
				{"fund": "European gov't bonds", "value": "0.7"},
				{"fund": "Global Bonds", "value": "0.5"},
				{"fund": "Gold", "value": "0.2"},
				{"fund": "Consumer Discretionary", "value": "0.2"},
				{"fund": "UK IG bonds", "value": "0.2"},
				{"fund": "Utilities", "value": "-0.1"},
				{"fund": "UK Gilts", "value": "-0.5"},
				{"fund": "Health Care", "value": "-0.7"},
				{"fund": "UK index-linkers", "value": "-0.8"},
				{"fund": "Real Estate", "value": "-1.1"},
				{"fund": "Global property", "value": "-1.4"},
				{"fund": "US IG bonds", "value": "-1.6"},
				{"fund": "US Treasuries", "value": "-2.8"},
				{"fund": "Consumer Staples", "value": "-3.5"}
			],
			"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 2.1,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Market Chart 5YRS autumn 2017
	 *
	 */
	if ($('#market-chart-5yrs-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("market-chart-5yrs-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "IT", "value": "164.9"},
				{"fund": "Consumer Discretionary", "value": "136.9"},
				{"fund": "Health Care", "value": "136.3"},
				{"fund": "US equities", "value": "134"},
				{"fund": "Industrials", "value": "129"},
				{"fund": "Financials", "value": "122.1"},
				{"fund": "Japanese equities", "value": "109"},
				{"fund": "World ex UK equities", "value": "105.6"},
				{"fund": "Europe ex UK equities", "value": "102.6"},
				{"fund": "Consumer Staples", "value": "94.8"},
				{"fund": "Utilities", "value": "82.9"},
				{"fund": "Real Estate", "value": "75.3"},
				{"fund": "Global property", "value": "73.6"},
				{"fund": "Asia Pacific equities", "value": "68.7"},
				{"fund": "US IG bonds", "value": "65.2"},
				{"fund": "UK equities", "value": "61.2"},
				{"fund": "Telecom Services", "value": "60.2"},
				{"fund": "Materials", "value": "57.5"},
				{"fund": "UK index-linkers", "value": "52.5"},
				{"fund": "Emerging Markets", "value": "49.3"},
				{"fund": "Global high yield", "value": "38.4"},
				{"fund": "European gov't bonds", "value": "34.2"},
				{"fund": "European IG bonds", "value": "33.4"},
				{"fund": "UK IG bonds", "value": "32"},
				{"fund": "Hedge funds", "value": "29"},
				{"fund": "US Treasuries", "value": "28.7"},
				{"fund": "Energy", "value": "22.6"},
				{"fund": "UK Gilts", "value": "20.4"},
				{"fund": "Global Bonds", "value": "16.5"},
				{"fund": "Gold", "value": "-13"},
				{"fund": "Oil Brent Crude", "value": "-38.4"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 61.2,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	 }

	// ---------------------------------------------------------------------

	/*
	 * Funds Chart 5YRS autumn 2017
	 *
	 */
	if ($('#funds-chart-qtd-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-qtd-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "First State Global Resources B Acc GBP", "value": "6.8"},
				{"fund": "Guinness Global Energy C", "value": "6.8"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "6.2"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "6"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "5.2"},
				{"fund": "Henderson Global Technology I Acc", "value": "5.1"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "4.4"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "4.3"},
				{"fund": "GAM Multistock Luxury Brands Eq GBP Ra", "value": "4.3"},
				{"fund": "Kames Ethical Equity B Acc", "value": "4.1"},
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "4.1"},
				{"fund": "Artemis UK Select I Acc", "value": "3.8"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "3.7"},
				{"fund": "Baillie Gifford International B Acc", "value": "3.6"},
				{"fund": "Schroder Income Fd Z Inc", "value": "3"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "3"},
				{"fund": "Veritas Asian A GBP", "value": "3"},
				{"fund": "IP Global Smaller Companies Acc", "value": "2.9"},
				{"fund": "H2O Multireturns I/A GBP", "value": "2.8"},
				{"fund": "BlackRock UK A Acc", "value": "2.7"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "2.5"},
				{"fund": "Schroder Tokyo Z Acc", "value": "2.1"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "2.1"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "2.1"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "2"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "1.9"},
				{"fund": "Artemis Global Income I Inc", "value": "1.7"},
				{"fund": "Majedie UK Equity X Acc", "value": "1.7"},
				{"fund": "Slater Growth P Acc", "value": "1.6"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "1.5"},
				{"fund": "AXA Global High Income Z Inc", "value": "1.4"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "1.2"},
				{"fund": "Kames High Yield Bond D Inc", "value": "1.2"},
				{"fund": "Jupiter European Special Situations", "value": "1.1"},
				{"fund": "Schroder Asian Income Acc", "value": "1.1"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "1.1"},
				{"fund": "FP WHEB Sustainability C", "value": "1"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "1"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "1"},
				{"fund": "HSBC American Index C Inc", "value": "0.9"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "0.9"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "0.7"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "0.7"},
				{"fund": "Kames Strategic Bond D Inc", "value": "0.7"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "0.6"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "0.6"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "0.6"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "0.5"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "0.4"},
				{"fund": "First State Glbl Lstd Infras B Inc GBP", "value": "0.4"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "0.3"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "0.2"},
				{"fund": "BlackRock Gold and General D Acc", "value": "0.1"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "0"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "-0.5"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "-0.5"},
				{"fund": "IP Global Bond Acc", "value": "-0.5"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "-0.6"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "-1.1"},
				{"fund": "Newton Real Return A GBP Inc", "value": "-1.1"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "-1.7"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "-2.2"},
				{"fund": "Jupiter India I Acc", "value": "-4.1"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 2.1,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart YTD autumn 2017
	 *
	 */
	if ($('#funds-chart-ytd-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-ytd-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"marginRight": 100,
	 			"autoMargins": false,
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Veritas Asian A GBP", "value": "24"},
				{"fund": "Henderson Global Technology I Acc", "value": "22.3"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "22.2"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "22"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "20.5"},
				{"fund": "Old Mutual Eurp Ex UK Smlr Coms R £ Acc", "value": "20"},
				{"fund": "Slater Growth P Acc", "value": "17.9"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "17.9"},
				{"fund": "GAM Multistock Luxury Brands Eq GBP Ra", "value": "17.8"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "16.6"},
				{"fund": "Baillie Gifford International B Acc", "value": "15.8"},
				{"fund": "Artemis UK Select I Acc", "value": "15.3"},
				{"fund": "Jupiter European Special Situations", "value": "15.2"},
				{"fund": "IP Global Smaller Companies Acc", "value": "13.4"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "13.2"},
				{"fund": "FP WHEB Sustainability C", "value": "12.6"},
				{"fund": "Schroder Asian Income Acc", "value": "12"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "11.8"},
				{"fund": "Jupiter India I Acc", "value": "11.5"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "11.3"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "10.1"},
				{"fund": "BlackRock UK A Acc", "value": "9.9"},
				{"fund": "JPM Emerging Markets Inc C Inc", "value": "9.7"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "9.5"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "9.1"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "9.1"},
				{"fund": "H2O Multireturns I/A GBP", "value": "8.9"},
				{"fund": "Kames Ethical Equity B Acc", "value": "8.7"},
				{"fund": "First State Glbl Lstd Infras B Inc GBP", "value": "8.5"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "8.5"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "7.5"},
				{"fund": "AXA Global High Income Z Inc", "value": "6.1"},
				{"fund": "Artemis Global Income I Inc", "value": "5.9"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "5.8"},
				{"fund": "Schroder Tokyo Z Acc", "value": "5.5"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "5.4"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "5.3"},
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "5.3"},
				{"fund": "Schroder Income Fd Z Inc", "value": "5.3"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "4.9"},
				{"fund": "Kames High Yield Bond D Inc", "value": "4.8"},
				{"fund": "Majedie UK Equity X Acc", "value": "4.5"},
				{"fund": "HSBC American Index C Inc", "value": "3.8"},
				{"fund": "Kames Strategic Bond D Inc", "value": "3.7"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "3.5"},
				{"fund": "Polar Capital Global Insurance I Inc", "value": "3"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "3"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "2.5"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "2"},
				{"fund": "Newton Real Return A GBP Inc", "value": "1.6"},
				{"fund": "Legg Mason CB US Agrsv Gr X GBP Acc", "value": "1.4"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "1.4"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "0.8"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "0.7"},
				{"fund": "First State Global Resources B Acc GBP", "value": "0.6"},
				{"fund": "IP Global Bond Acc", "value": "0.2"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "0.2"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "-0.2"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "-1.1"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-2.1"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "-2.1"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "-2.1"},
				{"fund": "Guinness Global Energy C", "value": "-14.7"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 7.8,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart 5YRS autumn 2017
	 *
	 */
	if ($('#funds-chart-5yrs-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-5yrs-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"legend": {
	 			"position": "bottom",
	 			"align": "center",
	 			"data": [{
	 				title: "FTSE All Share",
	 				color: "#00B2FF"
	 			}]
	 		},			
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "Old Mutual North American Eq A GBP Acc", "value": "157.5"},
				{"fund": "Henderson Global Technology I Acc", "value": "146.6"},
				{"fund": "Liontrust UK Smaller Companies I Inc", "value": "146.4"},
				{"fund": "Schroder US Mid Cap Z Acc", "value": "141"},
				{"fund": "Man GLG Japan CoreAlpha Profl Inc D", "value": "135.6"},
				{"fund": "Baillie Gifford International B Acc", "value": "129.9"},
				{"fund": "HSBC American Index C Inc", "value": "127.3"},
				{"fund": "IP Global Smaller Companies Acc", "value": "119.9"},
				{"fund": "Veritas Asian A GBP", "value": "118.1"},
				{"fund": "JPM US Equity Income C Net Inc", "value": "116.8"},
				{"fund": "Artemis Global Income I Inc", "value": "116.3"},
				{"fund": "Jupiter India I Acc", "value": "115.9"},
				{"fund": "Slater Growth P Acc", "value": "111.5"},
				{"fund": "Schroder Tokyo Z Acc", "value": "109"},
				{"fund": "First State Glbl Lstd Infras B Inc GBP", "value": "106.7"},
				{"fund": "Henderson Eurp Selected Opps I Inc", "value": "104.3"},
				{"fund": "FP WHEB Sustainability C", "value": "101.2"},
				{"fund": "Franklin UK Mid Cap W Acc", "value": "98.3"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "97.8"},
				{"fund": "Royal London UK Equity Income M Acc", "value": "92.9"},
				{"fund": "JOHCM UK Dynamic B Acc", "value": "91.3"},
				{"fund": "BNY Mellon Long-Term Global Eq Int W Acc", "value": "89.7"},
				{"fund": "Jupiter European Special Situations", "value": "87.8"},
				{"fund": "Artemis UK Select I Acc", "value": "87.5"},
				{"fund": "Legg Mason IF Royce US Smlr Coms X Acc", "value": "86.3"},
				{"fund": "Schroder Income Fd Z Inc", "value": "83.1"},
				{"fund": "Threadneedle UK Eq Inc Z Inc GBP", "value": "82.8"},
				{"fund": "Royal London Sustainable Leaders A Inc", "value": "80.9"},
				{"fund": "Majedie UK Equity X Acc", "value": "78.9"},
				{"fund": "Kames Ethical Equity B Acc", "value": "78.3"},
				{"fund": "Old Mutual UK Alpha R GBP Acc", "value": "75.1"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "74"},
				{"fund": "Schroder Asian Income Acc", "value": "68.2"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "67.5"},
				{"fund": "BlackRock UK A Acc", "value": "65.8"},
				{"fund": "Investec UK Special Situations I Inc Net", "value": "59.6"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "54.2"},
				{"fund": "L&G UK Property Feeder I Dist", "value": "46.2"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "41.5"},
				{"fund": "Henderson UK Absolute Return A Acc", "value": "38.4"},
				{"fund": "Royal London Corporate Bond Z Inc", "value": "37.4"},
				{"fund": "M&G Global Emerging Markets GBP A Acc", "value": "34.2"},
				{"fund": "M&G European Corporate Bond GBP I Inc", "value": "33.4"},
				{"fund": "AXA Global High Income Z Inc", "value": "28.2"},
				{"fund": "Fidelity MoneyBuilder Income Net Y", "value": "27"},
				{"fund": "Kames High Yield Bond D Inc", "value": "25.5"},
				{"fund": "Fidelity Strategic Bond Net Y", "value": "23.2"},
				{"fund": "IP Global Bond Acc", "value": "20.3"},
				{"fund": "TM Fulcrum Diversified Abs Ret C GBP Acc", "value": "19.5"},
				{"fund": "Kames Strategic Bond D Inc", "value": "18.7"},
				{"fund": "Royal London UK Government Bond Z Inc", "value": "16"},
				{"fund": "PIMCO GIS Glbl Real Ret Intl Acc GBP H", "value": "14.6"},
				{"fund": "Newton Real Return A GBP Inc", "value": "10.9"},
				{"fund": "Guinness Global Energy C", "value": "-1"},
				{"fund": "First State Global Resources B Acc GBP", "value": "-7.8"},
				{"fund": "BlackRock Gold and General D Acc", "value": "-30.6"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			},
	 			"guides": [{
	 				"value": 61.2,
	 				"lineAlpha": 1.2,
	 				lineColor: "#00B2FF",
	 				dashLength: 7,
	 				lineThickness: 2
	 			}]
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}

	// ---------------------------------------------------------------------

	/*
	 * Fund Chart Highest and Lowest autumn 2017
	 *
	 */
	if ($('#funds-chart-handl-autumn-2017').length > 0) {

	 	var chart = AmCharts.makeChart("funds-chart-handl-autumn-2017", {
	 		"type": "serial",
	 		"theme": "none",
	 		"mouseWheelScrollEnabled": false,
	 		"rotate": true,
	 		"marginLeft": 50,
	 		"marginBottom": 50,
	 		"dataProvider": [
				{"fund": "First State Global Resources B Acc GBP", "value": "6.8"},
				{"fund": "Guinness Global Energy C", "value": "6.8"},
				{"fund": "Fidelity Emerging Markets W Acc", "value": "6.2"},
				{"fund": "Man GLG Undervalued Assets Profl Acc C", "value": "6"},
				{"fund": "BlackRock Continental Euro A Acc", "value": "5.2"},
				{"fund": "Pictet-Global Emerging Debt P USD", "value": "-1.1"},
				{"fund": "Newton Real Return A GBP Inc", "value": "-1.1"},
				{"fund": "iShares Glb Prpty Secs Eq Idx (UK) D Acc", "value": "-1.7"},
				{"fund": "Veritas Global Equity Income A GBP", "value": "-2.2"},
				{"fund": "Jupiter India I Acc", "value": "-4.1"}
	 		],
	 		"startDuration": 1,
	 		"graphs": [{
	 			"fillAlphas": 0.8,
	 			fullColor: "#1A5336",
	 			lineColor: "#1A5336",
	 			negativeFillColors: '#DA4949',
	 			"lineAlpha": 0.2,
	 			"type": "column",
	 			"valueField": "value",
	 			"title": "Value",
	 			"labelText": "[[value]]",
	 			"clustered": true,
	 			"labelFunction": function(item) {
	 				return item.values.value + "";
	 			},
	 			"balloonFunction": function(item) {
	 				return item.category + ": " + item.values.value + "%";
	 			}
	 		}],
	 		"categoryField": "fund",
	 		"categoryAxis": {
	 			"gridPosition": "start",
	 			"gridAlpha": 0.3,
	 			"axisAlpha": 0,
	 			"fontSize": "14",
	 			"labelRotation": 45
	 		},
	 		"valueAxes": [{
	 			"gridAlpha": 0,
	 			"fontSize": "14",
	 			"ignoreAxisWidth": true,
	 			"labelFunction": function(value) {
	 				return Math.abs(value) + '%';
	 			}
	 		}],
	 		"balloon": {
	 			"fixedPosition": true
	 		},
	 		"export": {
	 			"enabled": false
	 		},
	 	});
	}