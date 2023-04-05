//destructuracion de objetos con 2 objetos con la misma variable 
const producto  = {
    nombre: "tablet",
    precio: 300,
    disponible: true


}

const cliente = {

    nombre: "edgar",
    premium: true


}
//destructuracion
const {nombre,premium} = cliente
const {nombre:nombreProducto,precio,disponible} = producto
//acceso
console.log(nombre,premium)
console.log(nombreProducto,precio,disponible)





