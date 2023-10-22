const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// ^  : Fora de conjunto significa início de linha/string 
// $  : Fora de conjunto significa final de linha/string 
// [\s\S] : quaisquer caracteres (Considera o \n)
// *      : zero ou mais vezes
console.log(texto.match(/^r[\s\S]*r$/gi))