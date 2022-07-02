
$(window).scroll(function () {
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

document.addEventListener('DOMContentLoaded', () => {

  const burgerOpen = document.querySelector('.burger-open');
  const burgerClose = document.querySelector('.close');
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


});

document.addEventListener('DOMContentLoaded', () => {

  const filterOpen = document.querySelector('.filter-btn');
  const burgerFilter = document.querySelector('.burger-filter');
  const catalog = document.querySelector('.products-catalog__sidebar');
  const bodyLock = document.querySelector('body');
 

  filterOpen.addEventListener('click', function (e) {
    catalog.classList.toggle('products-catalog__sidebar--active');
    burgerFilter.classList.add('burger-filter--active');
    bodyLock.classList.add('lock-catalog');
  });

  burgerFilter.addEventListener('click', function (e) {
    catalog.classList.remove('products-catalog__sidebar--active');
    burgerFilter.classList.remove('burger-filter--active');
    bodyLock.classList.remove('lock-catalog');
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

});


var $range = $(".price-catalog__input"),
    $inputFrom = $(".price-catalog__from"),
    $inputTo = $(".price-catalog__to"),
    instance,
    min = 0,
    max = max,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});


if (window.matchMedia("(min-width: 768px)").matches) {
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
  
 

