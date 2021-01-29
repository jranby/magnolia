
	// ---------------------------------------------------------------------

	/*
	 * Market Index Data
	 *
	 * Function handler for displaying the market
	 * index current data and risers and fallers.
	 */
	if ($('#market-chartx').length > 0) {
					
		
        var restUrl = 'http://localhost:8080/author/.rest/nodes/v1/articletags?depth=2&excludeNodeTypes=rep:system,rep:AccessControl';
		
		$.getJSON('https://capco.steelpandas.net/TD/MarketDetails', function(data) {
		    

            //console.log(data);
		});

		$.ajax({
			type: "get",
			contentType: "application/json; charset=utf-8",
			url: restUrl,
			username: "reader",
			password: "reader",
			data: "{}",
			dataType: "json",
			success: function(data) {
				
				console.log(data);
			},
			error: function(result) {

				console.log('rest error');
			}
		});
	}


        var westUrl = 'http://localhost:8080/author/rest/endpoint';

		$.getJSON(westUrl, function(data) {
		    

            console.log(data);
		});