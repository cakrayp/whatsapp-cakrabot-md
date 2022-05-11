const toMs = require('ms')
const fs = require('fs')
const { GenerateSerialToken } = require('./myfunction')

const sewaBatasGroup = JSON.parse(fs.readFileSync('./database/sewa/group.json'))

function addDatabaseforSell(client, jid, expired) {
    // Add Expired and Update
    const checkFineOne = sewaBatasGroup.map(v => v.id).includes(jid)
    if (checkFineOne) {
        const isGroup = jid.endsWith("@g.us");
        let sewaBatasGroup__ = sewaBatasGroup;
        let position = false
        Object.keys(sewaBatasGroup__).forEach((i) => {
            if (sewaBatasGroup__[i].expired_again == null) {
                position = i
            }
        })
        if (position !== false) {
            sewaBatasGroup__[position].expired_again = Date.now() + toMs(expired);
            sewaBatasGroup__[position].data = isGroup ? client.groupMetaData(jid) : null
            fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
        } else {
            sewaBatasGroup__[position].expired_again = sewaBatasGroup__[position].expired_again + toMs(expired);
            sewaBatasGroup__[position].data = isGroup ? client.groupMetaData(jid) : null
            fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
        }
    } else {
        const isGroup = jid.endsWith("@g.us");
        const addDataExpired = {}
        addDataExpired.type = isGroup ? "group" : "private",
        addDataExpired.id = jid,
        addDataExpired.session_token = GenerateSerialToken("0000000000000000000000000"),
        addDataExpired.expired = Date.now() + toMs(expired),
        addDataExpired.expired_again = null,
        addDataExpired.data = isGroup ? client.groupMetaData(jid) : null
        sewaBatasGroup__.push(addDataExpired)
        fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
    }
}


function checkExpired(client) {
    let sewaBatasGroup__ = sewaBatasGroup;
    let position = false
    Object.keys(sewaBatasGroup__).forEach((i) => {
        if (Date.now() >= sewaBatasGroup__[i]?.expired) {
            position = i
        }
    })
    if (position !== false) {
        if (sewaBatasGroup__[position]?.expired_again) {
            sewaBatasGroup__[position].expired = sewaBatasGroup__[position].expired_again;
            sewaBatasGroup__[position].expired_again = null;
            fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
        } else if (sewaBatasGroup__[position]?.expired_again == null) {
            function main() {
                try {
                    client.groupLeave(sewaBatasGroup__[position].id)
                    sewaBatasGroup__.splice(position, 1)
                    fs.writeFileSync('./database/sewa/group.json', JSON.stringify(sewaBatasGroup__))
                } catch {
                    setTimeout(() => main(), 3500);
                }
            }
            main();
        }
    }
}

module.exports = {
    addDatabaseforSell,
    checkExpired
}