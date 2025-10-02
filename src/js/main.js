
import { initVideoAnimation } from './components/home.js';
import { initTabs, initLoadingTabs, initTeamTabs } from './components/tabs.js';
import { initAnimations } from './components/animations.js';
import { initServicesSlider } from './components/slider.js';
import { initModals } from './components/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    initVideoAnimation();
    initTabs();
    initLoadingTabs();
    initTeamTabs();
    initAnimations();
    initServicesSlider();
    initModals();
});


