
import { initVideoAnimation } from './components/home.js';
import { initTabs, initLoadingTabs, initTeamTabs, initTeamAccordions } from './components/tabs.js';
import { initAnimations } from './components/animations.js';
import { initServicesSlider, initValuesSlider } from './components/slider.js';
import { initModals } from './components/modal.js';
import { initMobileMenu } from './components/mobile-menu.js';
import './components/news-swiper.js';
import './components/faq.js';
document.addEventListener('DOMContentLoaded', () => {
    initVideoAnimation();
    initTabs();
    initLoadingTabs();
    initTeamTabs();
    initTeamAccordions();
    initAnimations();
    initServicesSlider();
    initValuesSlider();
    initModals();
    initMobileMenu();
});


