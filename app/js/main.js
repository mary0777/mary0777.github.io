document.addEventListener('DOMContentLoaded', () => {

  const burgerOpen = document.querySelector('.burger-open');
  const burgerClose = document.querySelector('.close');
  const mobileMenu = document.querySelector('.menu');
  const bodyLock = document.querySelector('body');


  burgerOpen.addEventListener('click', function (e) {
    mobileMenu.classList.add('menu--active');
    burgerClose.classList.add('burger--active');
    bodyLock.classList.add('lock');
  });

  burgerClose.addEventListener('click', function (e) {
    mobileMenu.classList.remove('menu--active');
    burgerClose.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burgerOpen && e.target !== mobileMenu) {
      burgerClose.classList.remove('burger--active');
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });
 
});

document.addEventListener('DOMContentLoaded', () => {

  const filterOpen = document.querySelector('.filter-btn');
  const burgerFilter = document.querySelector('.burger-filter');
  const catalog = document.querySelector('.products-catalog__sidebar');
  const catalogg = document.querySelector('.products-catalog__sidebar--active');
  const lockCatalog = document.querySelector('body');

  
  filterOpen.addEventListener('click', function (e) {
    catalog.classList.add('products-catalog__sidebar--active');
    burgerFilter.classList.add('burger-filter--active');
    lockCatalog.classList.add('lock-catalog');
    
  });
  
  burgerFilter.addEventListener('click', function (e) {
    catalog.classList.remove('products-catalog__sidebar--active');
    burgerFilter.classList.remove('burger-filter--active');
    lockCatalog.classList.remove('lock-catalog');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== filterOpen && e.target !== catalog) {
      burgerFilter.classList.remove('burger-filter--active');
      catalog.classList.remove('products-catalog__sidebar--active');
      lockCatalog.classList.remove('lock-catalog');
    }
  });
  

});



$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(document).ready(function(){
      $(".menu__link--contacts").on("click", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  
      $('.menu__link--contacts').click(function () {
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('lock');
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

function updateInputs(data) {
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



let ssContainer = $(".restaurant-slider")
const SLICK_SETTINGS = {
  arrows: false,
  dots: true,
  mobileFirst: !0,
  responsive: [{
      breakpoint: 767,  // unslick when greater than 767 pixel width
      settings: "unslick"
  }]
};

const ss = $(ssContainer).slick(SLICK_SETTINGS);

$(window).on('resize', function() {
 
  if( $(window).width() < 768 &&  !ss.hasClass('slick-initialized')) {
      $(ssContainer).slick(SLICK_SETTINGS);
  }
});



$('.proposition-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
  nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
  responsive: [{
    breakpoint: 577,
    settings: {
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 4
    }
  }]
});

$(function () {

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#ffb800",
    spacing: "6px",
    fullStar: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3197_367)"><path d="M0.0229731 6.16432C0.0780978 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322142 6.334 0.0229731 6.16432Z"/></g><defs><clipPath id="clip0_3197_367"><rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/></clipPath></defs></svg>'
  });
});


$(function () {
  $('.product-info__input').styler();
});



$(document).ready(function () {
  $('.product-popup__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    }]
  })

  $('.product-popup__link').magnificPopup({
    type:'inline',
    callbacks: {
      open: function () {
        $('.product-slider').slick({
          dots: true,
          prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
          nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
          responsive: [{
            breakpoint: 993,
            settings: {
              arrows: false,
            }
          }]
        });
      },

      // close: function () { 
      //   $('.product-popup__link')
      // },

      // resize: function () {
      //   $('.product-slider, .product-popup__link')
      // }

    }
  });

});


$(function () {
  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-descr').removeClass('product-descr--active');
    $($(this).attr('href')).addClass('product-descr--active');

  });
});