const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

// "\d" equivale a [0-9]
console.log(texto.match(/\d/g))

// "\D" equivale a [Tudo que for diferente de números]
console.log(texto.match(/\D/g))

// "\w" equivale a [A-Za-z0-9_]
console.log(texto.match(/\w/g))

// "\w" equivale a negação de "[A-Za-z0-9_]" ou [^A-Za-z0-9_]
console.log(texto.match(/\W/g))


// Espaços em branco: " " ou "\t" ou "\n" ou "\r" ou "\f"
console.log(texto.match(/\s/g))

// Tudo que NÃO for espaço em branco
console.log(texto.match(/\S/g))