//Fetch API con async await

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarAPI1 = () =>{  

    fetch(url).then( respuesta => respuesta.json())
    .then( resultado => {
      resultado.forEach(comentario => {
  
      console.log(comentario)
      // const comprobador = document.querySelector('#comprobador')
      // comprobador.textContent = comentario
    })
  
    })

}


const consultarAPI2 = async () =>{  
const respuesta = await fetch(url)
const resultado = await respuesta.json()

resultado.forEach(comentario => {console.log(comentario)})



}


consultarAPI2()


