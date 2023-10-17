const texto = `
Lista telefônica:
    - (11) 91234-5678
    - 92345-6789
    - (27) 91234-5678
    - 7894-4561
`

const regexTelefone = /\(?\d{0,2}\)?\s?\d{2,5}-\d{4}/g

console.log(texto.match(regexTelefone))