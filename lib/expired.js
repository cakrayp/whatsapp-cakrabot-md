const toMs = require('ms')
const fs = require('fs')

const sewaBatasGroup = JSON.parse(fs.readFileSync('./database/sewa/group.json'))

function addDatabaseforSell(client, jid, expired) {
    let sewaBatasGroup__ = sewaBatasGroup;
    let position = false
    Object.keys(sewaBatasGroup__).forEach((i) => {
        if (sewaBatasGroup__[i].id == jid) {
            position = i
        }
    })
    if (position !== false) {
        sewaBatasGroup__[position].expired = Date.now() + toMs(expired);
        jid.startsWith('@g.us') ? sewaBatasGroup__[position].expired = client.groupMetaData(jid) : null
        fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
    } else {
        const addDataExpired = {}
        addDataExpired.type = jid.startsWith('@g.us') ? "group" : "private",
        addDataExpired.id = jid,
        addDataExpired.expired = Date.now() + toMs(expired),
        jid.startsWith('@g.us') ? addDataExpired.data = client.groupMetaData(jid) : null
        sewaBatasGroup__.push(addDataExpired)
        fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
    }
}


function checkExpired(client) {
    let sewaBatasGroup__ = sewaBatasGroup;
    let position = false
    Object.keys(sewaBatasGroup__).forEach((i) => {
        if (sewaBatasGroup__[i].expired >= Date.now()) {
            position = i
        }
    })
    if (position !== false) {
        client.groupLeave(sewaBatasGroup__[position].id)
        sewaBatasGroup__.splice(position, 1)
        fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
    }
}

module.exports = {
    addDatabaseforSell,
    checkExpired
}