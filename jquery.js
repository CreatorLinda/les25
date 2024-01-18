$(document).ready(function(){
    
    $("#veranderTekstBtn").click(function(){
      $("#tekstElement").text("De tekst is succesvol veranderd!");
    });
  
    
    $(".socialButton").hover(function(){
      $(this).css("background-color", "#800080"); 
    }, function(){
      $(this).css("background-color", "#f00");
    });
  
    $(".socialButton").click(function(){
      $(this).css("background-color", "#000");
    });
  });
  