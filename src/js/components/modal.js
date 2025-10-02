/**
 * Модальные окна
 */

class Modal {
    constructor() {
        this.modals = document.querySelectorAll('.modal');
        this.openButtons = document.querySelectorAll('[data-modal]');
        this.closeButtons = document.querySelectorAll('[data-modal-close]');
        this.body = document.body;
        
        this.init();
    }

    init() {
        this.openButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = button.getAttribute('data-modal');
                this.openModal(modalId);
            });
        });

        this.closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = button.closest('.modal');
                this.closeModal(modal);
            });
        });

        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Модальное окно с ID "${modalId}" не найдено`);
            return;
        }

        // Закрываем все открытые модальные окна
        this.closeAllModals();

        // Открываем нужное модальное окно
        modal.classList.add('modal_active');
        this.body.style.overflow = 'hidden';
        
        // Фокус на модальном окне для доступности
        modal.focus();
        
        // Анимация появления
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }

    closeModal(modal) {
        if (!modal) return;

        modal.classList.remove('modal_active');
        this.body.style.overflow = '';
        
        // Анимация исчезновения
        modal.style.opacity = '0';
    }

    closeAllModals() {
        this.modals.forEach(modal => {
            this.closeModal(modal);
        });
    }

    // Публичные методы для внешнего использования
    open(modalId) {
        this.openModal(modalId);
    }

    close(modalId) {
        const modal = document.getElementById(modalId);
        this.closeModal(modal);
    }

    closeAll() {
        this.closeAllModals();
    }
}

// Инициализация модальных окон
function initModals() {
    return new Modal();
}

export { initModals };
