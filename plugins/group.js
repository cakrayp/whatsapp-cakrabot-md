const fs = require('fs')
const { color } = require('../lib/color')
const { getBuffer } = require('../lib/fetcher')
require('../settings')

function IdGroupCheck(groupJid) {
    const welcome_ = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
    let arr_id = []
    for (let well of welcome_) {
        arr_id.push(well.groupJid)
    }
    return arr_id.includes(groupJid)
}

module.exports = async(client, chat) => {
    const member_group = await client.groupMetadata(chat.id);
    const language_text = {
        welcome : {
            id : [
                `*「 WELCOME 」*\n\nHalo @${chat.participants[0].split('@')[0]}, Selamat datang di group *${member_group.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini. Silahkan ketik *${prefix}menu* or *${prefix}help* untuk memulai`,
                `*「 WELCOME 」*\n\nHalo @${chat.participants[0].split('@')[0]}, Selamat datang di group *${member_group.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini. jangan lupa intro dulu iya`,
                `*「 WELCOME 」*\n\nHalo @${chat.participants[0].split('@')[0]}, Selamat datang di group *${member_group.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini. jangan lupa intro dulu iya, Silahkan ketik *${prefix}menu* or *${prefix}help* untuk memulai`,
                `*「 WELCOME 」*\n\nHalo @${chat.participants[0].split('@')[0]}, Selamat datang di group *${member_group.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini. jangan lupa baca deskripsi iya, Silahkan ketik *${prefix}menu* or *${prefix}help* untuk memulai`,
                `*「 WELCOME 」*\n\nHalo @${chat.participants[0].split('@')[0]}, Selamat datang di group *${member_group.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini. jangan lupa baca deskripsi iya dan intro dulu iya, Silahkan ketik *${prefix}menu* or *${prefix}help* untuk memulai`,
            ],
            en : [
                `*「 WELCOME 」*\n\nHi @${chat.participants[0].split('@')[0]}, Welcome to *${member_group.subject}*\n═══════════════════\nWelcome to join and I hope you feel comfortable here, don't forget to read the description, Please type *${prefix}menu* or *${prefix}help* to started`,
                `*「 WELCOME 」*\n\nHi @${chat.participants[0].split('@')[0]}, Welcome to *${member_group.subject}*\n═══════════════════\nWelcome to join and I hope you feel comfortable here, Please type *${prefix}menu* or *${prefix}help* to started`
            ]
        },
        left : {
            id : [
                `Sampai jumpa @${chat.participants[0].split('@')[0]}`,
                `Sampai jumpa @${chat.participants[0].split('@')[0]}, jangan lupa balik lagi iya :)`,
                `Sampai jumpa @${chat.participants[0].split('@')[0]}, jangan lupa titip gorengan`,
                `@${chat.participants[0].split('@')[0]} kok orang out, tapi iya sudah lah :)`,
            ],
            en : [
                `Good Bye @${chat.participants[0].split('@')[0]}`,
                `Good Bye @${chat.participants[0].split('@')[0]}, don't come back again :)`,
                `Good Bye @${chat.participants[0].split('@')[0]}, We will miss you :)`,
            ]
        }
    };
    
    
    if (IdGroupCheck(chat.id)) {
        /** Get the picture
         * @param {profilePictureUrl} sender Get profile picture user...
         * @param {function}
         */
    
        try { var pp_user = await getBuffer(await client.profilePictureUrl(chat.participants[0], 'image')) }        // You can change thie one to <Buffer>
        catch { var pp_user = fs.readFileSync('./file/img/no_ppuser.jpeg') }                                        // if user didn't use a image profile
    
        if (language == 'id') {     // from the file "../settings.js" :)
            responseTextLang_welcome = language_text.welcome['id'][Math.floor(Math.random() * language_text.welcome['id'].length)]
            responseTextLang_left = language_text.left['id'][Math.floor(Math.random() * language_text.left['id'].length)]
        } else if (language == 'en') {
            responseTextLang_welcome = language_text.welcome['en'][Math.floor(Math.random() * language_text.welcome['en'].length)]
            responseTextLang_left = language_text.left['en'][Math.floor(Math.random() * language_text.left['en'].length)]
        } else {        // if it doesn't use this one of language code
            if (chat.participants[0].startsWith('628')) {
                responseTextLang_welcome = language_text.welcome['id'][Math.floor(Math.random() * language_text.welcome['id'].length)]
                responseTextLang_left = language_text.left['id'][Math.floor(Math.random() * language_text.left['id'].length)]
            } else {
                responseTextLang_welcome = language_text.welcome['en'][Math.floor(Math.random() * language_text.welcome['en'].length)]
                responseTextLang_left = language_text.left['en'][Math.floor(Math.random() * language_text.left['en'].length)]
            }
        }
    
        /**
         * Switch Group Action
         * @param {action} update Every participants has been added/removed in the group
         * @param {messageText} text Send an messagee from the group...
         * @param {participants} sender (12345xxx@s.whatsapp.net)
         * @param {switch} action (add/remove)
         */
    
        switch (chat.action) {
            case 'add':
                client.sendMessage(chat.id, {
                    image : pp_user,
                    jpegThumbnail: pp_user,
                    caption : responseTextLang_welcome,
                    contextInfo: { 
                        "mentionedJid": chat.participants
                    },
                    mimetype : 'image/jpeg'
                })            
                break;
            case 'remove':
                client.sendMessage(chat.id, {
                    image : pp_user,
                    jpegThumbnail: pp_user,
                    caption : responseTextLang_left,
                    contextInfo: { 
                        "mentionedJid": chat.participants
                    },
                    mimetype : 'image/jpeg'
                })            
                break;
        }
    }
}
