/*
https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json
*/

$(document).ready(function(){

     $(".button").click(function(){   
         
        $(".content").text("Ladowanie tresci ...");
        
        $.ajax({
            type: "GET",
            url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
            success: function(data){
                $(".content").text(JSON.stringify(data));
            },
            dataType:"jsonp"
        });
        
    });
    
});