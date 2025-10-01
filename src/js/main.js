
import { initVideoAnimation } from './components/home.js';
import { initTabs, initLoadingTabs } from './components/tabs.js';
import { initAnimations } from './components/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initVideoAnimation();
    initTabs();
    initLoadingTabs();
    initAnimations();
});


