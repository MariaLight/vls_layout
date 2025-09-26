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

    // Скрытие шапки и заголовка - привязано к скроллу
    gsap.to(header, {
        opacity: 0,
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "top bottom",
            scrub: 1
        }
    });

    gsap.to(title, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "top bottom",
            scrub: 1
        }
    });

    // Раскрытие видео на весь экран - привязано к скроллу
    gsap.to(videoContainer, {
        scale: 1.43, // Масштабируем до полной ширины экрана
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "top bottom",
            scrub: 1
        }
    });

    // Убирание скруглений - привязано к скроллу
    // gsap.to(videoContainer, {
    //     borderRadius: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: videoContainer,
    //         start: "top top",
    //         end: "top 30%",
    //         scrub: 1
    //     }
    // });

    // Параллакс эффект - привязано к скроллу
    gsap.to(video, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // Устанавливаем transform-origin для правильного масштабирования
    gsap.set(videoContainer, {
        transformOrigin: "center center"
    });
}

// Экспортируем функцию для использования в main.js
export { initVideoAnimation };
