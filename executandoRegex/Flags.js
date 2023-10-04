// g - global: Procura no texto inteiro. Não para ao identificar a primeira ocorrência.

// i - ignore case: Não distingue entre maiúscula e minúscula


const texto = 'Danilo assinouo abaixo-assinado';

//Procura por "D" maiúsculo ou "ab", para na primeira ocorrência:
console.log(texto.match(/D|ab/))

//Procura por "D"ou "ab", em maiúsculo ou minúsculo, para na primeira ocorrência:
console.log(texto.match(/d|ab/i))


//Procura por "D"ou "ab", em maiúsculo ou minúsculo, procurar todas ocorrências:
console.log(texto.match(/d|ab/gi))