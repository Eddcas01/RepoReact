//Objetos
const nombre = "tablel"
const precio = 300
//curly bracket
const producto  = {
    nombre: "tablet",
    precio: 300,
    disponible: true


}
console.log(producto)
console.table(producto)

//acceso a elementos

console.log(producto.nombre)

//destructuracion
//permite colocar campos que no existen 
const{} = producto

//object literal enhacement

const autenticado = true
const usuario = "edgar"

const nuevoObjeto = {
//tienen que llamarse igual 
    autenticado,
    usuario 
}

console.table(nuevoObjeto)