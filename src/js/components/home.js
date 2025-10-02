// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function initVideoAnimation() {
    const videoContainer = document.querySelector('.banner__video');
    const video = document.querySelector('.banner__video video');
    const header = document.querySelector('.header');
    const title = document.querySelector('.banner__title');

    if (!videoContainer || !video || !header || !title) return;

    // Определяем тип устройства для оптимизации
    const isMobile = window.innerWidth <= 991; // lg брейкпоинт
    const isTablet = window.innerWidth > 991 && window.innerWidth <= 1199; // lg-xl
    const isLowPerformance = isMobile || isTablet;

    // Оптимизированные параметры для разных устройств
    const scrubValue = isLowPerformance ? 0.5 : 1;
    const scaleValue = isLowPerformance ? 1.2 : 1.43;
    const parallaxValue = isLowPerformance ? -5 : -10;

    // Создаем основную временную линию анимации
    const masterTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "bottom top",
            scrub: scrubValue,
            pin: true,
            anticipatePin: 1,
            refreshPriority: -1, // Оптимизация производительности
            onEnter: () => {
                document.body.style.overflow = 'hidden';
            },
            onLeave: () => {
                document.body.style.overflow = 'auto';
            },
            onEnterBack: () => {
                document.body.style.overflow = 'hidden';
            },
            onLeaveBack: () => {
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Оптимизированные анимации с улучшенной производительностью
    const animations = [];

    // Скрытие шапки и заголовка - привязано к скроллу
    if (!isMobile) { // На мобильных устройствах не анимируем шапку
        animations.push(
            gsap.to(header, {
                opacity: 0,
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: videoContainer,
                    start: "top top",
                    end: "top bottom",
                    scrub: scrubValue,
                    refreshPriority: -1
                }
            })
        );

        animations.push(
            gsap.to(title, {
                opacity: 0,
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: videoContainer,
                    start: "top top",
                    end: "top bottom",
                    scrub: scrubValue,
                    refreshPriority: -1
                }
            })
        );
    }

    // Раскрытие видео на весь экран - привязано к скроллу
    animations.push(
        gsap.to(videoContainer, {
            scale: scaleValue,
            ease: "none",
            scrollTrigger: {
                trigger: videoContainer,
                start: "top 10%",
                end: "top 90%",
                scrub: scrubValue,
                refreshPriority: -1
            }
        })
    );

    // Параллакс эффект - только для десктопа и планшетов
    if (!isMobile) {
        animations.push(
            gsap.to(video, {
                yPercent: parallaxValue,
                ease: "none",
                scrollTrigger: {
                    trigger: videoContainer,
                    start: "top top",
                    end: "bottom top",
                    scrub: scrubValue,
                    refreshPriority: -1
                }
            })
        );
    }

    // Устанавливаем transform-origin для правильного масштабирования
    gsap.set(videoContainer, {
        transformOrigin: "center center"
    });

    // Оптимизация для слабых устройств
    if (isLowPerformance) {
        // Отключаем анимации при потере фокуса
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                ScrollTrigger.getAll().forEach(trigger => trigger.disable());
            } else {
                ScrollTrigger.getAll().forEach(trigger => trigger.enable());
            }
        });

        // Очистка при размонтировании
        window.addEventListener('beforeunload', () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            animations.forEach(animation => animation.kill());
        });
    }
}

export { initVideoAnimation };
