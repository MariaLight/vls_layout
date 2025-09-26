// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function initVideoAnimation() {
    const videoContainer = document.querySelector('.banner__video');
    const video = document.querySelector('.banner__video video');
    const header = document.querySelector('.header');
    const title = document.querySelector('.banner__title');

    if (!videoContainer || !video || !header || !title) return;

    // Создаем основную временную линию анимации
    const masterTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
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

    // Фаза 1: Скрытие шапки и заголовка (0-25% скролла)
    masterTimeline
        .to(header, {
            opacity: 0,
            y: -100,
            duration: 0.25,
            ease: "power2.out"
        }, 0)
        .to(title, {
            opacity: 0,
            y: -50,
            duration: 0.25,
            ease: "power2.out"
        }, 0.1);

    // Фаза 2: Раскрытие видео на весь экран (25-50% скролла)
    masterTimeline
        .to(videoContainer, {
            scale: 1.43, // Масштабируем до полной ширины экрана
            duration: 0.25,
            ease: "power2.inOut"
        }, 0.25)
        .to(videoContainer, {
            borderRadius: 0,
            duration: 0.1,
            ease: "power2.inOut"
        }, 0.3);

    // Фаза 3: Параллакс эффект - медленное движение видео (50-100% скролла)
    masterTimeline
        .to(video, {
            yPercent: -30,
            duration: 0.5,
            ease: "none"
        }, 0.5);

    // Устанавливаем transform-origin для правильного масштабирования
    gsap.set(videoContainer, {
        transformOrigin: "center center"
    });
}

// Экспортируем функцию для использования в main.js
export { initVideoAnimation };
