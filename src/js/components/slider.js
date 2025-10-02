import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initServicesSlider() {
    const servicesSwiper = new Swiper('.services__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: '.services__swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.services__swiper-button-next',
            prevEl: '.services__swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
}

export { initServicesSlider };

