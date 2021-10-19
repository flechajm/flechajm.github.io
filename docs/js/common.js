let $window;

$(document).ready(function () {
  $window = $(window);
  showWelcome();
});

$(function () {
  $(".menu a").on("click", function () {
    let toggle = $("#toggle");
    toggle.prop("checked", !toggle.prop("checked"));
  });
});

function isDevice() {
  return $window.width() <= 900;
}

function showWelcome() {
  $("#welcome").fadeOut("fast", function () {
    $(this).css("background-image", "url('/docs/images/portrait.jpg')");
    $(this)
      .fadeIn()
      .queue(function () {
        $(".welcome-body")
          .fadeIn({
            duration: 'slow',
            start: function () {
              $(this).css({
                display: "flex",
              });
            },
          })
          .delay(400)
          .queue(function () {
            $(".social")
              .css({ opacity: 0, visibility: "visible" })
              .animate({ opacity: 1 }, 'slow');
          });
      });
  });
}
