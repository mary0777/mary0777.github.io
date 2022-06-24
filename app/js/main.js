document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    } else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });
});

// let burger = document.querySelector('.burger'),
//     menu = document.querySelector('.menu');

// burger.addEventListener('click', function(e) {
//   menu.classList.toggle('menu--active');
// });




$(function () {

  var mixer = mixitup('.categories__list', {});
  mixer.filter('.category-burger');

  
  $('.reviews-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          
        }
      }
      
    ]
  });


  if (window.matchMedia("(min-width: 992px)").matches) {
    $('.restaurant__list').slick('unslick');
    sliderIsLive = false;
  } else {
    $('.restaurant__list').slick({
      arrows: false,
      fade: true,
      dots: true
    });
    sliderIsLive = true;
  };






 

});