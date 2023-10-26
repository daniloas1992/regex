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


//Identificar se possui entre 6 e 20 caracteres
// ^       : Início de linha
// .       : Qualquer caractere
// {6,20}  : Entre 6 e 20 caracteres
// $       : Fim de linha
const regexSenha = /^.{6,20}$/gm

console.log(texto.match(regexSenha))


//Postive lookahed->  (?= )
//Olha o que vem a seguir para pegar o que está atrás

//Olha se depois do início de linha "^" a senha tem qualquer caractere entre A-Z

// ^             : Início de linha
// (?=.*[A-Z])   : Grupo de positive lookahead para identificar algum caracter ".*" de [A-Z] 
// .{6,20}       : De 6 a 20 caracteres
// $             : Fim de linha
const regexSenha2 = /^(?=.*[A-Z]).{6,20}$/gm

console.log(texto.match(regexSenha2))


// ^             : Início de linha
// (?=.*[A-Z])   : Grupo de positive lookahead para identificar algum caracter ".*" de [A-Z] 
// (?=.*[A-Z])   : Grupo de positive lookahead para identificar algum caracter ".*" de [a-z] 
// (?=.*[A-Z])   : Grupo de positive lookahead para identificar algum dígito ".*\d" 
// (?=.*[A-Z])   : Grupo de positive lookahead para identificar algum caracter ".*" especial [@#$%!^&*]
// .{6,20}       : De 6 a 20 caracteres
// $             : Fim de linha

const regexSenha3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm

console.log(texto.match(regexSenha3))