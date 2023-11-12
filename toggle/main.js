const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');


toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('toggle-blanco');
    body.classList.toggle('toggle-blanco');
})