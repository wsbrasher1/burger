$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurg = {
            burger_name: $("#newburger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(function(){
            console.log("New burger added. Coming in hot!");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredPhase = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredPhase
        }).then(function(){
            console.log("Burger was devoured. Mmmm mmm.");
            location.reload();
        });
    });
    $(".deleteburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
           type: "DELETE",
           url: "/api/burgers/" + id 
        }).then(location.reload());  
    });   
});