$(window).on("load", function () {
  $(".loader .inner").fadeOut(3000, function () {
    $(".loader").fadeOut(350);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: [
      "GovTech Software Engineer",
      "Federal Application Modernization",
      "Agentic AI Engineering",
      "RAG and Vector Database Systems",
      "AI Systems Design",
      "Secure Cloud Delivery",
      "Federal Application Security",
      "Artificial Intelligence Engineer",
    ],
    typeSpeed: 45,
    loop: true,
    startDelay: 300,
    showCursor: false,
  });

  $("#navigation li a").click(function (e) {
    var targetElement = $(this).attr("href");

    if (!targetElement || targetElement.charAt(0) !== "#") {
      return;
    }

    var target = $(targetElement);
    if (!target.length) {
      return;
    }

    e.preventDefault();
    var targetPosition = target.offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
