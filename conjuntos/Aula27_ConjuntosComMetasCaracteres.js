const texto = '.$+*?-'

//Dentro de um conjunto tudo é literal, os caractres não funcionam como metacaracteres (Com algumas exceções "-" e "^" que precisam de escape)

console.log(texto.match(/[+.?*$]/g))

//Busca de "$" até "?"
console.log(texto.match(/[$-?]/g))

//Busca por "$" ou "-" ou "?" pois foi utilizado escape para o "-"
console.log(texto.match(/[$\-?]/g))

//Busca por "-" ou "$"
console.log(texto.match(/[-$]/g))

