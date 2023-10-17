const texto = `
Os e-mails dos convidados são:
    - email@teste.com.br
    - teste@gmail.com
    - abc@outlook.com.br
    - 123@465.com
    - av15@85frgg.gxyz.ab
    - sdig_nfif@jdidi.com
    - ifsdbn.finiof@ibf.com
`


const regexEmail = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g

console.log(texto.match(regexEmail))

const regexEmailUsandoGrupo = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g

console.log(texto.match(regexEmailUsandoGrupo))