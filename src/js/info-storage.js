import {getInfoUser} from './form'

const formEl = document.querySelector('.form')
formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = getInfoUser(formEl.children[0].value, formEl.children[1].value, formEl.children[2].value)
    console.log(user)
})