const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')


// ========= [ Settings boolean ] ===========

/**
 * if you want to change this one of --> [true or false]
 * > true = Active
 * > false = Not Active
 */

// Selfbot whatsapp
global.selfbot = false
// Set Bot image whatsapp profile itself...
global.setBotProfileSelf = false  
// Typing message after message response...
global.autoTyping = true
// Chat read after message response...
global.autoReadChat = true
// Last seen message...
global.LastSeenMessage = false
// Multi prefix...
global.multi = false  // if you want to use a multi prefix, you can change here to "true"

// Reply message with thumbnail. (if you want to use You can change to "true")
global.replyWithThumbnail = false   // (for replace to message thumbnail)
global.usereplyMessage = true   // (for use reply message users with thumbnail)

// Set path ffmpeg from "npm i @ffmpeg-installer/ffmpeg".
global.setFfmpegPath = true



// Other
global.ownerNumber = '6281390492911'   // Owner Bot, You can change to your phone number without "+" and "-"
global.ownerName = 'Rifatp'   // Owner name
global.BotName = 'RIFAT BOT'   // Bot Name
global.prefix = '/'   // Set prefix command
global.language = 'all'  //  You can change this language for all text with "all" --> ['id', 'en', 'all']
global.BotImage = fs.readFileSync('./file/img/CakraBot.png')  //  You can change this bot images  <Buffer>
global.RestApi = 'https://cakrayp.herokuapp.com/'
global.apiCakra = 'https://cakrayp.herokuapp.com'
global.apikeyCakra = 'cakrayp24Q6'
global.website = 'https://cakrajihan.wordpress.com/'
global.qrcode_donate = ''
global.not_ppuser = fs.readFileSync('./file/img/no_ppuser.jpeg')  // You can change this image <Buffer>, if it user isn't using profile picture.
global.lib_package = '@adiwajshing/baileys-md (multi-device)'  // Package name Type for library
global.author = 'RifatBot'  // Author name
global.messageHandler = {
    error: {
      ind: "Mohon maaf fitur ini sedang *Error*, Silahkan dicoba lagi nanti atau dicoba yang lain.",
      eng: "Sorry, this feature is in *Error*, please try again later or try another."
    },
    wait: {
      ind: "Mohon ditunggu dalam proses...",
      eng: "Waiting for Process..."
    },
    owner_bot: {
      eng: "This Command can be use Only for Owner.",
      ind: "Perintah ini hanya dapat digunakan oleh Owner."
    },
    admingroup: {
      eng: "This Command can be use Only for group admins",
      ind: "Perintah ini hanya dapat digunakan oleh admin group"
    },
    admin_owner: {
      eng: "This Command can be use Only for owner or group admins",
      ind: "Perintah ini hanya dapat digunakan oleh admin group atau owner"
    },
    Bot_admingroup: {
      eng: "This Command can be use when the bot is already a group admin",
      ind: "Perintah ini hanya dapat digunakan ketika bot ini sebagai admin"
    },
    groupOnly: {
      eng: "This Command can be use Only in the Group",
      ind: "Perintah ini hanya dapat digunakan didalam group"
    },
    privateChat: {
      eng: "This Command can be use Only in private chat",
      ind: "Perintah ini hanya dapat digunakan didalam chat (obrolan) pribadi"
    },
    mainstance: {
      ind: 'Mohon maaf, fitur ini sedang mainstance (diperbaikan)',
      eng: 'Sorry, this feature is currently under maintenance',
    },
    numberOnly: {
      ind: 'Mohon maaf ini khusus untuk angka.',
      eng: 'Sorry this is for numbers only.'
    },
    soon: "Coming Soon!",
    indoOnly: "This command can be use Only for indonesian country."
}
