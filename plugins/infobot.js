const { isJidUser, isJidGroup } = require('@adiwajshing/baileys-md');
const { exec } = require('child_process');
const si = require('systeminformation');
const { getBuffer } = require('../lib/fetcher');
const { humanFileSize, times } = require('../lib/myfunction')
require('../settings');


function execCommand(input_command) {
    return new Promise(async (resolve, reject) => {
        exec(input_command, (stderr, stdout) => {
            if (!stderr) {
                resolve(stdout.trim())
            } else {
                resolve("Unknown")
            }
        })
    })
}


module.exports = async(client, store) => {
    return new Promise(async (resolve, reject) => {
        const sender = client.user.id.split(':')[0] + '@s.whatsapp.net'
        const name_Bot = client.user.name;
        const chatPrivateCount = store.chats.filter(x => isJidUser(x.id)).length
        const chatGroupCount = store.chats.filter(x => isJidGroup(x.id)).length
        const nodeVersion = await execCommand('node -v');
        const ram = await si.mem()
        const cpu = await si.cpuCurrentSpeed()
        const disk = await si.fsSize()
        const up = si.time()
        resolve({
            name: name_Bot,
            nodeVersion,
            activity: {
                server_time: new Date(up.current).toLocaleString('jv'),
                uptime: times(up.uptime),
                memory: humanFileSize(ram.free, true, 1) + ' free of ' + humanFileSize(ram.total, true, 1),
                memory_used: humanFileSize(ram.used, true, 1),
                cpu: cpu.avg + ' Ghz',
                disk: humanFileSize(disk[0].available, true, 1) + ' free of ' + humanFileSize(disk[0].size, true, 1),
            },
            chats: {
                total: store.chats.length,
                private: chatPrivateCount,
                groups: chatGroupCount
            }
        })
    })
}