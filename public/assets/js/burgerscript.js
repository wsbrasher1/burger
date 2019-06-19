$("#add-burger").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
        burger: $("#burger-name").val().trim()
    }

    $.post("/api/burgers", newBurger, function(data) {
        location.reload();
    })
})

$(document).on("click", ".devour", function(event) {
    event.preventDefault();
    console.log("Let's work");
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
    }).then(function() {
        console.log("id: " + id + " devoured.");
        location.reload();
    });
})