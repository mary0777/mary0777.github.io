$(function () {

  
  $('.reviews__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"></button>'
  });

  var mixer = mixitup('.categories__list',{ });
  mixer.filter('.category-burger');

});