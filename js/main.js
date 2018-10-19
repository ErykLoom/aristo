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
$(document).ready(function() {
  $('.moody-slider').slick({
    accessibility: false,
    arrows: false,
    draggable: false,
    autoplay: true,
    dots: true,
    dotsClass: 'dots'
  });
});
$(document).ready(function(){
  $('.table').tabs();
});