//Para definir uma classe (conjunto) utiliza-se "[]"

const texto = '1,2,3,4,5,6,7,8,9,0,a.b c!d?e[f'

//Busca por 0 ou 2 ou 4 ou 6 ou 8
const regexPares = /[02468]/g

console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'

//Busca por "na" ou "nã"
const regexComESemAcento = /n[aã]/g

console.log(texto2.match(regexComESemAcento))