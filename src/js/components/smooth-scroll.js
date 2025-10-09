import Lenis from 'lenis';

// Инициализация Lenis для плавного скролла
const lenis = new Lenis({
    duration: 1.5, // длительность анимации скролла (в секундах)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing функция
    orientation: 'vertical', // вертикальный скролл
    gestureOrientation: 'vertical', // направление жестов
    smoothWheel: true, // плавный скролл колесиком мыши
    wheelMultiplier: 1, // множитель скорости колесика
    smoothTouch: false, // отключить на тач-устройствах (нативный скролл лучше)
    touchMultiplier: 2, // множитель для тач-устройств
    infinite: false, // бесконечный скролл
});

// Функция для обновления анимации скролла
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Плавный скролл для якорных ссылок
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    lenis.scrollTo(target, {
                        offset: 0,
                        duration: 1.5
                    });
                }
            }
        });
    });
});

export default lenis;