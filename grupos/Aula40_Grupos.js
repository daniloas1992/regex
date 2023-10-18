const texto1 = 'O José Simão é muito engraçado ... hehehehehehehehe'

// () -> Obtém um grupo de caracteres
// +  -> Uma ou mais vezes
console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.br'

// (http:\/\/)?  : Opcional "http://"
// (www\.)?      : Opcional "www."
// \w+           : [A-Za-z0-9_]
// \.            : "."
// \w{2,}        : [A-Za-z0-9_] com 2 ou mais
// (\.\w{2})?    : Opcional "\." + [A-Za-z0-9_] com 2 caracteres
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))