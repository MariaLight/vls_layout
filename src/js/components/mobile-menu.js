/**
 * Мобильное меню
 */

export function initMobileMenu() {
    const burgerButton = document.querySelector('.header__burger');
    const closeButton = document.querySelector('.mobile-menu__close');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!burgerButton || !closeButton || !mobileMenu) {
        return;
    }

    // Функция для открытия меню
    function openMenu() {
        mobileMenu.classList.add('mobile-menu--active');
        document.body.style.overflow = 'hidden';
    }

    // Функция для закрытия меню
    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu--active');
        document.body.style.overflow = '';
    }

    // Обработчики событий
    burgerButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    // Закрытие меню при клике на ссылки навигации
    const navLinks = mobileMenu.querySelectorAll('.mobile-menu__nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Закрытие меню при клике вне его области
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--active')) {
            closeMenu();
        }
    });

    // Закрытие меню при изменении размера окна (если перешли на десктоп)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) { // lg брейкпоинт
            closeMenu();
        }
    });
}
