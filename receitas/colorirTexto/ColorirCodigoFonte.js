const aplicaCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')

const texto = files.read('codigoFonte.html')

// <code>   : Começa com "<code>"
// [\s\S]   : Identificar todos caracteres
// *        : Zero ou mais ocorrências
// <\/code> : Termina com "</code>"
const codeRegex = /<code>[\s\S]*<\/code>/i

// "let" pois vai ser necessário alterar o valor
// [0] poi so retorno é um array
let codigo = texto.match(codeRegex)[0]

// Identificar String..: Estão entre aspas duplas
codigo = aplicaCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas: package|public|class|static|if|else
codigo = aplicaCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// tipos: void|int
codigo = aplicaCor(codigo, /\b(void|int)\b/g, '1385e2')

//Comentários mutiplas linhas
// \/       : "\"
// \*       : "*"
// [\s\S]   : Identificar todos caracteres
// *        : Zero ou mais ocorrências
// \*       : "*"
// \/       : "\"
codigo = aplicaCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//Comentários de uma linha
// \/  : "\"
// \/  : "\"
// .*  : Qualquer caracter com zero ou mais ocorrências
// ?   : Zero ou uam ocorrência
// \n  : fim/quebra da linha
codigo = aplicaCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)