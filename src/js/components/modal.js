/**
 * Модальные окна
 */

import { wowInstance } from './animations.js';

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
            
            // Перезапускаем анимации внутри модалки
            this.resetModalAnimations(modal);
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

    resetModalAnimations(modal) {
        // Добавляем WOW классы к элементам внутри модалки, если их еще нет
        this.addModalWowClasses(modal);
        
        // Находим все элементы с WOW анимациями внутри модалки
        const wowElements = modal.querySelectorAll('.wow');
        
        wowElements.forEach((element, index) => {
            // Сбрасываем состояние анимации
            element.classList.remove('animated', 'animate__animated');
            element.style.visibility = 'visible';
            element.style.animationName = 'none';
            element.style.opacity = '0';
            
            // Небольшая задержка перед перезапуском с каскадным эффектом
            setTimeout(() => {
                element.style.animationName = '';
                element.style.opacity = '1';
                element.classList.add('animate__animated');
                
                // Добавляем класс анимации
                const animationClass = element.getAttribute('data-wow-animation') || 
                                      Array.from(element.classList).find(cls => cls.startsWith('animate__'));
                if (animationClass) {
                    element.classList.add(animationClass);
                }
            }, 100 + (index * 100)); // Задержка для каждого элемента
        });
    }
    
    addModalWowClasses(modal) {
        // Добавляем классы для заголовка
        const modalHeader = modal.querySelector('.block__header');
        if (modalHeader && !modalHeader.classList.contains('wow')) {
            modalHeader.classList.add('wow', 'animate__fadeInUpSmall');
            modalHeader.setAttribute('data-wow-duration', '0.6s');
            modalHeader.setAttribute('data-wow-animation', 'animate__fadeInUpSmall');
        }
        
        // Добавляем классы для карточек
        const modalCards = modal.querySelectorAll('.modal__auto__card');
        modalCards.forEach((card, index) => {
            if (!card.classList.contains('wow')) {
                card.classList.add('wow', 'animate__fadeInUpSmall');
                card.setAttribute('data-wow-duration', '0.6s');
                card.setAttribute('data-wow-delay', `${0.1 + index * 0.1}s`);
                card.setAttribute('data-wow-animation', 'animate__fadeInUpSmall');
            }
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
