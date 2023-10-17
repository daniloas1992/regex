const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2 = 'The is a big fog in NYC'

// ? equivale a zero ou um (O caractere que está a esquerda do "?" pode existir uma única vez ou não existir)
const regex = /fogo?/gi
console.log(texto1.match(regex))

console.log(texto2.match(regex))