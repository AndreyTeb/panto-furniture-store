// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

//Клик по кнопкам с подсказками
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
  btn.addEventListener('click', showHint);
}

function showHint(e) {
  e.stopPropagation();
  //Hide all hints
  for (let hint of infoHints) {
    hint.classList.add('none')
  }
  //Show curent hint
  this.parentNode.querySelector('.info-hint').classList.toggle('none')
}
//Закрываем подсказки при клике по всему документу
document.addEventListener('click', closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add('none')
  }
}
//Запрещаем всплытие события клика наверх по клике на подсказки
for (let hint of infoHints) {
  hint.addEventListener('click', (e) => e.stopPropagation())
}
// Swiper (свайпер)
import swiper from './modules/swiper.js';
swiper();
// Tabs (табы)
import tabs from './modules/tabs.js';
tabs();

//Мобильная навигация
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile-nav__wrapper--open')
}
//Закрытие мобильной навигации
mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav__wrapper--open')
}