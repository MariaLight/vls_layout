import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
document.addEventListener('DOMContentLoaded', () => {
    const newsSwiper = new Swiper('.news__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: '.news__swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.news__swiper-button-next',
            prevEl: '.news__swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
});