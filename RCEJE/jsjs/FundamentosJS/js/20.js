//ternarios

const autenticado = false;
const saldo = 150
const pagar = 250
const tarjeta = false


// autenticado ? console.log('usuario autenticado') : console.log('usuario no autenticado')

// !autenticado ? 
//     console.log('usuario autenticado') :
//     console.log('usuario no autenticado')

    //dobles ternarios

saldo > pagar ? console.log('pagas con saldo') : tarjeta ? console.log('paga con tarjeta') : console.log('puedes pagar con tarjeta ni con saldo')