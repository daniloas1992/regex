// O retrovisor armazena o conteúdo que identificou dentro do grupo
// Para cada grupo "()" existe um retrovisor que é referenciado por \n
// Onde "n" é o número referente ao retrovisor, começando pelo número "1" ond ficaria \1

const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'


// <      : "<"
// (\w+)  : Grupo 1 (\w+)  : Grupo de caracteres com um ou mais
// >      : ">"
// .*     : Sequência de caracteres quaisquer com zero ou mais
// \/     : "/"
// \1     : retrovisor que referência o conteúdo do grupo
// >      : ">"

//Nesse exemplo os conteúdos do retrovisor "\1" são: "b", "strong" e "div"
console.log(texto1.match(/<(\w+)>.*\/\1>/g))


const texto2 = 'Lentamente é mente muito lenta.'

// (lenta) : "lenta"
// (mente) : "mente"
console.log(texto2.match(/(lenta)(mente)/gi))


// (lenta) : Grupo 1 "lenta"
// (mente) : Grupo 2 "mente"
// .*      : Sequência de caracteres quaisquer com zero ou mais
console.log(texto2.match(/(lenta)(mente).*/gi))

// (lenta) : Grupo 1 "lenta"
// (mente) : Grupo 2 "mente"
// .*      : Sequência de caracteres quaisquer com zero ou mais
// \2      : retrovisor 2 : "mente"
// .*      : Sequência de caracteres quaisquer com zero ou mais
// \1      : retrovisor 1 : "lenta"
// \.      : "."

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

// (?:lenta) : Grupo 1 "lenta" não armazena conteúdo
// (mente) : Grupo 2 "mente" com primeiro retrovisor
// .*      : Sequência de caracteres quaisquer com zero ou mais
// \1      : retrovisor 1 : "mente"
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))


// (lenta) : Grupo 1 "lenta"
// (mente)? : Opcional Grupo 2 "mente"
console.log(texto2.match(/(lenta)(mente)?/gi))

// (lenta) : Grupo 1 "lenta"
// (mente) : Grupo 2 "mente"
// Substituir o resultado pelo segundo retovisor
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))


// (lenta) : Grupo 1 "lenta"
// (mente) : Grupo 2 "mente"
// Substituir o resultado pelo primeiro retovisor
console.log(texto2.replace(/(lenta)(mente)/gi, '$1'))


// (lenta) : Grupo 1 "lenta"
// (mente) : Grupo 2 "mente"
// Substituir o resultado por "ABC"+"segundo retovisor"+"DEF"
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC$2DEF'))