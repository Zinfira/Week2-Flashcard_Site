$(document).ready(function() {
  $(".clickable").click(function() {
    $(".js-showing").toggle();
    $(".js-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $(".oper-showing").toggle();
    $(".oper-hidden").toggle();
  });

  $(".clickable3").click(function() {
    $(".var-showing").toggle();
    $(".var-hidden").toggle();
  });
  
  $(".clickable4").click(function() {
    $(".var-name-con-showing").toggle();
    $(".var-name-con-hidden").toggle();
  });

});