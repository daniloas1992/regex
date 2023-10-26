const texto = `
123456
cod3r
QUASE123!
#oPa1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
// REGRA:
//Senha precisa ter maiúscula, minpuscula, número e caracter especial
//Entre 6 e 20 caracteres


//Identificar se possível entre 6 e 20 caracteres
const regexSenha = /^.{6,20}$/gm

console.log(texto.match(regexSenha))



const regexSenha = /^.{6,20}$/gm