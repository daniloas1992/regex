const fs = require('fs')

// Ler arquivos da pasta "originais"
const read = nomeArquivo => fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, {encoding: 'utf8'})

const write = (nomeArquivo, conteudo) => {
  //Gravar o arquivo na pasta "alterados"
  const dirname = `${__dirname}/alterados`

  //Criar se a pasta não existir
  if(!fs.existsSync()) {
    fs.mkdirSync(dirname)
  }

  fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, {encoding: 'utf8'})
}

module.exports = {read, write}