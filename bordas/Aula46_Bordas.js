const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))

// ^  : Dentro de conjunto siginifica negação
// ^  : Fora de conjunto significa início de linha/string 
console.log(texto.match(/^r/gi))


// $  : Fora de conjunto significa final de linha/string 
console.log(texto.match(/r$/gi))

// ^  : Fora de conjunto significa início de linha/string 
// $  : Fora de conjunto significa final de linha/string 
// .* : um mais caracteres quaisquer (Não considera o \n)
console.log(texto.match(/^r.*r$/gi))



// ^  : Fora de conjunto significa início de linha/string 
// $  : Fora de conjunto significa final de linha/string 
// [\s\S] : quaisquer caracteres (Considera o \n)
// *      : zero ou mais vezes
console.log(texto.match(/^r[\s\S]*r$/gi))