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

  $(".clickable5").click(function() {
    $(".function-showing").toggle();
    $(".function-hidden").toggle();
  });

  $(".clickable6").click(function() {
    $(".methods-showing").toggle();
    $(".methods-hidden").toggle();
  });
  
  $(".clickable7").click(function() {
    $(".arguments-showing").toggle();
    $(".arguments-hidden").toggle();
  });

  $(".clickable8").click(function() {
    $(".parameters-showing").toggle();
    $(".parameters-hidden").toggle();
  });

  $(".clickable9").click(function() {
    $(".return-showing").toggle();
    $(".return-hidden").toggle();
  });

  $(".clickable10").click(function() {
    $(".Chain-showing").toggle();
    $(".Chain-hidden").toggle();
  });

  $(".clickable11").click(function() {
    $(".strings-showing").toggle();
    $(".strings-hidden").toggle();
  });
});