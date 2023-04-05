//unir 2 objects o mas

const producto  = {
    nombre: "tablet",
    precio: 300,
    disponible: true


}

const cliente = {

    nombre: "edgar",
    premium: true


}



// const nuevoObjeto  = Object.assign(producto,cliente)// no

const nuevoObjeto2  = {...producto,...cliente}//casi

const nuevoObjeto3 = {
        producto : {...producto},
        cliente : {...cliente  }


}

const {nombre, premium} = nuevoObjeto3

console.log(nuevoObjeto3)
