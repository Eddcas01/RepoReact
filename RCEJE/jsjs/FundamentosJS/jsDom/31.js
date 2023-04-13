//multiples async
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 ='https://jsonplaceholder.typicode.com/photos'


const consultarAPI2 = async () =>{  
    const inicio = performance.now()
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    
    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    
    // console.log(resultado2)

const fin = performance.now()

    console.log(`El tiempo que se toma la primera  es ${fin - inicio} ms`)

    // resultado.forEach(comentario => {console.log(comentario)})
    
    
    
    }
    


    
    consultarAPI2()

    const consultarAPI3 = async () =>{  
 
        const inicio = performance.now()
        const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
           
        const resultado = await respuesta.json()
        const resultado2 = await respuesta2.json()

        // console.log(resultado)

        // console.log(resultado2)


        // resultado.forEach(comentario => {console.log(comentario)})
        const fin = performance.now()
        
        console.log(`El tiempo  que se toma la sunda es ${fin - inicio} ms`)
        }
        consultarAPI3()