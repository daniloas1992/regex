const texto = 'João é calmo, mas no trânsito fica nervoso.'

//Postive lookahed->  (?= )
//Olha o que vem a seguir para pegar o que está atrás


// []+  : Grupo, com um ou mais caracteres
// \w   : equivale a [A-Za-z0-9_]
// À-ú  : incluir caracteres com acentuação
console.log(texto.match(/[\wÀ-ú]+/gi))
console.log('--')

// []+    : Grupo, com um ou mais caracteres
// \w     : equivale a [A-Za-z0-9_]
// À-ú    : incluir caracteres com acentuação
// (?=,)  : na frente precisa conter uma vírgula
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log('--')

// []+    : Grupo, com um ou mais caracteres
// \w     : equivale a [A-Za-z0-9_]
// À-ú    : incluir caracteres com acentuação
// (?=\.)  : na frente precisa conter um ponto
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))


// []+    : Grupo, com um ou mais caracteres
// \w     : equivale a [A-Za-z0-9_]
// À-ú    : incluir caracteres com acentuação
// (?=\.)  : na frente precisa conter ", mas"
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))



// Negative lookahed->  (?! )
// Na frente não pode conter a combinação



// []+    : Grupo, com um ou mais caracteres
// \b     : identificar bordas ("é" é identificado como borda)
// \w     : equivale a [A-Za-z0-9_]
// À-ú    : incluir caracteres com acentuação
// (?=\.) : na frente NÃO pode existir vírgula
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))


// []+     : Grupo, com um ou mais caracteres
// [\s|\.] : identificar espaços ou pontos
// \w      : equivale a [A-Za-z0-9_]
// À-ú     : incluir caracteres com acentuação
// (?=\.)  : na frente NÃO pode existir vírgula
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))