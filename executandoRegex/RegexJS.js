const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l'

const regexNove = RegExp('9');
//Métodos da RegExp
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))


const regexLetras = /[a-f]/g

//Métodos da string
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, 'teste'))
console.log(texto.split(regexLetras))
