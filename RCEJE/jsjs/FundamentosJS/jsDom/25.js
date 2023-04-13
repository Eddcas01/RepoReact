//evento de inputs


const inputNombre = document.querySelector('.nombre')
const comprobador = document.querySelector('#comprobador')

inputNombre.addEventListener('input', (e) => {

comprobador.textContent = e.target.value
console.log(e.target.value)

})

const inputPassword = document.querySelector('.password')

inputPassword.addEventListener('input', (e) => {

inputPassword.type = 'text'

setTimeout(() => {

    inputPassword.type = 'password'
},500)
});