
gsap.registerPlugin(ScrollTrigger);

function initVideoAnimation() {
    const videoContainer = document.querySelector('.banner__video');
    const banner = document.querySelector('.banner');
    const video = document.querySelector('.banner__video video');
    const header = document.querySelector('.header');
    const title = document.querySelector('.banner__title');

    if (!videoContainer || !video || !header || !title) return;

    // Определяем тип устройства для оптимизации
    const isMobile = window.innerWidth <= 991; // lg брейкпоинт
    const isTablet = window.innerWidth > 991 && window.innerWidth <= 1199; // lg-xl
    const isLowPerformance = isMobile || isTablet;

    gsap.fromTo(video, {scale:0.8}, {scale:1, ease: "none", force3D:true,
        scrollTrigger:({
        pin:true,
        trigger: videoContainer,  
        start: "top top",    
        end: "bottom top",
        scrub: true,

        }),
    });    
}

export { initVideoAnimation };
