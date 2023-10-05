const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

//Buscar todas palavras "casa" ignorando case sensitive
const regex = /casa/gi

console.log(texto.match(regex))

console.group(texto.match(/a b/))