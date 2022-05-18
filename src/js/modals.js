import { find, bodyLock, bodyUnlock, bodyLockToggle } from './utils/functions.js'

modal()

//  data-close-on-bg - закрывать модалку при клике по фону
function modal() {

    // Открытие модальных окон при клике по кнопке
    openModalWhenClickingOnBtn()
    function openModalWhenClickingOnBtn() {
        window.addEventListener('click', e => {
            const target = e.target

            if (target.dataset.modalOpen != undefined || target.closest('[data-modal-open]')) {
                const btn = target.closest('[data-modal-open]') ? target.closest('[data-modal-open]') : target;
                const dataBtn = btn.dataset.modalOpen;
                const modal = document.querySelector(`#${dataBtn}`)

                window.location.hash = dataBtn
            }
        })
    }

    // Открытие модального окна, если в url указан его id
    openModalHash()
    function openModalHash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1)
            const modal = document.querySelector(`.modal[data-modal-id=${hash}]`)
    
            if (modal) openModal(modal)
        }
    }

    // Показываем/убираем модальное окно при изменения хеша в адресной строке
    checkHash()
    function checkHash() {
        window.addEventListener('hashchange', e => {
            const hash = window.location.hash.replace('#', '')
            const modal = document.querySelector(`.modal[data-modal-id="${hash}"]`)

            if (modal && hash != '') {
                if (find('.modal._show')) {
                    closeModal(find('.modal._show'), false)
                }
                
                openModal(modal)
            }
            else {

                if (find('.modal._show')) {
                    closeModal(find('.modal._show'))
                }
            }
        })
    }

    // Закрытие модального окна при клике по заднему фону
    closeModalWhenClickingOnBg()
    function closeModalWhenClickingOnBg() {
        document.addEventListener('click', (e) => {
            const target = e.target

            if (target.classList.contains('modal__bg') && target.closest('.modal[data-close-on-bg]')) {
                closeModal(target.closest('.modal'))
                clearHash()
            }
        })
    }

    // Закрытие модальных окон при клике по крестику
    closeModalWhenClickingOnCross()
    function closeModalWhenClickingOnCross() {
        window.addEventListener('click', e => {
            const target = e.target

            if (target.classList.contains('[data-modal-close]') || target.closest('[data-modal-close]')) {
                closeModal(target.closest('.modal'))
                clearHash()
            }
        })
    }

    // Закрытие модальных окон при нажатии по клавише ESC
    closeModalWhenClickingOnESC()
    function closeModalWhenClickingOnESC() {
        const modalElems = document.querySelectorAll('.modal')
        for (let i = 0; i < modalElems.length; i++) {
            const modal = modalElems[i];
    
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    closeModal(modal)
                    clearHash()
                }
            })
        }
    }

    // Сброс id модального окна в url
    function clearHash() {
        const windowTop = window.pageYOffset
        const href = location.href.replace(/#[\w-]+/, '');
        history.pushState({}, '', href)
        window.scrollTo(0, windowTop)
    }

    // Открытие модального окна
    function openModal(modal) {
        modal.classList.add('_show')
        bodyLock()
    }

    // Закрытие модального окна
    function closeModal(modal, unlockBody) {
        modal.classList.remove('_show')

        if (unlockBody != false) {
            bodyUnlock()
        }
    }
}