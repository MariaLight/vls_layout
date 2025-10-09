function addAnimationClasses() {
    // Заголовки секций
    const sectionHeaders = document.querySelectorAll('.problems__header, .tariffs .problems__header, .faq .problems__header, .contacts .problems__header');
    sectionHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
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
        tab.classList.add('wow', 'animate__fadeInUpSmall');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const tariffsCards = document.querySelectorAll('.tariffs__card');
    tariffsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUpSmall');
        card.setAttribute('data-wow-duration', '0.6s');
        card.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Блоки about
    const aboutHeaders = document.querySelectorAll('.about .block__header');
    aboutHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const aboutDescriptions = document.querySelectorAll('.about__description');
    aboutDescriptions.forEach((description, index) => {
        description.classList.add('wow', 'animate__fadeInUpSmall');
        description.setAttribute('data-wow-duration', '0.8s');
        description.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    const aboutButtons = document.querySelectorAll('.about .btn-man');
    aboutButtons.forEach((button, index) => {
        button.classList.add('wow', 'animate__fadeInUpSmall');
        button.setAttribute('data-wow-duration', '0.6s');
        button.setAttribute('data-wow-delay', `${0.3 + index * 0.1}s`);
    });

    const aboutCards = document.querySelectorAll('.about__card');
    aboutCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUpSmall');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${0.4 + index * 0.1}s`);
    });

    // Все block__header
    const allBlockHeaders = document.querySelectorAll('.block__header');
    allBlockHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Табы тарифов sub
    const tariffsTabsSub = document.querySelectorAll('.tariffs__tabs-sub');
    tariffsTabsSub.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUpSmall');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });


    // FAQ элементы
    const faqContent = document.querySelectorAll('.faq__content');
    faqContent.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInLeftSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const faqCallback = document.querySelectorAll('.faq__callback');
    faqCallback.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInRightSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Контакты
    const contactsCards = document.querySelectorAll('.contacts__card, .contacts__info, .contacts__form');
    contactsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUpSmall');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${index * 0.15}s`);
    });

    // Loading элементы
    const loadingTabs = document.querySelector('.loading__tabs-main');
    if (loadingTabs) {
        loadingTabs.classList.add('wow', 'animate__fadeInUpSmall');
        loadingTabs.setAttribute('data-wow-duration', '0.6s');
        loadingTabs.setAttribute('data-wow-delay', '0.1s');
    }

    const loadingSteps = document.querySelectorAll('.loading__step');
    loadingSteps.forEach((step, index) => {
        step.classList.add('wow', 'animate__fadeInUpSmall');
        step.setAttribute('data-wow-duration', '0.6s');
        step.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    const loadingHeaderText = document.querySelectorAll('.loading__header-text');
    loadingHeaderText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUpSmall');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Team элементы
    const teamTabsMain = document.querySelectorAll('.team__tabs-main');
    teamTabsMain.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUpSmall');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const teamTabsSub = document.querySelectorAll('.team__tab-sub');
    teamTabsSub.forEach((tab, index) => {
        tab.classList.add('wow', 'animate__fadeInUpSmall');
        tab.setAttribute('data-wow-duration', '0.6s');
        tab.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    // CTA элементы
    const ctaLeft = document.querySelectorAll('.cta__left');
    ctaLeft.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInLeftSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const ctaRight = document.querySelectorAll('.cta__right');
    ctaRight.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInRightSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Контакты
    const contactsContent = document.querySelectorAll('.contacts__content');
    contactsContent.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInLeftSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const contactsMap = document.querySelectorAll('.contacts__map');
    contactsMap.forEach((element, index) => {
        element.classList.add('wow', 'animate__fadeInRightSmall');
        element.setAttribute('data-wow-duration', '0.8s');
        element.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Company элементы
    const companyBlockText = document.querySelectorAll('.company__block__text');
    companyBlockText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUpSmall');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Mission элементы
    const missionHeader = document.querySelectorAll('.mission__header');
    missionHeader.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    const missionBlockHeaders = document.querySelectorAll('.mission__block__header');
    missionBlockHeaders.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
    });

    const missionBlockText = document.querySelectorAll('.mission__block__text');
    missionBlockText.forEach((text, index) => {
        text.classList.add('wow', 'animate__fadeInUpSmall');
        text.setAttribute('data-wow-duration', '0.8s');
        text.setAttribute('data-wow-delay', `${0.2 + index * 0.1}s`);
    });

    // Values элементы
    const valuesHeader = document.querySelectorAll('.values__header');
    valuesHeader.forEach((header, index) => {
        header.classList.add('wow', 'animate__fadeInUpSmall');
        header.setAttribute('data-wow-duration', '0.8s');
        header.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Card элементы
    const cardTitles = document.querySelectorAll('.card__title');
    cardTitles.forEach((title, index) => {
        title.classList.add('wow', 'animate__fadeInUpSmall');
        title.setAttribute('data-wow-duration', '0.6s');
        title.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });

    // Docs элементы
    const docsCards = document.querySelectorAll('.docs__card');
    docsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInUpSmall');
        card.setAttribute('data-wow-duration', '0.6s');
        card.setAttribute('data-wow-delay', `${index * 0.1}s`);
    });
}

// Глобальная переменная для WOW instance
let wowInstance = null;

// Функция для перезапуска анимации для конкретных элементов
function resetAnimationForElements(elements) {
    elements.forEach(element => {
        // Удаляем классы анимации
        const animationClasses = Array.from(element.classList).filter(cls => cls.startsWith('animate__'));
        animationClasses.forEach(cls => element.classList.remove(cls));
        element.classList.remove('animate__animated');
        
        // Сбрасываем inline стили
        element.style.visibility = 'visible';
        element.style.animationName = 'none';
    });
    
    // Запускаем анимации после небольшой задержки
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            elements.forEach(element => {
                // Возвращаем классы анимации
                element.classList.add('animate__animated');
                element.style.animationName = '';
                
                // Определяем тип анимации по data-атрибутам или классам wow
                if (element.hasAttribute('data-wow-animation')) {
                    element.classList.add(element.getAttribute('data-wow-animation'));
                } else if (element.classList.contains('tariffs__tabs-sub')) {
                    element.classList.add('animate__fadeInUpSmall');
                } else if (element.classList.contains('tariffs__content-sub__inner__image')) {
                    element.classList.add('animate__fadeInLeftSmall');
                } else if (element.classList.contains('tariffs__content-sub__inner__card')) {
                    element.classList.add('animate__fadeInRightSmall');
                } else if (element.classList.contains('loading__flex')) {
                    element.classList.add('animate__fadeInUpSmall');
                } else if (element.classList.contains('loading__grid-item')) {
                    // Определяем первый или второй элемент
                    const parent = element.parentElement;
                    const items = parent.querySelectorAll('.loading__grid-item');
                    const index = Array.from(items).indexOf(element);
                    element.classList.add(index === 0 ? 'animate__fadeInLeftSmall' : 'animate__fadeInRightSmall');
                }
            });
        });
    });
}

// Функция для добавления WOW классов к элементам контейнера
function addWowClassesToContainer(container) {
    // Добавляем классы для подтабов
    const tabsSubContainer = container.querySelector('.tariffs__tabs-sub');
    if (tabsSubContainer && !tabsSubContainer.classList.contains('wow')) {
        tabsSubContainer.classList.add('wow', 'animate__fadeInUpSmall');
        tabsSubContainer.setAttribute('data-wow-duration', '0.6s');
        tabsSubContainer.setAttribute('data-wow-delay', '0s');
        tabsSubContainer.setAttribute('data-wow-animation', 'animate__fadeInUpSmall');
    }
    
    // Добавляем классы для изображений
    const tariffsImages = container.querySelectorAll('.tariffs__content-sub__inner__image');
    tariffsImages.forEach(img => {
        if (!img.classList.contains('wow')) {
            img.classList.add('wow', 'animate__fadeInLeftSmall');
            img.setAttribute('data-wow-duration', '0.8s');
            img.setAttribute('data-wow-delay', '0.1s');
            img.setAttribute('data-wow-animation', 'animate__fadeInLeftSmall');
        }
    });
    
    // Добавляем классы для карточек
    const tariffsCards = container.querySelectorAll('.tariffs__content-sub__inner__card');
    tariffsCards.forEach((card, index) => {
        if (!card.classList.contains('wow')) {
            card.classList.add('wow', 'animate__fadeInRightSmall');
            card.setAttribute('data-wow-duration', '0.8s');
            card.setAttribute('data-wow-delay', `${0.2 + (index % 3) * 0.15}s`);
            card.setAttribute('data-wow-animation', 'animate__fadeInRightSmall');
        }
    });
}

// Функция для анимации табов при переключении основных табов
function animateTariffsTabs(container) {
    if (!container) return;
    
    // Добавляем WOW классы, если их еще нет
    addWowClassesToContainer(container);
    
    // Находим контейнер подтабов
    const tabsSubContainer = container.querySelector('.tariffs__tabs-sub');
    
    if (!tabsSubContainer) return;
    
    // Перезапускаем анимацию для подтабов
    resetAnimationForElements([tabsSubContainer]);
}

// Функция для анимации элементов тарифов при переключении табов
function animateTariffsContent(container) {
    if (!container) return;
    
    // Добавляем WOW классы, если их еще нет
    const parentContainer = container.closest('.tariffs__content-main');
    if (parentContainer) {
        addWowClassesToContainer(parentContainer);
    }
    
    // Находим изображение и карточки внутри активного контейнера
    const tariffsImg = container.querySelectorAll('.tariffs__content-sub__inner__image');
    const tariffsCards = container.querySelectorAll('.tariffs__content-sub__inner__card');
    
    // Собираем все элементы для перезапуска анимации
    const allElements = [...tariffsImg, ...tariffsCards];
    
    // Перезапускаем анимацию
    resetAnimationForElements(allElements);
}

// Функция для добавления WOW классов к элементам loading
function addLoadingAnimationClasses(container) {
    // Добавляем классы для loading__flex
    const loadingFlex = container.querySelectorAll('.loading__flex');
    loadingFlex.forEach(flex => {
        if (!flex.classList.contains('wow')) {
            flex.classList.add('wow', 'animate__fadeInUpSmall');
            flex.setAttribute('data-wow-duration', '0.6s');
            flex.setAttribute('data-wow-delay', '0s');
            flex.setAttribute('data-wow-animation', 'animate__fadeInUpSmall');
        }
    });
    
    // Добавляем классы для loading__grid-item
    const loadingGridItems = container.querySelectorAll('.loading__grid-item');
    loadingGridItems.forEach((item, index) => {
        if (!item.classList.contains('wow')) {
            // Первый - слева, второй - справа
            const animationClass = index === 0 ? 'animate__fadeInLeftSmall' : 'animate__fadeInRightSmall';
            item.classList.add('wow', animationClass);
            item.setAttribute('data-wow-duration', '0.8s');
            item.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
            item.setAttribute('data-wow-animation', animationClass);
        }
    });
}

// Функция для анимации элементов loading при переключении табов
function animateLoadingContent(container) {
    if (!container) return;
    
    // Добавляем WOW классы, если их еще нет
    addLoadingAnimationClasses(container);
    
    // Находим элементы для анимации
    const loadingFlex = container.querySelectorAll('.loading__flex');
    const loadingGridItems = container.querySelectorAll('.loading__grid-item');
    
    // Собираем все элементы для перезапуска анимации
    const allElements = [...loadingFlex, ...loadingGridItems];
    
    // Перезапускаем анимацию
    resetAnimationForElements(allElements);
}

function initAnimations() {
    // Добавляем классы анимации к элементам
    addAnimationClasses();
    
    // Добавляем WOW классы для элементов тарифов
    addTariffsAnimationClasses();
    
    // Добавляем WOW классы для элементов loading
    const loadingContents = document.querySelectorAll('.loading__content-main');
    loadingContents.forEach(content => {
        addLoadingAnimationClasses(content);
    });

    // Инициализируем WOW.js и сохраняем instance
    if (typeof WOW !== 'undefined') {
        wowInstance = new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 100,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: true
        });
        wowInstance.init();
    }
}

// Функция для добавления классов анимации к элементам тарифов
function addTariffsAnimationClasses() {
    // Добавляем классы для подтабов
    const tariffsTabsSub = document.querySelectorAll('.tariffs__tabs-sub');
    tariffsTabsSub.forEach(tabs => {
        tabs.classList.add('wow', 'animate__fadeInUpSmall');
        tabs.setAttribute('data-wow-duration', '0.6s');
        tabs.setAttribute('data-wow-delay', '0s');
        tabs.setAttribute('data-wow-animation', 'animate__fadeInUpSmall');
    });
    
    // Добавляем классы для изображений
    const tariffsImages = document.querySelectorAll('.tariffs__content-sub__inner__image');
    tariffsImages.forEach(img => {
        img.classList.add('wow', 'animate__fadeInLeftSmall');
        img.setAttribute('data-wow-duration', '0.8s');
        img.setAttribute('data-wow-delay', '0.1s');
        img.setAttribute('data-wow-animation', 'animate__fadeInLeftSmall');
    });
    
    // Добавляем классы для карточек
    const tariffsCards = document.querySelectorAll('.tariffs__content-sub__inner__card');
    tariffsCards.forEach((card, index) => {
        card.classList.add('wow', 'animate__fadeInRightSmall');
        card.setAttribute('data-wow-duration', '0.8s');
        card.setAttribute('data-wow-delay', `${0.2 + (index % 3) * 0.15}s`);
        card.setAttribute('data-wow-animation', 'animate__fadeInRightSmall');
    });
}

export { initAnimations, animateTariffsContent, animateTariffsTabs, animateLoadingContent };

