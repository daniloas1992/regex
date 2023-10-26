const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// números entre 0-255
// \b        : identificar borda
// \d{1,2}   : 0-99 
// 1\d{2}    : 100-199
// 2[0-4]\d  : 200-249
// 25[0-5]   : 250-255
const regex = /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g

console.log(texto.match(regex))