import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initServicesSlider() {
    // Проверяем размер экрана - инициализируем свайпер только для десктопа
    const isDesktop = window.innerWidth >= 1200; // xl брейкпоинт
    
    if (!isDesktop) {
        // На планшетах и мобильных просто показываем карточки без свайпера
        return;
    }

    const servicesSwiper = new Swiper('.services__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
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
    });
}

export { initServicesSlider };

