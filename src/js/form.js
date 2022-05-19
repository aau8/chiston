import { find, findAll, removeAllClasses, bodyLockToggle } from "./utils/functions.js";

const formElems = document.querySelectorAll('form')

for (let i = 0; i < formElems.length; i++) {
    const form = formElems[i];
    
    form.addEventListener('submit', async e => {
        e.preventDefault()

        const formData = new FormData(form)

        console.log(form.action)
        let response = await fetch(form.action, {
            method: 'POST',
            body: formData
        })
        
        if (response.ok) {
            alert('Форма отправлена!')
            form.reset()
        }
        else {
            alert('Ошибка! Форма не отправлена!')
        }
    })
}

for (let i = 0; i < formElems.length; i++) {
    const form = formElems[i];
    const tfElems = form.querySelectorAll('.tf')
    const submit = form.querySelector('button[type=submit]')

    for (let i = 0; i < tfElems.length; i++) {
        const tf = tfElems[i];
        const input = tf.querySelector('input, textarea')
        const label = tf.querySelector('.tf__label')
    
        input.addEventListener('keypress', e => {
            const key = e.key
    
            if (tf.getAttribute('data-only-letters') != null) {
                if (key.search(/[a-zA-Z|а-яА-Я\s]/)) {
                    e.preventDefault()
                }
            }
            
            if (tf.getAttribute('data-only-digits') != null) {
                if (key.search(/[\d\+]/)) {
                    e.preventDefault()
                }
            }
        })
    
        if (input.tagName === 'TEXTAREA') {
            const symbolsElem = tf.querySelector('.tf__symbols')
            const maxlength = input.getAttribute('maxlength')
    
            symbolsElem.querySelector('span').innerHTML = maxlength
            input.addEventListener('input', e => {
                if (input.value == '') {
                    symbolsElem.innerHTML = `не более <span>${maxlength - input.value.length}</span> символов`
                }
                else {
                    symbolsElem.innerHTML = `осталось ${maxlength - input.value.length} символ`
                }
            })
        }
    
        input.addEventListener('input', e => {
    
            if (input.value != '') {
                tf.classList.add('_valid')
            }
            else {
                tf.classList.remove('_valid')
            }
        })
    
        if (tf.getAttribute('data-required') != null) {
    
            const observer = new MutationObserver((list, observer) => {
                const elem = list[0].target
                const inputElems = elem.closest('.form').querySelectorAll('.tf[data-required]')
                let con = true

                for (let i = 0; i < inputElems.length; i++) {
                    const input = inputElems[i];
                    
                    if (!input.classList.contains('_valid')) {
                        con = false
                    }
                }

                if (con === true) {
                    submit.disabled = false
                }
                else {
                    submit.disabled = true
                }
    
                if (elem.classList.contains('_valid')) {
                }
            })
        
            observer.observe(tf, {
                attributes: true,
            })
        }
    }
}
