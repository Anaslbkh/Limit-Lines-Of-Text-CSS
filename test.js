$(function () {
  $("p").addClass("pointer");

  $("button.show").click(function () {
    $("p").toggleClass("red");
    $("button.undo").toggle($("p").hasClass("red"));
  });

  function toggleClick() {
    $(this).text($(this).text() === "Clicked" ? "test" : "Clicked");
    $("button.undo").show();
  }
  $("p").on("click", toggleClick);
  // Reset all <p> elements when undo is clicked
  $("button.undo").click(function () {
    $("p").text("test").removeClass("red");

    // Hide undo button since we reset everything
    $(this).hide();
  });
  $("button.undo").hide();
  let isClicked = false;
  $("button.enable").click(function () {
    $("p").off("click") ? $("p").on("click") : $("p").off("click");
    if (isClicked) {
      $("p").off("click", toggleClick);
      $(this).text("Enable Click");
    } else {
      $("p").on("click", toggleClick);
      $(this).text("Disable Click");
    }
    isClicked = !isClicked;
  });
  $(".random-color").click(function () {
    $("p").each(function () {
      $(this).css(
        "color",
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`
      );
    });
  });

  $("button.reset").click(function () {
    $("p").text("test").removeClass("red");
    $("button.undo").hide();
    if (!isClicked) {
      $("p").on("click", toggleClick);
      $("button.enable").text("Display Clicks");
      isClicked = true;
    }
  });
  $("button.reset-color").click(function () {
    $("p").css("color", "");
    $("p").removeClass("red");
  });

  $(".toggle-bold").click(function () {
    $("p").toggleClass("bold");
  });
  $(".font-size-up").click(function () {
    $("p").css("font-size", "+=2");
  });
});
