const { text } = require("express")

const texto = `
Leo é muito legal
Emannuel foi jogar em Sergipe
Bianca é casada com Habib
`

// Identificar quebra de linha "\n"
console.log(texto.match(/\n/g))

// ^    : Caractere selecionado deve estar no começo da linha
// (\w) : Grupo de caracteres [A-Za-z0-9_] (Não conseguepegar quebra de linha)
// .+   : Qualquer caractere uma ou mais vezes
// \1$   : retovisor "\1" precisar estar no final da linha "$"
console.log(texto.match(/^(\w).+\1$/gi))


// ^    : Caractere selecionado deve estar no começo da linha
// (\w) : Grupo de caracteres [A-Za-z0-9_] (Não conseguepegar quebra de linha)
// .+   : Qualquer caractere uma ou mais vezes
// \1$  : retovisor "\1" precisar estar no final da linha "$"
// "m"  : o parâmetro "m" faz com que cada linha seja analisada de forma individual
console.log(texto.match(/^(\w).+\1$/gim))