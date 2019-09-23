$(document).ready(function(){
	$("#artist1button").click(function(){
        
	    var artist1=$('#artist1').val();
        //alert(artist1);
        $.ajax( "/postme", {
        	data : {
				artist1: artist1
			},
			type: 'POST',
			url: '/postme'    
        })
		.done(function(data) { 
			$('#hiddendiv').text(data.name);
 		}); 
    });
});


