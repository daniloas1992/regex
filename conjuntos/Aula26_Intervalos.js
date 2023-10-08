const texto = '1,2,3,4,5,6,7,8,9,0,a.b c!d?e[f'

//Busca de "a" até "z"
console.log(texto.match(/[a-z]/g))

//Busca de "b" até "d"
console.log(texto.match(/[b-d]/g))

//Busca de "2" até "4"
console.log(texto.match(/[2-4]/g))

//Busca de "A" até "Z" e de "1" até "4"
console.log(texto.match(/[A-Z1-4]/gi))