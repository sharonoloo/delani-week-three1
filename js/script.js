$(document).ready(function() {
    $("h1").click(function() {
      alert("This is a header.");
    });
  
    $("p").click(function() {
      alert("This is a paragraph.");
    });
  
    $("img").click(function() {
      alert("This is an image.");
    });
  });
    $("p").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  