const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

//{} para definir os quantificadores

// Obter números com um ou dois dígitos
console.log(texto.match(/\d{1,2}/g))

// Obter números de 0 a 9 que tenham 2 dígitos
console.log(texto.match(/[0-9]{2}/g))

// Obter números que tenham 1 ou mais dígitos
console.log(texto.match(/\d{1,}/g))

// "\w" equivale a [A-Za-z0-9_]
// Obter tudo que tenha 7 carcteres dentro de "\w"
console.log(texto.match(/\w{7}/g))

// "\w" equivale a [A-Za-z0-9_]
// Obter tudo que tenha 7 ou mais carcteres dentro de "\w" e "õ"
console.log(texto.match(/[\wõ]{7,}/g))

//Ver aula sobre "bordas"
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))