const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//O circunflexo nega TUDO o que estiver dentro do conjunto

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d]/g))

console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

//Tudo que NÃO for de "!" até "/", e tudo que NÃO for de ":" até "@", e não for espaço em branco
console.log(texto2.match(/[^!-/:-@\s]/g))