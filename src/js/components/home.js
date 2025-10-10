
gsap.registerPlugin(ScrollTrigger);

function initVideoAnimation() {
    const videoContainer = document.querySelector('.banner__video');
    const banner = document.querySelector('.banner');
    const video = document.querySelector('.banner__video video');
    const header = document.querySelector('.header');
    const title = document.querySelector('.banner__container');

    if (!videoContainer || !video || !header || !title) return;

    // Определяем тип устройства для оптимизации
    const isMobile = window.innerWidth <= 991; // lg брейкпоинт
    const isTablet = window.innerWidth > 991 && window.innerWidth <= 1199; // lg-xl
    const isLowPerformance = isMobile || isTablet;

    // Создаем timeline для синхронной анимации
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            pin: banner,
            start: "top top",
            end: "+=150%",
            scrub: 1,
        }
    });

    // Header и title быстро исчезают вверх
    tl.to([header, title], {
        opacity: 0,
        y: -200,
        ease: "power2.in",
        duration: 0.5
    }, 0);

    // Banner padding убираем
    tl.to(banner, {
        paddingTop: 0,
        ease: "power2.out",
        duration: 1
    }, 0);

    // Video контейнер быстро перемещается к самому верху
    tl.to(videoContainer, {
        y: -200,
        marginTop: 0,
        ease: "power2.out",
        duration: 1
    }, 0);

    // Video контейнер медленно расширяется на весь экран
    // tl.to(videoContainer, {
    //     width: "100vw",
    //     height: "100vh",
    //     borderRadius: 0,
    //     ease: "none",
    //     duration: 1
    // }, 0);

    // Video медленно расширяется на протяжении всей анимации
    tl.fromTo(videoContainer, 
        { scale: 0.8 }, 
        { 
            scale: 1, 
            ease: "none",
            force3D: true,
            duration: 1
        }, 
    0);    
}

export { initVideoAnimation };
