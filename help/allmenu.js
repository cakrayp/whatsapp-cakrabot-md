const helpmenu = require('./help')
const fs = require('fs')
const { color } = require('../lib/color')
const moment = require('moment-timezone')
const timezone_update = moment(Date.now()).tz('Asia/Jakarta').format('DD-MM-YY HH:mm:ss')

module.exports = (pushname, isIndonesian, lang, salam, time, prefix) => {
    // const text_allmenu = {
    //     id : `Hi ${pushname}\n\nSelamat ${salam}, Silahkan dipilih menu yang ada dibawah untuk memulai\ningin berdonasi silahkan ketik ${prefix}donasi\n\n*Note:* Bot Masih Dalam Program Beta.\nJika Bot Tidak Merespon Di Grup Silahkan Gunakan Di Private Chat!`,
    //     en : `Hi ${pushname}\n\nGood ${salam}, Please choose the menu below to get started\nif you want to donate please type ${prefix}donation\n\n*Note:* Bot is Still in Program.\nIf the bot doesn't respond in the group, please use it in private chat!`
    // }
    function language_text(indonesian, english) {
        if (lang == 'id') {
            text_lang = indonesian
        } else if (lang == 'en') {
            text_lang = english
        } else {
            if (isIndonesian) {
                text_lang = indonesian
            } else {
                text_lang = english
            }
        }
        return text_lang    
    }

    return `┌──「 *ALL MENU* 」
│
├ *Selamat ${salam}*
├ *${time}*
│
├ *Note:* ${language_text('Bot masih dalam pemograman beta', 'Bot is still in beta program')}
├ ${language_text('Jika Bot Tidak Merespon Di Grup Silahkan Gunakan Di Private Chat!', 'If the bot doesn\'t respond in the group, please use it in private chat!')}
│
│
├「 ABOUT-MENU 」
├ *${prefix}owner*
├ *${prefix}infobot*
├ *${prefix}aboutbot*
├ *${prefix}rules*
├ *${prefix}donate*
│
├「 OWNER-MENU 」
├ > evaluate
├ $ exec
├ *${prefix}join <link gc>*
├ *${prefix}oleave <groupId> or this group*
├ *${prefix}setppbot (reply/send image)*
│
├「 SYSTEM-MENU 」
├ ${prefix}allmenu
├ ${prefix}delete (reply bot message)
├ ${prefix}runtime
│
├「 GROUP-MENU 」
├ *${prefix}add* <number>
├ *${prefix}kick* <tag_member>
├ *${prefix}promote* <tag_member>
├ *${prefix}demote* <tag_member>
├ *${prefix}sendallmember* <text/reply>
├ *${prefix}leave* (leave this group)
├ *${prefix}tagall* (tag all members)
├ *${prefix}sendallmember* (sendmessage all members)
├ *${prefix}infogroup* (look a group information)
├ *${prefix}setgroupname* [group name]
├ *${prefix}setgroupdesc* [group desc]
├ *${prefix}setgrouppic* (send photo with caption)
├ *${prefix}setgroupchange* (Open and Close)
├ *${prefix}group* <open/close>
├ *${prefix}hidetag* <text>
│
├「 RANDOM-TEXT 」
├ *${prefix}quotes*
├ *${prefix}quotesdilan*
├ *${prefix}quotesanime*
├ *${prefix}faktaunik*
├ *${prefix}katabijak*
├ *${prefix}cerpen*
├ *${prefix}pantun*
├ *${prefix}cerpen*
├ *${prefix}bucin*
│
├「 RANDOM-GAMBAR 」
├ *${prefix}art*
├ *${prefix}bts*
├ *${prefix}exo*
├ *${prefix}elf*
├ *${prefix}loli*
├ *${prefix}neko*
├ *${prefix}waifu*
├ *${prefix}shota*
├ *${prefix}husbu*
├ *${prefix}sagiri*
├ *${prefix}shinobu*
├ *${prefix}megumin*
├ *${prefix}pentol*
├ *${prefix}cecan*
├ *${prefix}cogan*
├ *${prefix}feed*
├ *${prefix}trap*
│
├「 ANIME-MENU 」
├ *${prefix}wait* (send image with anime)
├ *${prefix}manga* <query>
├ *${prefix}kusonime* <query>
├ *${prefix}waifu*
│
├「 SEARCH-MENU 」
├ *${prefix}pinterest* <query>
├ *${prefix}gcsearch* <query>
├ *${prefix}igsearch* <query>
├ *${prefix}igstalk* <username>
├ *${prefix}ytsearch* <query>
├ *${prefix}wallpaper* <query>
│
├「 CONVERTER 」
├ *${prefix}tomp4* (reply sticker gif)
├ *${prefix}tomp3* (reply video)
├ *${prefix}towebp* (reply image/video)
├ *${prefix}toimg* (reply sticker)
│
├「 CREATOR 」
├ *${prefix}ttp* <text>
├ *${prefix}attp* <text>
├ *${prefix}sticker* (send/reply image/video)
├ *${prefix}emoji* <emote>
│
├「 MAKER-MENU 」
├ *${prefix}blackpink* <text>
├ *${prefix}neon* <text>
├ *${prefix}neongreen* <text>
├ *${prefix}advanceglow* <text>
├ *${prefix}rainbowcolor* <text>
├ *${prefix}sandwriting* <text>
├ *${prefix}sandsummer* <text>
├ *${prefix}technology* <text>
├ *${prefix}fiction* <text>
├ *${prefix}metaldark* <text>
├ *${prefix}metalfire* <text>
├ *${prefix}neonlight* <text>
├ *${prefix}holographic* <text>
├ *${prefix}text1917* <text>
├ *${prefix}pencil* <text>
├ *${prefix}minion* <text>
├ *${prefix}deluxesilver* <text>
├ *${prefix}newyearcard* <text>
├ *${prefix}bloodfrosted* <text>
├ *${prefix}halloweenspooky2* <text>
├ *${prefix}halloweenfire* <text>
├ *${prefix}jokerlogo* <text>
├ *${prefix}fireworksparkle* <text>
├ *${prefix}natureleaves* <text>
├ *${prefix}bokeh* <text>
├ *${prefix}toxic* <text>
├ *${prefix}strawberry* <text>
├ *${prefix}box3d* <text>
├ *${prefix}roadwarning* <text>
├ *${prefix}breakwall* <text>
├ *${prefix}icecold* <text>
├ *${prefix}luxury* <text>
├ *${prefix}cloud* <text>
├ *${prefix}lovecloud* <text>
├ *${prefix}horrorblood* <text>
├ *${prefix}thunder* <text>
├ *${prefix}pornhub* <text1 & text2>
├ *${prefix}glitch* <text1 & text2>
├ *${prefix}avenger* <text1 & text2>
├ *${prefix}space3d* <text1 & text2>
├ *${prefix}halloweenspooky* <text1 & text2>
├ *${prefix}ninjalogo* <text1 & text2>
├ *${prefix}marvelstudio* <text1 & text2>
├ *${prefix}captainamerica* <text1 & text2>
├ *${prefix}lionlogo* <text1 & text2>
├ *${prefix}wolfgalaxy* <text1 & text2>
├ *${prefix}wolfdark* <text1 & text2>
├ *${prefix}steel3d* <text1 & text2>
├ *${prefix}wallgravity* <text1 & text2>
│
├「 DOWNLOADER-MENU 」
├ *${prefix}ytplay* <query> (for video)
├ *${prefix}play* <query> (for audio)
├ *${prefix}ytmp3* <URL_video>
├ *${prefix}ytmp4* <URL_video>
├ *${prefix}tiktoknowm* <URL_video>
├ *${prefix}tiktokaudio* <URL_video>
├ *${prefix}igstory* <username>
├ *${prefix}igfeed* <URL_posts>
├ *${prefix}fbdl* <URL_video>
├ *${prefix}jooxplay* <query>
├ *${prefix}spotify* <URL_music>
├ *${prefix}pinterestdl* <URL_pinterest>
├ *${prefix}mediafire* <URL_mediafire>
├ *${prefix}zippyshare* <URL_zippyshare>
│
│
├「 Thanks To」
├ Adiwajshing/baileys
├ Nurotomo
├ Reysekha
├ Hardianto
├ Zeeoneofc
├ Geni-Panas Team
├ and all Other
│
│
└──「 *CAKRA BOT* 」 
`
}