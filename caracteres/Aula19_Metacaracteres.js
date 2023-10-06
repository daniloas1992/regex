/*
.       -> Representa um caractere qualquer
[]      -> Conjunto de caracteres permitidos
[^]     -> Conjunto de caracteres proibidos
?       -> Zero ou um
*       -> Zero ou mais
+       -> Um ou mais
{n, m}  -> De n até m
^       -> Início de linha
$       -> Fim de linha
\b      -> Início ou fim de palavra
\       -> Escape
|       -> Ou
( )     -> Define um grupo
\1...\9 -> Resgata grupos já definidos

*/

const texto = '1,2,3,4,5,6,a.b c!d?e'

//Buscar por todos os pontos, precisa usar o escape
const regexPonto = /\./g

console.log(texto.split(regexPonto))

// Buscar todas ocorrências de vírgula OU ponto OU interrogação OU exclamação OU espaço
const regexSimbolos = /,|\.|\?|!| /g

console.log(texto.split(regexSimbolos))
