$(function() {
    $(".devour").on("click", function(event) {
      let id = $(this).data("id");
      let devBur = $(this).data("newdevoured");
  
      let devouredBurger = {
        devoured: devBur
      };
  
      //  PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#newBurger").val().trim()
      };
  
      //  POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
           location.reload();
        }
      );
    });
  });



