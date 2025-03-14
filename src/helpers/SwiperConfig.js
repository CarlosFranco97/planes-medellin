import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const swiperConfig = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};

export const buttonStyle = {
  color: '#c0afaf',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '50px',
  height: '50px',
};

export const paginationBulletStyle = {
  background: '#ffffff',
  opacity: 1,
};

export const paginationBulletActiveStyle = {
  background: '#574949',
}; 