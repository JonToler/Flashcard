$(document).ready(function() {
  $("button").click(function() {
    $(".js-showing").toggle();

     //$(".js-hidden").toggle();
    $(".js-showing p").removeClass("invisible");
  });
});
