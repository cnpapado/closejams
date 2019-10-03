$(document).ready(function(){
	//artist1 = null;
	$("#searchmodule > div > input").on('input', function(){
		let clicked = $(this).parent().parent();
		$($(this).siblings("button")).html("<i class='fa fa-search'></i>"); 
		$($(this).siblings("button")).off('click').on('click', function(){
			main(clicked);
  		});
	});
});	

function main(search_mod) { //TODO validate non-emptyness
	let thisinput = $(search_mod).children("div").children("input");
	let thisbutton = $(search_mod).children("div").children("button");
	let thisselect = $(search_mod).children("select");

	//empty select
	$(thisselect).find('option').remove().end();
		
    artist1=$('#artist1').val();
	console.log("POSTTTTTTTT", artist1);

	post_to_api().done(function(data) {
		if (data.resultsPage.totalEntries == 1) {
			$(thisinput).val(data.resultsPage.results.artist[0].displayName);
			//save artist1=data.resultsPage.results.artist[0].id
		}
		else {
			$(thisinput).val("Many similar results found:");
			toggle_results(data, thisselect, thisinput);
			$(thisbutton).html("<i class='fa fa-caret-down'></i>");
			$(thisbutton).off('click').on('click', function() { $(thisselect).toggle() });						
		}



	});
	function foo(data, thisselect) {		
		   			
	}
}

function post_to_api() {           	
	return $.ajax( "/postme", {
		data : {
			artist1: artist1
		},
		type: 'POST',
		url: '/postme',
		success: function(json) {
			//TODO add failure handlers	
		}
     	});
}

function toggle_results(json, thisselect, thisinput) { 
	$(thisselect).show();
        $.each(json.resultsPage.results.artist, function(i, value) {
    		$(thisselect).append($('<option>').text(value.displayName).attr('value', value.id));	        			
	});
	$(thisselect).attr("size", json.resultsPage.totalEntries);
	
	$(thisselect).on("click", function(event) {
       	$(thisinput).val($("#searchmodule > select option:selected").text());
		$(thisselect).hide();      	
	});
}





