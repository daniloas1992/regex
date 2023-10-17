const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2 = 'The is a big fog in NYC'

// + equivale a um ou mais ocorrência (O caractere que está a esquerda do "+" deve existir uma ou mais vezes)
const regex = /fogo+/gi
console.log(texto1.match(regex))

console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))

console.log(texto3.match(/[0-9]+/g))

console.log(texto3.match(/\d+/g))