//declaracion de funciones

//una funcion realiza 1 sola meta
//puede declararse antes por el hoisting
//primero crea las funciones luego las ejecuta




// function nombre(){

// console.log(2+2)

// }


/***********************funciones con parametros */
//parametros
// function nombre(nombre, apellido = 'bachez'){
//     console.log(nombre + ' ' + apellido)
//     }
// //arguments
//   nombre('edgar', 'casasola')

/***************************************funcion retornar */
function nombre(nombre, apellido = 'bachez'){
    return [nombre + ' ' + apellido, 'React']



    }
//comun con el useState
const [nombreCompleto,React] =   nombre('edgar', 'casasola')
console.log(nombreCompleto)
console.log(React)