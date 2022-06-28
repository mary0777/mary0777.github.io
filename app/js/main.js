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

document.addEventListener('DOMContentLoaded', () => {

  const filterOpen = document.querySelector('.filter-btn');
  const burgerFilter = document.querySelector('.burger-filter');
  const catalog = document.querySelector('.products-catalog__aside');
  const bodyLock = document.querySelector('body');

  filterOpen.addEventListener('click', function (e) {
    catalog.classList.toggle('products-catalog__aside--active');
    burgerFilter.classList.add('burger-filter--active');
    bodyLock.classList.add('lock');
  });

  burgerFilter.addEventListener('click', function (e) {
    catalog.classList.remove('products-catalog__aside--active');
    burgerFilter.classList.remove('burger-filter--active');
    bodyLock.classList.remove('lock');
  });
  

  document.addEventListener('click', function (e) {
    if (e.target !== (filterOpen) && e.target !== catalog) {
      burgerFilter.classList.remove('burger-filter--active');
      catalog.classList.remove('products-catalog__aside--active');
      bodyLock.classList.remove('lock');
    }
  });


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





const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});



