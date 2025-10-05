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
    const tariffsTabs = document.querySelectorAll('.tariffs__tab-main');
    tariffsTabs.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUp');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const tariffsCards = document.querySelectorAll('.tariffs__card');
    tariffsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUp');
        card.setAttribute('data-wow-duration', '0.6s');
        card.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Блоки about
    const aboutHeaders = document.querySelectorAll('.about .block__header');
    aboutHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const aboutDescriptions = document.querySelectorAll('.about__description');
    aboutDescriptions.forEach((description, index) => {
        description.classList.add('wow', 'animate__fadeInUp');
        description.setAttribute('data-wow-duration', '0.8s');
        description.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    const aboutButtons = document.querySelectorAll('.about .btn-man');
    aboutButtons.forEach((button, index) => {
        button.classList.add('wow', 'animate__fadeInUp');
        button.setAttribute('data-wow-duration', '0.6s');
        button.setAttribute('data-wow-delay', `${0.3 + index * 0.1}s`);
    });

    const aboutCards = document.querySelectorAll('.about__card');
    aboutCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUp');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${0.4 + index * 0.1}s`);
    });

    // Все block__header
    const allBlockHeaders = document.querySelectorAll('.block__header');
    allBlockHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Табы тарифов sub
    const tariffsTabsSub = document.querySelectorAll('.tariffs__tabs-sub');
    tariffsTabsSub.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUp');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    // Заголовки контента тарифов sub
    const tariffsContentSubTitles = document.querySelectorAll('.tariffs__content-sub__inner__title');
    tariffsContentSubTitles.forEach((title, index) => {
        title.classList.add('wow', 'animate__fadeInUp');
        title.setAttribute('data-wow-duration', '0.6s');
        title.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Элементы списка тарифов sub
    const tariffsContentSubListItems = document.querySelectorAll('.tariffs__content-sub__inner__list__item');
    tariffsContentSubListItems.forEach((item, index) => {
        item.classList.add('wow', 'animate__fadeInUp');
        item.setAttribute('data-wow-duration', '0.5s');
        item.setAttribute('data-wow-delay', `${0.3 + index * 0.05}s`);
    });

    // FAQ элементы
    const faqDetails = document.querySelectorAll('.faq__block details');
    faqDetails.forEach((detail, index) => {
        detail.classList.add('wow', 'animate__fadeInUp');
        detail.setAttribute('data-wow-duration', '0.6s');
        detail.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Контакты
    const contactsCards = document.querySelectorAll('.contacts__card, .contacts__info, .contacts__form');
    contactsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUp');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${index * 0.15}s`);
    });

    // Loading элементы
    const loadingTabs = document.querySelector('.loading__tabs-main');
    if (loadingTabs) {
        loadingTabs.classList.add('wow', 'animate__fadeInUp');
        loadingTabs.setAttribute('data-wow-duration', '0.6s');
        loadingTabs.setAttribute('data-wow-delay', '0.1s');
    }

    const loadingSteps = document.querySelectorAll('.loading__step');
    loadingSteps.forEach((step, index) => {
        step.classList.add('wow', 'animate__fadeInUp');
        step.setAttribute('data-wow-duration', '0.6s');
        step.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    const loadingHeaderText = document.querySelectorAll('.loading__header-text');
    loadingHeaderText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUp');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const loadingFlex = document.querySelectorAll('.loading__flex');
    loadingFlex.forEach((flex, index) => {
        flex.classList.add('wow', 'animate__fadeInUp');
        flex.setAttribute('data-wow-duration', '0.6s');
        flex.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const loadingGridHeaders = document.querySelectorAll('.loading__grid-item__header');
    loadingGridHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.6s');
        header.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Team элементы
    const teamTabsMain = document.querySelectorAll('.team__tabs-main');
    teamTabsMain.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUp');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const teamTabsSub = document.querySelectorAll('.team__tab-sub');
    teamTabsSub.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUp');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    // CTA элементы
    const ctaElements = document.querySelectorAll('.cta__title, .cta__subtitle, .cta__button, .cta__image');
    ctaElements.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInUp');
        element.setAttribute('data-wow-duration', '0.6s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const ctaLeftHeader = document.querySelectorAll('.cta__left__header');
    ctaLeftHeader.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const ctaLeftText = document.querySelectorAll('.cta__left__text');
    ctaLeftText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUp');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    // Контакты дополнительные элементы
    const contactsTitle = document.querySelectorAll('.contacts__title');
    contactsTitle.forEach((title, index) => {
        title.classList.add('wow', 'animate__fadeInUp');
        title.setAttribute('data-wow-duration', '0.8s');
        title.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const contactsList = document.querySelectorAll('.contacts__list');
    contactsList.forEach((list, index) => {
        list.classList.add('wow', 'animate__fadeInUp');
        list.setAttribute('data-wow-duration', '0.6s');
        list.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const contactsSocials = document.querySelectorAll('.contacts__socials');
    contactsSocials.forEach((socials, index) => {
        socials.classList.add('wow', 'animate__fadeInUp');
        socials.setAttribute('data-wow-duration', '0.6s');
        socials.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Company элементы
    const companyBlockText = document.querySelectorAll('.company__block__text');
    companyBlockText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUp');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Mission элементы
    const missionHeader = document.querySelectorAll('.mission__header');
    missionHeader.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const missionBlockHeaders = document.querySelectorAll('.mission__block__header');
    missionBlockHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const missionBlockText = document.querySelectorAll('.mission__block__text');
    missionBlockText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUp');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Values элементы
    const valuesHeader = document.querySelectorAll('.values__header');
    valuesHeader.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUp');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Card элементы
    const cardTitles = document.querySelectorAll('.card__title');
    cardTitles.forEach((title, index) => {
        title.classList.add('wow', 'animate__fadeInUp');
        title.setAttribute('data-wow-duration', '0.6s');
        title.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Docs элементы
    const docsCards = document.querySelectorAll('.docs__card');
    docsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUp');
        card.setAttribute('data-wow-duration', '0.6s');
        card.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });
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

