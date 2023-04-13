//submit

const formulario = document.querySelector('#formulario');
const comprobador = document.querySelector('#comprobador');
formulario.addEventListener('submit', e => {
e.preventDefault()

const nombre = document.querySelector('.nombre').value
const password = document.querySelector('.password').value

console.log(nombre)
console.log(password)

if (nombre === '' || password === '') {

    comprobador.textContent = 'Todos los campos son obligatorios'

}
else{
comprobador.textContent ='enviando....'

}

console.log('enviar todo')


})