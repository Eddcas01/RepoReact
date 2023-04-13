//eventos del dom

const heading  = document.querySelector('.heading');

heading.addEventListener('click', () => {

heading.textContent = 'nuevo heading al dar click'

})


const enlaces = document.querySelectorAll('.navegacion a');


enlaces.forEach(enlace => {

enlace.addEventListener('click', () => {

    enlace.textContent = 'diste click en algun enlace'



})

})