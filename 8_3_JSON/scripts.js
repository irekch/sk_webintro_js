/*
http://jsonplaceholder.typicode.com/users
*/

$(document).ready(function(){

	$(".button").click(function(){

		$(".content").text("Ładowanie treści...");

		$.ajax({
			type:"GET",
			url: "http://jsonplaceholder.typicode.com/users",
			success: function(data) {
				
				$(".content").html("");
				
				for ( var i = 0; i < data.length; i++ ){
					$(".content").append( "<p>" + data[i].name + "</p>")
				}
			},
			dataType: "jsonp"
		});

	});

});