//operaciones en arreglos
const tecnologias = ['html', 'css', 'js', 'react', 'react-dom'] 



///////////////////////////////agregar elementos

// tecnologias.push('sql') //no se usa
// tecnologias.unshift('table')//no se usa

/////////////////////////correcto

// const nuevoArreglo = [...tecnologias , 'sql']


// console.table(tecnologias)

// ///////////////////eliminar elemento

// tecnologias.pop() //elimina del final
// tecnologias.shift() //elimina del inicio
// tecnologias.splice(2,1)// eliminar a partir de un elemento

//////////////uso correcto eliminar

// const nuevoArray = tecnologias.filter(function(tech){

//     return tech !== 'html'
 

// })

// console.table(nuevoArray) //

//***************************************reemplazar */

const nuevoArray = tecnologias.map(function(tech){

if(tech === 'html')
{ return 'GRAPHQL'

}
else{

    return tech
}


})

console.table(nuevoArray)
console.table(tecnologias)