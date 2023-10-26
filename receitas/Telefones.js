const texto = `
Lista telefônica:
    - (11) 91234-5678
    - 92345-6789
    - (27) 91234-5678
    - 7894-4561
`
// \(       : "("
// \d{2}    : dois números (DDD)
// \)       : ")"
// \s?      : Opcional um espaço em branco
// (...)?   : O grupo é opcional
// \d{4,5}  : 4 ou 5 dígitos
// -        : "-"
// \d{4}    : 4 dígitos
const regexTelefone = /(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g

console.log(texto.match(regexTelefone))