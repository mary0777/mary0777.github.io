document.addEventListener('DOMContentLoaded', () => {

  const burgerOpen = document.querySelector('.burger-open');
  const burgerClose = document.querySelector('.burger-close');
  const mobileMenu = document.querySelector('.menu');
  const bodyLock = document.querySelector('body');

  burgerOpen.addEventListener('click', function (e) {
    mobileMenu.classList.toggle('menu--active');
    burgerClose.classList.add('burger--active');
    bodyLock.classList.toggle('lock');
  });

  burgerClose.addEventListener('click', function (e) {
    mobileMenu.classList.remove('menu--active');
    burgerClose.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== (burgerOpen) && e.target !== mobileMenu) {
      burgerClose.classList.remove('burger--active');
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });


});




$(function () {

  var mixer = mixitup('.categories__list', {});
  mixer.filter('.category-burger');


  $('.reviews-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: false,
      }
    }]
  });


  if (window.matchMedia("(min-width: 992px)").matches) {
    $('.restaurant-slider').slick('unslick');
    sliderIsLive = false;
  } else {
    $('.restaurant-slider').slick({
      arrows: false,
      fade: true,
      dots: true
    });
    sliderIsLive = true;
  };


  


});