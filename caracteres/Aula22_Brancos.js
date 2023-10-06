const texto = `
ca	r
r	o s!
`
// "\t" = tabulação
// "\n" = quebra linha
console.log(texto.match(/ca\t/))

// "\s" = espaço em branco
console.log(texto.match(/ca\tr\nr\to\ss!/))

//também pode utilizar " "
console.log(texto.match(/ca\tr\nr\to s!/))

// o "\s" também pode ser utilizado para caracteres "\t", "\n", "\f"