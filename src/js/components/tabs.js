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
            }
        }
    };

    mainContents.forEach(content => {
        initSubTabs(content);
    });
}

export { initTabs };

