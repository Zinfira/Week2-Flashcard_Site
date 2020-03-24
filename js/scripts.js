$(document).ready(function() {
  $(".clickable").click(function() {
    $(".js-showing").toggle();
    $(".js-hidden").toggle();
  });
});