$(document).ready(function () {
  $('.downloads__links').slick({
    accessibility: false,
    arrows: true,
    prevArrow: ('.prev'),
    nextArrow: ('.next'),
    draggable: false,
    autoplay: false,
    dots: false,
    slidesToShow: 4,
  });
});