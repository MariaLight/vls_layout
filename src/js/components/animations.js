function addAnimationClasses() {
    // Заголовки секций
    const sectionHeaders = document.querySelectorAll('.problems__header, .tariffs .problems__header, .faq .problems__header, .contacts .problems__header');
    sectionHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '1s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Карточки problems
    // const problemCards = document.querySelectorAll('.problems__card');
    // problemCards.forEach((card, index) => {
    //     card.classList.add('wow', 'animate__fadeInUp');
    //     card.setAttribute('data-wow-duration', '0.8s');
    //     card.setAttribute('data-wow-delay', `${index * 0.15}s`);
    // });

    // Табы тарифов
    const tariffsTabsMain = document.querySelector('.tariffs__tabs-main');
    if (tariffsTabsMain) {
        tariffsTabsMain.classList.add('wow', 'animate__fadeInUp');
        tariffsTabsMain.setAttribute('data-wow-duration', '0.8s');
        tariffsTabsMain.setAttribute('data-wow-delay', '0.2s');
    }

    const tariffsContent = document.querySelector('.tariffs__content');
    if (tariffsContent) {
        tariffsContent.classList.add('wow', 'animate__slideInUp');
        tariffsContent.setAttribute('data-wow-duration', '0.8s');
        tariffsContent.setAttribute('data-wow-delay', '0.3s');
    }

    // Блоки about
    const aboutCards = document.querySelectorAll('.about__card');
    aboutCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUp');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // FAQ блоки
    const faqBlocks = document.querySelectorAll('.faq__block');
    faqBlocks.forEach((block, index) => {
        block.classList.add('wow', 'animate__slideInUp');
        block.setAttribute('data-wow-duration', '0.8s');
        block.setAttribute('data-wow-delay', `${index * 0.2}s`);
    });

    // Контакты
    const contactsInner = document.querySelector('.contacts__inner');
    if (contactsInner) {
        contactsInner.classList.add('wow', 'animate__slideInUp');
        contactsInner.setAttribute('data-wow-duration', '1s');
        contactsInner.setAttribute('data-wow-delay', '0.2s');
    }

    // Loading блок
    const loadingHeader = document.querySelector('.loading__header .loading__tabs-main');
    if (loadingHeader) {
        loadingHeader.classList.add('wow', 'animate__fadeInUp');
        loadingHeader.setAttribute('data-wow-duration', '0.8s');
        loadingHeader.setAttribute('data-wow-delay', '0.2s');
    }

    const loadingContent = document.querySelector('.loading__content');
    if (loadingContent) {
        loadingContent.classList.add('wow', 'animate__fadeInUp');
        loadingContent.setAttribute('data-wow-duration', '0.8s');
        loadingContent.setAttribute('data-wow-delay', '0.3s');
    }

    // CTA блок
    const ctaLeft = document.querySelector('.cta__left');
    if (ctaLeft) {
        ctaLeft.classList.add('wow', 'animate__fadeInUp');
        ctaLeft.setAttribute('data-wow-duration', '0.8s');
        ctaLeft.setAttribute('data-wow-delay', '0.1s');
    }

    const ctaRight = document.querySelector('.cta__right');
    if (ctaRight) {
        ctaRight.classList.add('wow', 'animate__fadeInUp');
        ctaRight.setAttribute('data-wow-duration', '0.8s');
        ctaRight.setAttribute('data-wow-delay', '0.2s');
    }
}

function initAnimations() {
    // Добавляем классы анимации к элементам
    addAnimationClasses();

    // Инициализируем WOW.js
    if (typeof WOW !== 'undefined') {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 100,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: false
        }).init();
    }
}

export { initAnimations };

