const texto = `
Os e-mails dos convidados são:

    - aoinas@xico.com.br
    - sdiubdiu@email.com
    - jonas@empresa.fac.br
    - inasi_ulou@outlook.com
    - sapra.boli@yahoo.com
    - oflm+iii+lato@gmail.lapas.br
`

// \S          : Tudo o que NÃO é espaço
// +           : Um ou mais
// @           : "@"
// \w          : [A-Za-z0-9_]
// +           : Um ou mais
// \.          : "."
// \w{2,6}     : [A-Za-z0-9_] de 2 a 6 caracteres
// (\.\w{2})?  : Grupo com "." + [A-Za-z0-9_] com 2 caracteres. O Grupo é opcional (?)
 const regexEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g

 console.log(texto.match(regexEmail))