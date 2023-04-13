//import exports

import {sumar as sumaAlias,restar} from "./funciones.js"

const comprobador =  document.querySelector('#comprobador')
const resultado = sumaAlias(1,3)

comprobador.textContent = resultado