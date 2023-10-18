const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

// () Não é grupo pois está dentro de conjunto
console.log(texto.match(/[(abc)]/gi))

// Grupo formado por um conjunto
console.log(texto.match(/([abc])/gi))

// Uso de grupo desnecessário
console.log(texto.match(/(abc)/gi))