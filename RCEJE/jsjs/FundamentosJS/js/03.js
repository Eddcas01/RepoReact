//tipos de variables


//undefined

// let cliente3 

// console.log(cliente3)
// console.log(typeof cliente3)



//BOOLEAN

// const descuento = false


//number todos son como numeros

// const numero1 = 10.25
// const numero2= -254.25

// console.log(numero2, numero1)

//string 

// const alumno  = 'numeros varios'
// const datos = "hola a todos"
// //no mezclar comillas


// //big int numeros muy grandes

// const numerogrande = BigInt(2222222222222222222222222222222222544654654987946594984984) 

// console.log( Number(numerogrande))

//no se puede mezclar numeros muy grandes con number

//cambio de tipo de dato coersion
// const numero2= -254.25

// console.log(typeof String(numero2), numero2 )

//symbol
//los simbolos son unicos

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())


//null 

const descuento2 = null