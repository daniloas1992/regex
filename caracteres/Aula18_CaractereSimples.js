const texto = '1,2,3,4,5,6,a.b c!d?e'

//Identificar vírgula
const regexVirgula = /,/

//Dividir em array quebrando por vírgula
console.log(texto.split(regexVirgula))

//Identificar a primeira vírgula
console.log(texto.match(regexVirgula))

//Identificar todas as vírgulas
console.log(texto.match(/,/g))

//Buscar pela letra "A" maiúscula
console.log(texto.match(/A/g))

//Buscar pela letra "A" maiúscula ou minúscula
console.log(texto.match(/A/gi))

//Buscar todas ocorrências do número 2
console.log(texto.match(/2/g))


//Buscar pela sequência "b c!d" 
console.log(texto.match(/b c!d/))