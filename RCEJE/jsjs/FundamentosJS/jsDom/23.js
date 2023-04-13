//Manipulacion del dom

const heading = document.querySelector('.heading');
heading.textContent ='Nuevo heading'
console.log(heading.textContent)


const inputNombre = document.querySelector('#nombre')

inputNombre.value = 'Edgar Casasola'


const enlaces = document.querySelectorAll('.navegacion a')


const [,,enlace1] = enlaces
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')


enlace1.textContent = 'Este enlace solo el se modifica'



