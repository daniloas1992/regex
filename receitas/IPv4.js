const texto = `
  Inválidos:
  192.268.0.1
  1.333.1.1
  192.168.0.256
  255.256.256.256

  Válidos:
  192.168.0.1
  127.0.0.1
  10.0.0.255
  10.11.12.0
  255.255.255.255
  0.0.0.0
`
// Identifica de 0-255:
// Dentro de uma String o escape precisa estar com duas barras
// \d{1,2}      : 0-99
// 1\d{2}       : 100-199
// |2[0-4]\\d   : 200-249
// 25[0-5]      : 250-255

const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'

const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')

console.log(texto.match(ipv4))
