const texto = `
CPF dos aprovados:
    - 123.456.789-10
    - 234.567.890-12
    - 345.678.901-23
    - 456.789.912-34
    - 567.890.123.45
`

const regexCPF = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g

console.log(texto.match(regexCPF))