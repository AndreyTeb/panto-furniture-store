import swiper from './swiper.js';

function tabs() {

  const tabBtns = document.querySelectorAll('[data-tab]');
  const tabProducts = document.querySelectorAll('[data-tab-value]');

  for (let btn of tabBtns) {
    btn.addEventListener('click', function () {

      //Убиаем активные классы у всех кнопок
      for (let btn of tabBtns) {
        btn.classList.remove('tab-controls__btn--active')
      }

      //Добавляем активный класс к текущей кнопке
      this.classList.add('tab-controls__btn--active')

      //Получаем знваение нужной категории товаров
      // this.dataset.tab

      //Скрыть все товары
      for (let product of tabProducts) {
        product.classList.add('none')
      }

      //Проверка на отображение всех слайдов
      for (let product of tabProducts) {
        if (this.dataset.tab === 'all') {
          product.classList.remove('none')
        }
      }
      //Отобразить нужные товары
      for (let product of tabProducts) {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none')
        }
      }

      swiper();
      //Перевызов свайпера
      swiper.update()

    })
  }

}




export default tabs;