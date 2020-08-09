$(function(){
    $("devour").om("click", function(e){
        var id =$(this).data("id");

        var devBur = $(this).data("true");

        const devouredBurger ={
            devoured: devBur
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function(){
            console.log ("burger changed to, devBur");
            location.reload();
        })
    });

 $("form-inline").on("submit", function(e) {
     e.preventDefault();

     let newBurger ={
         burger_name: $("#newBurger").val().trim(),
     };

     $.ajax("/api/burgers",{
         type:"POST",
         data: newBurger
     }).then(function() {
         console.log("New Burger added")
         location.reload();
     });
 });

});