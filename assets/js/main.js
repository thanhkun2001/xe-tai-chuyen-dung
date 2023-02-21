$(function () {
  AOS.init();

  $(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  });
});
$(".slide-brand").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 8,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    // {
    //   breakpoint: 1230,
    //   settings: {
    //     arrows: false,
    //     dots: false,
    //   },
    // },
  ],
});
var toggleButton = document.querySelector('.toggle-button');
var toggleContent = document.querySelector('.toggle-content');

toggleButton.addEventListener('click', function () {
  if (toggleContent.style.display === 'none') {
    toggleContent.style.display = 'block';
  } else {
    toggleContent.style.display = 'none';
  }
});