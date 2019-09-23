$(document).ready(function(){
	//artist1 = null;
	$("#artist1button").click(function() { //TODO validate non-emptyness
		//run only if actually changed
		//if (artist1 != $('#artist1').val()) {alert(artist1, $('#artist1').val());} //TODO debug here			
		
		//empty select
 		$('#results').find('option').remove().end();
		
        	artist1=$('#artist1').val();
 		console.log("POSTTTTTTTT", artist1);
           	$.ajax( "/postme", {
        		data : {
				artist1: artist1
			},
			type: 'POST',
			url: '/postme',
			success: function(json) {
				//TODO handle query not found
				if (json.resultsPage.totalEntries == 1) {
					$("#artist1").val(data.resultsPage.results.artist[0].displayName);
					//save artist1=data.resultsPage.results.artist[0].id
				}
				else {
					$("#artist1").val("Many similar results found:");
					toggle_results(json);			
				}	
    			}
       		})
		.done(function(data) {
                	$('#hiddendiv').text(data.resultsPage.results.artist[0].displayName);
		});
	});



	function toggle_results(json) { 
		$("#results").show();
	        $.each(json.resultsPage.results.artist, function(i, value) {
	    		$('#results').append($('<option>').text(value.displayName).attr('value', value.id));	        			
		});
		$('#results').attr("size", json.resultsPage.totalEntries);
		
		$("#results").on("click", function(event) {
	        	$("#artist1").val($("#results option:selected").text());
			$("#results").hide();      	
		});
	}


});




