// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function initVideoAnimation() {
    const videoContainer = document.querySelector('.banner__video');
    const video = document.querySelector('.banner__video video');
    const header = document.querySelector('.header');
    const title = document.querySelector('.banner__title');
    
    if (!videoContainer || !video || !header || !title) return;

    // Создаем основную анимацию с задержкой
    const mainTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: videoContainer,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onEnter: () => {
                // Задержка 2 секунды перед раскрытием видео на весь экран
                setTimeout(() => {
                    videoContainer.classList.add('fullscreen');
                }, 2000);
            },
            onLeave: () => {
                // При выходе из зоны триггера - возвращаем обычное состояние
                videoContainer.classList.remove('fullscreen');
            },
            onEnterBack: () => {
                // При возврате назад
                videoContainer.classList.add('fullscreen');
            },
            onLeaveBack: () => {
                // При уходе назад
                videoContainer.classList.remove('fullscreen');
            }
        }
    });

    // Анимация скрытия шапки с задержкой
    gsap.to(header, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top center",
            end: "top 20%",
            scrub: 1,
            onEnter: () => {
                // Задержка 1.5 секунды перед скрытием шапки
                setTimeout(() => {
                    header.classList.add('hidden');
                }, 1500);
            },
            onLeaveBack: () => {
                header.classList.remove('hidden');
            }
        }
    });

    // Анимация скрытия заголовка с задержкой
    gsap.to(title, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top center",
            end: "top 20%",
            scrub: 1,
            onEnter: () => {
                // Задержка 1 секунда перед скрытием заголовка
                setTimeout(() => {
                    gsap.to(title, {
                        opacity: 0,
                        y: -50,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }, 1000);
            }
        }
    });

    // Анимация раскрытия видео на весь экран
    mainTimeline
        .to(videoContainer, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        })
        .to(videoContainer, {
            scale: 1,
            duration: 0.7,
            ease: "power2.inOut"
        }, "-=0.1");

    // Параллакс эффект для видео с задержкой
    gsap.to(video, {
        y: -150,
        duration: 2,
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onEnter: () => {
                // Задержка 1.5 секунды перед началом параллакс эффекта
                setTimeout(() => {
                    gsap.to(video, {
                        y: -150,
                        duration: 1.5,
                        ease: "none"
                    });
                }, 1500);
            }
        }
    });
}

// Экспортируем функцию для использования в main.js
export { initVideoAnimation };
