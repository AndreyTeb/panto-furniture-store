import Swiper from 'swiper/bundle';

import 'swiper/css';

function swiper() {
  const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    spaceBetween: 12,

    navigation: {
      nextEl: '#slider-next',
      prevEl: '#slider-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 17,
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 42,
      },
    }

  });
}


export default swiper;