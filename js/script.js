$(document).ready(function () {

  // Back to Top Buttton

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // Sticky Menu
  $("#service").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky-header");
    } else {
      $("nav").removeClass("sticky-header");
    }
  });



  // Banner Slider
  $("#banner").slick({
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    prevArrow: '<i class="fas fa-chevron-left arrow banner-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right arrow banner-next"></i>',
  });
  $(".latest-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: false,
    prevArrow: $(".latest-prev"),
    nextArrow: $(".latest-next"),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: false,
    prevArrow: $(".testimonial-prev"),
    nextArrow: $(".testimonial-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Mixitup - It must come before venobx
  var mixer = mixitup(".featured-container");

  // Venobox
  $(".venobox").venobox({
    spinner: "cube-grid",
    spinColor: "#de4644",
  });
  new WOW().init();

  
});
