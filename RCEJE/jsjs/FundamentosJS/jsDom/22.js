//selectores del dom


//queryselector trae de 0 a 1 elemento y query selector all trae todos los elementos

const heading = document.querySelector('.heading');

console.log(heading.textContent)
console.log(heading.className)
console.log(heading.id)
console.log(heading.tagName)


//.clase o #id

const enlaces = document.querySelector('.navegacion a')

console.log(enlaces.textContent)

const enlaces2 = document.querySelectorAll('.navegacion a')



console.log(enlaces2)