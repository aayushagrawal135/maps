$(document).ready(function () {
    $(".map").maphilight();

    $(".area").click(function () {
      var data = $(this).data("maphilight") || {};
      data.alwaysOn = true;
      $(this).data("maphilight", data).trigger("alwaysOn.maphilight");
    });
});
