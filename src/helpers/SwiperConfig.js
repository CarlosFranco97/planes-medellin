import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const swiperConfig = {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};

export const buttonStyle = {
  color: "#0080B9",
};

export const paginationBulletStyle = {
  background: "#0080B9",
  opacity: 0.5,
};

export const paginationBulletActiveStyle = {
  background: "#0080B9",
}; 