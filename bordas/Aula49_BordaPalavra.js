const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// \b    : Borda de palavra
// \w    : [A-Za-z0-9_]
// +     : Um ou mais
console.log(texto1.match(/\bdia\w+/gi)) // palavra que começam com "dia"

// \w    : [A-Za-z0-9_]
// +     : Um ou mais
// \b    : Borda de palavra
console.log(texto1.match(/\w+dia\b/gi)) // palavras que terminam com "dia"


// \w    : [A-Za-z0-9_]
// +     : Um ou mais
console.log(texto1.match(/\w+dia\w+/gi)) // palavras que tenham "dia" no meio



// \w    : [A-Za-z0-9_]
// +     : Um ou mais
// \b    : Borda de palavra
console.log(texto1.match(/\bdia\b/gi)) // palavra "dia" com borda antes e depois



//  "\b" borda de palavras. Equivale a [^A-Za-z0-9_]...

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi))// palavra "dia" com borda antes e depois. Caracteres com acentuação são considerados bordas!

// \s     : Contrário de espaços (Não espaços)
// (\S*)  : Grupo de não espaços
// ?      : Opcional
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))// palavra "dia" com borda antes e depois. Incluí a vírgula.


//([\wÀ-ú-])  : grupo [A-Za-z0-9_] mais À-ú para incluir acentos mais "-" para incluir hífen
// *          : zero ou mais
// ?          : Opcional
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))  // Vírgula não entra