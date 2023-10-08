const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))

console.log(texto.match(/a-c/g)) //Não define range

console.log(texto.match(/[A-z]/g)) // Usa intervalo da tabela UNICODE por isso trouxe "[" e "]"

console.log(texto.match(/[a-Z]/g)) // Causa erro, pois na tabela UNICODE maiúsculo aparece antes de minúsculo

console.log(texto.match(/[4-1]/g)) // Causa erro, pois na tabela UNICODE está em ordem crescente