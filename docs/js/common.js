let $window;

$(document).ready(function () {
  $window = $(window);

  showWelcome();
});

function isDevice() {
  return $window.width() <= 900;
}

function showWelcome() {
  $("#section-1")
    .fadeTo("slow", 0.1, function () {
      $(this).css("background-image", "url(../docs/images/portrait.jpg)");
    })
    .fadeTo(700, 1, function () {
      $("#welcome").fadeIn("slow");
    });
}
