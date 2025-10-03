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

function initValuesSlider() {
    // Проверяем размер экрана - инициализируем свайпер только для мобильных
    const isMobile = window.innerWidth < 576; // sm брейкпоинт
    const navigationElement = document.querySelector('.values__navigation');
    
    if (!isMobile) {
        if (navigationElement) {
            navigationElement.style.display = 'none';
        }
        return;
    }

    if (navigationElement) {
        navigationElement.style.display = 'flex';
    }

    const valuesSwiper = new Swiper('.values__inner', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 300,
        freeMode: true,
        grabCursor: true,
        pagination: {
            el: '.values__swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            }
        }
    });
}

export { initServicesSlider, initValuesSlider };

