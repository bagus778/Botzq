
global.owner = [
  "6289518303639", //ganti nomor owner
  "62895380719008" //nomor owner kedua kalo ada
]
global.nomorbot = '62882006339018'
global.namabot = 'XzBotz'
global.namaowner = 'QwnOffc'
global.urlfoto = 'https://e.top4top.io/p_3229zf3gp0.jpg'

global.domain = ''
global.apikey = ''
global.capikey = ''
global.domain2 = ''
global.apikey2 = ''
global.capikey2 = ''
global.eggs = '15'
global.locc = '1'
if (!global.menuVideoIndex) {
    global.menuVideoIndex = 0;
    }

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})