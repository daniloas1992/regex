const texto ='<div>Conteúdo 01</div><div>Conteúdo 02</div>'

// Guloso
// início: <div>
// qualquer coisa: .
// uma ou mais ocorrências: +
// fim: </div> 
console.log(texto.match(/<div>.+<\/div>/g))

// Guloso
// início: <div>
// qualquer coisa: .
// zero ou mais ocorrências: *
// fim: </div> 
console.log(texto.match(/<div>.*<\/div>/g))

// Guloso
// início: <div>
// qualquer coisa: .
// de 0 a 100 ocorrências: {0,100}
// fim: </div> 
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// Não Guloso
// início: <div>
// qualquer coisa: .
// uma ou mais ocorrências: +
// zero ou mais ocorrências: *
// de 0 a 100 ocorrências: {0,100}
// se achar um fim já identifica: ?
// fim: </div> 
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))