const producto  = {
    nombre: "tablet",
    precio: 300,
    disponible: true


}

Object.freeze(producto);//no puede modificar el objeto 
Object.seal(producto)// modiicar pero no añadir ni eliminar





//manipulacion de objetos
producto.nombre = "monitor"
//si no existe lo aniade
producto.imagen = "imagen.jpg"

//eliminar

delete producto.disponible


console.table(producto)

