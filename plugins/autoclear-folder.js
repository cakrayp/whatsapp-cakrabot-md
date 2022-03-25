const fs = require('fs')
const ToMs = require('ms')
const deleteFolder = require('folder-delete')
const makeDir = require('make-dir')
const infoBot = JSON.parse(fs.readFileSync('./database/bot.json'))

setInterval(async() => {
    if (Date.now() >= infoBot.time_file_cleanning) {
        deleteFolder('./temp', {debugLog: false});
        await makeDir('./temp');
        infoBot.time_file_cleanning = Date.now() + ToMs("24h")
        fs.writeFileSync('./database/bot.json', JSON.stringify(infoBot))
    }
}, 1000)