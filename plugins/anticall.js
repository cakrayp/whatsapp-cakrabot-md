const { getBuffer } = require('../lib/fetcher')
require('../settings')

function sendTwoLang(senderTarget, typeChat) {
    let indo_text = `Mohon Maaf, Sayang sekali kami tidak dapat menerima panggilan dikarenakan ini sebagai program bot bukan manusia.\n\n*Telepon = block*\n\nJika ada keperluan silahkan chat Owner!\n\nhttps://wa.me/${ownerNumber}`
    let indo_text2 = `Mohon Maaf, Sayang sekali kami tidak dapat menerima panggilan di group dikarenakan ini sebagai program bot bukan manusia.\n\n*Telepon = block*\n\nJika ada keperluan silahkan chat Owner!\n\nhttps://wa.me/${ownerNumber}`
    let eng_text = `Sorry, unfortunately we can't accept the call because this is a bot program not human.\n\n*Call = Block*\n\nIf you want to open the Block, If there is a need, please chat the bot Owner!\n\nhttps://wa.me/${ownerNumber}`
    let eng_text2 = `Sorry, unfortunately we can't accept the call in the group because this is a bot program not human.\n\n*Call = Block*\n\nIf you want to open the Block, If there is a need, please chat the bot Owner!\n\nhttps://wa.me/${ownerNumber}`
    switch (typeChat) {
        case 'private':
            if (language == 'id') {
                send_text = indo_text
            } else if (language == 'en') {
                send_text = eng_text
            } else if (language == 'all') {
                if (senderTarget.startsWith('628')) {
                    send_text = indo_text
                } else {
                    send_text = eng_text
                }
            }
            break
        case 'group':
            if (language == 'id') {
                send_text = indo_text2
            } else if (language == 'en') {
                send_text = eng_text2
            } else if (language == 'all') {
                if (senderTarget.startsWith('628')) {
                    send_text = indo_text2
                } else {
                    send_text = eng_text2
                }
            }
            break
    }
    return send_text
}


module.exports = async (client, data) => {
    async function getProfileUser(userJid) {
        return new Promise((resolve, reject) => {
            client.profilePictureUrl(userJid, 'image')
                .then(async(images_url) => {
                    resolve(await getBuffer(images_url))
                }).catch(err => {
                    resolve(not_ppuser)
                })
        })
    }

    
    const isCallInGroup = data.content[0].tag === 'offer_notice';
    const isCallWithOffer = data.content[0].tag === 'offer';
    const ownerBotNumber = ownerNumber + '@s.whatsapp.net';

    if (isCallInGroup) {
        client.sendMessage(data.attrs.from, {
            text: sendTwoLang(data.attrs.from, 'group'),
            contextInfo: {
                "externalAdReply": {
                    title: 'Owner Bot',
                    sourceUrl: `https://wa.me/${ownerNumber}`,
                    body: 'Antical detected!...',
                    mediaType: 3,
                    "thumbnail": await getProfileUser(ownerBotNumber)
                },
            },
        }).then(async (json) => {
            const get_ppuser = await getProfileUser(data.attrs.from);
            setTimeout(async() => {
                await client.updateBlockStatus(data.attrs.from, "block")
            }, 3000);
            client.sendMessage(ownerBotNumber, {
                image: get_ppuser,
                jpegThumbnail: get_ppuser,
                caption: `*「 Call Info 」*\n\nThis user has been called your bot in the group from :\nhttps://wa.me/${data.attrs.from.split("@")[0]}\n\n\`\`\`${JSON.stringify(json.key, 'spaces', 3)}\`\`\``,
                footerText: 'Hello World',
                buttons: [
                    {buttonId: `${prefix}unblock ${data.attrs.from}`, buttonText: {displayText: 'Unblock'}, type: 1}
                ],
                headerType: 4
            })
        })
    } else if (isCallWithOffer) {
        client.sendMessage(data.attrs.from, {
            text: sendTwoLang(data.attrs.from, 'private'),
            contextInfo: {
                "externalAdReply": {
                    title: 'Owner Bot',
                    sourceUrl: `https://wa.me/${ownerNumber}`,
                    body: 'Antical detected!...',
                    mediaType: 3,
                    "thumbnail": await getProfileUser(ownerBotNumber)
                },
            },
        }).then(async (json) => {
            const get_ppuser = await getProfileUser(data.attrs.from);
            setTimeout(async() => {
                await client.updateBlockStatus(data.attrs.from, "block")
            }, 3000);
            client.sendMessage(ownerBotNumber, {
                image: get_ppuser,
                jpegThumbnail: get_ppuser,
                caption: `*「 Call Info 」*\n\nThis user has been called your bot from :\nhttps://wa.me/${data.attrs.from.split("@")[0]}\n\n\`\`\`${JSON.stringify(json.key, 'spaces', 3)}\`\`\``,
                footerText: 'Hello World',
                buttons: [
                    {buttonId: `${prefix}unblock ${data.attrs.from}`, buttonText: {displayText: 'Unblock'}, type: 1}
                ],
                headerType: 4
            })
        })
    }
}