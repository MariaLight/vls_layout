import { animateTariffsContent, animateTariffsTabs, animateLoadingContent, animateTeamContent } from './animations.js';

function initTabs() {
    const mainTabs = document.querySelectorAll('.tariffs__tab-main');
    const mainContents = document.querySelectorAll('.tariffs__content-main');

    if (!mainTabs.length || !mainContents.length) {
        console.error('Табы не найдены!');
        return;
    }

    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            mainTabs.forEach(t => t.classList.remove('active'));
            mainContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeContent = document.querySelector(`[data-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
                initSubTabs(activeContent);
                
                // Запускаем анимацию для подтабов
                animateTariffsTabs(activeContent);
                
                // Запускаем анимацию для первого активного подтаба
                const firstActiveSubContent = activeContent.querySelector('.tariffs__content-sub.active');
                if (firstActiveSubContent) {
                    animateTariffsContent(firstActiveSubContent);
                }
            }
        });
    });

    const initSubTabs = (container) => {
        const subTabs = container.querySelectorAll('.tariffs__tab-sub');
        const subContents = container.querySelectorAll('.tariffs__content-sub');

        if (!subTabs.length || !subContents.length) {
            console.warn('Подтабы не найдены в контейнере');
            return;
        }

        subTabs.forEach(tab => {
            tab.removeEventListener('click', handleSubTabClick);
            tab.addEventListener('click', handleSubTabClick);
        });

        function handleSubTabClick(e) {
            const tab = e.currentTarget;
            const subtabName = tab.dataset.subtab;

            subTabs.forEach(t => t.classList.remove('active'));
            subContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeSubContent = container.querySelector(`[data-subcontent="${subtabName}"]`);
            if (activeSubContent) {
                activeSubContent.classList.add('active');
                
                // Запускаем анимацию при переключении подтаба
                animateTariffsContent(activeSubContent);
            }
        }
    };

    mainContents.forEach(content => {
        initSubTabs(content);
    });
}

function initLoadingTabs() {
    const loadingTabs = document.querySelectorAll('.loading__tab-main');
    const loadingContents = document.querySelectorAll('.loading__content-main');

    if (!loadingTabs.length || !loadingContents.length) {
        return;
    }

    loadingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            loadingTabs.forEach(t => t.classList.remove('active'));
            loadingContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeContent = document.querySelector(`[data-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
                
                // Запускаем анимацию для элементов loading
                animateLoadingContent(activeContent);
            }
        });
    });
}

function initTeamTabs() {
    const teamTabs = document.querySelectorAll('.team__tab-main');
    const teamContents = document.querySelectorAll('.team__content-main');

    if (!teamTabs.length || !teamContents.length) {
        return;
    }

    teamTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            teamTabs.forEach(t => t.classList.remove('active'));
            teamContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeContent = document.querySelector(`[data-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
                initTeamSubTabs(activeContent);
                initTeamAccordions(); // Инициализируем аккордеоны для новой вкладки
                
                // Запускаем анимацию для элементов team
                animateTeamContent(activeContent);
            }
        });
    });

    // Инициализируем подтабы для активного контента
    const activeContent = document.querySelector('.team__content-main.active');
    if (activeContent) {
        initTeamSubTabs(activeContent);
        initTeamAccordions(); // Инициализируем аккордеоны для активного контента
    }
}

function initTeamSubTabs(container) {
    const subTabs = container.querySelectorAll('.team__tab-sub');
    const subContents = container.querySelectorAll('[data-cubcontent]');

    if (!subTabs.length || !subContents.length) {
        return;
    }

    subTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const subtabName = tab.dataset.subtab;

            subTabs.forEach(t => t.classList.remove('active'));
            subContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeSubContent = container.querySelector(`[data-cubcontent="${subtabName}"]`);
            if (activeSubContent) {
                activeSubContent.classList.add('active');
                
                // Запускаем анимацию при переключении подтаба
                animateTeamContent(container);
            }
        });
    });
}

function initTeamAccordions() {
    console.log('Инициализация аккордеонов...');
    
    // Находим все заголовки аккордеонов
    const accordionHeaders = document.querySelectorAll('.team__accordion-header');
    
    if (!accordionHeaders.length) {
        console.log('Аккордеоны не найдены');
        return;
    }

    console.log('Найдено аккордеонов:', accordionHeaders.length);

    // Удаляем все предыдущие обработчики
    accordionHeaders.forEach(header => {
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
    });

    // Добавляем новые обработчики
    const newHeaders = document.querySelectorAll('.team__accordion-header');
    newHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Клик по аккордеону');
            
            const accordionId = this.dataset.accordion;
            const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
            
            if (!content) {
                console.log('Контент не найден');
                return;
            }

            // Закрываем все другие аккордеоны
            newHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherContent = document.querySelector(`[data-accordion-content="${otherHeader.dataset.accordion}"]`);
                    if (otherContent) {
                        otherContent.classList.remove('active');
                    }
                }
            });

            // Переключаем текущий аккордеон
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            console.log('Аккордеон переключен:', this.classList.contains('active'));
        });
    });
}

export { initTabs, initLoadingTabs, initTeamTabs, initTeamAccordions };

