//oTROS ARRAY METHODS




//Array methods con arrow functions
const tecnologias = ['html', 'css', 'js', 'react', 'react-dom'] 
const Numeros = [10,20,30]

let nuevoArray

// nuevoArray = tecnologias.filter( tech => tech === 'rect')
// //includes devuelve su existe en el arreglo
// // const res = tecnologias.includes('react')


// //////////////////////////////some devuelve si al menos uno existe en el arreglo

// const res1  = Numeros.some(numero => Numeros > 10)

// ///////////////////////////////////find devuelve el primer elemento que cumpla la condicion

// // const res2 = Numeros.find( numero => Numeros >5 )
///////////////every devuelve si todos cumplen


// const res1 = Numeros.every(numero => numero>5)


//reduce acumula en el total 

// const res1 = Numeros.reduce((total,numero) => numero + total,0)
//filter crea un nuevo array con base en una condicion

// const res1 = tecnologias.filter(tech => tech === 'css')
// const res1 = Numeros.filter(numero => numero !==10 )



 tecnologias.forEach(tech =>  console.log(tech))
    
    //react crear el arreglo
    
    const arrayMap =  tecnologias.map(tech => tech)
        
    

    console.log(arrayMap)
    //////////////////////////////// 


