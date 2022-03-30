// ---> ENG X ID <---
// DO NOT CHANGE SCRIPT ANY AND IT WILL BE APPEN ERROR, EXERPT DEVELOPER OR YOU CAN ADD ANY FEATURES THAT YOU WANT.
// JANGAN MENGUBAH APAPUN DALAM SCRIPT TERSEBUT, DAN AKAN TERJADI ERROR, KECUALI DEVELOPER (AHLI PENGEMBANGAN) ATAU KAMU BISA MENAMBAHKAN FITUR APAPUN YANG KAMU INGINKAN.


// ------>  Module Package  <------
const {
    downloadContentFromMessage,
    generateWAMessageFromContent,
    getBinaryNodeChild,
    proto,
    URL_REGEX,
} = require("@adiwajshing/baileys-md")
const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const timezone_update = moment(Date.now()).tz('Asia/Jakarta').format('DD-MM-YY HH:mm:ss')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const { fromBuffer, stream } = require("file-type")
const translate_google = require('translate-google')
const streamToBuffer = require('fast-stream-to-buffer')
const mimetype = require('mimetype')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const os = require('os')
const feedid = require('feedid')
const ffmpeg = require("fluent-ffmpeg")
require('../settings')

// ------> plugins <------
const infobot = require('../plugins/infobot')

// ------>  Help  <------
const allmenu = require('../help/allmenu')
const helpmenu = require('../help/help')
const helpbot = require('../help/help-bot/index')
const rules = require('../help/rules')
const History = require('../help/aboutMyself')

// ------>  library  <------
const { exit, stderr, stdout } = require("process")
const { exec } = require('child_process')
const { color } = require('../lib/color')
const {
    getGroupAdmins,
    // getBuffer,
    short,
    convert,
    getRandom,
    runtime,
    formatp
} = require('../lib/myfunction')
const {
    fetchJson,
    fetchText,
    getBuffer,
    getBase64,
} = require('../lib/fetcher')
const {
    uploader,
    scrape,
    instagram,
    expands,
    ezgif,
    filesizeProgram,
    primbon,
    mediafire,
    mobilelegends,
    jadwaldaerah,
    kisahnabi,
    emojiMix,
    bmkgGempa
} = require('../lib/index')
const {
    filesizeToBytes,
    bytesToSize
} = filesizeProgram;
const Clockset = require('../lib/clock')

ffmpeg.setFfmpegPath(ffmpegPath)        // if you want to use manually, you can turn off this one
setFfmpegPath ? ffmpegPath : 'ffmpeg'   // You can set in file ../settings


// ------>  Database  <------
const challenge = JSON.parse(fs.readFileSync('./database/challenge.json'))
const welcome_ = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const antilink_ = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const banned_ = JSON.parse(fs.readFileSync('./database/banned.json'))
// const nsfw_ = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))


// Function command
function prefix_command(chats) {
    function randomArr(arr) {   // (Random prefix if it use a "multi prefix")
        return arr[Math.floor(Math.random() * arr.length)]
    }
    if (multi) {
        var multi_prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chats) ? chats.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : randomArr(['.', '/', '#', '$']);
    } else {
        var multi_prefix = prefix
    }
    return multi_prefix
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// database Array
kickall = [];

module.exports = async (cakrayp, store, msg) => {
    try {
        // if (m.key.fromMe) return      because it has been placed in file ../index.js
        if (msg.message?.protocolMessage) return;
        if (!msg.message) return;       // without message Object...
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD-MM-YY HH:mm:ss')
        const ucapan = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const fromMe = msg.key.fromMe
        const content = JSON.stringify(msg.message)
        const from = msg.key.remoteJid
        const type = Object.keys(msg.message)[0]
        const chats = (type === 'conversation' || type == 'senderKeyDistributionMessage' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' || type == 'messageContextInfo' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'listResponseMessage' && msg.message.listResponseMessage.title) ? msg.message.listResponseMessage.title : ""
        const prefix = prefix_command(chats)
        const cmd = (type === 'listResponseMessage' && msg.message.listResponseMessage.title) ? msg.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ""
        const command = chats.toLowerCase().slice(1).trim().split(/ +/).shift()
        const isCmd = chats.startsWith(prefix)
        const args = chats.trim().split(/ +/).slice(1)
        const messagesText = args.join(' ')
        const pushname = msg.pushName;
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const isOwner = isGroup ? sender.includes(ownerNumber) : sender.includes(ownerNumber + "@s.whatsapp.net")
        const botNumber = cakrayp.user.id.split(':')[0] + '@s.whatsapp.net'
        const botProfile = setBotProfileSelf ? await getBuffer(await cakrayp.profilePictureUrl(botNumber, 'image')) ? await getBuffer(await cakrayp.profilePictureUrl(botNumber, 'image')) : fs.readFileSync('./file/img/no_ppuser.jpeg') : BotImage
        const Bot_Name = BotName || cakrayp.user.name
        const groupMetadata = isGroup ? await cakrayp.groupMetadata(from) : ''
        const groupName = groupMetadata.subject
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isIndonesian = sender.startsWith('628') || sender.startsWith('60')    // For indonesian (+62) and malay (+60) Only...

        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedMsg = (type == 'extendedTextMessage')
        const isButtons = (type == 'buttonsResponseMessage' || type == 'messageContextInfo' && msg.message.buttonsResponseMessage.selectedButtonId) ? true : (type == 'templateButtonReplyMessage') ? true : false
        const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

        if (!multi && isOwner && chats.startsWith('$')) {
            console.log(color(`[${time}] :`, 'aqua'), color(`[ EXEC ] :`, 'yellow'), color(chats))
            return exec(chats.slice(1).trim(), async (err, stdout, stderr) => {
                if (!stderr) {
                    console.log(stdout)
                    return cakrayp.sendMessage(from, { text: stdout }, { quoted: msg })
                } else {
                    console.log(stderr)
                    return cakrayp.sendMessage(from, { text: stderr }, { quoted: msg })
                }
            })
        }

        const isBanneduser = (userJid) => {
            const listban = [];
            for (let ban of banned_) {
                listban.push(ban)
            }
            return listban.includes(userJid)
        }

        // Command console.log()) to see a log with message in terminals...
        if (isBanneduser(sender)) {
            if (!isGroup) console.log(color(`[${time}] :`, "aqua"), color("[ BANNED ] :", "red"), color(chats ? chats : (`${chats} (${type})`).trim()), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup) console.log(color(`[${time}] :`, "aqua"), color("[ BANNED ] :", "red"), color(chats ? chats : (`${chats} (${type})`).trim()), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            return;   // if user has been banned, it cannot accept response from request
        } else if (isButtons && !fromMe) {
            if (!isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ BUTTONS ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"))
            if (isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ BUTTONS ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"), "in", color(groupName, "yellow"))
        } else if (!fromMe) {
            if (!isGroup && !isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ PRIVATE ] :", "green"), color((chats ? chats : `${chats} (${type})`).trim()), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"))
            if (isGroup && !isCmd) console.log(color(`[${time}] :`, "aqua"), color("[  GROUP  ] :", "green"), color((chats ? chats : `${chats} (${type})`).trim()), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ COMMAND ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"))
            if (isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ COMMAND ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"), "in", color(groupName, "yellow"))
        } else if (fromMe) {
            if (!isGroup && !isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ SELFBOT ] :", "green"), color((chats ? chats : `${chats} (${type})`).trim()), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"))
            if (isGroup && !isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ SELFBOT ] :", "green"), color((chats ? chats : `${chats} (${type})`).trim()), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ SELFBOT ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"))
            if (isGroup && isCmd) console.log(color(`[${time}] :`, "aqua"), color("[ SELFBOT ] :", "yellow"), color(chats), "from", color(`${sender.split('@')[0]} (${pushname})`, "yellow"), "in", color(groupName, "yellow"))
        }

        autoReadChat ? await cakrayp.sendReadReceipt(from, sender, [msg.key.id]) : false                            //  for Read message
        autoTyping ? (isCmd && command) ? await cakrayp.sendPresenceUpdate('composing', from) : false : false       //  for typing message
        // await cakrayp.presenceSubscribe(sender)

        const isUrl = (uri) => {
            return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const isYtUrl = (ini_url,) => {
            const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)|(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i
            const yt_out = {
                isYoutubeUrl: ytIdRegex.test(ini_url),
                exec_data: ytIdRegex.exec(ini_url)
            }
            return yt_out
        }

        const randomArr = (arr = []) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        const translate = async (teks, lang) => {
            return new Promise((resolve, reject) => {
                translate_google(teks, { to: lang ? lang : 'en' })
                    .then(resolve)
                    .catch(reject)
            })
        }

        const checkLanguageCode = (code) => {
            const language_code = [
                "af", "ar", "sq", "hy", "ca", "zh", "zh-cn", "zh-tw", "zh-yue", "hr", "cs", "da", "nl",
                "en", "en-uk", "en-uk", "en-us", "eo", "fi", "fr", "de", "el", "ht", "hi", "hu", "is", "id",
                "it", "ja", "ko", "la", "lv", "mk", "no", "pl", "pt", "pt-br", "ro", "ru", "sr", "sk", "es",
                "es-es", "es-us", "sw", "sv", "ta", "th", "tr", "vi", "cy"
            ]
            return language_code.includes(code.toLowerCase())
        }

        // Add database with function
        const addDatabase = (Jid, typeData, boolean) => {
            if (typeData == 'antilink') {      // Antilink
                const listjid = [];
                for (let chg of antilink_) {
                    listjid.push(chg.groupJid)
                }
                if (boolean === false) {
                    if (listjid.includes(Jid)) {
                        let position = null
                        Object.keys(antilink_).forEach((i) => {
                            if (antilink_[i].groupJid === Jid) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            antilink_.splice(position, 1)
                            fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink_))
                        } else {
                            return null
                        }
                    } else {
                        return null
                    }
                } else if (boolean === true) {
                    if (listjid.includes(Jid)) {
                        return false
                    } else {
                        const user_change = {
                            groupJid: Jid,
                            userJid: sender
                        }
                        antilink_.push(user_change)
                        fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink_))
                    }
                } else {
                    return listjid.includes(Jid)
                }
            } else if (typeData == 'welcome') {      // Welcome and left
                const listjid = [];
                for (let chg of welcome_) {
                    listjid.push(chg.groupJid)
                }
                if (boolean === false) {
                    if (listjid.includes(Jid)) {
                        let position = null
                        Object.keys(welcome_).forEach((i) => {
                            if (welcome_[i].groupJid === Jid) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            welcome_.splice(position, 1)
                            fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welcome_))
                        } else {
                            return null
                        }
                    } else {
                        return null
                    }
                } else if (boolean === true) {
                    if (listjid.includes(Jid)) {
                        return false
                    } else {
                        const user_change = {
                            groupJid: Jid,
                            userJid: sender
                        }
                        welcome_.push(user_change)
                        fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welcome_))
                    }
                } else {
                    return listjid.includes(Jid)
                }
            } else if (typeData == 'banned') {      // Banned user
                const listjid = [];
                for (let chg of banned_) {
                    listjid.push(chg)
                }
                if (boolean === false) {
                    if (listjid.includes(Jid)) {
                        let position = null
                        Object.keys(banned_).forEach((i) => {
                            if (banned_[i] === Jid) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            banned_.splice(position, 1)
                            fs.writeFileSync('./database/banned.json', JSON.stringify(banned_))
                        } else {
                            return null
                        }
                    } else {
                        return null
                    }
                } else if (boolean === true) {
                    if (listjid.includes(Jid)) {
                        return false
                    } else {
                        banned_.push(Jid)
                        fs.writeFileSync('./database/banned.json', JSON.stringify(banned_))
                    }
                } else {
                    return listjid.includes(Jid)
                }
            } else if (typeData == 'antidelete') {      // Antidelete
                const listjid = [];
                for (let chg of antidelete_) {
                    listjid.push(chg.groupJid)
                }
                if (boolean === false) {
                    if (listjid.includes(Jid)) {
                        let position = null
                        Object.keys(antidelete_).forEach((i) => {
                            if (antidelete_[i].groupJid === Jid) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            antidelete_.splice(position, 1)
                            fs.writeFileSync('./database/group/antidelete.json', JSON.stringify(antidelete_))
                        } else {
                            return null
                        }
                    } else {
                        return null
                    }
                } else if (boolean === true) {
                    if (listjid.includes(Jid)) {
                        return false
                    } else {
                        const user_change = {
                            groupJid: Jid,
                            userJid: sender
                        }
                        antidelete_.push(user_change)
                        fs.writeFileSync('./database/group/antidelete.json', JSON.stringify(antidelete_))
                    }
                }
            }
        }

        const commannd_response = (type) => {
            let command_Type = []
            let __position_txt = false
            Object.keys(messageHandler).forEach((data, i) => {
                command_Type.push({ smalltext: data.toLowerCase(), originalText: data })
            })
            Object.keys(command_Type).forEach((i) => {
                if (command_Type[i].smalltext == type.toLowerCase()) {
                    __position_txt = i
                }
            })
            const command_Type_result = command_Type[__position_txt].originalText
            if (language == 'en') {
                return messageHandler[command_Type_result].eng
            } else if (language == 'id') {              //  Message text for a language text
                return messageHandler[command_Type_result].ind
            } else if (language == 'all') {
                if (isIndonesian) {
                    return messageHandler[command_Type_result].ind
                } else {
                    return messageHandler[command_Type_result].eng
                }
            } else {
                throw new Error(`This ${language} is not avaiable`)
            }
        }

        const language_text = (indonesian, english) => {
            if (language == 'en') {
                return english
            } else if (language == 'id') {              //  Message text for a language text
                return indonesian
            } else if (language == 'all') {
                if (isIndonesian) {
                    return indonesian
                } else {
                    return english
                }
            } else {
                throw new Error(`This ${language} is not avaiable`)
            }
        }

        /**
         * Reply messages...
         * @param {reply} text Reply message user
         * @param {replyWithThumbnail} text Reply message with thumbnail
         * @returns
         */

        const reply = (text) => {     // You can setting in the file "../settings.js"
            replyWithThumbnail ? cakrayp.sendMessage(from, { text, contextInfo: { "externalAdReply": { title: Bot_Name, sourceUrl: `https://wa.me/${sender.split('@')[0]}`, body: `~> Request By ${pushname}`, mediaType: 3, "thumbnail": botProfile }, "mentionedJid": [sender] } }, usereplyMessage ? { quoted: msg } : '') : cakrayp.sendMessage(from, { text }, usereplyMessage ? { quoted: msg } : '')
        }
        const replyCustom = (text, options = {}) => {     // You can setting in the file "../settings.js"
            replyWithThumbnail ? cakrayp.sendMessage(from, { text, contextInfo: { "externalAdReply": { title: Bot_Name, sourceUrl: `https://wa.me/${sender.split('@')[0]}`, body: `~> Request By ${pushname}`, mediaType: 3, "thumbnail": botProfile }, "mentionedJid": [sender] } }, options ? options : '') : cakrayp.sendMessage(from, { text }, options ? options : '')
        }
        const replyWithThumb = (text, boolean) => {     // You can use this for reply with thumb"
            cakrayp.sendMessage(from, { text, contextInfo: { "externalAdReply": { title: Bot_Name, sourceUrl: `https://wa.me/${sender.split('@')[0]}`, body: `~> Request By ${pushname}`, mediaType: 3, "thumbnail": botProfile }, "mentionedJid": [sender] } }, boolean ? { quoted: msg } : '')
        }
        const replyWithThumbCustom = (text, title, sourceUrl, body, thumb_Buff, options = {}) => {     // You can use custom reply with thumbnail"
            cakrayp.sendMessage(from, { text, contextInfo: { "externalAdReply": { title, sourceUrl, body, mediaType: 3, "thumbnail": thumb_Buff }, "mentionedJid": [sender] } }, options ? options : '')
        }

        const mentions = (text, senderUser, boolean) => {
            cakrayp.sendMessage(from, { text, contextInfo: { mentionedJid: senderUser } }, boolean ? { quoted: msg } : '')
        }

        async function downloadAndSaveMediaMessage(type_file, path_file) {
            if (type_file === 'image') {
                var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                await fs.writeFileSync(path_file, buffer)
                return fs.readFileSync(path_file)
            } else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return fs.readFileSync(path_file)
            } else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return fs.readFileSync(path_file)
            } else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return fs.readFileSync(path_file)
            }
        }

        // Save media with Buffer
        async function downloadMediaMessageWithBuffer(mediaKey, typeOptions) {
            let content_stream = await downloadContentFromMessage(mediaKey, typeOptions)
            let buffer_media = Buffer.from([])
            for await (const chunk of content_stream) {
                buffer_media = Buffer.concat([buffer_media, chunk])
            }
            return buffer_media
        }

        // Antilink detection
        if (antilink_.filter((x) => x.groupJid == from)[0]) {
            if (isBotGroupAdmins) {
                // GROUP DETECTION 
                const GroupLinkRegex = /(?:http(?:s):\/\/)chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{21,24})/;
                const isGroupLink = GroupLinkRegex.test(chats);
                // if (isGroupAdmins || isOwner) false;
                if (isGroupLink) {
                    console.log(GroupLinkRegex.exec(chats))
                    // Check group information...
                    const getGcMeta = await cakrayp.groupMetadata(from)
                    const getGroupCode = GroupLinkRegex.exec(chats)[1];
                    const checkQuery = async (code) => {
                        const results = await cakrayp.query({
                            tag: "iq",
                            attrs: {
                                type: "get",
                                xmlns: "w:g2",
                                to: "@g.us"
                            }, content: [{ tag: "invite", attrs: { code } }]
                        })
                        const group = getBinaryNodeChild(results, "group");
                        return group.attrs;
                    };
                    checkQuery(getGroupCode)
                        .then(async (group_info) => {
                            if (group_info.id + "@g.us" == from) return;
                            cakrayp.sendMessage(from, {
                                text: language_text(
                                    `*「 GROUP LINK DETECTED 」*\n\nMohon maaf, link group ini telah terdeteksi oleh bot dan bot akan mengeluarkan anda digroup *${getGcMeta.subject}* secara otomatis.`,
                                    `*「 GROUP LINK DETECTED 」*\n\nSorry, this link has been detected by bot and you will be remove/kick to you of group *${getGcMeta.subject}* automatically`
                                )
                            }, { quoted: msg }).then(() => {
                                setTimeout(async () => {
                                    await cakrayp.groupParticipantsUpdate(
                                        from,
                                        [sender],
                                        "remove"
                                    )
                                }, 3000);
                            })
                        }).catch(err => {
                            false;
                        })
                }
            }
        }

        // Challenge
        if (challenge.filter((x) => x.sender == sender)[0] && !isCmd) {
            if (isGroup) {
                const isIndonesian__ = randomArr(['indonesian', 'english'])  //'indonesian' || 'english'
                position = false
                Object.keys(challenge).forEach((i) => {
                    if (challenge[i].answer[isIndonesian__].toLowerCase() == chats.toLowerCase()) {
                        position = i
                    }
                })
                if (position !== false) {
                    if (challenge[position].type == 'tebakgambar') {
                        reply(language_text(`Jawaban anda benar...\n\nJawaban yang benar adalah\n*${challenge[position].answer[isIndonesian__]}*`, `Your answer is correct...\n\nThe correct answer is\n*${challenge[position].answer[isIndonesian__]}*`))
                        challenge.splice(position, 1)
                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        return
                    } else if (challenge[position].type == 'caklontong') {
                        txt_answer = language_text(`Jawaban anda benar...\n\n`, `Your answer is correct...\n\n`)
                        txt_answer += language_text('*• Pertanyaan :* ' + challenge[position].questions[isIndonesian__], '*• Question :* ' + await translate(challenge[position].questions[isIndonesian__])) + '\n\n'
                        txt_answer += language_text(`*• Jawaban :* ${challenge[position].answer[isIndonesian__]}`, '*• Answer :* ' + await translate(challenge[position].answer[isIndonesian__])) + '\n'
                        txt_answer += language_text(`*• Alasan :* ${challenge[position].description[isIndonesian__]}`, '*• Reason :* ' + await translate(challenge[position].description[isIndonesian__]))
                        reply(txt_answer)
                        challenge.splice(position, 1)
                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        return
                    }
                }
            } else {
                const isIndonesian__ = 'indonesian' || 'english'
                position = false
                Object.keys(challenge).forEach((i) => {
                    if (challenge[i].answer[isIndonesian__].toLowerCase() == chats.toLowerCase()) {
                        position = i
                    }
                })
                if (position !== false) {
                    if (challenge[position].type == 'tebakgambar') {
                        reply(language_text(`Jawaban anda benar...\n\nJawaban yang benar adalah\n*${challenge[position].answer[isIndonesian__]}*`, `Your answer is correct...\n\nThe correct answer is\n*${challenge[position].answer[isIndonesian__]}*`))
                        challenge.splice(position, 1)
                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        return

                    } else if (challenge[position].type == 'caklontong') {
                        txt_answer = language_text(`Jawaban anda benar...\n\n`, `Your answer is correct...\n\n`)
                        txt_answer += language_text('*• Pertanyaan :* ' + challenge[position].questions[isIndonesian__], '*• Question :* ' + await translate(challenge[position].questions[isIndonesian__])) + '\n\n'
                        txt_answer += language_text(`*• Jawaban :* ${challenge[position].answer[isIndonesian__]}`, '*• Answer :* ' + await translate(challenge[position].answer[isIndonesian__])) + '\n'
                        txt_answer += language_text(`*• Alasan :* ${challenge[position].description[isIndonesian__]}`, '*• Reason :* ' + await translate(challenge[position].description[isIndonesian__]))
                        reply(txt_answer)
                        challenge.splice(position, 1)
                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        return
                    }
                } else {
                    return reply(language_text('Jawaban anda salah', 'Your answer is wrong'))
                }
            }
        }
        if (/^a(s|ss)alamu('|)alaikum$/.test(chats)) {
            const jawab_salam = [
                'Wa\'alaikumusalam',
                'Wa\'alaikumusalam wb',
                'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
            ]
            return reply(randomArr(jawab_salam))
        }
        if (/^i (love|mi(ss|s)|need) you$/.test(chats)) {
            const kata_cht = [
                'I love you',
                'I luv yu',
                'I miss you',
                'I mis you',
                'I need you',
            ]
            return reply(randomArr(kata_cht) + " too")
        }


        // Message Buttons
        const templateButtons_menu = [
            { index: 1, urlButton: { displayText: '⭐ Rest API!', url: 'https://cakrayp.herokuapp.com/' } },
            { index: 2, callButton: { displayText: 'Contact', phoneNumber: `+${ownerNumber}` } },
            { index: 3, quickReplyButton: { displayText: 'Menu', id: `${prefix}cmd` } },
            { index: 4, quickReplyButton: { displayText: 'Allmenu', id: `${prefix}allmenu` } },
            { index: 5, quickReplyButton: { displayText: 'Join in My group', id: `${prefix}linkbotgc` } },
        ]


        // COMMAND
        switch (command) {
            case 'menu':
            case 'help':
                const salam = moment(new Date(msg.messageTimestamp * 1000)).tz('Asia/Jakarta').format('HH')
                const menu_lang = {
                    id: `*「 ${Bot_Name} 」*\n\nHai kak ${pushname}.\n\nSelamat ${Clockset.swichtime(salam)} Silahkan dipilih fitur di *${prefix}menu* untuk memulai dari setiap perintah, jika tombol ini tidak merespon anda dapat memilih perintah dibawah berikut ini.\n\n*${prefix}cmd*\n*${prefix}allmenu*\n\njangan lupa berdonasi agar tetap terupdate`,
                    en: `*「 ${Bot_Name} 」*\n\nHi ${pushname}.\n\n${await translate(`Selamat ${Clockset.swichtime(salam)}`)} Please select a feature in *${prefix}menu* to start from every command, if this button does not respond you can choose the following command.\n\n*${prefix}cmd*\n*${prefix}allmenu*\n\ndon't forget to donate to stay updated`
                }
                cakrayp.sendMessage(from, {
                    caption: language_text(menu_lang.id, menu_lang.en),
                    jpegThumbnail: botProfile,
                    footer: language_text('Silahkan dipilih tombol dibawah', 'Please choose here in below.'),
                    templateButtons: templateButtons_menu,
                    image: botProfile
                })
                break;
            case 'cmd':
                if (isGroup) var link_gro = language_text(`Jika ingin bergabungn\n├ Silahkan ketik *${prefix}linkbotgc*`, `if you want to join\n├ please type *${prefix}linkbotgc*`)
                menunya = `
┌─「 MENU COMMAND 」
│ 
├• *Name :* ${Bot_Name}
├• *Owner :* wa.me/${ownerNumber}
├• *Lib :* @adiwajshing/baileys-md
├• *Rest Api :* ${RestApi}
├• *Github :* https://github.com/cakrayp
│
├• *Prefix :* \`\`\`"${multi ? '(multi)' : prefix}"\`\`\`
│
├─ *#LIST MENU*
├• *${prefix}menuislamic*
├• *${prefix}menudownloader*
├• *${prefix}menuconverter*
├• *${prefix}menusearching*
├• *${prefix}menurandomtext*
├• *${prefix}menuanime*
├• *${prefix}menumedia*
├• *${prefix}menuinformasi*
├• *${prefix}menuentertaiment*
├• *${prefix}menucreator*
├• *${prefix}menugoogle*
├• *${prefix}menuprimbon*
├• *${prefix}menutextpro*
├• *${prefix}menurandomimg*
├• *${prefix}menugroup*
├• *${prefix}menuadmin*
├• *${prefix}menuowner*
├• *${prefix}helpbot* [Command menu options]
│
├─ *#ABOUT BOT*
├• *${prefix}donate*
├• *${prefix}owner*
├• *${prefix}socialmedia*
├• *${prefix}aboutbot*
├• *${prefix}runtime*
├• *${prefix}ping*
├• *${prefix}infobot*
├• *${prefix}tos*
│
├ *#Note*
├ ${language_text(`Jangan lupa dibaca dengan\n├ ketik *${prefix}rules*`, `Don't forget to\n├ read in *${prefix}rules*`)}
├ ${link_gro ? link_gro : language_text(`Jika ingin bergabung\n├ Silahkan ketik *${prefix}linkbotgc*`, `if you want to join\n├ please type *${prefix}linkbotgc*`)}
│
│
├• *Runtime*
├ ${language_text(runtime(process.uptime()), await translate(runtime(process.uptime())))}
│
└──「 ${Bot_Name} 」
`.trim()
                cakrayp.sendMessage(from, {
                    caption: menunya,
                    footer: language_text('Jangan lupa berdonasi agar tetap update', 'Don\'t forget to donate to stay updated.'),
                    templateButtons: [
                        { index: 1, callButton: { displayText: 'Contact', phoneNumber: '+' + ownerNumber } },
                        { index: 2, quickReplyButton: { displayText: 'Donate', id: `${prefix}donate` } },
                        { index: 3, quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } },
                    ],
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'allmenu':
                cakrayp.sendMessage(from, {
                    caption: allmenu(pushname, isIndonesian, language, Clockset.swichtime(moment(new Date()).format('HH')), time, prefix),
                    footer: language_text('Jangan lupa berdonasi agar tetap update', 'Don\'t forget to donate to stay updated.'),
                    templateButtons: [
                        { index: 1, callButton: { displayText: 'Contact', phoneNumber: '+' + ownerNumber } },
                        { index: 2, quickReplyButton: { displayText: 'Donate', id: `${prefix}donate` } },
                        { index: 3, quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } },
                    ],
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuislamic':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listislami(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Islamic' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuadmin':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listAdminGroup(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Admin Group' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menudownloader':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listdownloader(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Downloader' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuconverter':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listconvert(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Converter' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menusearching':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listsearch(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Searching' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menurandomtext':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listrandom(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Text Random' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuanime':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listmanga(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Anime' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menumedia':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listmedsos(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Media' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuinformasi':
            case 'menuinformation':
                // cakrayp.sendMessage(from, {
                //     image: botProfile,
                //     jpegThumbnail: botProfile,
                //     caption: helpmenu.listinfomation(prefix),
                //     footer: `${prefix}helpbot ${command}`,
                //     buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Information' }, type: 1 }],
                //     headerType: 4,
                //     contextInfo: { mentionedJid: [sender] }
                // })
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listinfomation(prefix),
                }, { quoted: msg })
                break
            case 'menuentertaiment':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listentertaiment(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Entertaiment' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menucreator':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listcreator(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Creator' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menugoogle':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listgoogle(prefix),
                }, { quoted: msg })
                break
            case 'menuprimbon':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listprimbon(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Primbon' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menutextpro':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listtextpro(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Textpro' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menuphotoxy':
                // cakrayp.sendMessage(from, {
                //     image: botProfile,
                //     jpegThumbnail: botProfile,
                //     caption: helpmenu.listphotoxy(prefix),
                //     footer: `${prefix}helpbot ${command}`,
                //     buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Admin Group' }, type: 1 }],
                //     headerType: 4,
                //     contextInfo: { mentionedJid: [sender] }
                // })
                reply(commannd_response('mainstance'))
                break
            case 'menurandomimg':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listrandomimage(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Random' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'menugroup':
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: helpmenu.listgroup(prefix),
                    footer: `${prefix}helpbot ${command}`,
                    buttons: [{ buttonId: `${prefix}helpbot ${command}`, buttonText: { displayText: 'Help Admin Group' }, type: 1 }],
                    headerType: 4,
                    contextInfo: { mentionedJid: [sender] }
                })
                break
            case 'linkbotgc':
                linknya = 'https://chat.whatsapp.com/LVkPTvaxjRlE3c5azivEpk'
                teks = language_text('Jangan lupa untuk bergabung digroup kami iya\n\n' + linknya, 'Come join our group, okay.\n\n' + linknya)
                reply(teks)
                break
            case 'bahasa':
            case 'language':
                reply(helpmenu.bahasa())
                break
            case 'donate':
            case 'donasi':
                cakrayp.sendMessage(from, { image: BotImage, caption: helpmenu.donate() })
                break
            case 'owner':
                const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:' + ownerName + '\n' // full name
                    + 'ORG:Ashoka Uni;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=' + ownerNumber + ':+' + ownerNumber + '\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                await cakrayp.sendMessage(from, {
                    contacts: {
                        displayName: 'Jeff',
                        contacts: [{ vcard }]
                    }
                }, { quoted: msg })
                break
            case 'rules':
                reply(language_text(rules.rules_ind(prefix), rules.rules_eng(prefix)))
                break
            case 'aboutbot':
                reply(language_text(rules.desc_ind(prefix), rules.desc_eng(prefix)))
                break
            case 'tos':
                reply(helpmenu.sourceCode(prefix, ownerNumber, isIndonesian))
                break
            // Uptime Bot
            case 'runtime':
                txt_checkUptime = `── *「 BOT UPTIME 」* ──\n\n`
                txt_checkUptime += `❏ ${language_text(runtime(process.uptime()), await translate(runtime(process.uptime())))}\n\n`
                txt_checkUptime += `© Made by ${author}`
                reply(txt_checkUptime)
                break

            // Social Media
            case 'sosialmedia':
            case 'socialmedia':
                mysosmed = `
Hai kak ☺️ 
Jangan lupa follow akun mimin iya, 
don't forget to follow my account
:)

┌─「 Social Media 」
│
├ • *Website :*
├ https://cakrajihan.wordpress.com
├ • *Blogger :*
├ https://cakraypjhn.blogspot.com
├ • *Rest API :*
├ ${apiCakra}
├ • *Instagram :*
├ https://instagram.com/cakrayp_jhn
├ • *TeleBot :*
├ https://t.me/Information341_bot
│
└──「 ${Bot_Name} 」
`.trim()
                cakrayp.sendMessage(from, {
                    image: botProfile,
                    jpegThumbnail: botProfile,
                    caption: mysosmed
                })
                break

            // Help bot for exaples use the command
            case 'helpbot':
                if (args.length == 0) return reply(language_text(`Silahkan pilih perintah dari listmenu di *${prefix}menu* terlebih dahulu untuk melihat contoh tersebut\nE.g: *${prefix + command}* menudownloader`, `Please select the command from the menulist in *${prefix}menu* first to see the example\nE.g: *${prefix + command}* menudownloader`))
                pilihan_txt = args.join(' ').toLowerCase()
                if (pilihan_txt == 'menuadmin') {
                    if (!isGroup) return reply(command_lang().groupOnly)
                    if (!isGroupAdmins) return reply(command_lang().admingroup)
                    if (!isBotGroupAdmins) return reply(command_lang().bot_admingroup)
                    mentions(helpbot.adminGroup(sender, prefix, sender, botNumber), [sender], true)
                } else if (pilihan_txt == 'menutextpro' || pilihan_txt == 'menuphotooxy') {
                    reply(helpbot.textmaker(sender, prefix))
                } else if (pilihan_txt == 'menudownloader') {
                    reply(helpbot.downloader(sender, prefix))
                } else if (pilihan_txt == 'menugroup') {
                    reply(helpbot.menuGroup(sender, prefix))
                } else if (pilihan_txt == 'menuislamic') {
                    reply(helpbot.islamic(sender, prefix))
                } else if (pilihan_txt == 'menucreator') {
                    reply(helpbot.creator(sender, prefix))
                } else if (pilihan_txt == 'menuconverter') {
                    reply(helpbot.converter(sender, prefix))
                } else if (pilihan_txt == 'menuanime') {
                    reply(helpbot.helpanime(sender, prefix))
                } else if (pilihan_txt == 'menurandomtext') {
                    reply(helpbot.random.helprandom(sender, prefix))
                } else if (pilihan_txt == 'menurandomimg') {
                    reply(helpbot.random.helprandom2(sender, prefix))
                } else if (pilihan_txt == 'menusearching') {
                    reply(helpbot.searching(sender, prefix))
                } else {
                    reply(language_text(`Mohon maaf perintah ${pilihan_txt} tidak tersedia`, `Sorry this command ${pilihan_txt} is not avaiable`))
                }
                break

            // Status Bot
            case 'ping':
            case 'botstatus':
            case 'statusbot':
                const used = process.memoryUsage();
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp;
                neww = performance.now()
                oldd = performance.now()
                respon = `
${language_text('Kecepatan Respon', 'Response Speed')} ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${language_text(runtime(process.uptime()), await translate(runtime(process.uptime())))}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}

\n© Made by ${author}
                `.trim()
                reply(respon)
                break

            // Get image profile from user
            case 'getpic':
                if (!isGroup && !messagesText) return reply(language_text('Silakhan masukkan nomor target untuk mengambil gambar profile dari pengguna whatsapp', 'Please enter target number to take profile pictures from whatsapp users'))
                if (!isGroup && messagesText.startsWith('@') && msg.message.extendedTextMessage === null) return reply(language_text('Mohon maaf ini khusus untuk didalam group', 'Sorry this is special for the group'))
                if (isGroup && !messagesText) return reply(language_text('Silakhan masukkan nomor target atau tag beberapa pengguna dari group untuk mengambil gambar profile dari pengguna whatsapp', 'Please enter the target number or tag several users from the group to take profile pictures of whatsapp users'))
                if (isGroup && msg.message.extendedTextMessage !== null) {
                    const mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                    if (isGroup && msg.message.extendedTextMessage === null) return reply(language_text('Pengguna tidak ditemukan, Silahkan ditag pengguna yang lain', 'Users are not found, please tag another user'))
                    for (let i = 0; i < mentioned.length; i++) {
                        cakrayp.profilePictureUrl(mentioned[i], "image")
                            .then(async (result_image) => {
                                const get_buffer_profile = await getBuffer(result_image);
                                cakrayp.sendMessage(from, { image: get_buffer_profile, jpegThumbnail: get_buffer_profile, caption: `@${mentioned[i].split("@")[0]}`, contextInfo: { mentionedJid: mentioned } }, { quoted: msg })
                            })
                            .catch(async () => {
                                cakrayp.sendMessage(from, { image: not_ppuser, jpegThumbnail: not_ppuser, caption: `@${mentioned[i].split("@")[0]}`, contextInfo: { mentionedJid: mentioned } }, { quoted: msg })
                            })
                    }
                } else if (messagesText && msg.message.extendedTextMessage === null) {
                    if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                    if (!/^[0-9]+$/.test(messagesText)) return reply(commannd_response('numberOnly'))
                    if (messagesText.length < 8) return reply(language_text('Silahkan masukkan nomor telepon minimal 8 karakter', 'Please enter a phone number of at least 8 characters'))
                    if (messagesText.length > 18) return reply(language_text('Mohon maaf, nomor ini tercapai maksimal 18 karakter', 'Sorry, this number has reached a maximum of 18 characters'))
                    cakrayp.profilePictureUrl(`${messagesText}@s.whatsapp.net`, "image")
                        .then(async (result_image) => {
                            const get_buffer_profile = await getBuffer(result_image);
                            cakrayp.sendMessage(from, { image: get_buffer_profile, jpegThumbnail: get_buffer_profile, caption: `@${messagesText}`, contextInfo: { mentionedJid: [`${messagesText}@s.whatsapp.net`] } }, { quoted: msg })
                        })
                        .catch(async () => {
                            cakrayp.sendMessage(from, { image: not_ppuser, jpegThumbnail: not_ppuser, caption: `@${messagesText}`, contextInfo: { mentionedJid: [`${messagesText}@s.whatsapp.net`] } }, { quoted: msg })
                        })
                }
                break

            // Report debug
            case 'report':
                txt_report = '*「 REPORT 」*\n\n'
                txt_report += `*• Sender :* wa.me/${sender.split('@')[0]}\n`
                txt_report += `*• MessageType :* ${isGroup ? 'Group' : 'Private'}\n`
                if (isGroup) {
                    txt_report += `*• FromGroup :* ${groupName}\n`
                    txt_report += `*• AdminGroup :* ${isGroupAdmins ? '✅' : '❎'}\n`
                }
                txt_report += `*• Time :* ${time}\n\n`
                txt_report += `*「 Message 」*\n\n${messagesText ? messagesText : '(No Messages)'}\n\n`
                txt_report += `© Made by ${author}`
                try { get_ppuser = await getBuffer(await cakrayp.profilePictureUrl(sender, "image")) } catch { get_ppuser = not_ppuser }
                if (isQuotedImage || isQuotedVideo || /^(image|video)Message$/.test(Object.keys(msg.message))) {
                    const getMediaMessageTypeOfReport = Object.keys(type == 'extendedTextMessage' ? msg.message.extendedTextMessage?.contextInfo.quotedMessage : msg.message)[0]
                    const getMediaMetaBuff = await downloadMediaMessageWithBuffer(msg.message[getMediaMessageTypeOfReport] || msg.message.extendedTextMessage?.contextInfo.quotedMessage[getMediaMessageTypeOfReport], getMediaMessageTypeOfReport.replace("Message", ""))
                    makeToSendMessagesObject = {};
                    makeToSendMessagesObject[getMediaMessageTypeOfReport.replace("Message", "")] = getMediaMetaBuff;
                    makeToSendMessagesObject["caption"] = txt_report;
                    makeToSendMessagesObject.contextInfo = {
                        "externalAdReply": {
                            title: 'Report debug',
                            sourceUrl: `https://wa.me/${sender.split("@")[0]}`,
                            body: `Request by ${pushname}`,
                            mediaType: 3,
                            "thumbnail": get_ppuser
                        },
                    },
                        cakrayp.sendMessage(`${ownerNumber}@s.whatsapp.net`, makeToSendMessagesObject).then(() => reply(language_text('Berhasil mengirim pesan ke owner', 'Success message sent to owner')))
                } else {
                    if (!messagesText) return reply(language_text(
                        `Silahkan masukkan data yang anda ingin report dengan cara mengirim text atau foto/video, Kami dapat membantu dengan senang hati 😊`,
                        `Please enter the data you want to report by sending text or photos/videos, we will be happy to help 😊`
                    ))
                    contextInfo = {
                        "externalAdReply": {
                            title: 'Report debug',
                            sourceUrl: `https://wa.me/${sender.split("@")[0]}`,
                            body: `Request by ${pushname}`,
                            mediaType: 3,
                            "thumbnail": get_ppuser
                        },
                    },
                        cakrayp.sendMessage(`${ownerNumber}@s.whatsapp.net`, { text: txt_report, contextInfo }).then(() => reply(language_text('Berhasil mengirim pesan ke owner', 'Success message sent to owner')))
                }
                break

            // Security and Owner
            case 'bc':
            case 'broadcast':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                let list_chats_user = store.chats.all().map(v => v.id)
                if (isQuotedImage || isQuotedVideo || isImage || isVideo) {
                    const getMediaMessageTypeOfBroadcast = Object.keys(type == 'extendedTextMessage' ? msg.message.extendedTextMessage?.contextInfo.quotedMessage : msg.message)[0]
                    const getMediaMetaBuff = await downloadMediaMessageWithBuffer(msg.message[getMediaMessageTypeOfBroadcast] || msg.message.extendedTextMessage?.contextInfo.quotedMessage[getMediaMessageTypeOfBroadcast], getMediaMessageTypeOfBroadcast.replace("Message", ""))
                    for (let Jid of list_chats_user) {
                        let makeToSendMessagesObject = {};
                        makeToSendMessagesObject[getMediaMessageTypeOfBroadcast.replace("Message", "")] = getMediaMetaBuff;     //  Make this Object { image/video: <buffer> }
                        makeToSendMessagesObject['caption'] = `*「 Broadcast 」*\n\n${messagesText ? messagesText : "No Messages"}\n\n© Made by ${author}`;
                        cakrayp.sendMessage(Jid, makeToSendMessagesObject)
                    }
                } else {
                    if (!messagesText) return reply(language_text(`Silakan masukkan text atau kirim foto/video yang akan dikirimkan ke semua chat\n\nContoh: *${prefix + command}* <text>\n*${prefix + command}* hello world`, `Please enter text or send a photo/video that will be sent to all chats\n\nExample: *${prefix + command}* <text>\n*${prefix + command}* hello world`))
                    for (let Jid of list_chats_user) {
                        cakrayp.sendMessage(Jid, {
                            text: `*「 Broadcast 」*\n\n${messagesText ? messagesText : "No Messages"}\n\n© Made by ${author}`
                        })
                    }
                }
                break
            case 'otagall':
            case 'tagall':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins || !isOwner) return reply(commannd_response('admin_owner'))
                let group_data_tagall = await cakrayp.groupMetadata(from)
                let participants_ = group_data_tagall.participants
                txt_tagged = messagesText ? `*Message :* ${messagesText}\n\n` : ''
                txt_tagged += '┌──「 Mention ALL 」\n'
                txt_tagged += `├ Totally : ${participants_.length}\n│\n`
                let arr_mem = []
                for (let mem of participants_) {
                    txt_tagged += `├➢ @${mem.id.split('@')[0]}\n`
                    arr_mem.push(mem.id)
                }
                txt_tagged += `│\n└──「 ${Bot_Name} 」`
                cakrayp.sendMessage(from, {
                    text: txt_tagged,
                    contextInfo: {
                        mentionedJid: arr_mem
                    }
                })
                break
            case 'hidetag':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins || !isOwner) return reply(commannd_response('admin_owner'))
                let group_data_hidetag = await cakrayp.groupMetadata(from)
                let participants_list = group_data_hidetag.participants;
                cakrayp.sendMessage(from, {
                    text: messagesText ? messagesText : '',
                    contextInfo: {
                        mentionedJid: participants_list.map((memb) => memb.id)
                    }
                })
                break
            case 'block':
            case 'unblock':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (isGroup && msg.message.extendedTextMessage !== null) {
                    const mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                    if (isGroup && msg.message.extendedTextMessage === null) return reply(language_text('Pengguna tidak ditemukan, Silahkan ditag pengguna yang lain', 'Users are not found, please tag another user'))
                    for (let i = 0; i < mentioned.length; i++) {
                        await cakrayp.updateBlockStatus(mentioned[i], command);
                    }
                    reply(language_text(`Berhasil ${command == 'block' ? 'blok' : 'Membuka blok'} target tersebut.`, `Successfully to ${command} target.`))
                } else if (messagesText && msg.message.extendedTextMessage === null) {
                    if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                    if (!/^[0-9]+$/.test(messagesText)) return reply(commad_response('numberOnly'))
                    if (messagesText.length > 18) return reply(language_text('Mohon maaf nomor ini telah melebihi 18 karakter', 'Sorry, this number has exceeded 18 characters'))
                    if (messagesText.length < 6) return reply(language_text('Mohon maaf nomor ini tidak melebihi 18 karakter', 'Sorry, this number does not exceed 18 characters'))
                    await cakrayp.updateBlockStatus(`${messagesText}@s.whatsapp.net`, command);
                    reply(language_text(`Berhasil ${command == 'block' ? 'blok' : 'Membuka blok'} target tersebut.`, `Successfully to ${commnnd} target.`))
                }
                break
            case 'addbanned':
            case 'banned':
            case 'ban':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (isGroup && msg.message.extendedTextMessage !== null) {
                    const mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                    if (isGroup && msg.message.extendedTextMessage === null) return reply(language_text('Pengguna tidak ditemukan, Silahkan ditag pengguna yang lain', 'Users are not found, please tag another user'))
                    for (let i = 0; i < mentioned.length; i++) {
                        addDatabase(mentioned[i], 'banned', true)
                    }
                    reply(language_text('Berhasil ban target tersebut.', 'Successfully banned the target.'))
                } else if (messagesText && msg.message.extendedTextMessage === null) {
                    if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                    if (!/^[0-9]+$/.test(messagesText)) return reply(commad_response('numberOnly'))
                    if (messagesText.length > 18) return reply(language_text('Mohon maaf nomor ini telah melebihi 18 karakter', 'Sorry, this number has exceeded 18 characters'))
                    if (messagesText.length < 6) return reply(language_text('Mohon maaf nomor ini tidak melebihi 18 karakter', 'Sorry, this number does not exceed 18 characters'))
                    if (banned_.filter((jid) => jid.includes(sender))) return reply(language_text('Mohon maaf, target tersebut telah dibanned.', 'Sorry, the target has been banned.'))
                    addDatabase(`${messagesText}@s.whatsapp.net`, 'banned', true)
                    reply(language_text('Berhasil ban target tersebut.', 'Successfully banned the target.'))
                }
                break
            case 'unban':
            case 'unbanned':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (isGroup && msg.message.extendedTextMessage !== null) {
                    const mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                    if (isGroup && msg.message.extendedTextMessage === null) return reply(language_text('Pengguna tidak ditemukan, Silahkan ditag pengguna yang lain', 'Users are not found, please tag another user'))
                    for (let i = 0; i < mentioned.length; i++) {
                        addDatabase(mentioned[i], 'banned', false)
                    }
                    reply(language_text('Berhasil ban target tersebut.', 'Successfully banned the target.'))
                } else if (messagesText && msg.message.extendedTextMessage === null) {
                    if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                    if (!/^[0-9]+$/.test(messagesText)) return reply(commad_response('numberOnly'))
                    if (messagesText.length > 18) return reply(language_text('Mohon maaf nomor ini telah melebihi 18 karakter', 'Sorry, this number has exceeded 18 characters'))
                    if (messagesText.length < 6) return reply(language_text('Mohon maaf nomor ini tidak melebihi 18 karakter', 'Sorry, this number does not exceed 18 characters'))
                    if (!banned_.filter((jid) => jid.includes(sender))) return reply(language_text('Mohon maaf, target tersebut telah dibanned.', 'Sorry, the target has been banned.'))
                    addDatabase(`${messagesText}@s.whatsapp.net`, 'banned', false)
                    reply(language_text('Berhasil ban target tersebut.', 'Successfully banned the target.'))
                }
                break
            case 'add':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (!messagesText) return reply(language_text(`Silahkan tambahkan nomor target dengan perintah dibawah\n\nContoh: *${prefix + command} (nomor wa)\n*${prefix + command}* ${sender.split("@")[0]}`, `Please add the target number with the command below\n\nE.g: ${prefix}add (nomor wa)\n${prefix}add ${sender.split("@")[0]}`))
                if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                if (!/^[0-9]+$/.test(messagesText)) return reply(commannd_response('numberOnly'))
                let group_add_mem = await cakrayp.groupMetadata(from)
                let check_member_add = group_add_mem.participants
                arrmem = []
                for (let mem of check_member_add) {
                    arrmem.push(mem.id)
                }
                if (arrmem.includes(`${messagesText}@s.whatsapp.net`)) return reply(language_text('Mohon maaf dikarenakan nomor ini telah ada digroup ini', 'Sorry because this number is already in this group'))
                if (messagesText.length > 18) return reply(language_text('Mohon maaf nomor ini telah melebihi 18 karakter', 'Sorry, this number has exceeded 18 characters'))
                if (messagesText.length < 6) return reply(language_text('Mohon maaf nomor ini tidak melebihi 18 karakter', 'Sorry, this number does not exceed 18 characters'))
                await cakrayp.groupParticipantsUpdate(
                    from,
                    [messagesText + "@s.whatsapp.net"],
                    "add"
                )
                break
            case 'kick':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_remove = msg.message.extendedTextMessage.contextInfo.mentionedJid
                position = false
                Object.keys(mentionedJid_remove).forEach((i) => {
                    if (mentionedJid_remove[i] === botNumber) {
                        position = i
                    }
                })
                if (position !== false) {
                    mentionedJid_remove.splice(position, 1)
                }
                txt_kick = `┌──「 KICK 」\n`
                txt_kick += `├ Totally : ${mentionedJid_remove.length}\n│\n`
                for (let i = 0; i < mentionedJid_remove.length; i++) {
                    txt_kick += `├➢ @${mentionedJid_remove[i].split('@')[0]}\n`
                    await cakrayp.groupParticipantsUpdate(from, [mentionedJid_remove[i]], "remove")
                }
                txt_kick += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil mengeluarkan peserta dari group *${groupName}*.\n\n${txt_kick}`, `Successfully removed participants from the *${groupName}* group\n\n${txt_kick}`), mentionedJid_remove, true)
                break
            case 'oadd':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (!messagesText) return reply(language_text(`Silahkan tambahkan nomor target dengan perintah dibawah\n\nContoh: *${prefix + command} (nomor wa)\n*${prefix + command}* ${sender.split("@")[0]}`, `Please add the target number with the command below\n\nE.g: ${prefix}add (nomor wa)\n${prefix}add ${sender.split("@")[0]}`))
                if (!/^[0-9]+$/.test(messagesText) && /\+|-/.test(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk angka. jika ingin memasukan nomor jangan lupa hilangkan tanda "+", "-" dan spasi', 'Sorry this is for numbers only. If you want to enter a phone number, don\'t forget to remove the "+", "-" signs and space.'))
                if (!/^[0-9]+$/.test(messagesText)) return reply(commannd_response('numberOnly'))
                let group_oadd_mem = await cakrayp.groupMetadata(from)
                let check_member_oadd = group_oadd_mem.participants
                arrmem = []
                for (let mem of check_member_oadd) {
                    arrmem.push(mem.id)
                }
                if (arrmem.includes(`${messagesText}@s.whatsapp.net`)) return reply(language_text('Mohon maaf dikarenakan member ini telah ada digroup ini', 'Sorry because this member is already in this group'))
                if (messagesText.length > 18) return reply(language_text('Mohon maaf nomor ini telah melebihi 18 karakter', 'Sorry, this number has exceeded 18 characters'))
                if (messagesText.length < 6) return reply(language_text('Mohon maaf nomor ini tidak melebihi 18 karakter', 'Sorry, this number does not exceed 18 characters'))
                await cakrayp.groupParticipantsUpdate(
                    from,
                    [messagesText + "@s.whatsapp.net"],
                    "add"
                )
                break
            case 'okick':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_remove = msg.message.extendedTextMessage.contextInfo.mentionedJid
                position = false
                Object.keys(mentionedJid_remove).forEach((i) => {
                    if (mentionedJid_remove[i] === botNumber) {
                        position = i
                    }
                })
                if (position !== false) {
                    mentionedJid_remove.splice(position, 1)
                }
                txt_okick = `┌──「 KICK 」\n`
                txt_okick += `├ Totally : ${mentionedJid_remove.length}\n│\n`
                for (let i = 0; i < mentionedJid_remove.length; i++) {
                    txt_okick += `├➢ @${mentionedJid_remove[i].split('@')[0]}\n`
                    await cakrayp.groupParticipantsUpdate(from, [mentionedJid_remove[i]], "remove")
                }
                txt_okick += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil mengeluarkan peserta dari group *${groupName}*.\n\n${txt_okick}`, `Successfully removed participants from the *${groupName}* group\n\n${txt_okick}`), mentionedJid_remove, true)
                break
            case 'kickall':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                var group_metaData = await cakrayp.groupMetadata(from);
                var get_participants_ = group_metaData.participants;
                var listmember = get_participants_.filter((cek) => !cek.admin).map((memb) => memb.id);
                // var adminsCounts = get_participants_.filter((cek) => cek.admin).length   
                if (listmember.length === 0) {
                    reply(language_text('Mohon maaf dikarenakan ada beberapa admin yang tidak dapat dikeluarkan dari group ini', 'Sorry because there are some admins who can\'t be removed from this group'))
                } else {
                    if (kickall.map((x) => x.Jid).includes(from)) {
                        mentions(
                            language_text(
                              `Semua member group ini akan dikeluarkan dalam *10 detik* dari group ini oleh @${sender.split('@')[0]}`,
                              `The all participants will remove in 10 seconds, from this group by @${sender.split('@')[0]}`
                            ), [sender], true
                        )
                        setTimeout(async() => {
                            for (let i = 0; i < listmember.length; i++) {
                                await cakrayp.groupParticipantsUpdate(from, [listmember[i]], "remove")
                            }
                        }, 11000)
                    } else {
                        cakrayp.sendMessage(from, { text : language_text(
                            `Apakah anda yakin ingin melakukan perintah ini?\n\n*Catatan:* Perintah *${prefix}kickall* dapat mengeluarkan semua member digroup ini *(durasi 10 detik)*, kecuali admin\n\njika ini memang keputusan anda, silahkan ketik *${prefix}kickall* lagi untuk memulai dalam 10 detik.`,
                            `Are you sure to do this command?\n\n*Note:* The command *${prefix}kickall* can remove all members in this group *(10 seconds duration)*, except admin\n\nIf this is your decision, please feel free to type *${prefix}kickall* again to get started in 10 seconds.`
                        )}, { quoted: msg })
                        kickall.push({ Jid: from, expired: Date.now() + 10000 })
                    }
                }
                break
            case 'promote':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_promote = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                // console.log(mentionedJid_promote)
                var group_metaData = await cakrayp.groupMetadata(from)
                var getIsGroupAdmin = group_metaData.participants.filter((x) => x.admin).map((x) => x.id); // for includes, when user has been already a admin
                txt_promote = `┌──「 PROMOTE 」\n`
                txt_promote += `├ Totally : ${mentionedJid_promote.length}\n│\n`
                for (let i = 0; i < mentionedJid_promote.length; i++) {
                    if (getIsGroupAdmin.includes(mentionedJid_promote[i])) {
                        txt_promote += `├➢ @${mentionedJid_promote[i].split('@')[0]} (Admin)\n`
                    } else {
                        txt_promote += `├➢ @${mentionedJid_promote[i].split('@')[0]}\n`
                        await cakrayp.groupParticipantsUpdate(from, [mentionedJid_promote[i]], command)
                    }
                }
                txt_promote += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil menambahkan sebagai admin group.\n\n${txt_promote}`, `Successfully added as group admin.\n\n${txt_promote}`), mentionedJid_promote, true)
                break
            case 'demote':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_demote = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                // console.log(mentionedJid_demote)
                var group_metaData = await cakrayp.groupMetadata(from)
                var getIsGroupAdmin = group_metaData.participants.filter((x) => x.admin).map((x) => x.id); // for includes, when user has not been a admin
                txt_demote = `┌──「 DEMOTE 」\n`
                txt_demote += `├ Totally : ${mentionedJid_demote.length}\n│\n`
                for (let i = 0; i < mentionedJid_demote.length; i++) {
                    if (!getIsGroupAdmin.includes(mentionedJid_demote[i])) {
                        txt_demote += `├➢ @${mentionedJid_demote[i].split('@')[0]} (Not Admin)\n`
                    } else {
                        txt_demote += `├➢ @${mentionedJid_demote[i].split('@')[0]}\n`
                        await cakrayp.groupParticipantsUpdate(from, [mentionedJid_demote[i]], command)
                    }
                }
                txt_demote += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil menghentikan sebagai admin group.\n\n${txt_demote}`, `Succeeded in stopping as group admin.\n\n${txt_demote}`), mentionedJid_demote, true)
                break
            case 'opromote':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_promote = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                // console.log(mentionedJid_promote)
                var group_metaData = await cakrayp.groupMetadata(from)
                var getIsGroupAdmin = group_metaData.participants.filter((x) => x.admin).map((x) => x.id); // for includes, when user has been already a admin
                txt_promote = `┌──「 PROMOTE 」\n`
                txt_promote += `├ Totally : ${mentionedJid_promote.length}\n│\n`
                for (let i = 0; i < mentionedJid_promote.length; i++) {
                    if (getIsGroupAdmin.includes(mentionedJid_promote[i])) {
                        txt_promote += `├➢ @${mentionedJid_promote[i].split('@')[0]} (Admin)\n`
                    } else {
                        txt_promote += `├➢ @${mentionedJid_promote[i].split('@')[0]}\n`
                        await cakrayp.groupParticipantsUpdate(from, [mentionedJid_promote[i]], command.slice(1))
                    }
                }
                txt_promote += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil menambahkan sebagai admin group.\n\n${txt_promote}`, `Successfully added as group admin.\n\n${txt_promote}`), mentionedJid_promote, true)
                break
            case 'odemote':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage.contextInfo.mentionedJid === undefined) return mentions(language_text(`Silakhan di tag user dari target digroup\n\nContoh: *${prefix + command}* @${sender.split('@')[0]}`, `Please tag user from target in group\nExample: *${prefix + command}* @${sender.split('@')[0]}`), [sender], true)
                var mentionedJid_demote = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                // console.log(mentionedJid_demote)
                var group_metaData = await cakrayp.groupMetadata(from)
                var getIsGroupAdmin = group_metaData.participants.filter((x) => x.admin).map((x) => x.id); // for includes, when user hasn't been a admin
                txt_demote = `┌──「 DEMOTE 」\n`
                txt_demote += `├ Totally : ${mentionedJid_demote.length}\n│\n`
                for (let i = 0; i < mentionedJid_demote.length; i++) {
                    if (!getIsGroupAdmin.includes(mentionedJid_demote[i])) {
                        txt_demote += `├➢ @${mentionedJid_demote[i].split('@')[0]} (Not Admin)\n`
                    } else {
                        txt_demote += `├➢ @${mentionedJid_demote[i].split('@')[0]}\n`
                        await cakrayp.groupParticipantsUpdate(from, [mentionedJid_demote[i]], command.slice(1))
                    }
                }
                txt_demote += `│\n└──「 ${Bot_Name} 」`
                mentions(language_text(`Berhasil menghentikan sebagai admin group.\n\n${txt_demote}`, `Succeeded in stopping as group admin.\n\n${txt_demote}`), mentionedJid_demote, true)
                break
            case 'leave':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                reply(language_text('Terima kasih telah Menggunakan Bot ini, dan jangan Lupa Balik lagi iyaah :)', "Thank you for using the bot, and don't forget to come back again :)"))
                setTimeout(async () => {
                    await cakrayp.groupLeave(from)
                }, 5000)
                break
            case 'oleave':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (messagesText == 'en') {
                    lang_leave = 'This bot was ordered to leave the group by the owner'
                    lang_leave2 = 'Thank you for using the bot, and don\'t forget to come back again :)'
                } else if (messagesText == 'id') {
                    lang_leave = 'Bot ini diperintahkan untuk keluar dari group oleh owner'
                    lang_leave2 = 'Terima kasih telah Menggunakan Bot ini, dan jangan Lupa Balik lagi iyaah :)'
                } else {
                    lang_leave = language_text('Bot ini diperintahkan untuk keluar dari group oleh', 'Bot ini diperintahkan untuk keluar dari group oleh')
                    lang_leave2 = language_text('Terima kasih telah Menggunakan Bot ini, dan jangan Lupa Balik lagi iyaah :)', "Thank you for using the bot, and don't forget to come back again :)")
                }
                if (messagesText.endsWith("@g.us")) {
                    cakrayp.sendMessage(messagesText, { text: lang_leave }, { quoted: msg }).then(() => setTimeout(() => { cakrayp.sendMessage(from, { text: lang_leave2 }) }, 5000))
                    setTimeout(async () => {
                        await cakrayp.groupLeave(messagesText)
                    }, 10000)
                } else {
                    cakrayp.sendMessage(from, { text: lang_leave }, { quoted: msg }).then(() => setTimeout(() => { cakrayp.sendMessage(from, { text: lang_leave2 }) }, 5000))
                    setTimeout(async () => {
                        await cakrayp.groupLeave(from)
                    }, 10000)
                }
                break
            case 'del':
            case 'delete':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins || !isOwner) return reply(commannd_response('admin_owner'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (msg.message.extendedTextMessage?.contextInfo.participant == botNumber) {
                    cakrayp.sendMessage(from, {
                        delete: {
                            remoteJid: from,
                            fromMe: true,
                            id: msg.message.extendedTextMessage.contextInfo.stanzaId,
                            participant: botNumber
                        }
                    })
                } else {
                    reply(language_text(
                        'Mohon maaf, pesan user (pengguna) ini tidak dapat dihapus dikarenakan sebagai khusus untuk pesan bot, Silahkan direply untuk menghapus pesan bot ini',
                        'Sorry, this user message cannot be deleted due to specifically for a bot message, please reply to delete this bot message'
                    ))
                }
                break
            case 'join':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (!messagesText) return reply(language_text(`Silahkan masukkan link group terlebih dahulu\n\nContoh: *${prefix + command}* <link gc>\n*${prefix + command}* https://chat.whatsapp.com/xxxxxx`, `Please enter the group link first\n\nE.g: *${prefix + command}* <link gc>\n*${prefix + command}* https://chat.whatsapp.com/xxxxxx`))
                const linkGc_Regex = /(?:http(?:s):\/\/)chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{21,24})/i
                if (linkGc_Regex.test(messagesText)) {
                    const getGroupCode = linkGc_Regex.exec(chats)[1]
                    const queryInvite = async (code) => {
                        const results = await cakrayp.query({
                            tag: "iq",
                            attrs: {
                                type: "get",
                                xmlns: "w:g2",
                                to: "@g.us"
                            }, content: [{ tag: "invite", attrs: { code } }]
                        })
                        const group = getBinaryNodeChild(results, "group");
                        return group.attrs;
                    };
                    queryInvite(getGroupCode)
                        .then(async (check) => {
                            if (check.size >= 257) return reply(language_text("Mohon maaf, group ini telah tercapai maksimal *257*", "Sorry, This group is full maximum *257*"));
                            // if (check.size < 80) return reply("The minimum requirement for group members must be more than 80 people.");
                            // Trying to join group with given invite code
                            try {
                                await cakrayp.groupAcceptInvite(getGroupCode)
                                reply(language_text('Berhasil untuk bergabung di group.', 'Success to join in the group.'))
                            } catch (err) {
                                reply(language_text("Sepertinya grup telah penuh atau tidak valid ketika mencoba untuk bergabung :/", "Looks like the group already full or became invalid when I'm trying to join :/"));
                            }
                        })
                        .catch(async () => {
                            reply(language_text("Mohon maaf link yang anda masukkan itu tidak valid", "Sorry, the link you entered is invalid."));
                        })
                } else {
                    reply(language_text('Mohon maaf, ini khusus untuk link group.', 'Sorry, this is specifically for group links.'))
                }
                break
            case 'setppbot':
                if (!isOwner) return reply(commannd_response('owner_bot'))
                if (isImage || isQuotedImage) {
                    let stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                    await cakrayp.updateProfilePicture(botNumber, { stream }).then(() => reply(language_text('Berhasil mengganti profile bot', 'Successfully change bot profile.')))
                } else {
                    reply(language_text(`Silahkan kirim gambar dengan caption *${prefix + command}* sesuai keinginan anda atau tag gambar yang sudah dikirim`, `Please send a picture with caption *${prefix + command}* to your wishes or tag images that have been sent`))
                }
                break
            case 'setgrouppic':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('Bot_admingroup'))
                if (isImage || isQuotedImage) {
                    let stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                    await cakrayp.updateProfilePicture(from, { stream }).then(() => {
                        mentions(language_text(`Berhasil mengganti foto profile group dari @${sender.split("@")[0]}`, `Successfully to Update group picture from @${sender.split("@")[0]}`), [sender], true)
                    })
                } else {
                    reply(language_text(`Silahkan kirim gambar dengan caption *${prefix + command}* sesuai keinginan anda atau tag gambar yang sudah dikirim`, `Please send a picture with caption *${prefix + command}* to your wishes or tag images that have been sent`))
                }
                break
            case 'setgroupdesc':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!messagesText) return reply(language_text(`Silahkan masukkan text untuk ${groupMetadata.desc ? randomArr(['mengganti', 'mengubah']) : 'menambahkan'} deskripsi group terlebih dahulu\n\nContoh: *${prefix + command}* <name>\n*${prefix + command}* hello world`, `Please enter text to ${groupMetadata.desc ? 'change' : 'add'} the group description\n\nE.g: *${prefix + command}* <name>\n*${prefix + command}* hello world`))
                await cakrayp.groupUpdateDescription(from, messagesText)
                mentions(language_text(`Berhasil mengganti deskripsi group dari @${sender.split("@")[0]}, Silahkan diketik *${prefix}descgc* untuk melihat deskripsi group tersebut.`, `Successfully to Update group description from @${sender.split("@")[0]}, Please type *${prefix}descgc* to see the group description.`), [sender], true)
                break
            case 'setgroupname':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!messagesText) return reply(language_text(`Silahkan masukkan nama group terlebih dahulu\n\nContoh: *${prefix + command}* <name>\n*${prefix + command}* hello world`, `Please enter a group name\n\nE.g: *${prefix + command}* <name>\n*${prefix + command}* hello world`))
                await cakrayp.groupUpdateSubject(from, messagesText)
                mentions(language_text(`Berhasil mengganti nama group *"${groupName}"* ke *"${messagesText}"* dari @${sender.split("@")[0]}`, `Successfully to Update group name of *"${groupName}"* to *"${args.join(" ")}"* from @${sender.split("@")[0]}`), [sender], true)
                break
            case 'group':
            case 'setgroupchange':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                var checkGc = await cakrayp.groupMetadata(from);
                if (messagesText === "open") {
                    if (!checkGc.announce) {    // if false
                        reply(language_text('Mohon maaf, group ini telah dibuka, silahkan ditutup terlebih dahulu.', 'Sorry, this group has been opened, please close it first.'))
                    } else {
                        await cakrayp.groupSettingUpdate(from, 'not_announcement')
                        mentions(language_text(`*「 GROUP OPEN 」*\nBerhasil membuka group ini dan semua peserta dapat mengirim pesan *${groupName}* dari @${sender.split("@")[0]}`, `*「 GROUP OPEN 」*\nSuccessfully to open this group of *${groupName}* from @${sender.split("@")[0]}`), [sender], true)
                    }

                } else if (messagesText === "close") {
                    if (checkGc.announce) {     // if true
                        reply(language_text('Mohon maaf, group ini telah ditutup oleh Admin!', 'Sorry, this group has been closed by admin!'))
                    } else {
                        await cakrayp.groupSettingUpdate(from, 'announcement')
                        mentions(language_text(`*「 GROUP CLOSE 」*\nBerhasil menutup group ini dan hanya admin dapat mengirim pesan *${groupName}* dari @${sender.split("@")[0]}`, `*「 GROUP CLOSE 」*\nSuccessfully to close this group of *${groupName}* from @${sender.split("@")[0]}`), [sender], true)
                    }

                } else {
                    buttons = [
                        { buttonId: `${prefix + command} open`, buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: `${prefix + command} close`, buttonText: { displayText: 'CLOSE' }, type: 1 },
                    ]
                    cakrayp.sendMessage(from, {
                        image: botProfile,
                        caption: language_text(`Silahkan dipilih terlebih dahulu untuk mengubah peraturan digroup.\n\n`, `Please select for settings change here.\n\n`),
                        footer: `${prefix + command} open (open the group)\n${prefix + command} close (close the group)`,
                        buttons,
                        headerType: 4
                    })
                }
                break
            case 'sendallmember':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                // if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                if (messagesText == '-help') return cakrayp.sendMessage(from, {
                    image: fs.readFileSync('./file/img/IMG_20211208_170825.jpg'),
                    caption: language_text(
                        `Anda dapat mengirim foto dan video dengan caption *${prefix + command}* atau direply foto dan video yang telah dikirim, untuk mengirim ke semua member dengan contoh digambar ini`,
                        `You can send photos and videos with the caption *${prefix + command}* or reply to photos and videos that have been sent, to send to all members with this drawn example`
                    )
                }, { quoted: msg })
                const member_group = await cakrayp.groupMetadata(from)
                console.log(member_group)
                const owner_check = member_group.owner ? `@${member_group.owner.split('@')[0]}` : language_text('tidak diketahui', 'Unknown');
                const participants___ = member_group['participants']
                if (isIndonesian) {
                    ini_text = `*「 Send Messages 」*\n\n`
                    ini_text += `*Pengirim :* @${sender.split('@')[0]}\n`
                    ini_text += `*NamaGroup :* ${member_group.subject}\n`
                    ini_text += `*JumlahMember :* ${participants___.length}\n`
                    ini_text += `*OwnerGroup :* ${owner_check}\n`
                    ini_text += `*AdminGroup :* ${isGroupAdmins}\n`
                    ini_text += `\n*--- Message ---*\n\n${messagesText ? messagesText : '(Tidak ada Pesan)'}`
                } else {
                    ini_text = `*「 Send Messages 」*\n\n`
                    ini_text += `*Sender :* @${sender.split('@')[0]}\n`
                    ini_text += `*GroupName :* ${member_group.subject}\n`
                    ini_text += `*MemberCount :* ${participants___.length}\n`
                    ini_text += `*OwnerGroup :* ${owner_check}\n`
                    ini_text += `*AdminGroup :* ${isGroupAdmins}\n`
                    ini_text += `\n*--- Message ---*\n\n${messagesText ? messagesText : '(No messages)'}`
                }
                if (isQuotedImage || isQuotedVideo || isImage || isVideo) {
                    const getMediaMessageTypeOfsendAllMember = Object.keys(type == 'extendedTextMessage' ? msg.message.extendedTextMessage?.contextInfo.quotedMessage : msg.message)[0]
                    const getMediaMetaBuff = await downloadMediaMessageWithBuffer(msg.message[getMediaMessageTypeOfsendAllMember] || msg.message.extendedTextMessage?.contextInfo.quotedMessage[getMediaMessageTypeOfsendAllMember], getMediaMessageTypeOfsendAllMember.replace("Message", ""))
                    for (let i = 0; i < participants___.length; i++) {
                        let makeToSendMessagesObject = {}
                        makeToSendMessagesObject[getMediaMessageTypeOfsendAllMember.replace("Message", "")] = getMediaMetaBuff;
                        makeToSendMessagesObject['caption'] = ini_text;
                        cakrayp.sendMessage(participants___[i].id, { ...makeToSendMessagesObject, contextInfo: { "mentionedJid": [sender, member_group.owner ? member_group.owner : ""] } })
                    }
                    reply(language_text('Berhasil mengirim pesan ke semua member', 'Success to send all members'))
                } else {
                    if (!messagesText) return reply(language_text(
                        `Silahkan masukkan text atau kirim foto dan video dengan caption *${prefix + command}* untuk mengirim ke semua member group`,
                        `Please enter text or send photos and videos with the caption *${prefix + command}* to send to all group members`))
                    for (let i = 0; i < participants___.length; i++) {
                        console.log(participants___[i])
                        cakrayp.sendMessage(participants___[i].id, { text: ini_text, contextInfo: { "mentionedJid": [sender, member_group.owner ? member_group.owner : ""] } })
                    }
                    reply(language_text(
                        `Berhasil mengirim pesan ke semua member, Jangan lupa ditambahkan sebuah -help *${prefix + command} -help* untuk melihat contohnya`,
                        `Success to send all members, don\'t forget to add a -help *${prefix + command} -help* to see a examples`))
                }
                break
            case 'linkgroup':
            case 'linkgc':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                cakrayp.groupInviteCode(from)
                    .then(async (response) => {
                        const get_ppGc = await cakrayp.profilePictureUrl(from, "image")
                        cakrayp.sendMessage(from, {
                            text: `*Name :* ${groupMetadata.subject}\n\n*Link :* https://chat.whatsapp.com/${response}`,
                            contextInfo: {
                                "externalAdReply": {
                                    title: Bot_Name,
                                    sourceUrl: `https://chat.whatsapp.com/${response}`,
                                    body: `~> Request By ${pushname}`,
                                    mediaType: 3,
                                    "thumbnail": await getBuffer(get_ppGc)
                                },
                                "mentionedJid": [sender]
                            }
                        }, { quoted: msg })
                    })
                break
            case 'antilink':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                let group_data_antilink = await cakrayp.groupMetadata(from)
                position = false
                Object.keys(antilink_).forEach((i) => {
                    if (antilink_[i].groupJid == from) {
                        position = i
                    }
                })
                if (messagesText == 'enable') {
                    if (antilink_.filter((x) => x.groupJid.includes(from))[0]) return mentions(language_text(`Fitur ini telah diaktifkan oleh @${antilink_[position].userJid.split('@')[0]}`, `This feature has been activated by @${antilink_[position].userJid.split('@')[0]}`), [antilink_[position].userJid], true)
                    addDatabase(group_data_antilink.id, 'antilink', true)
                    reply(language_text(
                        '*「 ANTILINK 」*\n\nFitur Antilink Berhasil diaktifkan\n\n*Note:* fitur *Antilink* telah menyediakan pendeteksi link untuk setiap peserta mengirim tautan group, otomatis bot akan dikeluarkan dari group ini, kecuali admin dan pemilik group tersebut.',
                        '*「 ANTILINK 」*\n\nThe Antilink features has been successfully activated\n\nthis feature of *Antilink* has provided a link detector for each participant sending a group link, bots will automatically be removed from this group, except admins and owner of the group'
                    ))
                } else if (messagesText == 'disable') {
                    if (!antilink_.filter((x) => x.groupJid.includes(from))[0]) return reply(language_text(`Fitur ini belum diaktifkan, Silahkan diaktifkan terlebih dahulu.`, `This feature has not been activated, please activate it first`))
                    addDatabase(group_data_antilink.id, 'antilink', false)
                    reply(language_text('fitur antilink berhasil dinonaktifkan', 'antilink feature has been disabled successfully.'))
                } else {
                    buttons = [
                        { buttonId: `${prefix + command} enable`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'OFF' }, type: 1 },
                    ]
                    cakrayp.sendMessage(from, {
                        image: botProfile,
                        jpegThumbnail: botProfile,
                        caption: language_text(`Silahkan dipilih terlebih dahulu.\n\n`, `Please select first.\n\n`),
                        footer: `${prefix + command} enable (ON)\n${prefix + command} disable (OFF)`,
                        buttons,
                        headerType: 4
                    })
                }
                break
            case 'welcome':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                if (!isGroupAdmins) return reply(commannd_response('admingroup'))
                if (!isBotGroupAdmins) return reply(commannd_response('bot_admingroup'))
                let group_data_welcome = await cakrayp.groupMetadata(from)
                position = false
                Object.keys(welcome_).forEach((i) => {
                    if (welcome_[i].groupJid == from) {
                        position = i
                    }
                })
                if (messagesText == 'enable') {
                    if (welcome_.filter((x) => x.groupJid.includes(from))[0]) return mentions(language_text(`Fitur ini telah diaktifkan oleh @${welcome_[position].userJid.split('@')[0]}`, `This feature has been activated by @${welcome_[position].userJid.split('@')[0]}`), [welcome_[position].userJid], true)
                    addDatabase(group_data_welcome.id, 'welcome', true)
                    reply(language_text(
                        'Fitur welcome dan left Berhasil diaktifkan.\n\n*Note:* fitur *welcome dan left* dapat digunakan untuk setiap ada perubahan member, ketika member telah ditambahkan/dikeluarkan dapat terdeteksi bahwa ada perubahan digroup.',
                        'The welcome and left features has been successfully activated.\n\n*Note:* This features of *Welcome and Left* can be used for any changes in members, when the member has been added/excluded it can be detected that there is a Dizable change.')
                    )
                } else if (messagesText == 'disable') {
                    if (!welcome_.filter((x) => x.groupJid.includes(from))[0]) return reply(language_text(`Fitur ini belum diaktifkan, Silahkan diaktifkan terlebih dahulu.`, `This feature has not been activated, please activate it first`))
                    addDatabase(group_data_welcome.id, 'welcome', false)
                    reply(language_text('fitur welcome berhasil dinonaktifkan', 'welcome feature has been disabled successfully.'))
                } else {
                    buttons = [
                        { buttonId: `${prefix + command} enable`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'OFF' }, type: 1 },
                    ]
                    cakrayp.sendMessage(from, {
                        image: botProfile,
                        jpegThumbnail: botProfile,
                        caption: language_text(`Silahkan dipilih terlebih dahulu.\n\n`, `Please select first.\n\n`),
                        footer: `${prefix + command} enable (ON)\n${prefix + command} disable (OFF)`,
                        buttons,
                        headerType: 4
                    })
                }
                break
            case 'ceklink':
            case 'checklink':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link group yang akan dicek\n\nContoh: *${prefix + command}* <link group>\n*${prefix + command}* https://chat.whatsapp.com/LVkPTvaxjRlE3c5azivEpk`, `Please enter the link of the group to be checked\n\n*${prefix + command}* <link group>\n*${prefix + command}* https://chat.whatsapp.com/LVkPTvaxjRlE3c5azivEpk`))
                const GroupLinkRegex = /(?:http(?:s):\/\/)chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{21,24})/;
                if (GroupLinkRegex.test(messagesText)) {
                    const getCodeFromLink = GroupLinkRegex.exec(messagesText)[1]
                    const checkLinkGroup = async (code) => {
                        const results = await cakrayp.query({
                            tag: "iq",
                            attrs: {
                                type: "get",
                                xmlns: "w:g2",
                                to: "@g.us"
                            }, content: [{ tag: "invite", attrs: { code } }]
                        })
                        const group = getBinaryNodeChild(results, "group");
                        return group.attrs;
                    };
                    checkLinkGroup(getCodeFromLink)
                        .then(async (data) => {
                            const creator = data.creator ? data.creator : language_text('Tidak diketahui', 'Unknown')
                            txt_checkLinkgc = '*「 GROUP INFO 」*\n\n'
                            txt_checkLinkgc += `*• ID :* ${data.id}@g.us\n`
                            txt_checkLinkgc += `*• Title :* ${data.subject}\n`
                            txt_checkLinkgc += `*• Member :* ${data.size}\n`
                            txt_checkLinkgc += `*• OwnerGroup :* ${creator}\n`
                            txt_checkLinkgc += `*• CreatedAt :* ${new Date(data.creation * 1000).toDateString('jv')}\n\n`
                            txt_checkLinkgc += `© Made by ${author}`
                            reply(txt_checkLinkgc)
                        })
                        .catch(err => {
                            reply(language_text("Mohon maaf link yang anda masukkan itu tidak valid", "Sorry, the link you entered is invalid."));
                        })
                } else {
                    reply(language_text('Mohon maaf, ini khusus untuk link group.', 'Sorry, this is specifically for group links.'))
                }
                break
            case 'infobot':
                infobot(cakrayp, store)
                    .then(async (data) => {
                        infobot_txt = `*「 INFO BOT 」*\n\n`
                        infobot_txt += `*• Name :* ${data.name}\n`
                        infobot_txt += `*• Prefix :* \`\`\`" ${prefix} "\`\`\`\n`
                        infobot_txt += `*• Owner :* https://wa.me/${ownerNumber}\n`
                        infobot_txt += `*• Lib :* ${lib_package}\n`
                        infobot_txt += `*• Rest Api* : ${apiCakra}\n`
                        // infobot_txt += `*• Web Server* : ${hostname}/documentation\n`
                        infobot_txt += `*• Type :* Nodejs ${data.nodeVersion}\n`
                        infobot_txt += `*• Language :* Javascript\n\n`
                        infobot_txt += `*「 CHAT COUNT 」*\n`
                        infobot_txt += `*• Private :* ${data.chats.private}\n`
                        infobot_txt += `*• Groups :* ${data.chats.groups}\n`
                        infobot_txt += `*• Total :* ${data.chats.total}\n\n`
                        infobot_txt += `*「 ACTIVITY 」*\n`
                        infobot_txt += `*• Server Time :* ${data.activity.server_time}\n`
                        infobot_txt += `*• Uptime :* ${data.activity.uptime}\n`
                        infobot_txt += `*• Memory :* ${data.activity.memory}\n`
                        infobot_txt += `*• Memory used :* ${data.activity.memory_used}\n`
                        infobot_txt += `*• CPU :* ${data.activity.cpu}\n`
                        infobot_txt += `*• Disk :* ${data.activity.disk}\n\n`
                        infobot_txt += `\`\`\`${JSON.stringify(cakrayp.user, 'spaces', 2)}\`\`\`\n\n\n`
                        infobot_txt += `*• Runtime :*\n${language_text(runtime(process.uptime()), await translate(runtime(process.uptime())))}\n\n`
                        infobot_txt += `© Made by ${author}`
                        cakrayp.sendMessage(from, {
                            image: botProfile,
                            jpegThumbnail: botProfile,
                            caption: infobot_txt
                        }, { quoted: msg })
                    })
                break
            case 'infogroup':
            case 'infogc':
                if (!isGroup) return reply(commannd_response('groupOnly'))
                const getGroupInformationFromID = await cakrayp.groupMetadata(from);
                const nameGroupFromId = getGroupInformationFromID.subject;
                const createdAtFromGroup = new Date(getGroupInformationFromID.creation * 1000).toLocaleString('jv');
                const OwnerFromGroup = getGroupInformationFromID.owner ? getGroupInformationFromID.owner : language_text('Tidak diketahui', 'Unknown');
                const IsOwnerCreatedAtForMentions = getGroupInformationFromID.owner ? true : false
                const participantsFromGroup = getGroupInformationFromID.participants;
                const descriptionFromGroup = getGroupInformationFromID.desc ? getGroupInformationFromID.desc : '(No description)'
                try {
                    var getPicFromGroup = await getBuffer(await cakrayp.profilePictureUrl(getGroupInformationFromID.id, 'image'));
                } catch (e) {
                    var getPicFromGroup = fs.readFileSync('./file/img/no_ppuser.jpeg')
                }
                txt_infoGc = `*「 GROUP INFO 」*\n\n`
                txt_infoGc += `*• Name :* ${nameGroupFromId}\n`
                txt_infoGc += `*• OwnerGroup :* @${OwnerFromGroup.split('@')[0]}\n`
                txt_infoGc += `*• CreatedAt :* ${createdAtFromGroup}\n`
                txt_infoGc += `*• Welcome :* ${welcome_.filter((x) => x.groupJid.includes(from))[0] ? 'Active' : 'Not active'}\n`
                txt_infoGc += `*• Antilink :* ${antilink_.filter((x) => x.groupJid.includes(from))[0] ? 'Active' : 'Not active'}\n`
                txt_infoGc += `*• MemberCount :* ${participantsFromGroup.length}\n`
                txt_infoGc += `*• AdminCount :* ${participantsFromGroup.filter((x) => x.admin).length}\n`
                txt_infoGc += `*• Admingroup :* ${isGroupAdmins ? true : false}\n\n`
                txt_infoGc += `*「 GROUP DESC 」*\n\n${descriptionFromGroup}\n`
                cakrayp.sendMessage(from, {
                    image: getPicFromGroup,
                    jpegThumbnail: getPicFromGroup,
                    caption: txt_infoGc,
                    contextInfo: IsOwnerCreatedAtForMentions ? { mentionedJid: [OwnerFromGroup] } : ""
                }, { quoted: msg })
                break

            // Downloader
            case 'ytmp4':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link Youtube URL\n\nContoh: *${prefix + command}* <YT URL>\n*${prefix + command}* https://www.youtube.com/watch?v=xxxxxxxxxxx`, `Please enter the Youtube URL link\n\nExample: *${prefix + command}* <YT URL>\n*${prefix + command}* https://www.youtube.com/watch?v=xxxxxxxxxxx`))
                if (!isYtUrl(messagesText).isYoutubeUrl && /^you(tu.be|tube.com)(\/|)$/i.test(messagesText)) return reply(language_text('Mohon maaf ini sebuah link biasa, Silahkan masukkan link video diyoutube', 'Sorry, this is an ordinary link, please enter the video link on youtube'))
                if (isUrl(messagesText) && isYtUrl(messagesText).isYoutubeUrl) {
                    reply(commannd_response('wait'))
                    fetchJson(`https://youtubeapisdownloader.vercel.app/youtube/downloader/video?url=${encodeURIComponent(messagesText)}`)
                        .then(async (data) => {
                            const { thumbnail, title, description, channel, viewers, likeCount, comments, publishedAt, downloads } = data.result;
                            const downloads_video = downloads.tubemp3_biz;
                            txt_video = `*「 YT MP4 」*\n\n`
                            txt_video += `*• Title :* ${title}\n`
                            txt_video += `*• Description :* ${description}\n`
                            txt_video += `*• Channel :* ${channel}\n`
                            if (isGroup) txt_video += `*• Size :* ${downloads_video.size} (${downloads_video.quality})\n`
                            txt_video += `*• Likes :* ${likeCount}\n`
                            txt_video += `*• Viewers :* ${viewers}\n`
                            txt_video += `*• Comments :* ${comments}\n`
                            txt_video += `*• Uploads :* ${publishedAt}\n\n`
                            if (!isGroup) {
                                let buttons = []
                                for (let select_vid of downloads_video) {
                                    select_vid.url ? buttons.push({
                                        buttonId: `${prefix}getdata -ytdl -video ${select_vid.url} ${select_vid.size.replace(/ +/g, '_')} ${title.replace(/ +/g, '_')}_(${select_vid.quality.replace(/ +/g, '_')})`,
                                        buttonText: { displayText: `${select_vid.quality} (${select_vid.size})` }, type: 1
                                    }) : false
                                }
                                cakrayp.sendMessage(from, {
                                    image: await getBuffer(thumbnail.standard),
                                    jpegThumbnail: await getBuffer(thumbnail.standard),
                                    caption: txt_video + language_text(`Silahkan dipilih terlebih dahulu.`, `Please select first.`),
                                    footer: `${prefix + command} ${messagesText}`,
                                    buttons,
                                    headerType: 4
                                })
                            } else {
                                txt_video += language_text('_Silahkan ditunggu dalam beberapa menit untuk mengirim video tersebut_', '_Please wait for a few minutes to send the video_')
                                cakrayp.sendMessage(from, { image: { url: thumbnail.standard }, caption: txt_video }).then(async () => {
                                    cakrayp.sendMessage(from, { video: { url: downloads_video[0].url } }, { quoted: msg })
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                            reply(language_text('Mohon maaf, link yang anda masukkan itu mungkin tidak valid', 'Sorry, the link you entered may not be valid'))
                        })
                } else {
                    reply(language_text('Mohon maaf ini khusus untuk URL Video Youtube', 'Sorry this is special for Youtube Video URLs'))
                }
                break
            case 'ytmp3':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link Youtube URL\n\nContoh: *${prefix + command}* <YT URL>\n*${prefix + command}* https://www.youtube.com/watch?v=xxxxxxxxxxx`, `Please enter the Youtube URL link\n\nExample: *${prefix + command}* <YT URL>\n*${prefix + command}* https://www.youtube.com/watch?v=xxxxxxxxxxx`))
                if (!isYtUrl(messagesText).isYoutubeUrl && /^you(tu.be|tube.com)(\/|)$/i.test(messagesText)) return reply(language_text('Mohon maaf ini sebuah link biasa, Silahkan masukkan link video diyoutube', 'Sorry, this is an ordinary link, please enter the video link on youtube'))
                if (isUrl(messagesText) && isYtUrl(messagesText).isYoutubeUrl) {
                    reply(commannd_response('wait'))
                    fetchJson(`https://youtubeapisdownloader.vercel.app/youtube/downloader/audio?url=${encodeURIComponent(messagesText)}`)
                        .then(async (data) => {
                            const { thumbnail, title, description, channel, viewers, likeCount, comments, publishedAt, downloads } = data.result;
                            const downloads_audio = downloads.tubemp3_biz;
                            txt_audio = `*「 YT MP3 」*\n\n`
                            txt_audio += `*• Title :* ${title}\n`
                            txt_audio += `*• Description :* ${description}\n`
                            txt_audio += `*• Channel :* ${channel}\n`
                            if (isGroup) txt_audio += `*• Size :* ${downloads_audio.size} (${downloads_audio.quality})\n`
                            txt_audio += `*• Likes :* ${likeCount}\n`
                            txt_audio += `*• Viewers :* ${viewers}\n`
                            txt_audio += `*• Comments :* ${comments}\n`
                            txt_audio += `*• Uploads :* ${publishedAt}\n\n`
                            if (!isGroup) {
                                let buttons = []
                                for (let select_audio of downloads_audio) {
                                    select_audio.url ? buttons.push({
                                        buttonId: `${prefix}getdata -ytdl -audio ${select_audio.url} ${select_audio.size.replace(/ +/g, '_')} ${title.replace(/ +/g, '_')}_(${select_audio.quality.replace(/ +/g, '_')})`,
                                        buttonText: { displayText: `${select_audio.quality} (${select_audio.size})` }, type: 1
                                    }) : false
                                }
                                cakrayp.sendMessage(from, {
                                    image: await getBuffer(thumbnail.standard),
                                    jpegThumbnail: await getBuffer(thumbnail.standard),
                                    caption: txt_audio + language_text(`Silahkan dipilih terlebih dahulu.`, `Please select first.`),
                                    footer: `${prefix + command} ${messagesText}`,
                                    buttons,
                                    headerType: 4
                                })
                            } else {
                                txt_audio += language_text('_Silahkan ditunggu dalam beberapa menit untuk mengirim audio tersebut_', '_Please wait for a few minutes to send the audio_')
                                cakrayp.sendMessage(from, { image: { url: thumbnail.standard }, caption: txt_audio }).then(async () => {
                                    cakrayp.sendMessage(from, { audio: { url: downloads_audio[0].url } }, { quoted: msg })
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                            reply(language_text('Mohon maaf, link yang anda masukkan itu mungkin tidak valid', 'Sorry, the link you entered may not be valid'))
                        })
                } else {
                    reply(language_text('Mohon maaf ini khusus untuk URL Video Youtube', 'Sorry this is special for Youtube Video URLs'))
                }
                break
            case 'ytplay':
            case 'playvid':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text yang anda cari.\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`, `Please enter text you are looking for.\n\nExample: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`))
                if (isUrl(messagesText) && isYtUrl(args.join(' ')).isYoutubeUrl) return reply(language_text(`Mohon maaf ini link Youtube, untuk link youtube anda perlu memakai perintah\n*${prefix}ytmp4* <URL yt>\nSilahkan masukkan text yang anda cari`, `Sorry, this is a Youtube link for a youtube link, you need to use the command *${prefix}ytmp3* <URL yt>\nPlease enter the text you are looking for`))
                if (isUrl(args[0])) return reply(language_text('Mohon maaf ini link, tidak dapat diperbolehkan, Silahkan masukkan text yang anda cari', 'Sorry, this link cannot be allowed. Please enter the text you are looking for'))
                reply(commannd_response('wait'))
                fetchJson(`${apiCakra}/api/youtube/video/search?query=${encodeURIComponent(messagesText)}&type=${randomArr(['default', 'search'])}&apikey=${apikeyCakra}`)
                    .then(async (data) => {
                        // thumb = await getBuffer(info.thumbnail.standard);
                        let downloads_video = data.result.downloads[0]
                        txt_video = `*「 PLAY VIDEO 」*\n\n`
                        txt_video += `*• Title :* ${data.result.title}\n`
                        txt_video += `*• Description :* ${data.result.description}\n`
                        txt_video += `*• Channel :* ${data.result.channel}\n`
                        if (isGroup) txt_video += `*• Size :* ${downloads_video.size} (${downloads_video.quality})\n`
                        txt_video += `*• Likes :* ${data.result.likes}\n`
                        txt_video += `*• Viewers :* ${data.result.viewers}\n`
                        txt_video += `*• Comments :* ${data.result.comments}\n`
                        txt_video += `*• Uploads :* ${data.result.uploaded}\n\n`
                        if (!isGroup) {
                            let buttons = []
                            for (let select_vid of data.result.downloads) {
                                select_vid.url ? buttons.push({ buttonId: `${prefix}getdata -ytdl -video ${select_vid.url} ${select_vid.size.replace(/ +/g, '_')} ${data.result.title.replace(/ +/g, '_')}_(${select_vid.quality.replace(/ +/g, '_')})`, buttonText: { displayText: `${select_vid.quality} (${select_vid.size})` }, type: 1 }) : false
                            }
                            cakrayp.sendMessage(from, {
                                image: await getBuffer(data.result.thumbnail.standard),
                                jpegThumbnail: await getBuffer(data.result.thumbnail.standard),
                                caption: txt_video + language_text(`Silahkan dipilih terlebih dahulu.`, `Please select first.`),
                                footer: `${prefix + command} ${messagesText}`,
                                buttons,
                                headerType: 4
                            })
                        } else {
                            txt_video += language_text('_Silahkan ditunggu dalam beberapa menit untuk mengirim video tersebut_', '_Please wait for a few minutes to send the video_')
                            cakrayp.sendMessage(from, { image: { url: data.result.thumbnail.standard }, caption: txt_video }).then(async () => {
                                cakrayp.sendMessage(from, { video: { url: downloads_video.url }, mimetype: 'video/mp4' }, { quoted: msg })
                            })
                        }
                    }).catch(err => {
                        console.log(err)
                        reply(commannd_response('error'))
                    })
                break
            case 'play':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text yang anda cari.\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`, `Please enter text you are looking for.\n\nExample: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`))
                if (isUrl(messagesText) && isYtUrl(args.join(' ')).isYoutubeUrl) return reply(language_text(`Mohon maaf ini link Youtube, untuk link youtube anda perlu memakai perintah\n*${prefix}ytmp4* <URL yt>\nSilahkan masukkan text yang anda cari`, `Sorry, this is a Youtube link for a youtube link, you need to use the command *${prefix}ytmp3* <URL yt>\nPlease enter the text you are looking for`))
                if (isUrl(args[0])) return reply(language_text('Mohon maaf ini link, tidak dapat diperbolehkan, Silahkan masukkan text yang anda cari', 'Sorry, this link cannot be allowed. Please enter the text you are looking for'))
                reply(commannd_response('wait'))
                fetchJson(`${apiCakra}/api/youtube/music/search?query=${encodeURIComponent(messagesText)}&apikey=${apikeyCakra}`)
                    .then(async (data) => {
                        // thumb = await getBuffer(info.thumbnail.standard);
                        let downloads_audio = data.result.downloads[0]
                        txt_audio = `*「 PLAY MP3 」*\n\n`
                        txt_audio += `*• Title :* ${data.result.title}\n`
                        txt_audio += `*• Description :* ${data.result.description}\n`
                        txt_audio += `*• Channel :* ${data.result.channel}\n`
                        if (isGroup) txt_audio += `*• Size :* ${downloads_audio.size} (${downloads_audio.quality})\n`
                        txt_audio += `*• Likes :* ${data.result.likes}\n`
                        txt_audio += `*• Viewers :* ${data.result.viewers}\n`
                        txt_audio += `*• Comments :* ${data.result.comments}\n`
                        txt_audio += `*• Uploads :* ${data.result.uploaded}\n\n`
                        if (!isGroup) {
                            let buttons = []
                            for (let select_audio of data.result.downloads) {
                                select_audio.url ? buttons.push({ buttonId: `${prefix}getdata -ytdl -audio ${select_audio.url} ${select_audio.size.replace(/ +/g, '_')} ${data.result.title.replace(/ +/g, '_')}_(${select_audio.quality.replace(/ +/g, '_')})`, buttonText: { displayText: `${select_audio.quality} (${select_audio.size})` }, type: 1 }) : false
                            }
                            cakrayp.sendMessage(from, {
                                image: await getBuffer(data.result.thumbnail.standard),
                                jpegThumbnail: await getBuffer(data.result.thumbnail.standard),
                                caption: txt_audio + language_text(`Silahkan dipilih terlebih dahulu.`, `Please select first.`),
                                footer: `${prefix + command} ${messagesText}`,
                                buttons,
                                headerType: 4
                            })
                        } else {
                            txt_audio += language_text('_Silahkan ditunggu dalam beberapa menit untuk mengirim audio tersebut_', '_Please wait for a few minutes to send the audio_')
                            cakrayp.sendMessage(from, { image: { url: data.result.thumbnail.standard }, caption: txt_audio }, { quoted: msg }).then(async () => {
                                cakrayp.sendMessage(from, { audio: { url: downloads_audio.url }, mimetype: 'audio/mp4' }, { quoted: msg })
                            })
                        }
                    }).catch(err => {
                        console.log(err)
                        reply(commannd_response('error'))
                    })
                break
            case 'joox':
            case 'jooxplay':
                if (!messagesText) return reply(language_text(`Silahkan masukkan judul lagu yang akan dicari di joox.\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* melukis senja`, `Please enter the title of the song to be searched for in Joox.\n\nExample: *${prefix + command}* <query>\n*${prefix + command}* melukis senja`))
                fetchJson(`${apiCakra}/api/joox/music?apikey=${apikeyCakra}&query=${messagesText}`)
                    .then(async ({ result }) => {
                        ini_txt = `*「 JOOX PLAY 」*\n\n`
                        ini_txt += `*• Title :* ${result.jooxdata.title}\n`
                        ini_txt += `*• Artists :* ${result.jooxdata.artist}\n`
                        // ini_txt += `Duration : ${result.duration}\n`
                        ini_txt += `*• Album :* ${result.jooxdata.album}\n`
                        ini_txt += `*• Uploaded :* ${result.jooxdata.published}\n`

                        // thumbnail = await getBuffer(result.jooxdata.image)
                        await cakrayp.sendMessage(from, { image: { url: result.jooxdata.image }, jpegThumbnail: result.jooxdata.image, caption: ini_txt }, { quoted: msg }).then(() => {
                            if (result.jooxdata.lyric === 'No lyric') false
                            else reply(`*「 Lyric 」*\n\n${result.jooxdata.lyric}`)
                        })
                        await cakrayp.sendMessage(from, { document: await getBuffer(result.linkMp3.url), mimetype: 'audio/mp3', fileName: `${result.jooxdata.title}.mp3` }, { quoted: msg })
                    })
                break

            // Button for sent file media
            case 'getdata':
                if (isButtons) {
                    reply(language_text('Mohon ditunggu dalam proses, file sedang dikirimkan dalam beberapa menit.', 'Please wait, the file is being sent in a few minutes.'))
                    try {
                        if (args[0] == '-ytdl' && args[1] == '-video') {
                            getBuffer(args[2])
                                .then(async (buff_vid) => {
                                    if (filesizeToBytes(args[3].replace(/_/g, ' ')) > 100000000) {
                                        setTimeout(async () => {
                                            reply(language_text(
                                                `Mohon maaf video ini tidak dapat dikirim dikarenakan ukuran file terlalu besar, Silahkan ketik link dibawah ini\n\n*• Link :* ${await short(args[2])}`,
                                                `Sorry this video isn't send to you because the file size is too large, Please click here in below\n\n*• Link :* ${await short(args[2])}`
                                            ))
                                        }, 5000);
                                    } else {
                                        cakrayp.sendMessage(from, { document: buff_vid, mimetype: 'video/mp4', fileName: args[4].replace(/_/g, ' ') + '.mp4' }, { quoted: msg })
                                    }
                                }).catch(err => {
                                    reply(language_text('Mohon maaf, file ini telah kedaularsa, Silahkan masukkan data kembali untuk mendownload', 'Sorry, this file has expired. Please enter form again to download.'))
                                })
                        } else if (args[0] == '-ytdl' && args[1] == '-audio') {
                            getBuffer(args[2])
                                .then(async (buff_audio) => {
                                    if (filesizeToBytes(args[3].replace(/_/g, ' ')) > 100000000) {
                                        setTimeout(async () => {
                                            reply(language_text(
                                                `Mohon maaf audio ini tidak dapat dikirim dikarenakan ukuran file terlalu besar, Silahkan ketik link dibawah ini\n\n*• Link :* ${await short(args[2])}`,
                                                `Sorry this audio isn't send to you because the file size is too large, Please click here in below\n\n*• Link :* ${await short(args[2])}`
                                            ))
                                        }, 5000);
                                    } else {
                                        cakrayp.sendMessage(from, { document: buff_audio, mimetype: 'audio/mp3', fileName: args[4].replace(/_/g, ' ') + '.mp3' }, { quoted: msg })
                                    }
                                }).catch(err => {
                                    reply(language_text('Mohon maaf, file ini telah kedaularsa, Silahkan masukkan data kembali untuk mendownload', 'Sorry, this file has expired. Please enter form again to download.'))
                                })
                        }
                    } catch (err) {
                        console.log(err)
                        reply(language_text('Mohon maaf file ini tidak dapat dikirim, silahkan dicoba lagi nanti', 'Sorry, this file can\'t be sent, please try again later'))
                    }
                }
                break

            case 'pinterestdl':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link pinterest URL.\n\nContoh: *${prefix + command}* <URL pin>\n*${prefix + command}* https://id.pinterest.com/pin/696580267364426905/\n*${prefix + command}* https://pin.it/30IoCMz`, `Please enter pinterest URL\n\nExample: *${prefix + command}* <URL pin>\n*${prefix + command}* https://id.pinterest.com/pin/696580267364426905/\n*${prefix + command}* https://pin.it/30IoCMz`))
                let Regex_pin = /^\s*https?:\/\/(?:www\.)?(?:[a-z]{2}\.)?(?:pinterest\.[a-z.]+|pin\.it)\/([^/]+)(\/[^/]+)?/i    //([^/]+)\/([0-9]+)?/ // 
                if (isUrl(messagesText) && Regex_pin.test(messagesText)) {
                    reply(commannd_response('wait'))
                    if (/^\s*https?:\/\/pin.it\/([a-zA-Z0-9]+)/.test(messagesText)) {
                        function getFromShort() {
                            return new Promise((resolve, reject) => {
                                expands.exportFromShortUrl(messagesText)
                                    .then((result) => {
                                        resolve(result.split('sent')[0].replace('www', 'id'))
                                    })
                            })
                        }
                        var EnterUrl_pin = await getFromShort();
                    } else {
                        var EnterUrl_pin = messagesText;
                    }
                    scrape.pinterestdl(EnterUrl_pin)
                        .then(async (data) => {
                            ini_txt = '*「 PINTEREST 」*\n\n'
                            ini_txt += `*• ID :* ${data.id}\n`
                            ini_txt += `*• Username :* ${data.username}\n`
                            ini_txt += `*• Fullname :* ${data.full_name}\n`
                            ini_txt += `*• Followers :* ${data.follower_count}\n`
                            ini_txt += `*• Location :* ${data.location}\n`
                            ini_txt += `*• Captions :* ${data.caption}\n\n`
                            ini_txt += language_text('_Silahkan ditunggu dalam waktu 5 detik untuk mengirim data..._', '_Waiting for 5 seconds to send an media..._')
                            cakrayp.sendMessage(from, { image: { url: data.profile_url }, caption: ini_txt, jpegThumbnail: await getBuffer(data.profile_url) }, { quoted: msg }).then(() => {
                                setTimeout(async () => {
                                    if (data.pin_data[0].type == 'video') {
                                        const previewUrl_buff = await getBuffer(data.pin_data[0].previewUrl)
                                        const ini_buffer = await getBuffer(data.pin_data[0].url)
                                        await cakrayp.sendMessage(from, { image: ini_buffer, jpegThumbnail: previewUrl_buff }, { quoted: msg })
                                    } else if (data.pin_data[3].type == 'image') {
                                        const ini_buffer = await getBuffer(data.pin_data[3].url)
                                        const previewUrl_buff = await getBuffer(data.pin_data[0].url)
                                        await cakrayp.sendMessage(from, { video: ini_buffer, jpegThumbnail: previewUrl_buff }, { quoted: msg })
                                    }
                                }, 5500);
                            })
                        }).catch(err => {
                            console.log(err)
                            reply(commannd_response('error'))
                        })
                } else {
                    if (/http(?:s|):\/\/(?:www\.)?(?:[a-z]{2}\.)?(?:pinterest\.[a-z.]+|pin\.it)/.test(messagesText)) {
                        reply(language_text('Silahkan masukkan URL pinterest yang valid', 'Please enter a valid pinterest URL'))
                    } else {
                        reply(language_text('Mohon maaf, ini khusus untuk URL pinterest', 'Sorry, this is a special for pinterest URL'))
                    }
                }
                break
            case 'tiktok':
            case 'tiktoknowm':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link tiktok URL!\n\nContoh: *${prefix + command}* <Tiktok URL>\n*${prefix + command}* https://vt.tiktok.com/ZSwWCk5o/`, `Please enter Tiktok URL!\n\nExample: *${prefix + command}* <Tiktok URL>\n*${prefix + command}* https://vt.tiktok.com/ZSwWCk5o/`))
                if (/(?:http(?:s|):\/\/|)(?:www\.|[a-z]+\.|)tiktok.com/i.test(messagesText)) {
                    reply(commannd_response('wait'))
                    scrape.ttdownloader(messagesText)
                        .then(async ({ result }) => {
                            cakrayp.sendMessage(from, { video: { url: result.nowm }, mimetype: 'video/mp4' }, { quoted: msg })
                        }).catch(err => {
                            if (err.code == 419) {
                                reply(language_text('Mohon maaf, mungkin URL yang anda masukkan itu tidak valid', 'Sorry, maybe the URL you entered is not valid'))
                            } else {
                                reply(commannd_response('error'))
                            }
                        })
                } else {
                    reply(language_text('Mohon maaf, ini khusus untuk url tiktok', 'Sorry, this is special for tiktok Url'))
                }
                break
            case 'ig':
            case 'igdl':
            case 'igfeed':
                if (!messagesText) return reply(language_text(`Silahkan masukkan URL feed instagram\n\nContoh: *${prefix + command}* <ig URL>\n*${prefix + command}* https://www.instagram.com/p/CJ8XKFmJ4al`, `Please enter instagram feed URL\n\nE.g: *${prefix + command}* <ig URL>\n*${prefix + command}* https://www.instagram.com/p/CJ8XKFmJ4al`))
                if (isUrl(messagesText) && /http(?:s):\/\/(www.|)instagram.com\/(p|reel)\/[0-9A-Za-z]+/.test(messagesText)) {
                    // const getFeedID = /http(?:s):\/\/(www.|)instagram.com\/(p|reel)\/([0-9a-z._\-+]+|)\/?(\/[0-9A-Za-z._\-+]+)/.exec(messagesText)
                    // console.log(getFeedID)
                    reply(commannd_response('wait'))
                    instagram.getFeedUser(messagesText)   //(`https://www.instagram.com/p/${getFeedID[4]}`)
                        .then(async (data) => {
                            txt_igfeed = '*「 IG FEEDS 」*\n\n'
                            txt_igfeed += `*• UserID :* ${data.owner.id}\n`
                            txt_igfeed += `*• FeedID :* ${data.id}\n`
                            txt_igfeed += `*• Shortcode :* ${data.shortcode}\n`
                            txt_igfeed += `*• Username :* ${data.owner.username}\n`
                            txt_igfeed += `*• Fullname :* ${data.owner.fullname}\n`
                            txt_igfeed += `*• biography :* ${data.owner.biography}\n`
                            txt_igfeed += `*• Followers :* ${data.owner.followers}\n`
                            txt_igfeed += `*• Following :* ${data.owner.following}\n\n`
                            txt_igfeed += `*• Likes :* ${data.likes}\n`
                            txt_igfeed += `*• Comments :* ${data.comments}\n`
                            txt_igfeed += `*• Captions :*\n${data.caption}\n\n`
                            txt_igfeed += `*• Totally :* ${data.totally}\n\n`
                            txt_igfeed += language_text('_Silahkan ditunggu dalam waktu 5 detik untuk mengirim gambar dan video..._', '_Waiting for 5 seconds to send an videos and photos..._')
                            cakrayp.sendMessage(from, { image: { url: data.owner.profile_pic }, caption: txt_igfeed, jpegThumbnail: await getBuffer(data.owner.profile_pic) }, { quoted: msg }).then(async () => {
                                setTimeout(async () => {
                                    for (let i = 0; i < data.display_url.length; i++) {
                                        const previewUrl = await getBuffer(data.display_url[i].previewUrl);
                                        const mediaType = data.display_url[i].type;
                                        if (mediaType === 'video') {
                                            await cakrayp.sendMessage(from, {
                                                video: await getBuffer(data.display_url[i].url),
                                                jpegThumbnail: previewUrl,
                                                mimetype: 'video/mp4'
                                            }, { quoted: msg })
                                        } else if (mediaType === 'image') {
                                            await cakrayp.sendMessage(from, {
                                                image: await getBuffer(data.display_url[i].url),
                                                jpegThumbnail: previewUrl,
                                                mimetype: 'image/jpeg'
                                            }, { quoted: msg })
                                        }
                                    }
                                }, 5500)
                            })
                        }).catch(err => {
                            reply(commannd_response('error'))
                        })
                }
                break
            case 'tiktok':
            case 'tiktokaudio':
            case 'tiktokmp3':
            case 'tiktokmusic':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link tiktok URL!\n\nContoh: *${prefix + command}* <Tiktok URL>\n*${prefix + command}* https://vt.tiktok.com/ZSwWCk5o/`, `Please enter Tiktok URL!\n\nExample: *${prefix + command}* <Tiktok URL>\n*${prefix + command}* https://vt.tiktok.com/ZSwWCk5o/`))
                if (/(?:http(?:s|):\/\/|)(?:www\.|[a-z]+\.|)tiktok.com/i.test(messagesText)) {
                    reply(commannd_response('wait'))
                    scrape.ttdownloader(messagesText)
                        .then(async ({ result }) => {
                            file_input = getRandom('.mp4')
                            file_output = getRandom()
                            fs.writeFileSync('./temp/' + file_input, await getBuffer(result.wm))
                            ffmpeg('./temp/' + file_input)
                                .on("error", (err) => {
                                    fs.unlinkSync('./temp/' + file_input)
                                    reply(language_text('Mohon maaf video ini tidak dapat di convert ke audio', 'Sorry, this video cannot be converted to audio'))
                                    console.log(err)
                                })
                                .on('end', () => {
                                    fs.unlinkSync('./temp/' + file_input)
                                    cakrayp.sendMessage(from, { document: fs.readFileSync('./temp/' + file_output), mimetype: 'audio/mp3', fileName: 'file-' + Date.now() + '.mp3' }, { quoted: msg }).then(() => setTimeout(() => fs.unlinkSync('./temp/' + file_output), 3000))
                                })
                                .toFormat('mp3')
                                .save('./temp/' + file_output)

                        }).catch(err => {
                            if (err.status == 419) {
                                reply(language_text('Mohon maaf, mungkin URL yang anda masukkan itu tidak valid', 'Sorry, maybe the URL you entered is not valid'))
                            } else {
                                console.log(err)
                                reply(commannd_response('error'))
                            }
                        })
                } else {
                    reply(language_text('Mohon maaf, ini khusus untuk url video tiktok', 'Sorry, this is special for tiktok video URLs'))
                }
                break
            case 'mediafire':
                if (!messagesText) return reply(language_text(`Silahkan masukkan link mediafire\n\nContoh: *${prefix + command}* <URL>\n*${prefix + command}* https://www.mediafire.com/file/qvz7v21iayg6b25/Sample_-_Koh_Ngai.jpg/file`, `Please enter mediafire URL\n\nExample: *${prefix + command}* <URL>\n*${prefix + command}* https://www.mediafire.com/file/qvz7v21iayg6b25/Sample_-_Koh_Ngai.jpg/file`))
                if (isUrl(messagesText) && /http(?:s):\/\/(www\.|)mediafire.com/.test(messagesText)) {
                    reply(commannd_response('wait'))
                    mediafire(messagesText)
                        .then(async (data) => {
                            txt_mediafire = `*「 MEDIA FIRE 」*\n\n`
                            txt_mediafire += `*• Title :* ${data.title}\n`
                            txt_mediafire += `*• Filename :* ${data.filename}\n`
                            txt_mediafire += `*• filetype :* ${data.filetype}\n`
                            txt_mediafire += `*• Mimetype :* ${mimetype.lookup(data.filename)}\n`
                            txt_mediafire += `*• Size :* ${data.filesize}\n`
                            txt_mediafire += `*• PublishedAt :* ${data.published}\n\n`
                            txt_mediafire += `*• DOWNLOAD :*\n${await short(data.downloads)}\n\n`
                            txt_mediafire += language_text('_Silahkan ditunggu dalam beberapa menit untuk mengirim file tersebut..._', '_Please wait for a few minutes to send the file..._')
                            cakrayp.sendMessage(from, { text: txt_mediafire }, { quoted: msg }).then(async () => {
                                cakrayp.sendMessage(from, {
                                    document: await getBuffer(data.downloads),
                                    fileName: data.filename,
                                    mimetype: mimetype.lookup(data.filename)
                                }, { quoted: msg })
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            reply(commannd_response('error'))
                        })
                } else {
                    reply(language_text('Mohon maaf ini khusus untuk mediafire URL.', 'Sorry this is specific to mediafire URLs.'))
                }
                break

            // Searching
            case 'ytsearch':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text query yang anda cari.\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`, `Please enter the text you are looking for.\n\nExample: *${prefix + command}* <query>\n*${prefix + command}* Heartbreak Anniversary`))
                if (isYtUrl(messagesText).isYoutubeUrl) return reply(language_text(
                    `Mohon maaf ini link Youtube untuk link youtube, anda perlu memakai perintah\n*${prefix}ytmp3* <URL yt>\n*${prefix}ytmp4* <URL yt>\nSilahkan masukkan text yang anda cari`,
                    `Sorry, this is a Youtube link for a youtube link, you need to use the command\n*${prefix}ytmp3* <URL yt>\n*${prefix}ytmp4* <URL yt>\nPlease enter the text you are looking for`
                ))
                if (isUrl(messagesText)) return reply(language_text('Mohon maaf ini link, tidak dapat diperbolehkan, Silahkan masukkan text yang anda cari', 'Sorry, this link cannot be allowed. Please enter the text you are looking for'))
                reply(commannd_response('wait'))
                fetchJson(`https://myhuman.cf/api/ytsearch?query=${encodeURIComponent(messagesText.trim())}`)
                    .then(async (data) => {
                        let list_data_searched = data.result;
                        txt_ytsearch = "*「 YT SEARCH 」*\n\n"
                        for (let list_result of list_data_searched) {
                            txt_ytsearch += `*• Title :* ${list_result.title}\n`
                            txt_ytsearch += `*• Duration :* ${list_result.timestamp}\n`
                            txt_ytsearch += `*• Description :* ${list_result.description}\n`
                            txt_ytsearch += `*• Views :* ${list_result.views}\n`
                            txt_ytsearch += `*• Uploads :* ${list_result.ago}\n`
                            txt_ytsearch += `*• Link :* https://www.youtube.com/watch?v=${list_result.videoId}\n\n`
                            txt_ytsearch += `━━━━━━━━━━━━━━━━━━━\n\n`
                        }
                        txt_ytsearch += `© Made by ${author}`
                        replyWithThumbCustom(txt_ytsearch, "Yt Search", `https://www.youtube.com/results?search_query=${messagesText}`, `Search result from : ${messagesText}`, await getBuffer(list_data_searched[Math.floor(Math.random() * list_data_searched.length)].thumbnail), { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'pinterest':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text query untuk mencari gambar dari pinterest tersebut\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* reyi kawaii`, `Please enter a text query to search for images from the Pinterest\nExample: *${prefix + command}* <query>\n*${prefix + command}* reyi kawaii`))
                if (/(?:http(?:s|):)\/\/(?:www\.)?(?:[a-z]{2}\.)?(?:pinterest\.[a-z.]+|pin\.it)/i.test(args.join(' '))) return reply(language_text(`Mohon maaf, untuk link pinterest anda perlu menggunakan perintah ini\n\n*${prefix}pinterestdl* <URL pin>`, `Sorry, for pinterest links you need to use this command\n\n*${prefix}pinterestdl* <URL pin>`))
                reply(commannd_response('wait'))
                scrape.pinterest(messagesText.trim())
                    .then(async (images) => {
                        const randomImg = images[Math.floor(Math.random() * images.length)]
                        cakrayp.sendMessage(from, {
                            image: { url: randomImg },
                            caption: language_text(`*「 PINTEREST 」*\n\nHasil pencarian dari :\n*${messagesText}*`, `*「 PINTEREST 」*\n\nSearch result from :\n*${messagesText}*`),
                            jpegThumbnail: await getBuffer(randomImg)
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'stikerwa':
            case 'stickerwa':
                // if (!messagesText) return reply()
                fetchJson(`https://myhuman.cf/api/stickers?search=${messagesText}`)
                    .then(async ({ sticker }) => {
                        stickerInfo = {
                            "author": Bot_Name,
                            "pack": command
                        }
                        const makeSticker = new Sticker(randomArr(sticker), {
                            pack: stickerInfo.pack,         // The pack name
                            author: stickerInfo.author,     // The author name
                            type: StickerTypes.FULL,        // The sticker type
                            categories: ['🤩', '🎉'],        // The sticker category
                            id: '12345',                    // The sticker id
                            quality: 75,                    // The quality of the output file
                            background: 'transparent'       // The sticker background color (only for full stickers)
                        })
                        cakrayp.sendMessage(from, await makeSticker.toMessage(), { quoted: msg })
                    })
                    .catch(err => {
                        reply(language_text("Mohon maaf, stiker yang anda cari tidak ada hasil.", "Sorry, the sticker you were looking for did not find any results."))
                    })
                break
            case 'stikersearch':
            case 'stickersearch':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text yang akan dicari\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* ${randomArr(["patrik", "pentol", "ayang"])}`, `Please enter the text you want to search for.\n\nExample: *${prefix + command}* <query>\n*${prefix + command}* ${randomArr(["patrik", "pentol", "ayang"])}`))
                fetchJson(`https://myhuman.cf/api/stickerpack?search=${messagesText}`)
                    .then(async())
                const get_buffer = await getBuffer(sticker_results[Math.floor(Math.random() * sticker_results.length)].thumb)
                ini_tt = `*「 STICKER PACK 」*\n\n\n`
                for (let pck of sticker_results) {
                    ini_tt += `*• Title :* ${pck.title}\n`
                    ini_tt += `*• Username :* ${pck.username}\n`
                    ini_tt += `*• Link :* ${pck.link}\n\n`
                }
                cakrayp.sendMessage(from, { image: get_buffer, jpegThumbnail: get_buffer, caption: ini_tt }, { quoted: msg })
                break
            case 'wallpaper':
            case 'wallpapersearch':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text nama wallpaper yang akan dicari\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* ${randomArr(['Naruto', 'programmer', 'mountain'])}`, `Please enter the query text you are looking for\n\nE.g: *${prefix + command}* <query>\n*${prefix + command}* ${randomArr(['Naruto', 'programmer', 'mountain'])}`))
                reply(commannd_response('wait'))
                scrape.wallpaperflare(messagesText)
                    .then(async (images) => {
                        const randomImg = images[Math.floor(Math.random() * images.length)]
                        cakrayp.sendMessage(from, {
                            image: { url: randomImg },
                            jpegThumbnail: await getBuffer(randomImg)
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(language_text('Mohon maaf tidak ada hasil untukmu', 'Sorry no results for you'))
                    })
                break
            case 'playstore':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text yang akan dicari di playstore\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* telegram`, `Please enter the text you want to search for in the playstore\n\nExample: *${prefix + command}* <query>*\n${prefix + command}* telegram`))
                scrape.playstore(messagesText)
                    .then(async (result) => {
                        txt_playstore = '*「 Play Store 」* \n\n'
                        for (var x of result) {
                            txt_playstore += `*• Name :* ${x.name}\n`
                            txt_playstore += `*• ID :* ${x.link_dev}\n`
                            txt_playstore += `*• Developer :* ${x.developer}\n`
                            txt_playstore += `*• Link :* ${x.link}\n\n`
                            txt_playstore += '━━━━━━━━━━━━━━━━━━━\n\n'
                        }
                        txt_playstore += `© Made by ${author}`
                        reply(txt_playstore)
                    }).catch(err => {
                        reply(language_text('Mohon maaf, yang anda masukkan itu mungkin tidak ada', 'Sorry, what you entered may not exist'))
                    })
                break
            case 'gcsearch':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                if (isGroup) return reply(commannd_response('privateChat'))
                if (!messagesText) return reply(`Silahkan masukkan nama group yang akan cari\n\nContoh: *${prefix + command}* ${randomArr(['agama islam', 'teman', 'sekolahan'])}`)
                reply(commannd_response('wait'))
                scrape.linkwa(messagesText)
                    .then(async (result) => {
                        txt_gcsearch = `*「 GC SEARCH 」*\n\n`
                        for (let gc of result) {
                            txt_gcsearch += `*Nama :* ${gc.nama}\n`
                            txt_gcsearch += `*Link :* ${gc.link}\n\n`
                        }
                        txt_gcsearch += `\n© Made by ${author}`
                        reply(txt_gcsearch)
                    })
                break
            case 'jooxsearch':
                if (!messagesText) return reply(language_text(`Silahkan masukkan judul lagu yang anda cari\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* akad`, `Please enter the title of the song you are looking for\n\nE.g: *${prefix + command}* <query>\n*${prefix + command}* akad`))
                reply(commannd_response('wait'))
                scrape.joox(messagesText)
                    .then(async ({ result }) => {
                        let random_img = []
                        txt_jooxsearch = `*「 JOOX SEARCH 」*\n\n`
                        for (let list_joox of result) {
                            const { title, album, singer, publish, img, mp3 } = list_joox;
                            random_img.push(img)
                            txt_jooxsearch += `*• Title :* ${title}\n`
                            txt_jooxsearch += `*• Artist :* ${singer}\n`
                            txt_jooxsearch += `*• Album :* ${album}\n`
                            txt_jooxsearch += `*• Publish :* ${publish}\n`
                            txt_jooxsearch += `*• LinkMp3 :* ${await short(mp3)}\n\n`
                            txt_jooxsearch += '━━━━━━━━━━━━━━━━━━━\n\n'
                        }
                        txt_jooxsearch += `© Made by ${author}`
                        cakrayp.sendMessage(from, {
                            image: await getBuffer(randomArr(random_img)),
                            caption: txt_jooxsearch,
                            jpegThumbnail: await getBuffer(randomArr(random_img))
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'igsearch':
                random_usernameig = randomArr(['njwaputri_', 'hanauraaa_', 'cakrayp_hanauraaa23._', 'cakrayp_jhn'])
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan Username IG!\n\nContoh: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}`,
                    `Please enter Instagram Username!\n\nExample: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}`
                ))
                if (isUrl(messagesText) && /http(?:s):\/\/(www.|)instagram.com\/(reel|p)/.test(messagesText)) return reply(language_text(`Mohon maaf ini URL instagram, dan anda dapat menggunakan perintah *${prefix}igfeed* untuk mendownload`, `Sorry, this is the Instagram URL, and you can use the *${prefix}igfeed* command to download`))
                if (isUrl(messagesText)) return reply(language_text('Mohon maaf ini khusus untuk nama pengguna instagram.', 'Sorry, this is specifically for Instagram username.'))
                reply(commannd_response('wait'))
                instagram.getSearchingUserMeta(messagesText)
                    .then(async (getListUser) => {
                        txt_igsearch = '*「 IG SEARCH 」*\n\n'
                        for (let getMeta of getListUser) {
                            txt_igsearch += `*• ID :* ${getMeta.id}\n`
                            txt_igsearch += `*• Username :* ${getMeta.username}\n`
                            txt_igsearch += `*• Fullname :* ${getMeta.fullname}\n`
                            txt_igsearch += `*• Private :* ${getMeta.is_private ? "✅" : "❎"}\n`
                            txt_igsearch += `*• Verified :* ${getMeta.is_verified ? "✅" : "❎"}\n`
                            // txt_igsearch += `*• Biography :* ${getMeta.biography}\n`
                            txt_igsearch += `*• Followers :* ${getMeta.followers}\n`
                            txt_igsearch += `*• Following :* ${getMeta.following}\n`
                            txt_igsearch += `*• Posts :* ${getMeta.media_count}\n`
                            txt_igsearch += `*• Live Streaming :* ${getMeta.is_live_streaming ? "✅" : "❎"}\n`
                            txt_igsearch += `*• Link Profile :* https://www.instagram.com/${getMeta.username}\n\n`
                            txt_igsearch += `━━━━━━━━━━━━━━━━━━━\n\n\n`
                        }
                        txt_igsearch += `© Made by ${author}`
                        replyWithThumbCustom(txt_igsearch, 'Instagram Search', 'https://www.instagram.com', `Request By ${pushname}`, fs.readFileSync('./file/img/instagram_logo.png'), { quoted: msg })
                    }).catch(err => {
                        if (err.status == 403) reply(language_text('Mohon maaf username yang anda cari tidak ditemukan', 'Sorry, the username you were looking for was not found'))
                        else reply(commannd_response('error'))
                    })
                break
            case 'lirik':
            case 'lyric':
                if (!messagesText) return reply(language_text(`Silahkan masukkan nama lagu yang akan cari\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* bts`, `Please enter the song name you are looking for\n\nE.g: *${prefix + command}* <query>\n*${prefix + command}* bts`))
                reply(commannd_response('wait'))
                scrape.lyrics(messagesText)
                    .then(async (data) => {
                        cakrayp.sendMessage(from, {
                            image: { url: data.thumb },
                            jpegThumbnail: await getBuffer(data.thumb),
                            caption: `*「 Lyric 」*\n\n${data.lirik}`
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(language_text('Mohon maaf lirik yang anda cari itu tidak ditemukan', 'Sorry, the lyrics you were looking for were not found'))
                    })
                break
            case 'igstory':
                random_usernameig = randomArr(['njwaputri_', 'hanauraaa_', 'cakrayp_hanauraaa23._', 'cakrayp_jhn'])
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan Username IG!\n\nContoh: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}\n*${prefix + command} https://www.instagram.com/${random_usernameig}*`,
                    `Please enter Instagram Username!\n\nExample: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}\n*${prefix + command} https://www.instagram.com/${random_usernameig}*`
                ))
                isInstagramUrl_user = /http(?:s):\/\/(www.|)instagram.com\/([0-9a-z._\-+]+)/.test(messagesText)
                if (isUrl(messagesText) && isInstagramUrl_user) {
                    username = messagesText.split('/')
                    username = username[3].split('?')[0]
                } else {
                    username = messagesText
                }
                if (isUrl(messagesText) && !isInstagramUrl_user) return reply(language_text(`Mohon maaf ini khusus untuk pengguna instagram story, silahkan masukkan username terlebih dahulu`, `Sorry, this is specifically for Instagram story users, please enter your username first`))
                reply(commannd_response('wait'))
                instagram.getStories(username.trim())
                    .then(async (data) => {
                        if (data.totally === 1) storiesCount = `${data.totally} story`
                        else storiesCount = `${data.totally} stories`
                        if (data.stories.message) messageInfo = language_text('5 detik untuk mengirim pesan', `5 seconds to send an message...`)
                        else messageInfo = language_text('10 detik untuk mengirim gambar dan video...', `10 seconds to send an videos and photos...`)
                        txt_igstory = '*「 IG STORY 」*\n\n'
                        txt_igstory += `*• ID :* ${data.owner.id}\n`
                        txt_igstory += `*• Username :* ${data.owner.username}\n`
                        txt_igstory += `*• Fullname :* ${data.owner.fullname}\n`
                        txt_igstory += `*• biography :* ${data.owner.biography}\n`
                        txt_igstory += `*• Followers :* ${data.owner.followers}\n`
                        txt_igstory += `*• Following :* ${data.owner.following}\n\n`
                        txt_igstory += `*• Totally :* ${storiesCount}\n\n`
                        txt_igstory += language_text(`_Silahkan ditunggu dalam ${messageInfo}_`, `_Waiting for ${messageInfo}_`)
                        cakrayp.sendMessage(from, { image: { url: data.owner.profile_pic }, caption: txt_igstory, jpegThumbnail: await getBuffer(data.owner.profile_pic) }, { quoted: msg }).then(async () => {
                            if (data.stories.message) return setTimeout(() => { reply(data.stories.message) }, 5500)
                            setTimeout(async () => {
                                for (let i = 0; i < data.stories.length; i++) {
                                    const previewUrl = await getBuffer(data.stories[i].previewUrl);
                                    const mediaType = data.stories[i].type;
                                    if (mediaType === 'video') {
                                        await cakrayp.sendMessage(from, {
                                            video: await getBuffer(data.stories[i].url),
                                            jpegThumbnail: previewUrl,
                                            mimetype: 'video/mp4'
                                        }, { quoted: msg })
                                    } else if (mediaType === 'image') {
                                        await cakrayp.sendMessage(from, {
                                            image: await getBuffer(data.stories[i].url),
                                            jpegThumbnail: previewUrl,
                                            mimetype: 'image/jpeg'
                                        }, { quoted: msg })
                                    }
                                }
                            }, 10000);
                        })
                    }).catch(err => {
                        if (err.status == 403) setTimeout(() => reply(language_text('Mohon maaf, username yang anda masukkan itu tidak ditemukan', 'Sorry, the username you entered was not found')), 3000);
                        else reply(commannd_response('error'))
                    })
                break

            // islamic
            case 'lishsurah':
                fetchJson(`https://api.banghasan.com/quran/format/json/surat`)
                    .then(async (data) => {
                        const get_result = data.hasil;
                        if (isIndonesian) {
                            if (args[0] == '-arti') {
                                ini_txt = '*「 LIST SURAH 」*\n\n'
                                ini_txt += `Pilihan untuk perintah *${prefix}alquran* dan untuk membaca atau mengaji beserta artinya dalam surah\n\n`
                                for (let i = 0; i < get_result.length; i++) {
                                    ini_txt += `*• No :* ${get_result[i].nomor}\n`
                                    ini_txt += `*• Surah :* ${get_result[i].nama} (${get_result[i].asma})\n`
                                    ini_txt += `*• Ayat :* 1-${get_result[i].ayat}\n`
                                    ini_txt += `*• Tipe :* ${get_result[i].type}\n`
                                    ini_txt += `*• Artinya :* ${get_result[i].arti}\n`
                                    ini_txt += `*• Keterangan :* ${get_result[i].keterangan.replace(/<i>/g, '').replace(/<\/i>/g, '').replace(/<br>/g, '')}\n\n`
                                }
                                reply(ini_txt)
                            } else {
                                ini_txt = '*「 LIST SURAH 」*\n\n'
                                ini_txt += `Pilihan untuk perintah *${prefix}alquran* dan untuk membaca atau mengaji\n`
                                ini_txt += `jangan lupa tambahkan *-arti* untuk artinya dengan ketik *${prefix + command} -arti*\n\n`
                                for (let i = 0; i < get_result.length; i++) {
                                    ini_txt += `*• No :* ${get_result[i].nomor}\n`
                                    ini_txt += `*• Surah :* ${get_result[i].nama} (${get_result[i].asma})\n`
                                    ini_txt += `*• Ayat :* 1-${get_result[i].ayat}\n`
                                    ini_txt += `*• Tipe :* ${get_result[i].type}\n\n`
                                }
                                reply(ini_txt)
                            }
                        } else {
                            ini_txt = '*「 LIST SURAH 」*\n\n'
                            for (let i = 0; i < get_result.length; i++) {
                                ini_txt += `*• No :* ${get_result[i].nomor}\n`
                                ini_txt += `*• Surah :* ${get_result[i].nama} (${get_result[i].asma})\n`
                                ini_txt += `*• Ayat :* 1-${get_result[i].ayat}\n`
                                ini_txt += `*• Type :* ${get_result[i].type}\n\n`
                            }
                            reply(ini_txt)
                        }
                    })
                break
            case 'alquran':
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan nomor surah beserta ayat tersebut dengan contoh dibawah.\n\nContoh: *${prefix + command}* <surah>/<ayat>\nUntuk surah\n*${prefix + command}* 18\n\nUntuk surah beserta ayat\n*${prefix + command}* 18/10\natau\n*${prefix + command}* 18/1-10\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menuislamic`,
                    `Example: *${prefix + command}* 18 or *${prefix + command}* 18/10 or *${prefix + command}* 18/1-10`
                ))
                if (isIndonesian) {
                    if (messagesText.match(/\/|\-/)) {
                        const ayat_quran = messagesText.split('/')
                        if (!/\-/.test(messagesText)) return reply(`Gunakan Format "-" untuk ayat alquran tersebut.\n\nContoh:\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        if (!/^[0-9]+$/.test(messagesText.replace(/\/|\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh:\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        if (!ayat_quran[1]) return reply(`Masukkan nomor ayat alqur\'an tersebut dengan contoh.\n\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        fetchJson(`https://api.banghasan.com/quran/format/json/surat/${ayat_quran[0].trim()}/ayat/${ayat_quran[1].trim()}`)
                            .then(async (urls) => {
                                if (urls.pesan) return reply(`Nomor Ayat keliru, Silahkan masukkan ayat dengan contoh.\n\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat`)
                                let baca_quran = urls.ayat.data
                                ini_txt = `QS.${urls.surat.nama} (${urls.surat.asma}) ayat: ${urls.query.ayat}\n\n`
                                if (urls.ayat.proses == undefined) {
                                    baca_quran = urls.surat
                                    ini_txt = `*「 ALQURAN SURAH 」*\n\n`
                                    ini_txt += `*• No :* ${baca_quran.nomor}\n`
                                    ini_txt += `*• Surah :* ${baca_quran.nama} (${baca_quran.asma})\n`
                                    ini_txt += `*• Ayat :* 1-${baca_quran.ayat}\n`
                                    ini_txt += `*• Type :* ${baca_quran.type}\n`
                                    ini_txt += `*• Artinya :* ${baca_quran.arti}\n\n`
                                    ini_txt += `Mohon maaf Ayat ini sudah sampai maksimal *${baca_quran.ayat} ayat*, Silahkan masukkan ayat dalam alquran tersebut.\n\n`
                                    ini_txt += `\n© Made by ${author}`
                                    return reply(ini_txt)
                                }
                                if (urls.ayat.proses.length == 10) {
                                    ini_txt += `*Note:*\nAyat ini tercapai maksimal *10 ayat*, anda dapat menambahkan ayat selanjutnya *${prefix + command}* ${urls.surat.nomor}/${urls.ayat.proses[urls.ayat.proses.length - 1] + 1}-${urls.ayat.proses[urls.ayat.proses.length - 1] + 10}\n\n\n`
                                }
                                if (urls.ayat.error || urls.ayat.proses[urls.ayat.proses.length - 1] > parseInt(urls.surat.ayat)) {
                                    ini_txt += `*Note:*\nAyat ini tercapai maksimal *${urls.surat.ayat} ayat*, anda dapat melanjutkan surah berikutnya *${prefix + command}* ${parseInt(urls.surat.nomor) + 1}/1-10\n\n`
                                }
                                for (let i = 0; i < urls.ayat.proses.length; i++) {
                                    ini_txt += `{${urls.ayat.proses[i]}}\n\n${baca_quran.ar[i].teks}\n\n`
                                    ini_txt += `_${baca_quran.idt[i].teks.replace(/<u>/g, "").replace(/<\/u>/g, "").replace(/<strong>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "").trim()}_\n\n\n`
                                    ini_txt += `${baca_quran.id[i].teks}\n\n`
                                }
                                ini_txt += `\n© Made by ${author}`
                                reply(ini_txt)
                            }).catch(err => {
                                reply(err.message)
                            })
                    } else {
                        const ayat_quran = messagesText;
                        fetchJson(`https://api.banghasan.com/quran/format/json/surat/${ayat_quran}`)
                            .then(async (urls) => {
                                let baca_quran = urls.hasil[0]
                                ini_txt = `*「 ALQURAN SURAH 」*\n\n`
                                ini_txt += `*• No :* ${baca_quran.nomor}\n`
                                ini_txt += `*• Surah :* ${baca_quran.nama} (${baca_quran.asma})\n`
                                ini_txt += `*• Ayat :* 1-${baca_quran.ayat}\n`
                                ini_txt += `*• Type :* ${baca_quran.type}\n`
                                ini_txt += `*• Artinya :* ${baca_quran.arti}\n`
                                ini_txt += `*• Keterangan :* ${baca_quran.keterangan.replace(/<i>/g, "").replace(/<\/i>/g, "").replace(/<br>/g, "")}\n\n`
                                ini_txt += `*Note:*\n_Jangan lupa menggunakan format "/" dan "-" untuk meliat ayat alquran tersebut_\n\n`
                                ini_txt += `\n© Made by ${author}`
                                reply(ini_txt)
                            }).catch(err => {
                                reply(commannd_response('error'))
                            })
                    }
                } else {
                    if (messagesText.match(/\/|\-/)) {
                        const ayat_quran = messagesText.split('/')
                        if (!/\-/.test(messagesText)) return reply(`Gunakan Format "-" untuk ayat alquran tersebut.\n\nContoh:\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        if (!/^[0-9]+$/.test(messagesText.replace(/\/|\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh:\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        if (!ayat_quran[1]) return reply(`Masukkan nomor ayat alqur\'an tersebut dengan contoh.\n\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat)`)
                        fetchJson(`https://api.banghasan.com/quran/format/json/surat/${ayat_quran[0].trim()}/ayat/${ayat_quran[1].trim()}/bahasa/ar,en`)
                            .then(async (urls) => {
                                if (urls.pesan) return reply(`Sorry, the verse number is wrong, please enter the verse with an example *1-10*\nExample: *${prefix + command}* ${ayat_quran[1]}/1-10`)
                                let baca_quran = urls.ayat.data
                                if (urls.ayat.proses == undefined) {
                                    baca_quran = urls.surat
                                    ini_txt = `*「 ALQURAN SURAH 」*\n\n`
                                    ini_txt += `*• No :* ${baca_quran.nomor}\n`
                                    ini_txt += `*• Surah :* ${baca_quran.nama} (${baca_quran.asma})\n`
                                    ini_txt += `*• Ayat :* 1-${baca_quran.ayat}\n`
                                    ini_txt += `*• Type :* ${baca_quran.type}`
                                    // ini_txt += `*• Artinya :* ${baca_quran.arti}\n\n`
                                    ini_txt += `Sorry, this verse has reached the maximum of *${baca_quran.ayat} verse(s)*, Please enter the verse in the Koran (Al Qur'an).\n\n`
                                    ini_txt += `\n© Made by ${author}`
                                    return reply(ini_txt)
                                }
                                if (urls.ayat.proses.length == 10) {
                                    ini_txt += `*Note:*\nThis verse is reached a maximum of *10 verses* you can add the next verse *${prefix + command}* ${urls.surat.nomor}/${urls.ayat.proses[urls.ayat.proses.length - 1] + 1}-${urls.ayat.proses[urls.ayat.proses.length - 1] + 10}\n\n\n`
                                }
                                if (urls.ayat.error || urls.ayat.proses[urls.ayat.proses.length - 1] > parseInt(urls.surat.ayat)) {
                                    ini_txt += `*Note:*\nThis verse is a maximum of *${urls.surat.ayat} verse(s)*, you can continue the next surah *${prefix + command}* ${parseInt(urls.surat.nomor) + 1}/1-10\n\n`
                                }
                                for (let i = 0; i < urls.ayat.proses.length; i++) {
                                    ini_txt += `{${urls.ayat.proses[i]}}\n\n${baca_quran.ar[i].teks}\n\n`
                                    ini_txt += `_${baca_quran.idt[i].teks.replace(/<u>/g, "").replace(/<\/u>/g, "").replace(/<strong>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "").trim()}_\n\n\n`
                                    ini_txt += `${baca_quran.id[i].teks}\n\n`
                                }
                                ini_txt += `\n© Made by ${author}`
                                reply(ini_txt)
                            }).catch(err => {
                                reply(commannd_response('error'))
                            })
                    } else {
                        const ayat_quran = messagesText;
                        fetchJson(`https://api.banghasan.com/quran/format/json/surat/${ayat_quran[0]}`)
                            .then(async (urls) => {
                                let baca_quran = urls.hasil[0]
                                ini_txt = `*「 SURAH 」*\n\n`
                                ini_txt += `*• No :* ${baca_quran.nomor}\n`
                                ini_txt += `*• Surah :* ${baca_quran.nama} (${baca_quran.asma})\n`
                                ini_txt += `*• Ayat :* 1-${baca_quran.ayat}\n`
                                ini_txt += `*• Type :* ${baca_quran.type}\n\n`
                                ini_txt += `\n© Made by ${author}`
                                reply(ini_txt)
                            }).catch(err => {
                                reply(commannd_response('error'))
                            })
                    }
                }
                break
            case 'alquranaudio':
                if (!messagesText) return reply(language_text(`Silahkan masukkan surah beserta ayat alquran tersebut.\n\nContoh: *${prefix + command}* <surah>/<ayat>\n*${prefix + command}* 18/10`, `Please enter the surah along with the verse of the Alqur'an books.\nExample: *${prefix + command}* <surah>/<ayat>\n*${prefix + command}* 18/10`))
                if (!/^[0-9]+$/.test(messagesText.replace(/\/|\-/g, ""))) return reply(language_text(`Format harus berupa dengan angka!\n\nContoh:\n*${prefix + command}* 18/10 (surah)\natau\n*${prefix + command}* 18/1-10 (surah beserta ayat)`, `Format must be with numbers`))
                if (!messagesText.includes('/')) return reply(language_text(`Masukkan surah dan ayat dengan *"/"*\nExample: *${prefix + command}* 18/10`, `Enter the verse(s) with */*.\nExample: *${prefix + command}* 18/10`))
                surah = messagesText.split('/')
                if (!surah[1]) return reply(language_text(`Masukkan surah dan ayat dengan *"/"*\nExample: *${prefix + command}* 18/10`, `Enter the verse(s) with */*.\nExample: *${prefix + command}* 18/10`))
                fetchJson(`https://api.banghasan.com/quran/format/json/surat/${surah[0]}`)
                    .then(async (data) => {
                        if (parseInt(data.hasil[0].ayat) < parseInt(surah[1])) {
                            reply(language_text(`Mohon maaf, ayat ini tercapai maksimal *${data.hasil[0].ayat} ayat*`, `Sorry, this ayats is reached a maximum of *${data.hasil[0].ayat} ayats*`))
                        } else {
                            fetchJson(`${apiCakra}/api/islamic/quran?surah=${surah[0]}&ayat=${surah[1]}&apikey=${apikeyCakra}`)
                                .then(async (data) => {
                                    const audio_surah = await getBuffer(data.result.audio.primary)
                                    cakrayp.sendMessage(from, {
                                        audio: audio_surah,
                                        mimetype: "audio/mp4"
                                    }, { quoted: msg })
                                }).catch(err => {
                                    reply(commannd_response('error'))
                                })
                        }
                    })
                break
            case 'jadwalshalat':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                List_daerah = await jadwaldaerah.getListDaerah()
                txt_listDaerah = 'Nama daerah tersedia dari sumber : https://kalam.sindonews.com\n\n'
                for (let getarea of List_daerah) {
                    txt_listDaerah += `• ${getarea}\n`
                }
                txt_listDaerah += `\n© Made by ${author}`
                if (!messagesText) return reply(`Silahkan masukkan nama daerah tersebut.\n\nContoh: *${prefix + command}* ${randomArr(List_daerah)}\n\n${txt_listDaerah}`)
                if (messagesText == "-list") return reply(txt_listDaerah)
                jadwaldaerah.jadwalSolat(messagesText)
                    .then(async ({ kota, tanggal, imsak, subuh, zuhur, ashar, maghrib, isya }) => {
                        txt_jadwalshalat = `*「 JADWAL SHALAT 」*\n\n`
                        txt_jadwalshalat += `*• Tanggal :* ${tanggal}\n`
                        txt_jadwalshalat += `*• Kota :* ${kota}\n`
                        txt_jadwalshalat += `*• Imsak :* ${imsak}\n`
                        txt_jadwalshalat += `*• Subuh :* ${subuh}\n`
                        txt_jadwalshalat += `*• Zhuhur :* ${zuhur}\n`
                        txt_jadwalshalat += `*• Ashar :* ${ashar}\n`
                        txt_jadwalshalat += `*• Maghrib :* ${maghrib}\n`
                        txt_jadwalshalat += `*• Isya :* ${isya}\n`
                        txt_jadwalshalat += `\n© Made by ${author}`
                        reply(txt_jadwalshalat)
                    }).catch(err => {
                        if (err.code) reply('Mohon maaf, nama daerah tidak ditemukan, silahkan masukkan nama daerah tersebut')
                        else reply(commannd_response('error'))
                    })
                break
            case 'asmaulhusna':
                fetchJson(`https://raw.githubusercontent.com/cakrayp/database-api/main/database/islamic/asmaulhusna.json`)
                    .then(async ({ result }) => {
                        ini_txt = `List Asmaulhusna Totally : ${result.length}\n\n`
                        for (let i = 0; i < result.length; i++) {
                            ini_txt += `*• No :* ${result[i].number}\n`
                            ini_txt += `*• Latin :* ${result[i].latin}\n`
                            ini_txt += `*• Arab :* ${result[i].arab}\n`
                            ini_txt += `*• Indonesia :* ${result[i].translate_id}\n`
                            ini_txt += `*• English :* ${result[i].translate_en}\n\n`
                        }
                        ini_txt += `© Made by ${author}`
                        reply(ini_txt)
                    })
                break
            case 'kisahnabi':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama nabi tersebut.\n\nContoh: *${prefix + command}* <nama nabi>\n*${prefix + command}* ${randomArr(["Muhammad", "Musa", "adam", "isa"])}`)
                kisahnabi(messagesText.toLowerCase())
                    .then(async (data) => {
                        txt_kisahnabi = `*「 Kisah Nabi 」*\n\n`
                        txt_kisahnabi += `*• Nama :* ${data.name}\n`
                        txt_kisahnabi += `*• Lahir :* ${data.birth}\n`
                        txt_kisahnabi += `*• Wafat Usia :* ${data.death_age}\n`
                        txt_kisahnabi += `*• Negara :* ${data.country_from}\n`
                        txt_kisahnabi += `*• Story :* ${data.story}\n`
                        reply(txt_kisahnabi)
                    }).catch(err => {
                        reply(`Mohon maaf, Nabi tidak ditemukan, silahkan masukkan nama nabi tersebut\n\nContoh: *${prefix + command}* <nama nabi>\n*${prefix + command}* ${randomArr(["Muhammad", "Musa", "adam", "isa"])}`)
                    })
                break
            case 'hadis':
            case 'hadits':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama hadits serta No. hadits tersebut\n\nContoh: *${prefix + command}* <nama hadits> <no hadits>\n*${prefix + command}* bukhari 52`)
                if (!args[1]) return reply(`Silakhan masukkan nomor hadits tersebut!\n\nContoh: *${prefix + command}* <nama hadits> <no hadits>\n*${prefix + command}* bukhari 52`)
                fetchJson(`${apiCakra}/api/islamic/hadits?kitab=${args[0].toLowerCase()}&nomor=${args[1]}&apikey=${apikeyCakra}`)
                    .then(async ({ result }) => {
                        if (result == undefined) {
                            reply('Mohon maaf hadits ini tidak ada, silahkan masukkan nama hadits serta No. hadits tersebut yang pernah ada.')
                        } else {
                            txt_hadits = `${result.contents.arab}\n\n\n`
                            txt_hadits += `${result.contents.id}\n`
                            reply(txt_hadits)
                        }
                    })
                break

            // Information
            case 'covid':
                if (!messagesText) return reply(language_text(`Silahkan masukkan nama negara terlebih dahulu\n\nContoh: *${prefix + command}* <country>\n*${prefix + command}* ${randomArr(['indonesia', 'Unitied states', 'japan'])}`, `Please enter the country name first\n\nExample: *${prefix + command}* <country>\n*${prefix + command}* ${randomArr(['indonesia', 'Unitied states', 'japan'])}`))
                fetchJson(`${apiCakra}/api/covid?country=${encodeURIComponent(messagesText)}&apikey=${apikeyCakra}`)
                    .then(async (data) => {
                        const { country, recovered, cases, deaths, active } = data.result;
                        txt_covid = `*「 COVID 」*\n\n`
                        txt_covid += `*• Country :* ${country}\n`
                        // txt_covid += `*• Positive :* ${positif}\n`
                        txt_covid += `*• Recovered :* ${recovered}\n`
                        txt_covid += `*• Cases :* ${cases}\n`
                        txt_covid += `*• Deaths :* ${deaths}\n`
                        txt_covid += `*• Active :* ${active}\n`
                        reply(txt_covid)
                    }).catch(err => {
                        console.log(err)
                    })
                break
            case 'cnnindonesia':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                reply(commannd_response('wait'))
                feedid.cnn.terbaru().then(async (response) => {
                    ini_txt = `*「 CNN Terbaru 」*\n\n`
                    ini_txt += response.data.description + '\n\n\n'
                    for (var x of response.data.posts) {
                        ini_txt += `*• Title :* ${x.title}\n`
                        ini_txt += `*• description:* ${x.description}\n`
                        ini_txt += `*• Published :* ${x.pubDate}\n`
                        ini_txt += `*• Link :* ${x.link}\n\n`
                        ini_txt += `━━━━━━━━━━━━━━━━━━━\n\n`
                    }
                    ini_txt += `© Made by ${author}`
                    cakrayp.sendMessage(from, {
                        image: { url: response.data.image },
                        caption: ini_txt,
                        jpegThumbnail: await getBuffer(response.data.image)
                    })
                }).catch(err => {
                    reply(commannd_response('error'))
                })
                break
            case 'cnnnasional':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                reply(commannd_response('wait'))
                feedid.cnn.nasional().then(async (response) => {
                    ini_txt = `*「 CNN Nasional 」*\n\n`
                    ini_txt += response.data.description + '\n\n\n'
                    for (var x of response.data.posts) {
                        ini_txt += `*• Title :* ${x.title}\n`
                        ini_txt += `*• description:* ${x.description}\n`
                        ini_txt += `*• Published :* ${x.pubDate}\n`
                        ini_txt += `*• Link :* ${x.link}\n\n`
                        ini_txt += `━━━━━━━━━━━━━━━━━━━\n\n`
                    }
                    ini_txt += `© Made by ${author}`
                    cakrayp.sendMessage(from, {
                        image: { url: response.data.image },
                        caption: ini_txt,
                        jpegThumbnail: await getBuffer(response.data.image)
                    })
                }).catch(err => {
                    reply(commannd_response('error'))
                })
                break
            case 'cnninternasional':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                reply(commannd_response('wait'))
                feedid.cnn.internasional().then(async (response) => {
                    ini_txt = `*「 CNN Internasional 」*\n\n`
                    ini_txt += response.data.description + '\n\n\n'
                    for (var x of response.data.posts) {
                        ini_txt += `*• Title :* ${x.title}\n`
                        ini_txt += `*• description:* ${x.description}\n`
                        ini_txt += `*• Published :* ${x.pubDate}\n`
                        ini_txt += `*• Link :* ${x.link}\n\n`
                        ini_txt += `━━━━━━━━━━━━━━━━━━━\n\n`
                    }
                    ini_txt += `© Made by ${author}`
                    cakrayp.sendMessage(from, {
                        image: { url: response.data.image },
                        caption: ini_txt,
                        jpegThumbnail: await getBuffer(response.data.image)
                    })
                }).catch(err => {
                    reply(commannd_response('error'))
                })
                break
            case 'infogempa':
            case 'gempa':
                reply(commannd_response('wait'))
                bmkgGempa()
                    .then(async ({ Waktu, Lintang, Bujur, Magnitudo, kedalaman, Wilayah, Map }) => {
                        info_gempa = `*「 INFO GEMPA 」*\n\n`
                        info_gempa += `*• Waktu :* ${Waktu}\n`
                        info_gempa += `*• Lintang :* ${Lintang}\n`
                        info_gempa += `*• Bujur :* ${Bujur}\n`
                        info_gempa += `*• Magnitude :* ${Magnitudo}\n`
                        info_gempa += `*• Kedalaman :* ${kedalaman}\n`
                        info_gempa += `*• Wilayah :* ${Wilayah}\n\n`
                        info_gempa += `© Made by ${author}`
                        cakrayp.sendMessage(from, {
                            image: { url: Map },
                            caption: info_gempa,
                            jpegThumbnail: await getBuffer(Map)
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'checkshort':
            case 'checkshorten':
            case 'expands':
            case 'expand':
                randomLink = randomArr(['https://tinyurl.com/ygmu4t67/', 'https://vt.tiktok.com/ZSeTEesjG/', 'https://pin.it/30IoCMz', 'https://bit.ly/3pji76D'])
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan link pendek yang akan dicek setiap URL tersebut.\n\nContoh: *${prefix + command}* <Short URL>\n*${prefix + command}* ${randomLink}`,
                    `Please enter a short link that will be check for each URL.\n\nE.g: *${prefix + command}* <Short URL>\n*${prefix + command}* ${randomLink}`
                ))
                if (isUrl(messagesText)) {
                    reply(commannd_response('wait'))
                    expands.checkshorturl(messagesText)
                        .then(async (data) => {
                            console.log(data)
                            const Web_Screenshot = await getBuffer(data.screenshot);
                            txt_checkShorten = `*「 EXPANDS 」*\n\n`
                            txt_checkShorten += `*• Title :* ${data.title}\n`
                            txt_checkShorten += `*• Delay :* ${data.delay}\n`
                            txt_checkShorten += `*• Description :* ${data.description}\n`
                            txt_checkShorten += `*• Short :* ${data.short}\n`
                            txt_checkShorten += `*• Expands :* ${data.expands}\n`
                            txt_checkShorten += `*• Redirection :* ${data.redirection}\n\n`
                            txt_checkShorten += `© Made by ${author}`
                            cakrayp.sendMessage(from, {
                                image: Web_Screenshot,
                                caption: txt_checkShorten,
                                jpegThumbnail: Web_Screenshot
                            }, { quoted: msg })
                        })
                        .catch(err => {
                            if (err.code == 403) {
                                reply(language_text('Mohon maaf, URL pendek yang anda masukkan itu tidak valid.', 'Sorry, the short URL you entered is invalid'))
                            } else {
                                reply(commannd_response('error'))
                            }
                        })
                } else {
                    reply(language_text('Mohon maaf ini khusus untuk link URL', 'Sorry this is special for the URL'))
                }
                break

            // Fun game
            case 'tebakgambar':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                tebakgambar_sender = []
                challenge.map((data) => {
                    tebakgambar_sender.push(data.sender)
                })
                if (tebakgambar_sender.includes(sender)) return reply(language_text('Mohon diselesaikan pertanyaan yang sebelumnya', 'Please solve the previous question'))
                reply(commannd_response('wait'))
                userId = msg.key.id
                challenge.push({ type: command, sender, id: userId })
                fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                scrape.tebakgambar()
                    .then(async (data) => {
                        let get_tbkgmbr = data[0]
                        cakrayp.sendMessage(from, {
                            image: await getBuffer(get_tbkgmbr.image),
                            caption: language_text("Silahkan dijawab dengan gambar yang ada diatas dalam 60 detik", "Please answer with the image above in 60 seconds"),
                            jpegThumbnail: await getBuffer(get_tbkgmbr.image)
                        }, { quoted: msg }).then(async () => {
                            const add_tebakgambar = {
                                type: command,
                                sender,
                                id: userId,
                                images: get_tbkgmbr.image,
                                answer: {
                                    indonesian: get_tbkgmbr.jawaban,
                                    english: await translate(get_tbkgmbr.jawaban),
                                },
                            }
                            position = false
                            Object.keys(challenge).forEach((i) => {
                                if (challenge[i].sender == sender) {
                                    position = i
                                }
                            })
                            if (position !== false) {
                                challenge.splice(position, 1)
                                challenge.push(add_tebakgambar)
                                fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                            }
                            fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                            setTimeout(async () => {
                                tebakgambar_2 = []
                                challenge.map((data) => {
                                    tebakgambar_2.push(data.id)
                                })
                                tebakgambar_3 = []
                                challenge.map((data) => {
                                    tebakgambar_3.push(data.sender)
                                })
                                if (tebakgambar_3.includes(sender) && tebakgambar_2.includes(userId)) {
                                    reply(language_text(`*• Jawaban :* ${get_tbkgmbr.jawaban}`, `*• Answer :* ${await translate(get_tbkgmbr.jawaban)}`))
                                    position = false
                                    Object.keys(challenge).forEach((i) => {
                                        if (challenge[i].sender == sender) {
                                            position = i
                                        }
                                    })
                                    if (position !== false) {
                                        challenge.splice(position, 1)
                                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                                    }
                                }
                            }, 60000)
                        })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'caklontong':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                caklontong_ = []
                challenge.map((data) => {
                    caklontong_.push(data.sender)
                })
                if (caklontong_.includes(sender)) return reply(language_text('Mohon diselesaikan pertanyaan yang sebelumnya', 'Please solve the previous question'))
                reply(commannd_response('wait'))
                userId = msg.key.id
                challenge.push({ type: command, sender, id: userId })
                fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                fetchJson(`${apiCakra}/api/quizz/caklontong?apikey=${apikeyCakra}`)
                    .then(async (data) => {
                        let caklontong_data = data.result;
                        reply(language_text('*• Pertanyaan :*\n' + caklontong_data.soal + '\n\n_Silahkan dijawab pertanyaan yang diatas..._', '*• Question :*\n' + await translate(caklontong_data.soal) + '\n\n_Please answer the questions above..._'))
                        const add_caklontong = {
                            type: command,
                            sender,
                            id: userId,
                            questions: {
                                indonesian: caklontong_data.soal,
                                english: await translate(caklontong_data.soal),
                            },
                            answer: {
                                indonesian: caklontong_data.jawaban,
                                english: await translate(caklontong_data.jawaban),
                            },
                            description: {
                                indonesian: caklontong_data.deskripsi.split(/\(|\)/)[1],
                                english: await translate(caklontong_data.deskripsi.split(/\(|\)/)[1].trim())
                            },
                        }
                        Object.keys(challenge).forEach((i) => {
                            if (challenge[i].sender == sender) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            challenge.splice(position, 1)
                            challenge.push(add_caklontong)
                            fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        }
                        fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                        setTimeout(async () => {
                            caklontong_2 = []
                            challenge.map((data) => {
                                caklontong_2.push(data.id)
                            })
                            caklontong_3 = []
                            challenge.map((data) => {
                                caklontong_3.push(data.sender)
                            })
                            if (caklontong_3.includes(sender) && caklontong_2.includes(userId)) {
                                txt_answer = language_text('*• Pertanyaan :* ' + caklontong_data.soal, '*• Question :* ' + await translate(caklontong_data.soal)) + '\n\n'
                                txt_answer += language_text(`*• Jawaban :* ${caklontong_data.jawaban}`, '*• Answer :* ' + await translate(caklontong_data.jawaban)) + '\n'
                                txt_answer += language_text(`*• Alasan :* ${caklontong_data.deskripsi.split(/\(|\)/)[1]}`, '*• Reason :* ' + await translate(caklontong_data.deskripsi.split(/\(|\)/)[1]))
                                reply(txt_answer)
                                position = false
                                Object.keys(challenge).forEach((i) => {
                                    if (challenge[i].sender == sender) {
                                        position = i
                                    }
                                })
                                if (position !== false) {
                                    challenge.splice(position, 1)
                                    fs.writeFileSync("./database/challenge.json", JSON.stringify(challenge, 'spaces', 4))
                                }
                            }
                        }, 60000);
                    })
                break

            case 'heroml':
                listheroml = await mobilelegends.getHerolist()
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan nama hero ML (Mobile legends)\n\nContoh: *${prefix + command}* <hero name>\n*${prefix + command}* ${randomArr(listheroml.hero)}\n\n*Note:*\nKami telah menyediakan perintah dibawah ini.\n*${prefix + command}* -list (list hero)\n*${prefix + command}* -random (Random)`,
                    `Please enter the heroes of mobile legends\nExample: *${prefix + command}* <hero name>\n*${prefix + command}* ${randomArr(listheroml.hero)}\n\n*Note:* We have provided the following command in below.\n*${prefix + command}* -list (list hero)\n*${prefix + command}* -random (Random)`)
                )
                if (messagesText.toLowerCase() == '-list') {
                    ini_txt = `*「 ML HEROES 」*\n\n`
                    ini_txt += `${language_text('Kumpulan nama-nama hero moblie legends', 'A collection of mobile legends hero names')}\n`
                    ini_txt += `Totally : ${listheroml.hero.length}\n\n`
                    for (let heroes of listheroml.hero) {
                        ini_txt += '• ' + heroes + '\n'
                    }
                    return reply(ini_txt)
                }
                if (messagesText.toLowerCase() == '-random') {
                    var Nama_heroML = randomArr(listheroml.hero);
                } else {
                    var Nama_heroML = messagesText
                }
                reply(commannd_response('wait'))
                mobilelegends.getWikiDetails(Nama_heroML)
                    .then(async (data) => {
                        const get_result = data.result;
                        const gambar_hero = await getBuffer(get_result.image)
                        txt_mlHero = `*「 ML HEROES 」*\n\n`
                        txt_mlHero += `*● Name :* ${get_result.hero_name}\n`
                        txt_mlHero += `*● Feature :* ${get_result.hero_feature}\n`
                        txt_mlHero += `*● Entrance Quotes :* ${get_result.entrance_quotes}\n`
                        txt_mlHero += `*● Role :* ${get_result.role}\n`
                        txt_mlHero += `*● Specialty :* ${get_result.speciality}\n`
                        txt_mlHero += `*● Laning :* ${get_result.laning_recommendation}\n`
                        txt_mlHero += `*● Release :* ${get_result.release_date}\n\n`
                        txt_mlHero += `*「 Attributes 」*\n`
                        txt_mlHero += `*● Movement speed :* ${get_result.attributes.movement_speed}\n`
                        txt_mlHero += `*● Physical attack :* ${get_result.attributes.physical_attack}\n`
                        txt_mlHero += `*● Magic power :* ${get_result.attributes.magic_power}\n`
                        txt_mlHero += `*● Physical defense :* ${get_result.attributes.physical_defense}\n`
                        txt_mlHero += `*● Magic defense :* ${get_result.attributes.magic_defense}\n`
                        txt_mlHero += `*● Hp :* ${get_result.attributes.hp}\n`
                        txt_mlHero += `*● Mana :* ${get_result.attributes.mana}\n`
                        txt_mlHero += `*● Mana regen :* ${get_result.attributes.mana_regen}\n\n`
                        txt_mlHero += `*「 Pricing 」*\n`
                        txt_mlHero += `*● Battle Point :* ${get_result.price.battle_point}\n`
                        txt_mlHero += `*● Hero Fragment :* ${get_result.price.hero_fragment}\n`
                        txt_mlHero += `*● Diamond :* ${get_result.price.diamond}\n\n\n`
                        txt_mlHero += `*「 HISTORY 」*\n\n${get_result.background_story.trim()}\n\n`
                        txt_mlHero += `© Made by ${author}`
                        cakrayp.sendMessage(from, {
                            image: gambar_hero,
                            caption: txt_mlHero,
                            jpegThumbnail: gambar_hero
                        }, { quoted: msg })
                    }).catch(err => {
                        if (messagesText.toLowerCase() == '-random') {
                            setTimeout(() => {
                                reply(language_text(
                                    `Mohon maaf, Hero *${Nama_heroML}* mungkin tidak tersedia.\n\nUntuk melihat list hero silahkan ketik *${prefix}heroml* -list`,
                                    `Sorry, Hero *${Nama_heroML}* may not be available.\n\nTo see a list of heroes, please type *${prefix}heroml* -list`)
                                )
                            }, 3000)
                        } else {
                            setTimeout(() => {
                                reply(language_text(
                                    `Mohon maaf, Hero ini yang anda cari tidak ditemukan.\n\nUntuk melihat list hero silahkan ketik *${prefix}heroml* -list`,
                                    `Sorry, the hero you were looking for was not found.\n\nTo see a list of heroes, please type *${prefix}heroml* -list`)
                                )
                            }, 3000)
                        }
                    })
                break

            // Random text
            case 'quotes':
                fetchJson('https://python-api-zhirrr.herokuapp.com/api/randomquotes')
                    .then(async (data) => {
                        reply(language_text(`${data.quotes}\n\n*• Author :* ${data.author}`, `*Indonesian*\n${data.quotes}\n\n*Translation*\n${await translate(data.quotes)}\n\n*• Author :* ${data.author}\n\n\n© Translated By *Google*`))
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'quotesbijak':
                fetchJson('https://myhuman.cf/api/katabijak')
                    .then(async ({ result }) => {
                        reply(language_text(result, `*Indonesian*\n${result}\n\n*Translation*\n${await translate(result)}\n\n© Translated By *Google*`))
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'katabijak':
            case 'pantun':
            case 'faktaunik':
                fetchJson(`https://myhuman.cf/api/${command}`)
                    .then(async ({ result }) => {
                        reply(language_text(result, `*Indonesian*\n${result}\n\n*Translation*\n${await translate(result)}\n\n© Translated By *Google*`))
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'quotesislami':
            case 'quotesislamic':
            case 'kataislamic':
                fetchJson(`${apiCakra}/api/randomquote/muslim?apikey=${apikeyCakra}`)
                    .then(async (data) => {
                        reply(language_text(`_${data.result.text_id}_`, `*Indonesian*\n_${data.result.text_id}_\n\n*Translation*\n_${await translate(data.result.text_id)}_\n\n© Translated By *Google*`))
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'quotesdilan':
            case 'katadilan':
                const __quotesDilan__ = JSON.parse(fs.readFileSync('./database/dilan.json'))
                const __randomTxtDilan = __quotesDilan__[Math.floor(Math.random() * __quotesDilan__.length)]
                reply(language_text(
                    __randomTxtDilan,
                    `*Indonesian*\n${__randomTxtDilan}\n\n*Translation*\n${await translate(__randomTxtDilan)}\n\n© Translated By *Google*`
                ))
                break
            case 'bucin':
            case 'quotesbucin':
            case 'katabucin':
                const side = Math.floor(Math.random() * 2) + 1
                if (side == 1) {
                    fetchJson('https://myhuman.cf/api/bucin').then(async ({ result }) => {
                        const __randomTxtBucin = result;
                        reply(language_text(
                            __randomTxtBucin,
                            `*Indonesian*\n${__randomTxtBucin}\n\n*Translation*\n${await translate(__randomTxtBucin)}\n\n© Translated By *Google*`
                        ))
                    })
                } else {
                    const __bucin__ = JSON.parse(fs.readFileSync('./database/bucin.json'))
                    const __randomTxtBucin = __bucin__[Math.floor(Math.random() * __bucin__.length)]
                    reply(language_text(
                        __randomTxtBucin,
                        `*Indonesian*\n${__randomTxtBucin}\n\n*Translation*\n${await translate(__randomTxtBucin)}\n\n© Translated By *Google*`
                    ))
                }
                break
            case 'quotesanime':
            case 'kataanime':
                fetchJson('https://animechan.vercel.app/api/random')
                    .then(async (data) => {
                        const { anime, character, quote } = data;
                        reply(language_text(
                            `*English*\n_${quote}_\n\n*Indonesian*\n_${await translate(quote, 'id')}_\n\n*• Anime :* ${anime}\n*• Character :* ${character}\n\n\n© Translated By *Google*`,
                            `_${quote}_\n\n*• Anime :* ${anime}\n*• Character :* ${character}`
                        ))
                    })
                break
            case 'cerpen':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                fetchJson('https://myhuman.cf/api/cerpen')
                    .then(async ({ data }) => {
                        txt_cerpen = '*「 CERPEN 」*\n\n'
                        txt_cerpen += `*• Judul :* ${data.judul}`
                        txt_cerpen += `*• Kategori :* ${data.kategori}`
                        txt_cerpen += `*• Cerita :* ${data.cerita}`
                        reply(txt_cerpen)
                    })
                break


            // Random Image
            case 'cecan':
            case 'cogan':
            case 'bts':
            case 'exo':
            case 'loli':
            case 'waifu':
            case 'shota':
            case 'husbu':
            case 'sagiri':
            case 'nino':
            // case 'milf':
            case 'art':
            case 'bts':
            case 'shinobu':
            case 'pentol':
            case 'trap':
            case 'feed':
            case 'megumin':
            case 'neko':
                scrape.pinterest(command)
                    .then(async (images) => {
                        const randImg = images[Math.floor(Math.random() * images.length)]
                        cakrayp.sendMessage(from, {
                            image: { url: randImg },
                            jpegThumbnail: await getBuffer(randImg),
                        }, { quoted: msg })
                    })
                break
            case 'couple':
                fetchJson('https://myhuman.cf/api/couple')
                    .then(async (data) => {
                        Object.keys(data).forEach(async (takePic) => {
                            const getImageCouple = await getBuffer(data[takePic])
                            cakrayp.sendMessage(from, {
                                image: getImageCouple,
                                jpegThumbnail: getImageCouple,
                                caption: takePic
                            }, { quoted: msg })
                        })
                    })
                    .catch(err => {
                        reply(commannd_response('error'))
                    })
                break

            // Media stalking
            case 'igstalk':
            case 'stalkig':
                random_usernameig = randomArr(['njwaputri_', 'hanauraaa_', 'cakrayp_hanauraaa23._', 'cakrayp_jhn'])
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan Username IG!\n\nContoh: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}\n*${prefox + command} https://www.instagram.com/${random_usernameig}*`,
                    `Please enter Instagram Username!\n\nExample: *${prefix + command}* <username>\n*${prefix + command}* ${random_usernameig}\n*${prefox + command} https://www.instagram.com/${random_usernameig}*`
                ))
                isInstagramUrl_user = /http(?:s):\/\/(www.|)instagram.com\/([0-9a-z._\-+]+)/.test(messagesText)
                if (isUrl(messagesText) && isInstagramUrl_user) {
                    username = messagesText.split('/')
                    username = username[3].split('?')[0]
                } else {
                    username = messagesText
                }
                if (isUrl(messagesText) && !isInstagramUrl_user) return reply(language_text(`Mohon maaf ini khusus untuk pengguna instagram story, silahkan masukkan username terlebih dahulu`, `Sorry, this is specifically for Instagram story users, please enter your username first`))
                reply(commannd_response('wait'))
                instagram.getUserProfile(username.trim())
                    .then(async (data) => {
                        txt_igstalk = `*「 IG Stalk 」*\n\n`
                        txt_igstalk += `*• ID :* ${data.id}\n`
                        txt_igstalk += `*• Username :* ${data.username}\n`
                        txt_igstalk += `*• Full Name :* ${data.fullname}\n`
                        txt_igstalk += `*• Posts :* ${data.mediadata.feed_totally}\n`
                        txt_igstalk += `*• Followers :* ${data.followers}\n`
                        txt_igstalk += `*• Following :* ${data.following}\n`
                        txt_igstalk += `*• Verified :* ${data.verified}\n`
                        txt_igstalk += `*• Private :* ${data.private ? "✅" : "❎"}\n`
                        txt_igstalk += `*• Biography :* ${data.biography}\n`
                        txt_igstalk += `*• External Link:*\n${data.mediadata.external_link}\n\n\n`
                        txt_igstalk += `*Link Profile URL*\n${await short(data.profile_url)}`
                        cakrayp.sendMessage(from, {
                            image: { url: data.profile_pic },
                            jpegThumbnail: await getBuffer(data.profile_pic),
                            caption: txt_igstalk
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(err.message)
                    })
                break
            case 'githubstalk':
            case 'stalkgithub':
                if (args.length == 0) return reply(language_text(`Silahkan masukkan Username Github!\n\nContoh: *${prefix + command}* <username>\n*${prefix + command}* cakrayp`, `Please enter Github Username!\n\nExample: *${prefix + command}* <username>\n*${prefix + command}* cakrayp`))
                fetchJson(`https://api.github.com/users/${username}`)
                    .then(async (github_stalker) => {
                        if (github_stalker.status == 404) return reply(language_text('Mohon maaf, username yang anda cari tidak ditemukan', 'Sorry, the username you were looking for could not be found'))
                        const get_resultGit = {
                            id: github_stalker.id,
                            node_id: github_stalker.node_id,
                            html_url: github_stalker.html_url,
                            avatar_url: github_stalker.avatar_url,
                            username: github_stalker.login,
                            fullname: github_stalker.fullname,
                            bio: github_stalker.bio,
                            blog: github_stalker.blog,
                            company: github_stalker.company,
                            twitter_username: github_stalker.twitter_username,
                            public_repos: github_stalker.public_repos,
                            public_gists: github_stalker.public_gists,
                            followers: github_stalker.followers,
                            following: github_stalker.following,
                            created_At: github_stalker.created_at,
                            updated_At: github_stalker.updated_at
                        }
                        txt_gitstalker = `*「 GITHUB Stalk 」*\n\n`
                        txt_gitstalker += `*• Username :* ${get_resultGit.username}\n`
                        txt_gitstalker += `*• Fullname :* ${get_resultGit.fullname}\n`
                        txt_gitstalker += `*• Followers :* ${get_resultGit.followers}\n`
                        txt_gitstalker += `*• Following :* ${get_resultGit.following}\n`
                        txt_gitstalker += `*• Company :* ${get_resultGit.company ? get_resultGit.company : 'none'}\n`
                        txt_gitstalker += `*• Public Repo :* ${get_resultGit.public_repos}\n`
                        txt_gitstalker += `*• Public Gists :* ${get_resultGit.public_gists}\n`
                        txt_gitstalker += `*• Created At :* ${new Date(get_resultGit.created_At * 1000).toDateString()}\n`
                        txt_gitstalker += `*• Bio :* ${get_resultGit.bio}\n\n\n`
                        txt_gitstalker += `*Link Profile URL*\n${await short(get_resultGit.html_url)}`
                        cakrayp.sendMessage(from, {
                            image: { url: get_resultGit.avatar_url },
                            jpegThumbnail: await getBuffer(get_resultGit.avatar_url),
                            caption: txt_gitstalker
                        }, { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break
            case 'ytstalk':
                if (!messagesText) return reply(language_text(`Silahkan masukkan nama channel Youtube tersebut.\n\nContoh: *${prefix + command}* <yt channel>\n*${prefix + command}* miawaug`, `Please enter youtube channel name first.\n\nExample: *${prefix + command}* <yt channel>\n*${prefix + command}* miawaug`))
                fetchJson(`https://myhuman.cf/api/ytstalk?query=${messagesText}`)
                    .then(async ({ result }) => {
                        const { type, image, name, title, videoCount, videoCountLabel, subCount, subCountLabel, url } = result[0]
                        const img_buffer = await getBuffer(image)
                        txt_ytstalk = `*「 YT Stalk 」*\n\n`
                        txt_ytstalk += `*• Type :* ${type}\n`
                        txt_ytstalk += `*• Name :* ${name}\n`
                        txt_ytstalk += `*• Title :* ${title}\n`
                        txt_ytstalk += `*• VideoCount :* ${videoCount}\n`
                        txt_ytstalk += `*• VideoCountLabel :* ${videoCountLabel}\n`
                        txt_ytstalk += `*• Subcribers :* ${subCount}\n`
                        txt_ytstalk += `*• Sublabel :* ${subCountLabel}\n\n\n`
                        txt_ytstalk += `*Link Profile URL*\n${await short(url)}`
                        cakrayp.sendMessage(from, {
                            image: img_buffer,
                            jpegThumbnail: img_buffer,
                            caption: txt_ytstalk
                        }, { quoted: msg })
                    })
                break

            // Google
            case 'translate':
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan Text dan sertakan kode bahasa untuk terjemahkan dalam bahasa tersebut\n\nContoh: *${prefix + command}* <lang> <text>\n*${prefix + command}* en jihan forgive me\n\nUntuk memilih kode bahasa Silahkan ketik *${prefix}bahasa* terlebih dahulu`,
                    `Please enter Text and include the language code to translate in that language\n\nE.g: *${prefix + command}* <lang> <text>\n*${prefix + command}* en jihan forgive me\n\nTo select a language code Please type *${prefix}language* first`
                ))
                if (!checkLanguageCode(args[0])) return reply(language_text(
                    `Silahkan masukkan kode bahasa terlebih dahulu dengan pilihan dibawah\nContoh: *${prefix + command}* <kode Bahasa> <text>\n*${prefix + command}* id Halo\n\n${helpmenu.bahasa()}`,
                    `Please enter the language code first with the options below\nContoh: *${prefix + command}* <Language code> <text>\n*${prefix + command}* en Hello\n\n${helpmenu.bahasa()}`
                ))
                Language_code = args[0]
                args.shift()
                const text_terjemahan = args.join(' ')
                if (!text_terjemahan) return reply(language_text('Silahkan masukkan text yang ingin diterjemahkan', 'Please enter the text you want to translate'))
                console.log(await translate(text_terjemahan, Language_code))
                translate_google(text_terjemahan, { to: Language_code })
                    .then((teks) => {
                        reply(teks)
                    }).catch(async err => {
                        reply(language_text(await translate(err.message), err.message))
                    })
                break
            case 'tts':
            case 'gtts':
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan Text dan sertakan kode bahasa untuk mengirim suara tersebut\n\nContoh: *${prefix + command}* <lang> <text>\n*${prefix + command}* en jihan forgive me\n\nUntuk memilih kode bahasa Silahkan ketik *${prefix}bahasa* terlebih dahulu`,
                    `Please enter Text and include the language code to send the voice\n\nE.g: *${prefix + command}* <lang> <text>\n*${prefix + command}* en jihan forgive me\n\nTo select a language code Please type *${prefix}language* first`
                ))
                if (!checkLanguageCode(args[0])) return reply(language_text(
                    `Silahkan masukkan kode bahasa terlebih dahulu dengan pilihan dibawah\nContoh: *${prefix + command}* <kode Bahasa> <text>\n*${prefix + command}* id Halo\n\n${helpmenu.bahasa()}\n© Made by ${author}`,
                    `Please enter the language code first with the options below\nContoh: *${prefix + command}* <Language code> <text>\n*${prefix + command}* en Hello\n\n${helpmenu.bahasa()}\n© Made by ${author}`
                ))
                let Language_code_for_tts = args[0];
                args.shift()
                const text_suara = args.join(' ')
                if (!text_suara) return reply(language_text('Silahkan masukkan Text terlebih dahulu', 'Please enter the text first.'))
                const gtts = require('node-gtts')(Language_code_for_tts)
                const gtts_stream = gtts.stream(text_suara);
                // Convert stream to buffer.
                streamToBuffer(gtts_stream, async (err, buff) => {
                    const { ext, mime } = await fromBuffer(buff);
                    cakrayp.sendMessage(from, {
                        audio: buff,
                        mimetype: mime,
                        fileName: 'PTT-' + Date.now() + '.' + ext,
                        ptt: true
                    }, { quoted: msg });
                })
                break

            // Uploader
            case 'tourl':
            case 'telegraph':
                if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
                    try {
                        reply(commannd_response('wait'))
                        const getMediaMessageTypeOfTelegraPh = Object.keys(type == 'extendedTextMessage' ? msg.message.extendedTextMessage?.contextInfo.quotedMessage : msg.message)[0]
                        const downloadAndGetObject = msg.message[getMediaMessageTypeOfTelegraPh] || msg.message.extendedTextMessage?.contextInfo.quotedMessage[getMediaMessageTypeOfTelegraPh];
                        const getMediaMetaBuff = await downloadMediaMessageWithBuffer(downloadAndGetObject, getMediaMessageTypeOfTelegraPh.replace("Message", ""))
                        const TelegraPh_link = await uploader.TelegraPh(getMediaMetaBuff);
                        txt_uploader = '*「 TO URL 」*\n\n'
                        txt_uploader += `*• FileName :* ${TelegraPh_link.split('/')[4]}\n`
                        txt_uploader += `*• Type :* ${getMediaMessageTypeOfTelegraPh.replace("Message", "")}\n`
                        txt_uploader += `*• Mimetype :* ${downloadAndGetObject.mimetype}\n`
                        txt_uploader += `*• Size :* ${await bytesToSize(downloadAndGetObject.fileLength.low)}\n`
                        txt_uploader += `*• Link :* ${TelegraPh_link}`
                        replyWithThumbCustom(txt_uploader, 'Uploader By telegraPh', TelegraPh_link, `Request by ${pushname}`, isImage || isQuotedImage ? await getBuffer(TelegraPh_link) : botProfile, { quoted: msg })
                        // reply(txt_uploader)
                    } catch (err) {
                        console.log(err)
                        reply(commannd_response('error'))
                    }
                } else if (isUrl(messagesText)) {
                    try {
                        reply(commannd_response('wait'))
                        getBuffer(messagesText)
                            .then(async (get_buffer) => {
                                fromBuffer()
                                    .then(async ({ ext, mime }) => {
                                        const TelegraPh_link = await uploader.TelegraPh(get_buffer)
                                        txt_uploader = '*「 TO URL 」*\n\n'
                                        txt_uploader += `*• FileName :* ${TelegraPh_link.split('/')[4]}\n`
                                        txt_uploader += `*• Type :* ${ext == "mp4" ? 'video' : 'image'}\n`
                                        txt_uploader += `*• Mimetype :* ${mime}\n`
                                        txt_uploader += `*• Link :* ${TelegraPh_link}`
                                        replyWithThumbCustom(txt_uploader, 'Uploader By telegraPh', TelegraPh_link, `Request by ${pushname}`, /^jp(eg|g)|png$/.test(ext) ? await getBuffer(TelegraPh_link) : botProfile, { quoted: msg })
                                        // reply(txt_uploader)
                                    })
                            })
                            .catch(err => {
                                reply(language_text(
                                    'Mohon maaf link yang anda masukkan itu tidak termasuk dalam file *video/gambar*',
                                    'Sorry, the link you entered doesn\'t include the *video/picture* file.'
                                ))
                            })
                    } catch (err) {
                        console.log(err)
                        reply(commannd_response('error'))
                    }
                } else {
                    reply(language_text(
                        `Silahkan dikirim gambar/video dengan caption *${prefix + command}*, atau direply gambar/video yang telah dikirim atau anda dapat memasukkan URL serta termasuk dalam file *gambar/video*\n\nContoh: *${prefix + command}* (file foto/video) atau <URL file>\n*${prefix + command}* (kirim foto/video dengan caption atau direply yang telah dikirim)\n*${prefix + command}* https://telegra.ph/file/e5a8dd8dd4a95434f5ed0.jpg`,
                        `Please send an image/video with the caption *${prefix + command}*, or reply to an image/video that has been sent or you can enter a URL and include it in the *image/video* file\n\nExample: *${prefix + command}* (photo/video file) or <URL file>\n*${prefix + command}* (send photo/video with caption or reply that has been sent)\n*${prefix + command}* https://telegra.ph/file/e5a8dd8dd4a95434f5ed0.jpg`
                    ))
                }
                break
            case 'uguu':
            case 'tourluguu':
                if (isImage || isQuotedImage || isVideo || isQuotedVideo || isQuotedSticker) {
                    try {
                        reply(commannd_response('wait'))
                        const getMediaMessageTypeOfUguu = Object.keys(type == 'extendedTextMessage' ? msg.message.extendedTextMessage?.contextInfo.quotedMessage : msg.message)[0]
                        const downloadAndGetObject = msg.message[getMediaMessageTypeOfUguu] || msg.message.extendedTextMessage?.contextInfo.quotedMessage[getMediaMessageTypeOfUguu];
                        const getMediaMetaBuff = await downloadMediaMessageWithBuffer(downloadAndGetObject, getMediaMessageTypeOfUguu.replace("Message", ""))
                        const uguu_se_result = await uploader.UploadFileUgu(getMediaMetaBuff)
                        const { ext, mime } = await fromBuffer(getMediaMetaBuff)
                        txt_uploader = '*「 TO URL 」*\n\n'
                        txt_uploader += `*• FileName :* ${uguu_se_result.name}\n`
                        txt_uploader += `*• Hash :* ${uguu_se_result.hash}\n`
                        txt_uploader += `*• Type :* ${ext}\n`
                        txt_uploader += `*• Mimetype :* ${mime}\n`
                        txt_uploader += `*• Size :* ${await bytesToSize(uguu_se_result.size)}\n`
                        txt_uploader += `*• Link :* ${uguu_se_result.url}`
                        replyWithThumbCustom(txt_uploader, 'Uploader By Uguu', uguu_se_result.url, `Request by ${pushname}`, isImage || isQuotedImage ? await getBuffer(uguu_se_result.url) : botProfile, { quoted: msg })
                    } catch (err) {
                        reply(commannd_response('error'))
                    }
                } else {
                    reply(language_text(`Silahkan dikirim gambar/video/sticker dengan caption *${prefix + command}*, atau direply gambar/video/sticker yang sudah dikirim`, `Please send image or video with caption *${prefix + command}* or reply to the picture or video that has been sent`))
                }
                break

            // Anime manga
            case 'wait':
                if (isImage || isQuotedImage) {
                    reply(commannd_response('wait'))
                    const form_anime = new FormData()
                    const stream_anime = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                    form_anime.append('img', stream_anime)
                    fetchJson('https://api.trace.moe/search?anilistInfo', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-type": "image/jpeg",
                        },
                        body: form_anime,
                    })
                        .then(async ({ result }) => {
                            let get_anime_data = result[0];
                            let file_name = getRandom('.mp4')
                            let file_name2 = getRandom('.mp4')
                            fs.writeFileSync(`./temp/${file_name}`, await getBuffer(get_anime_data.video))
                            wait_txt = `*「 ANIME WAIT 」*\n\n`
                            wait_txt += `*• Anilist ID :* ${get_anime_data.anilist.id}\n`
                            wait_txt += `*• MAL ID :* ${get_anime_data.anilist.idMal}\n`
                            wait_txt += `*• Title Romaji :* ${get_anime_data.anilist.title.native}\n`
                            wait_txt += `*• Title Native :* ${get_anime_data.anilist.title.romaji}\n`
                            wait_txt += `*• Title English :* ${get_anime_data.anilist.title.english}\n`
                            wait_txt += `*• Filename :* ${get_anime_data.filename}\n`
                            wait_txt += `*• From :* ${get_anime_data.from}\n`
                            wait_txt += `*• to :* ${get_anime_data.to}\n`
                            wait_txt += `*• Episode :* ${get_anime_data.episode.toString()}\n`
                            wait_txt += `*• Similarity :* ${(get_anime_data.similarity).toFixed(1)}%\n\n\n`
                            wait_txt += `*ANIME VIDEO :*\n${await short(get_anime_data.video)}`
                            cakrayp.sendMessage(from, { image: { url: get_anime_data.image }, caption: wait_txt, jpegThumbnail: await getBuffer(get_anime_data.image), }, { quoted: msg }).then(() => {
                                setTimeout(() => {
                                    exec(`${ffmpegPath} -i ./temp/${file_name} ./temp/${file_name2}`, async (stderr) => {
                                        fs.unlinkSync(`./temp/${file_name}`)
                                        await cakrayp.sendMessage(from, { video: fs.readFileSync(`./temp/${file_name2}`) }, { quoted: msg })
                                    })
                                }, 2500);
                            })
                        })
                } else {
                    reply(language_text(`Silahkan Kirim gambar Anime dengan caption *${prefix + command}* atau reply gambar Anime yang sudah dikirim`, `Please Send the Anime image with the caption *${prefix + command}* or reply to the Anime image that has been sent`))
                }
                break
            case 'manga':
                if (!messagesText) return reply(language_text(`Silahkan masukkan nama anime yang anda cari.\n\nContoh: *${prefix + command}* <Anime name>\n*${prefix + command}* Gotoubun No Hanayome`, `Please enter the name anime you are looking for\n\nExample: *${prefix + command}* <Anime name>\n*${prefix + command}* Gotoubun No Hanayome`))
                fetchJson(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${messagesText}`)
                    .then(async (data) => {
                        const ini_downloader = data.downloads
                        const thumbnail = await getBuffer(data.thumb)
                        txt_manga = '*「 Manga Search 」*\n\n'
                        txt_manga += `*• Title :* ${data.title}\n`
                        txt_manga += `*• Name :* ${data.name}\n`
                        txt_manga += `*• Type :* ${data.type}\n`
                        txt_manga += `*• Author :* ${data.author}\n`
                        txt_manga += `*• Genre :* ${data.genre}\n`
                        txt_manga += `*• Rating :* ${data.rating}\n`
                        txt_manga += `*• Released :* ${data.released}\n`
                        txt_manga += `*• Status :* ${data.status}\n`
                        txt_manga += `*• Desc :* ${data.description}\n`
                        txt_manga += `*• Note :* ${data.note}\n\n\n`
                        txt_manga += `*「 File PDF Downloads 」*\n\n`
                        for (var x of ini_downloader) {
                            txt_manga += `*• ${x.title} (${x.date})*\n`
                            txt_manga += `${await shortLink(x.link)}\n`
                        }
                        cakrayp.sendMessage(from, {
                            image: thumbnail,
                            jpegThumbnail: thumbnail,
                            caption: txt_manga
                        }, { quoted: msg })
                    })
                    .catch(err => {
                        reply(language_text('Mohon maaf, tidak ada hasil untuk anda', 'Sorry, no results for you'))
                    })
                break
            case 'kusonimesearch':
                if (!isIndonesian) return reply(commannd_response('indoOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama anime yang anda cari\n\nContoh: *${prefix + command}* <query>\n*${prefix + command}* Naruto`)
                fetchJson(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${messagesText}`)
                    .then(async (data) => {
                        const get_buffer = await getBuffer(get_result.thumbs)
                        const link_dl = get_result.download
                        txt_kusonime = `*「 Kusonime Search 」*\n\n`
                        txt_kusonime += `*• Title :* ${get_result.title}\n`
                        txt_kusonime += `*• Japanese :* ${get_result.title_jp}\n`
                        txt_kusonime += `*• Genre :* ${get_result.genre}\n`
                        txt_kusonime += `*• Seasons :* ${get_result.seasons}\n`
                        txt_kusonime += `*• Producers :* ${get_result.producer}\n`
                        txt_kusonime += `*• Type :* ${get_result.type}\n`
                        txt_kusonime += `*• Status :* ${get_result.status}\n`
                        txt_kusonime += `*• Total Episode :* ${get_result.total_episode}\n`
                        txt_kusonime += `*• Score :* ${get_result.score}\n`
                        txt_kusonime += `*• Duration :* ${get_result.duration}\n`
                        txt_kusonime += `*• Released On :* ${get_result.released_on}\n`
                        txt_kusonime += `*• Desc :* ${get_result.description}\n\n\n`
                        txt_kusonime += `*「 Downloads 」*\n`
                        for (var x in link_dl) {
                            txt_kusonime += `\n\n*Resolution :* ${link_dl[x].resolution}\n`
                            for (let y of link_dl[x].download_list) {
                                txt_kusonime += `*• ${y.downloader}*\n`
                                txt_kusonime += `${await shortLink(y.download_link)}\n`
                            }
                        }
                        cakrayp.sendMessage(from, {
                            image: get_buffer,
                            jpegThumbnail: get_buffer,
                            caption: txt_kusonime
                        }, { quoted: msg })
                    })
                    .catch(err => {
                        reply(language_text('Mohon maaf, tidak ada hasil untuk anda', 'Sorry, no results for you'))
                    })
                break

            // Primbon
            case 'artimimpi':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama terlebih dahulu\n\nContoh: *${prefix + command}* <nama>\n*${prefix + command}* harapan`)
                primbon.tafsirMimpi(messagesText)
                    .then(async (teks) => {
                        reply(`Hasil dari kata kunci mimpi : *${messagesText}*\n\n${teks}`)
                    }).catch(err => {
                        reply(err.message)
                    })
                break
            case 'artinama':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan kata kunci mimpi terlebih dahulu\n\nContoh: *${prefix + command}* <text>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])}`)
                primbon.artiNama(messagesText)
                    .then(async ({ nama, meaning, description }) => {
                        txt_artinama = `*「 ARTINAMA 」*\n\n`
                        txt_artinama += `*• Nama :* ${nama}\n`
                        txt_artinama += `*• Memiliki arti :*\n${meaning}\n\n`
                        txt_artinama += `*• Deskripsi :*\n${description}`
                        reply(txt_artinama)
                    }).catch(err => {
                        reply(err.message)
                    })
                break
            case 'jodoh':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama terlebih dahulu\n\nContoh: *${prefix + command}* <Nama Anda & Nama Pasangan>\n*${prefix + command}* Cakra & jihan`)
                if (!args.includes('&')) return reply(`Gunakan format tanda "&" untuk memisahkan nama tersebut\n\nContoh: *${prefix + command}* <Nama Anda & Nama Pasangan>\n*${prefix + command}* Cakra & jihan`)
                if (!args[2]) return reply(`Silahkan masukkan nama pasangan terlebih dahulu\n\nContoh: *${prefix + command}* <Nama Anda & Nama Pasangan>\n*${prefix + command}* Cakra & jihan`)
                primbon.Jodoh(args[0].trim(), args[2].trim())
                    .then(async ({
                        namaAnda,
                        namaPasangan,
                        positif,
                        negatif,
                        love
                    }) => {
                        txt_pasangan = `*「 JODOH 」*\n\n`
                        txt_pasangan += `*• Nama Anda :* ${namaAnda}\n`
                        txt_pasangan += `*• Nama Pasangan :* ${namaPasangan}\n`
                        txt_pasangan += `*• Positif :* ${positif}\n`
                        txt_pasangan += `*• Negatif :* ${negatif}\n\n`
                        txt_pasangan += `*Note:* Deskripsi ada didalam text negatif.`
                        cakrayp.sendMessage(from, {
                            image: { url: love },
                            jpegThumbnail: await getBuffer(love),
                            caption: txt_pasangan
                        }, { quoted: msg })
                    })
                break
            case 'tanggaljadian':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan tanggal terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!messagesText.match(/\-/)) return reply(`Gunakan format tanda "-" untuk tanggal\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                checktanggal = messagesText.split(/\-/)
                if (!/^[0-9]+$/.test(messagesText.replace(/\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[1]) return reply(`Silahkan masukkan bulan terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[2]) return reply(`Silahkan masukkan tahun terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                primbon.tanggaljadi(messagesText)
                    .then(async ({
                        tanggal,
                        karakteristik,
                        description
                    }) => {
                        txt_tgljadian = `*「 TGL JADIAN 」*\n\n`
                        txt_tgljadian += `*• Tanggal :* ${tanggal}\n`
                        txt_tgljadian += `*• Karakteristik :*\n${karakteristik}\n\n`
                        txt_tgljadian += `*• deskripsi :*\n${description}\n`
                        reply(txt_tgljadian)
                    })
                break
            case 'kecocokannama':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan nama dan tanggal lahir terlebih dahulu\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                if (!/^[a-zA-Z]+$/.test(args[0])) return reply(`Silahkan masukkan nama terlebih dahulu\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                if (!args[1]) return reply(`Silahkan masukkan tanggal lahir terlebih dahulu\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                if (!args[1].match(/\-/)) return reply(`Gunakan format tanda "-" untuk tanggal\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                checktanggal = args[1].split(/\-/)
                if (!/^[0-9]+$/.test(args[1].replace(/\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                if (!checktanggal[1]) return reply(`Silahkan masukkan bulan terlebih dahulu\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                if (!checktanggal[2]) return reply(`Silahkan masukkan tahun terlebih dahulu\n\nContoh: *${prefix + command}* <Name> <date>\n*${prefix + command}* ${randomArr(['Cakra', 'Jihan', 'Najwa', 'Sabrina', 'Putrimahari'])} 18-02-2015`)
                primbon.kecocokannama(args[0].trim(), args[1].trim())
                    .then(async (teks) => {
                        reply(teks)
                    })
                break
            case 'weton':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan tanggal terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!messagesText.match(/\-/)) return reply(`Gunakan format tanda "-" untuk tanggal\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                checktanggal = messagesText.split(/\-/)
                if (!/^[0-9]+$/.test(messagesText.replace(/\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[1]) return reply(`Silahkan masukkan bulan terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[2]) return reply(`Silahkan masukkan tahun terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                primbon.rejekiweton(messagesText)
                    .then(async ({ penjelasan, statistik }) => {
                        txt_weton = `*「 WETON REJEKI HOKI 」*\n\n`
                        txt_weton += `${penjelasan}`
                        cakrayp.sendMessage(from, {
                            image: { url: statistik },
                            jpegThumbnail: await getBuffer(statistik),
                            caption: txt_weton
                        })
                    })
                break
            case 'hariterbaik':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan tanggal terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!messagesText.match(/\-/)) return reply(`Gunakan format tanda "-" untuk tanggal\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                checktanggal = messagesText.split(/\-/)
                if (!/^[0-9]+$/.test(messagesText.replace(/\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[1]) return reply(`Silahkan masukkan bulan terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[2]) return reply(`Silahkan masukkan tahun terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                primbon.haribaik(messagesText)
                    .then(async (teks) => {
                        reply(teks)
                    })
                break
            case 'harilarangan':
                if (!isIndonesian) return reply(commannd_response('indOnly'))
                if (!messagesText) return reply(`Silahkan masukkan tanggal terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!messagesText.match(/\-/)) return reply(`Gunakan format tanda "-" untuk tanggal\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                checktanggal = messagesText.split(/\-/)
                if (!/^[0-9]+$/.test(messagesText.replace(/\-/g, ""))) return reply(`Format harus berupa dengan angka!\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[1]) return reply(`Silahkan masukkan bulan terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                if (!checktanggal[2]) return reply(`Silahkan masukkan tahun terlebih dahulu\n\nContoh: *${prefix + command}* <date>\n*${prefix + command}* 18-02-2015`)
                primbon.harilarangan(messagesText)
                    .then(async (teks) => {
                        reply(teks)
                    })
                break

            // Creator
            case 's':
            case 'stiker':
            case 'sticker':
                stickerInfo = {
                    "author": Bot_Name,
                    "pack": "whatsapp sticker"
                }
                if (isImage || isQuotedImage) {
                    const buffer_img = await downloadMediaMessageWithBuffer(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                    const sticker = new Sticker(buffer_img, {
                        pack: stickerInfo.pack,         // The pack name
                        author: stickerInfo.author,     // The author name
                        type: StickerTypes.FULL,        // The sticker type
                        categories: ['🤩', '🎉'],        // The sticker category
                        id: '12345',                    // The sticker id
                        quality: 75,                    // The quality of the output file
                        background: 'transparent'       // The sticker background color (only for full stickers)
                    })
                    cakrayp.sendMessage(from, await sticker.toMessage(), { quoted: msg })

                } else if (isVideo || isQuotedVideo) {
                    if (isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds > 15 : msg.message.videoMessage.seconds > 15) return reply('too long duration, max 15 seconds')
                    reply(commannd_response('wait'))
                    const file_name = getRandom()
                    await downloadAndSaveMediaMessage("video", "./temp/" + file_name + ".mp4")
                    const ahsuhfkj = await convert("./temp/" + file_name + ".mp4")
                    const sticker = new Sticker(fs.readFileSync(ahsuhfkj), {
                        pack: stickerInfo.pack,         // The pack name
                        author: stickerInfo.author,     // The author name
                        type: StickerTypes.FULL,        // The sticker type
                        categories: ['🤩', '🎉'],        // The sticker category
                        id: '12345',                    // The sticker id
                        quality: 75,                    // The quality of the output file
                        background: 'transparent'       // The sticker background color (only for full stickers)
                    })
                    cakrayp.sendMessage(from, await sticker.toMessage(), { quoted: msg })
                } else {
                    reply(language_text(`Silahkan Kirim gambar dengan caption *${prefix + command}* atau reply gambar yang sudah dikirim`, `Please Send pictures with caption *${prefix}sticker* or reply to the image that has been sent`))
                }
                break
            case 'emoji':
                emotelist = ['😀', '😃', '😄', '😁', '😆', '😅', '😂']
                if (!messagesText) return reply(language_text(`Silahkan masukkan emoji kalian\n\nContoh: *${prefix + command}* <emoji>\n*${prefix + command}* ${randomArr(emotelist)}­`, `Please enter your emoji\n\nExample: *${prefix + command}* <emoji>\n*${prefix + command}* ${randomArr(emotelist)}­`))
                if (/[a-zA-Z0-9]+/.test(messagesText)) return reply(language_text(
                    `Mohon maaf, perintah *${prefix + command}* tidak mendukung dalam format huruf, angka atau apapun, silakhan masukkan emoji tersebut.\n\nContoh: *${prefix + command}* <emoji>\n*${prefix + command}* ${randomArr(emotelist)}­`,
                    `Sorry, the command *${prefix + command}* doesn't support letters, numbers or anything else, please enter the emojis.\n\nExample: *${prefix + command}* <emoji>\n*${prefix + command}* ${randomArr(emotelist)}`
                ))
                emoji = messagesText;
                try {
                    emoji = encodeURI(emoji[0])
                } catch {
                    emoji = encodeURI(emoji)
                }
                getBuffer(`https://emojicdn.elk.sh/${emoji}`)
                    .then(async (emoji_png) => {
                        stickerInfo = {
                            "author": Bot_Name,
                            "pack": command
                        }
                        const sticker = new Sticker(emoji_png, {
                            pack: stickerInfo.pack,         // The pack name
                            author: stickerInfo.author,     // The author name
                            type: StickerTypes.FULL,        // The sticker type
                            categories: ['🤩', '🎉'],        // The sticker category
                            id: '12345',                    // The sticker id
                            quality: 75,                    // The quality of the output file
                            background: 'transparent'       // The sticker background color (only for full stickers)
                        })
                        cakrayp.sendMessage(from, await sticker.toMessage(), { quoted: msg })
                    }).catch(err => {
                        console.log(err)
                        reply(language_text('Mohon maaf, emoji ini mungkin tidak ada atau kelebihan hanya cukup satu emoji saja.', 'Sorry, this emoji may not exist or the advantages of only one emoji is enough.'))
                    })
                break
            case 'emojimix':
                emotelist = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😎', '😜', '☺️']
                let emojiMixx = messagesText.split(/\||\+/);
                if (!messagesText || !emojiMixx[0]) return reply(language_text(`Silahkan masukkan 2 emoji yang akan digabung menjadi satu emoji tersebut\n\nContoh: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)}­ | ${randomArr(emotelist)}­`, `Please enter 2 emojis to be combined into one emoji\n\nExample: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)} | ${randomArr(emotelist)}­­`))
                if (!/\||\+/.test(messagesText)) return reply(language_text(`Gunakan format tanda "|" atau "+" untuk menggabungkan emoji tersebut\n\nContoh: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)}­ | ${randomArr(emotelist)}­`, `Use the "|" sign format or "+" to combine the emojis\n\nExample: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)} | ${randomArr(emotelist)}­­`))
                if (/[a-zA-Z0-9]+|^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|\/\\©]+/.test(messagesText)) return reply(language_text(
                    `Mohon maaf, perintah *${prefix + command}* tidak mendukung dalam format huruf, angka atau apapun, silakhan masukkan 2 emoji tersebut.\n\nContoh: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)}­ | ${randomArr(emotelist)}`,
                    `Sorry, the command *${prefix + command}* doesn't support letters, numbers or anything else, please enter the 2 emojis.\n\nExample: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)} | ${randomArr(emotelist)}`
                ))
                if (!emojiMixx[1]) return reply(language_text(`Silahkan masukkan satu emoji tersebut\n\nContoh: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)}­ | ${randomArr(emotelist)}­`, `Please enter that one emoji\n\nExample: *${prefix + command}* <emoji1> | <emoji2>\n*${prefix + command}* ${randomArr(emotelist)} | ${randomArr(emotelist)}­­`))
                !emojiMixx[emojiMixx.length - 1] ? emojiMixx.pop(emojiMixx.length - 1) : emojiMixx;    //  if this empty on array of [""] to remove.
                if (emojiMixx.length < 3) {
                    const encodeEmojiresults = emojiMixx.join("_").replace(/ +/g, "").trim();
                    emojiMix(encodeEmojiresults)
                        .then(async (results) => {
                            stickerInfo = {
                                "author": Bot_Name,
                                "pack": command
                            }
                            const sticker = new Sticker(results, {
                                pack: stickerInfo.pack,         // The pack name
                                author: stickerInfo.author,     // The author name
                                type: StickerTypes.FULL,        // The sticker type
                                categories: ['🤩', '🎉'],        // The sticker category
                                id: '12345',                    // The sticker id
                                quality: 75,                    // The quality of the output file
                                background: 'transparent'       // The sticker background color (only for full stickers)
                            })
                            cakrayp.sendMessage(from, await sticker.toMessage(), { quoted: msg })
                        })
                        .catch(err => {
                            if (err.code == 403) {
                                reply(language_text('Mohon maaf, emoji ini tidak mendukung dengan yang lain atau tidak ada.', 'Sorry, this emoji doesn\'t support with others or doesn\'t exist.'))
                            } else {
                                reply(commannd_response('error'))
                            }
                        })
                } else {
                    reply(language_text(`Mohon maaf, emoji ini tidak boleh melebihi dari ${emojiMixx.length} emoji maksimal dua emoji saja, Silahkan masukkan dua emoji tersebut.`, `Sorry, this emoji can't be more than ${emojiMixx.length} emoji a maximum of two emojis only, Please enter the two emojis.`))
                }
                break
            case 'attp':
            case 'ttp':
                if (!messagesText) return reply(language_text(`Silahkan masukkan text!\n\nContoh: *${prefix + command}* <text>\n*${prefix + command}* ${randomArr(['Cakra Yp', 'jihan aura', 'Najwa putri'])}`, `Please enter text!\n\nE.g: *${prefix + command}* <text>\n*${prefix + command}* ${randomArr(['Cakra Yp', 'jihan aura', 'Najwa putri'])}`))
                stickerInfo = {
                    "author": Bot_Name,
                    "pack": command
                }
                getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURIComponent(messagesText)}`)
                    .then(async (buff_media) => {
                        const sticker = new Sticker(buff_media, {
                            pack: stickerInfo.pack,         // The pack name
                            author: stickerInfo.author,     // The author name
                            type: StickerTypes.FULL,        // The sticker type
                            categories: ['🤩', '🎉'],        // The sticker category
                            id: '12345',                    // The sticker id
                            quality: 75,                    // The quality of the output file
                            background: 'transparent'       // The sticker background color (only for full stickers)
                        })
                        cakrayp.sendMessage(from, await sticker.toMessage(), { quoted: msg })
                    }).catch(err => {
                        reply(commannd_response('error'))
                    })
                break

            // Converter
            case 'towebp':
                if (isVideo || isImage || isQuotedImage || isQuotedVideo) {
                    reply(commannd_response('wait'))
                    let input_file = getRandom('.webp')
                    let output_file = getRandom('.png')
                    fs.writeFileSync(`./temp/${input_file}`, await downloadMediaMessageWithBuffer(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker'))
                    exec(`${ffmpegPath} -i ./temp/${input_file} ./temp/${output_file}`, async (stdout, stderr) => {
                        const { ext, mime } = await fromBuffer(fs.readFileSync(`./temp/${output_file}`))
                        if (!stderr) {
                            fs.unlinkSync(`./temp/${input_file}`)
                            cakrayp.sendMessage(from, {
                                document: fs.readFileSync(`./temp/${output_file}`),
                                mimetype: mime,
                            }, { quoted: msg })
                        } else {
                            reply(language_text(`Mohon maaf, media ini tidak dapat diconvert ke WebP.`, `Sorry, this media cannot be converted to WebP`))
                        }
                    })
                } else {
                    reply(language_text(`Silahkan kirim *Gambar/Video* dengan caption *${prefix + command}* atau direply gambar/video yang telah dikirim`, `Please send a images or video with the caption *${prefix + command}* or reply to the picture or video that has been sent`))
                }
                break
            case 'toimg':
                if (isQuotedSticker) {
                    reply(commannd_response('wait'))
                    // Convert to PNG With 'https://ezgif.com'
                    ezgif.webpToFile(await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker'), "png")
                        .then(async (image_result) => {
                            const get_buffer = await getBuffer(image_result)
                            const { ext, mime } = await fromBuffer(get_buffer)
                            if (ext == 'apng') {
                                reply(language_text(`Mohon maaf, stiker ini berisi dalam video/gif, dan anda dapat menggunakan perintah *${prefix}tomp4* untuk mengconvert ke video tersebut`, `Sorry, this sticker is contained in a video/gif, and you can use the command *${prefix}tomp4* to convert to the video`))
                            } else {
                                cakrayp.sendMessage(from, { image: get_buffer, jpegThumbnail: get_buffer, mimetype: mime }, { quoted: msg })
                            }
                        })
                        .catch(err => {
                            reply(language_text('Mohon maaf stiker ini tidak dapat diconvert ke gambar', 'Sorry, this sticker cannot be converted to gambar'))
                        })
                } else {
                    reply(language_text('Silahkan direply stiker yang telah dikirim.', 'Please reply to the sticker that has been sent.'))
                }
                break
            case 'tomp4':
                // Convert to Video With 'https://ezgif.com'
                if (isQuotedSticker) {
                    try {
                        reply(commannd_response('wait'))
                        let file_stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                        cakrayp.sendMessage(from, { video: { url: await ezgif.webpToFile(file_stream, "mp4") }, mimetype: 'video/mp4' }, { quoted: msg })
                    } catch (err) {
                        reply(language_text('Mohon maaf sticker ini tidak dapat diconvert ke video', 'Sorry, this sticker cannot be converted to video'))
                    }
                } else if (isUrl(messagesText)) {
                    fromBuffer(await getBuffer(messagesText))
                        .then(async ({ ext }) => {
                            if (ext == 'webp') {
                                reply(commannd_response('wait'))
                                ezgif.webpToFile(messagesText, "mp4")
                                    .then(async (video_result) => {
                                        cakrayp.sendMessage(from, { video: { url: video_result }, mimetype: "video/mp4" }, { quoted: msg })
                                    })
                                    .catch(err => {
                                        console.log(err)
                                        reply(language_text('Mohon maaf stiker ini tidak dapat diconvert ke video', 'Sorry, this sticker cannot be converted to video'))
                                    })
                            } else if (/jp(eg|g)|png|mp4/.test(ext)) {
                                if (/jp(eg|g)|png/.test(ext)) fileType = language_text('gambar', 'image')
                                else if (ext == 'mp4') fileType = 'video'
                                reply(language_text(
                                    `Mohon maaf, link yang masukkan itu berisi *${fileType || ext}*, Silahkan masukkan link yang termasuk dalam file *webp*`,
                                    `Sorry, the link you entered contains an *${fileType || ext}*, Please enter the link included in the *webp* file`
                                ))
                            }
                        }).catch(err => {
                            reply(language_text(
                                'Mohon maaf link yang anda masukkan itu tidak termasuk dalam file *webp*',
                                'Sorry, the link you entered doesn\'t include the *webp* file.'
                            ))
                        })
                } else {
                    reply(language_text(
                        `Silahkan direply sticker *video/gif* yang telah dikirim, atau anda dapat memasukkan URL file webp tersebut\n\nContoh: *${prefix + command}* (reply sticker) atau <URL webp>\n*${prefix + command}* (reply sticker video/gif)\n*${prefix + command}* https://res.cloudinary.com/demo/image/upload/fl_awebp,q_40/bored_animation.webp\n\n*Note:* _jika stiker ini mengandung dalam file gambar, file tersebut tidak dapat mengirim video atau video tidak dapat dijalankan._`,
                        `Please reply to the *video/gif* sticker that has been sent, or you can enter the URL of the webp file\n\nExamples: *${prefix + command}* (reply sticker) or <URL webp>\n*${prefix + command}* (reply sticker video/gif)\n*${prefix + command}* https://res.cloudinary.com/demo/image/upload/fl_awebp,q_40/bored_animation.webp\n\n*Note:* _if this sticker contains in the image file, the file cannot send video or the video won't run._`
                    ))
                }
                break
            case 'tomp3':
                if (isVideo || isQuotedVideo) {
                    file_input = getRandom('.mp4')
                    file_output = getRandom()
                    fs.writeFileSync('./temp/' + file_input, await downloadMediaMessageWithBuffer(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video'))
                    ffmpeg('./temp/' + file_input)
                        .on("error", (err) => {
                            fs.unlinkSync('./temp/' + file_input)
                            reply(language_text('Mohon maaf video ini tidak dapat di convert ke audio', 'Sorry, this video cannot be converted to audio'))
                            console.log(err)
                        })
                        .on('end', () => {
                            fs.unlinkSync('./temp/' + file_input)
                            cakrayp.sendMessage(from, { audio: fs.readFileSync('./temp/' + file_output), mimetype: 'audio/mp4' }, { quoted: msg }).then(() => setTimeout(() => fs.unlinkSync('./temp/' + file_output), 3000))
                        })
                        .toFormat('mp3')
                        .save('./temp/' + file_output)
                } else if (/^(image|extendedText)Message$/i.test(Object.keys(msg.message)[0])) {
                    reply(language_text(
                        `Mohon maaf, ini khusus untuk video, Silahkan kirim video dengan caption *${prefix}tomp3* yang akan di convert ke audio atau direply video yang telah dikirim`,
                        `Sorry, this is specifically for videos, please send the video with caption *${prefix}tomp3* that will be converted to audio or reply to the video that has been sent`
                    ))
                } else {
                    reply(language_text(
                        `Silahkan dikirim video dengan caption *${prefix}tomp3* atau direply video yang telah dikirim`,
                        `Please send a video with the caption *${prefix}tomp3* or reply to the video that has been sent`
                    ))
                }
                break

            // Text maker

            // Textprome //
            case 'blackpink':
            case 'transformer':
            case 'neon':
            case 'neongreen':
            case 'advancedglow':
            case 'rainbowcolor':
            case 'pencil':
            case 'sandwriting':
            case 'sandsummer':
            case 'sandengraved':
            case 'metaldark':
            case 'metalfire':
            case 'neonlight':
            case 'technology':
            case 'fiction':
            case 'galaxy':
            case 'circuit':
            case 'holographic':
            case 'text1917':
            case 'christmas':
            case 'christmascandy':
            case 'minion':
            case 'deluxesilver':
            case 'newyearcard':
            case 'bloodfrosted':
            case 'halloweenspooky2':
            case 'halloweenfire':
            case 'jokerlogo':
            case 'fireworksparkle':
            case 'natureleaves':
            case 'bokeh':
            case 'toxic':
            case 'strawberry':
            case 'berry':
            case 'juice':
            case 'box3d':
            case 'roadwarning':
            case 'hammer':
            case 'breakwall':
            case 'snow':
            case 'icecold':
            case 'luxury':
            case 'cloud':
            case 'lovecloud':
            case 'sand':
            case 'horrorblood':
            case 'thunder':
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan text terlebih dahulu.\nContoh: *${prefix + command}*<text>\n*${prefix + command}* Jihan Aura\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menutextpro`,
                    `Please enter the text first.\nExample: *${prefix + command}*<text>\n*${prefix + command}* Jihan Aura\n\nFor more details please type *${prefix}helpbot* menutextpro`
                ))
                ini_txt = args.join(" ")
                textmaker.textpro(command.toLowerCase(), ini_txt)
                    .then(async (get_result) => {
                        cakrayp.sendMessage(from, { image: await getBuffer(get_result) }, { quoted: rey })
                    }).catch(err => {
                        // console.log(err)
                        if (err.message == 'Theme is not avaiable!') return reply(language_text('Mohon maaf theme ini tidak tersedia.', 'Sorry this theme is not avaiable.'))
                        reply(Message_Error())
                    })
                break
            case 'pornhub':
            case 'glitch':
            case 'avenger':
            case 'space3d':
            case 'ninjalogo':
            case 'captainamerica':
            case 'marvelstudio':
            case 'halloweenspooky':
            case 'lionlogo':
            case 'wolfdark':
            case 'wolfgalaxy':
            case 'steel3d':
            case 'wallgravity':
                if (!messagesText) return reply(language_text(
                    `Silahkan masukkan text terlebih dahulu.\nContoh: *${prefix + command}* <Text1> <Text2> \n*${prefix + command}* Cakra Jihan\n\nUntuk menggunakan spasi anda dapat menggunakan format "|"\n*${prefix + command}* Cakra | Jihan\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menutextpro`,
                    `Please enter the text first.\nExample: *${prefix + command}* <Text1> <Text2> \n*${prefix + command}* Cakra Jihan\n\nTo use spaces you can use the format "|"\n*${prefix + command}* Cakra | Jihan\n\nFor more details please type *${prefix}helpbot* menutextpro`
                ))
                if (messagesText.includes("|")) {
                    seplit = messagesText.split('|')
                    txt1 = seplit[0]
                    txt2 = seplit[1]
                } else {
                    txt1 = args[0]
                    txt2 = args[1]
                }
                if (!txt2) return reply(language_text(
                    `Silahkan masukkan text terlebih dahulu.\nExample: *${prefix + command}* <Text1> <Text2> \n*${prefix + command}* Cakra Jihan\nor\n*${prefix + command}* Cakra | Jihan\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menutextpro`,
                    `Please enter the text first.\nExample: *${prefix + command}* <Text1> <Text2> \n*${prefix + command}* Cakra Jihan\nor\n*${prefix + command}* Cakra | Jihan\n\nFor more details please type *${prefix}helpbot* menutextpro`
                ))
                textmaker.textpro(command.toLowerCase(), txt1.trim(), txt2.trim())
                    .then(async (get_result) => {
                        cakrayp.sendMessage(from, { image: await getBuffer(get_result) }, { quoted: msg })
                    }).catch(err => {
                        if (err.message == 'Theme is not avaiable!') return reply(language_text('Mohon maaf theme ini tidak tersedia.', 'Sorry this theme is not avaiable.'))
                        if (err.message == 'Text2 are required!') return reply(language_text(
                            `Mohon maaf anda belum memasukkan 2 text, silahkan memasukkan text ke-2\n\nExample: *${prefix + command}* <Text1> <Text2> \n*${prefix + command} Cakra Jihan\nor\n*${prefix + command}Cakra | Jihan\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menutextpro`,
                            `Sorry you haven\'t entered 2 text, please enter the 2nd text\n\nExample: *${prefix + command}* <Text1> <Text2> \n*${prefix + command} Cakra Jihan\nor\n*${prefix + command}Cakra | Jihan\n\nUntuk lebih jelas silahkan ketik *${prefix}helpbot* menutextpro`
                        ))
                        reply(commannd_response('error'))
                    })
                break



            default:
                if (isCmd && command) {
                    return reply(language_text(`Hi *${pushname}* mohon maaf, perintah *${prefix + command}* tidak ada didalam list *${prefix}menu*`, `Hi *${pushname}*, Sorry, this command is not avaiable in the list *${prefix}menu*`))
                }
                if (!isGroup && !msg.key.fromMe) {
                    const salam = moment(new Date(msg.messageTimestamp * 1000)).format('HH')
                    return reply(
                        language_text(
                            `Halo ${pushname}, Selamat ${Clockset.swichtime(salam)} ada yang bisa kami bantu, untuk lebih jelas silahkan ketik *${prefix}menu* atau *${prefix}help* untuk memulai`,
                            `Hello ${pushname}, ${await translate(`Selamat ${Clockset.swichtime(salam)}`, "en")}, is there anything we can help you, if you have a need please type *${prefix}menu* or *${prefix}help* to start`
                        )
                    )
                }
                break;
        }

    } catch (err) {
        console.log(err)
    }
}