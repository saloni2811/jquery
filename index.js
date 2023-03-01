// $("h1").click(function(){
//     $("h1").css("color", "purple");

// });

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

// $("input").keypress(function(event) {
//     // $("h1").text(event.key); 
//   console.log(event.key); 
//   $("h1").text(event.key); 
  

// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "red");

// });

// $("h1").on("click", function() {
//     $("h1").css("color", "red");

// });

// $("h1").on("click", function() {
//     $("h1").animate({opacity : 0.5}); //used only for numeric values

// });

$("h1").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity : 0.5}); 

});