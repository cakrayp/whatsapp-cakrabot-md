const fs = require('fs')
const { color } = require('../lib/color')
require('../settings')

exports.listmenuBot = (prefix) => {
    return `
┌──「 ABOUT BOT 」
│
├ • *${prefix}infobot*
├ • *${prefix}owner*
├ • *${prefix}donate*
├ • *${prefix}runtime*
├ • *${prefix}ping*
├ • *${prefix}aboutbot*
│
└──「 ${BotName} 」
    `.trim()
}
exports.listislami = (prefix) => {
    return `
┌──「 Islamic 」
│
├ • *${prefix}listsurah* (show all surah)
├ • *${prefix}asmaulhusna*
├ • *${prefix}hadits* [nama hadits no_hadits]
├ • *${prefix}alquran* [no_surah] 
├ • *${prefix}alquran* [no_surah/no_ayat]
├ • *${prefix}alquran* [no_surah/no_ayat1-no_ayat2]
├ • *${prefix}alquranaudio* [no_surah/no_ayat]
├ • *${prefix}kisahnabi* [nama_nabi]
├ • *${prefix}jadwalsholat* [daerah]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listdownloader = (prefix) => {
    return `
┌──「 Downloader 」
│
├ • *${prefix}ytplay* [query] (for video)
├ • *${prefix}play* [query] (for audio)
├ • *${prefix}ytmp3* [url_video]
├ • *${prefix}ytmp4* [url_video]
├ • *${prefix}tiktoknowm* [url_video]
├ • *${prefix}tiktokmusic* [url_video]
├ • *${prefix}igstory* [username]
├ • *${prefix}igfeed* [url_post]
├ • *${prefix}fbdl* [url_video]
├ • *${prefix}jooxplay* [query]
├ • *${prefix}spotify* [url_music]
├ • *${prefix}spotifysearch* [[query]]
├ • *${prefix}pinterestdl* [url_pinterest]
├ • *${prefix}mediafire* [url_mediafire]
├ • *${prefix}zippyshare* [url_zippyshare]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listsearch = (prefix) => {
    return `
┌──「 Searching 」
│
├ • *${prefix}shopee* [query]
├ • *${prefix}google* [query]
├ • *${prefix}igsearch* [query]
├ • *${prefix}ytsearch* [query]
├ • *${prefix}gcsearch* [query]
├ • *${prefix}pinterest* [query]
├ • *${prefix}wallpapersearch* [query] 
├ • *${prefix}stickersearch* [query]
├ • *${prefix}stickerwa* [query]
├ • *${prefix}playstore* [query]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listrandom = (prefix) => {
    return `
┌──「 Random Text 」
│
├ • *${prefix}quotes*
├ • *${prefix}quotesdilan*
├ • *${prefix}quotesanime*
├ • *${prefix}faktaunik*
├ • *${prefix}katabijak*
├ • *${prefix}cerpen*
├ • *${prefix}pantun*
├ • *${prefix}cerpen*
├ • *${prefix}bucin*
├ • *${prefix}randomnama*
│
└──「 ${BotName} 」
    `.trim()
}
exports.listmanga = (prefix) => {
    return `
┌──「 AniManga 」
│
├ • *${prefix}wait* (search with photos)
├ • *${prefix}manga* [query]
├ • *${prefix}kusonimesearch* [query] 
│
└──「 ${BotName} 」
    `.trim()
}
exports.listgoogle = (prefix) => {
    return `
┌──「 Google Menu 」
│
├ • *${prefix}translate* [kode_negara] [text]
├ • *${prefix}gtts* [kode_negara] [text]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listinfomation = (prefix) => {
    return `
┌──「 Information 」
│
├ • *${prefix}wikipedia [query]
├ • *${prefix}heroml* [hero_name]
├ • *${prefix}ssweb* [link]
├ • *${prefix}shortlink* [link]
├ • *${prefix}checkshort* [short link]
├ • *${prefix}getpic* [number or tag-member]
├ • *${prefix}cnnindonesia*
├ • *${prefix}cnnnasional*
├ • *${prefix}cnninternasional*
├ • *${prefix}infogempa*
├ • *${prefix}lirik* [query]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listentertaiment = (prefix) => {
    return `
┌──「 Entertainment 」
│
├ • *${prefix}asupan*
├ • *${prefix}tebakgambar*
├ • *${prefix}caklontong*
│
└──「 ${BotName} 」
    `.trim()
}
exports.listmedsos = (prefix) => {
    return `
┌──「 Media stalk 」
│
├ • *${prefix}igstalk*
├ • *${prefix}githubstalk*
├ • *${prefix}ytstalk*
│
└──「 ${BotName} 」
    `.trim()
}
exports.listmetadata = (prefix) => {
    return `
┌──「 List data 」
│
├ • *${prefix}listban*
├ • *${prefix}listadmin*
├ • *${prefix}bahasa / language*
├ • *${prefix}listblock*
│
└──「 ${BotName} 」
    `.trim()
}
exports.listcreator = (prefix) => {
    return `
┌──「 Creator 」
│
├ • *${prefix}ttp* [text]
├ • *${prefix}attp* [text]
├ • *${prefix}emoji* (emote to sticker)
├ • *${prefix}emojimix* (emote to sticker)
│
└──「 ${BotName} 」
    `.trim()
}
exports.listconvert = (prefix) => {
    return `
┌──「 Converter 」
│
├ • *${prefix}sticker* (image/video to stiker)
├ • *${prefix}toimg* (stiker to image)
├ • *${prefix}tomp4* (WebP to video)
├ • *${prefix}tomp3* (video to audio)
├ • *${prefix}towebp* (media to WebP)
├ • *${prefix}tourl* (media to URLs)
│
└──「 ${BotName} 」
    `.trim()
}
exports.listAdminGroup = (prefix) => {
    return `
┌──「 Admin Only 」
│
├ • *${prefix}promote* [tag member]
├ • *${prefix}demote* [tag member]
├ • *${prefix}listadmin*
├ • *${prefix}add* [phone number]
├ • *${prefix}kick* [tag member]
├ • *${prefix}kickall* (Remove all members)
├ • *${prefix}delete* (Reply chat bot)
├ • *${prefix}tagall* (tag all members)
├ • *${prefix}sendallmember* (sendmessage all members)
├ • *${prefix}infogroup* (look a group information)
├ • *${prefix}setgroupname* [group name]
├ • *${prefix}setgroupdesc* [group desc]
├ • *${prefix}setgrouppic* (send photo with caption)
├ • *${prefix}setgroupchange* (Open and Close)
│
└──「 ${BotName} 」
    `.trim()
}
exports.listgroup = (prefix) => {
    return `
┌──「 Group Only 」
│
├ • *${prefix}infogroup* (see a group information)
├ • *${prefix}linkgc* (for get a group Link)
├ • *${prefix}descgc* (see a group descripction)
├ • *${prefix}welcome* (for every the participant was added)
├ • *${prefix}antilink* (for a detection group link)
│
└──「 ${BotName} 」
    `.trim()
}
exports.listOwner = (prefix) => {
    return `
┌──「 Owner Only 」
│
├ • *${prefix}setppbot* (reply/send Images)
├ • *${prefix}listblock*
├ • *${prefix}opromote* [tag member]
├ • *${prefix}odemote* [tag member]
├ • *${prefix}oadd* [phone number]
├ • *${prefix}okick* [tag member]
├ • *${prefix}oleave* (leave this group)
├ • *${prefix}otagall* (tag all members)
├ • *${prefix}odelete* (Reply chat bot)
├ • *${prefix}hidetag* (tag all members without knows)
├ • *${prefix}addban* [number or tag member]
├ • *${prefix}unban* [number or tag member]
├ • *${prefix}addblock* [number or tag member]
├ • *${prefix}unblock* [number or tag member]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listprimbon = (prefix) => {
    return `
┌──「 Primbon 」
│
├ • *${prefix}artinama* [name]
├ • *${prefix}kecocokannama* [name tanggallhir]
├ • *${prefix}jodoh* [name anda & name pasangan] 
├ • *${prefix}weton* [tanggal bulan tahun]
├ • *${prefix}jadian* [tanggal bulan tahun]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listtextpro = (prefix) => {
    return `
┌──「 Text Pro Me 」
│
├ • *${prefix}blackpink* [text]
├ • *${prefix}neon* [text]
├ • *${prefix}neongreen* [text]
├ • *${prefix}advanceglow* [text]
├ • *${prefix}rainbowcolor* [text]
├ • *${prefix}sandwriting* [text]
├ • *${prefix}sandsummer* [text]
├ • *${prefix}technology* [text]
├ • *${prefix}fiction* [text]
├ • *${prefix}metaldark* [text]
├ • *${prefix}metalfire* [text]
├ • *${prefix}neonlight* [text]
├ • *${prefix}holographic* [text]
├ • *${prefix}text1917* [text]
├ • *${prefix}pencil* [text]
├ • *${prefix}minion* [text]
├ • *${prefix}deluxesilver* [text]
├ • *${prefix}newyearcard* [text]
├ • *${prefix}bloodfrosted* [text]
├ • *${prefix}halloweenspooky2* [text]
├ • *${prefix}halloweenfire* [text]
├ • *${prefix}jokerlogo* [text]
├ • *${prefix}fireworksparkle* [text]
├ • *${prefix}natureleaves* [text]
├ • *${prefix}bokeh* [text]
├ • *${prefix}toxic* [text]
├ • *${prefix}strawberry* [text]
├ • *${prefix}box3d* [text]
├ • *${prefix}roadwarning* [text]
├ • *${prefix}breakwall* [text]
├ • *${prefix}icecold* [text]
├ • *${prefix}luxury* [text]
├ • *${prefix}cloud* [text]
├ • *${prefix}lovecloud* [text]
├ • *${prefix}horrorblood* [text]
├ • *${prefix}thunder* [text]
├ • *${prefix}pornhub* [text1 & text2]
├ • *${prefix}glitch* [text1 & text2]
├ • *${prefix}avenger* [text1 & text2]
├ • *${prefix}space3d* [text1 & text2]
├ • *${prefix}halloweenspooky* [text1 & text2]
├ • *${prefix}ninjalogo* [text1 & text2]
├ • *${prefix}marvelstudio* [text1 & text2]
├ • *${prefix}captainamerica* [text1 & text2]
├ • *${prefix}lionlogo* [text1 & text2]
├ • *${prefix}wolfgalaxy* [text1 & text2]
├ • *${prefix}wolfdark* [text1 & text2]
├ • *${prefix}steel3d* [text1 & text2]
├ • *${prefix}wallgravity* [text1 & text2]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listphotoxy = (prefix) => {
    return `
┌──「 Photo Oxy 」
│
├ • *${prefix}shadow* [text]
├ • *${prefix}coffeecup* [text]
├ • *${prefix}coffeecup1* [text]
├ • *${prefix}googlesuggestion* [text1 | text2 | text3]
├ • *${prefix}smoke* [text]
├ • *${prefix}burnpaper* [text]
├ • *${prefix}lovemessage* [text]
├ • *${prefix}undergrass* [text]
├ • *${prefix}woodheart* [text]
├ • *${prefix}woodenboard* [text]
├ • *${prefix}summer3d* [text]
├ • *${prefix}nature3d* [text]
├ • *${prefix}underwater* [text]
├ • *${prefix}goldenrose* [text]
├ • *${prefix}glowingneon* [text]
├ • *${prefix}flamming* [text]
├ • *${prefix}naruto* [text]
├ • *${prefix}harrypotter* [text]
├ • *${prefix}carvedwood* [text]
├ • *${prefix}glitch* [text1 & text2]
├ • *${prefix}arcade8bit* [text1 & text2]
├ • *${prefix}battlefield* [text1 & text2]
├ • *${prefix}pubg* [text1 & text2]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listephoto = (prefix) => {
    return `
┌──「 Ephoto 360 」
│
├ • *${prefix}wetglass* [text]
├ • *${prefix}multicolor3d* [text]
├ • *${prefix}watercolor* [text]
├ • *${prefix}luxurygold* [text]
├ • *${prefix}galaxywallpaper* [text]
├ • *${prefix}lighttext* [text]
├ • *${prefix}beautifulflower* [text]
├ • *${prefix}puppycute* [text]
├ • *${prefix}royaltext* [text]
├ • *${prefix}heartshaped* [text]
├ • *${prefix}birthdaycake* [text]
├ • *${prefix}galaxystyle* [text]
├ • *${prefix}hologram3d* [text]
├ • *${prefix}greenneon* [text]
├ • *${prefix}glossychrome* [text]
├ • *${prefix}greenbush* [text]
├ • *${prefix}metallogo* [text]
├ • *${prefix}noeltext* [text]
├ • *${prefix}glittergold* [text]
├ • *${prefix}textcake* [text]
├ • *${prefix}starsnight* [text]
├ • *${prefix}wooden3d* [text]
├ • *${prefix}textbyname* [text]
├ • *${prefix}writegalacy* [text]
├ • *${prefix}galaxybat* [text]
├ • *${prefix}snow3d* [text]
├ • *${prefix}birthdayday* [text]
├ • *${prefix}goldplaybutton* [text]
├ • *${prefix}silverplaybutton* [text]
├ • *${prefix}freefire* [text]
│
└──「 ${BotName} 」
    `.trim()
}
exports.listrandomimage = (prefix) => {
    return `
┌──「 Random Image  」
│
├ • *${prefix}art*
├ • *${prefix}bts*
├ • *${prefix}exo*
├ • *${prefix}loli*
├ • *${prefix}neko*
├ • *${prefix}waifu*
├ • *${prefix}shota*
├ • *${prefix}couple*
├ • *${prefix}husbu*
├ • *${prefix}sagiri*
├ • *${prefix}couple*
├ • *${prefix}shinobu*
├ • *${prefix}megumin*
├ • *${prefix}pentol*
├ • *${prefix}cecan*
├ • *${prefix}cogan*
├ • *${prefix}feed*
├ • *${prefix}trap*
│
└──「 ${BotName} 」
    `.trim()
}
exports.mysosmed = (prefix, owner, apiCakra) => {
    return `
「 Social Media 」

• *Website :* ${website ? website : "(Nothing)"}
• *Blogger :* https://cakraypjhn.blogspot.com
• *Rest API :* ${RestApi ? RestApi : "(Nothing)"}
• *Instagram :* https://instagram.com/cakrayp_jhn
• *TeleBot :* https://t.me/Information341_bot
• *Owner :* https://wa.me/${owner}

「 ${BotName} 」

Don't forget to follow my instagram
if donate, type *${prefix}donate*
My about bot, type *${prefix}aboutbot*
    `.trim()
}
exports.donate = () => {
    return `*-------「 QRIS 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi agar tetap semangat update.

Berapapun donasi kalian akan sangat berarti 👍

┌──「 Donate 」
│
├ • *Method :* (Dana/OVO/Gopay/ShopeePay)
├ • *No :* 085161422971 (Cakra Yp)
│
├ *Website*
├ • *Saweria :* https://saweria.co/cakrayp
├ • *Trakter :* https://trakteer.id/cakrayp
│
└──「 ${BotName} 」
    `.trim()
}
exports.sourceCode = (prefix, ownerNumber, isIndonesian) => {
    if (isIndonesian) {
        return `
-----[ TERMS OF SERVICE ]-----
    
Bot ini merupakan open-source bot dengan nama asli CAKRA BOT yang tersedia di GitHub secara gratis.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Cakra Yp).
Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, Silahkan ketik *${prefix}report* atau orang yang pertama yang harus kalian hubungi ialah owner/hoster.

Jika kalian ingin berkontribusi dalam projek ini, silakan kunjungi:
https://github.com/cakrayp/whatsapp-cakrabot-md.git

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6285161422971 (Developer)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
085161422971 (Dana/OVO/Telkomsel)

Terima kasih.

Salam dari Cakrayp 😊
        `.trim()
    } else {
        return `
-----[ TERMS OF SERVICE ]-----
    
This bot is an open-source bot, come with the name of CAKRA BOT from indonesian, which is available on GitHub for free.
The owner/hoster of this bot is independent from the responsibility and supervision of the developer (Cakra Yp).
Owner/hoster may plagiarize, add, delete, replace source code with notes *DO NOT SELL* this source code in any form.
If an error occurs, please type *${prefix}report* or the first person you should contact is the owner/hoster from indonesia.  

If you want to contributing to this project, visit:
https://github.com/cakrayp/whatsapp-cakrabot-md.git

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6285161422971 (Developer)

You guys can also support me to keep this bot up to date with:
085161422971 (Dana/OVO/Telkomsel)

Thank you.

- Cakrayp 😊
        `.trim()
    }
}

exports.bahasa = () => {
    return `
Language List :

*Code  |  Language*
*af* : Afrikaans
*sq* : Albanian
*ar* : Arabic
*hy* : Armenian
*ca* : Catalan
*zh* : Chinese
*zh-cn* : Chinese (Mandarin/China)
*zh-tw* : Chinese (Mandarin/Taiwan)
*zh-yue* : Chinese (Cantonese)
*hr* : Croatian
*cs* : Czech
*da* : Danish
*nl* : Dutch
*en* : English
*en-au* : English (Australia)
*en-uk* : English (United Kingdom)
*en-us* : English (United States)
*eo* : Esperanto
*fi* : Finnish
*fr* : French
*de* : German
*el* : Greek
*ht* : Haitian Creole
*hi* : Hindi
*hu* : Hungarian
*is* : Icelandic
*id* : Indonesian
*it* : Italian
*ja* : Japanese
*ko* : Korean
*la* : Latin
*lv* : Latvian
*mk* : Macedonian
*no* : Norwegian
*pl* : Polish
*pt* : Portuguese
*pt-br* : Portuguese (Brazil)
*ro* : Romanian
*ru* : Russian
*sr* : Serbian
*sk* : Slovak
*es* : Spanish
*es-es* : Spanish (Spain)
*es-us* : Spanish (United States)
*sw* : Swahili
*sv* : Swedish
*ta* : Tamil
*th* : Thai
*tr* : Turkish
*vi* : Vietnamese
*cy* : Welsh
`.trim()
}