import { find, findAll, removeAllClasses, bodyLockToggle } from "./utils/functions.js";

const formElems = document.querySelectorAll('form')

for (let i = 0; i < formElems.length; i++) {
    const form = formElems[i];
    
    form.addEventListener('submit', e => {
        e.preventDefault()
    })
}