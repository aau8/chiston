import { removeAllClasses, isWebp } from "./utils/functions.js"

// Плейсхолдер текстовых полей
labelTextfield()
function labelTextfield() {
    const textfieldElems = document.querySelectorAll('.tf')

    for (let i = 0; i < textfieldElems.length; i++) {
        const textfield = textfieldElems[i];
        const input = textfield.querySelector('input, textarea')
        const label = textfield.querySelector('span')

        if (input.value != '') {
            textfield.classList.add('_change-label')
        }

        input.addEventListener('focus', e => {
            textfield.classList.add('_change-label')
        })
        
        input.addEventListener('blur', e => {
            if (input.value === '') {
                textfield.classList.remove('_change-label')
            }
        })
    }
}

// Списки выбора
select()
function select() {
    // Проверяем есть ли выбранные элементы при загрузке страницы. Если есть, то селект заполняется
    const selectedItemElems = document.querySelectorAll('.select-dropdown__item._selected')
    const eventChange = new Event('change')

    for (let i = 0; i < selectedItemElems.length; i++) {
        const selectedItem = selectedItemElems[i];
        const select = selectedItem.closest('.select')
        const sTitle = select.querySelector('.select-input__title')
        const sInput = select.querySelector('input[type=hidden]')

        sTitle.innerText = selectedItem.innerHTML
        sInput.value = selectedItem.innerHTML
        select.classList.add('_valid')
    }

    // const selectElems = document.querySelectorAll('.select')

    // for (let i = 0; i < selectElems.length; i++) {
    //     const select = selectElems[i];
    // }

    // Если пользователь кликнул по селекту, то он открывается/закрывается. Также он закроется если кликнуть вне его области
    window.addEventListener('click', e => {
        const target = e.target

        // Если пользователь кликнул вне зоны селекта
        if (!target.classList.contains('select') && !target.closest('.select._open')) {
            
            if (document.querySelector('.select._open')) {
                document.querySelector('.select._open').classList.remove('_open')
            }
        }

        // Если пользователь кликнул по шапке селекта
        if (target.classList.contains('select-input')) {
            target.parentElement.classList.toggle('_open')
        }

        // Если пользователь выбрал пункт из списка селекта
        if (target.classList.contains('select-dropdown__item')) {
            const select = target.closest('.select')
            const sTitle = select.querySelector('.select-input__title')
            const sInput = select.querySelector('input[type=hidden]')
            const neighbourTargets = target.parentElement.querySelectorAll('.select-dropdown__item')

            sTitle.innerText = target.innerText
            sInput.value = target.innerText

            removeAllClasses(neighbourTargets, '_selected')
            target.classList.add('_selected')

            select.classList.remove('_open')
            select.classList.add('_valid')
            
            select.dispatchEvent(eventChange)
        }
    })
}