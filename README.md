# whatsapp Cakra BOT.md

<p align="center">
<img src="https://telegra.ph/file/55e72404ca3635d192470.jpg" width="auto" height="280"/>
</p>
<p align="center">
<a href="#"><img title="CAKRA BOT" src="https://img.shields.io/badge/Cakra Bot-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/cakrayp"><img title="Author" src="https://img.shields.io/badge/Author-Cakrayp-orange.svg?style=for-the-badge&logo=github"></a>
</p>

Hello everybody, how are you all, I hope you're good.
So I just make this my program first.
I have been understand all for use it and you can use it well for whatsapp bot users

Don't change it if you do not understand this code, you can following in below for you, except it developer.


## You can change this program

settings your whatsapp bots in file ./settings.js

### Set your bot custom

1. true = (active/right)
2. false = (nonactive)

### Settings your bot custom

1. ownerNumber = (Enter your phone number Owner)
2. ownerName = (Enter your owner name)
3. author = (Enter your author)
4. website = (Enter your website)
5. BotName = (bot name)
6. BotImage = (Bot profile images)
7. not_ppuser = (if the use doen't use the profile picture)
8. language = (you can set avaiable on 'id', and 'en'. for default 'all')
9. qrcode_donate = (you can use picture for donate)
10. autoReadChat = (Read messages)
11. setBotProfileSelf = (set bot profile itself on whatsapp)
12. autoTyping = (Typing messages)
13. replyWithThumbnail = (reply message with thumbnail it like link)
14. usereplyMessage = (for use reply message users with thumbnail)
15. multi = (multiprefix without change prefix)
16. prefix = (you can set/use prefix manually)
17. messageHandler = (for message response)

```javascript
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
global.setFfmpegPath = false



// Other
global.ownerNumber = '6285161422971'   // Owner Bot, You can change to your phone number without "+" and "-"
global.ownerName = 'Cakra Yudha Pratama'   // Owner name
global.BotName = 'CAKRA BOT'   // Bot Name
global.prefix = '/'   // Set prefix command
global.language = 'en'  //  You can change this language for all text with "all" --> ['id', 'en', 'all']
global.BotImage = fs.readFileSync('./file/img/CakraBot.png')  //  You can change this bot images  <Buffer>
global.RestApi = 'https://cakrayp.herokuapp.com/'
global.apiCakra = 'https://cakrayp.herokuapp.com'
global.apikeyCakra = 'cakrayp24Q6'
global.website = 'https://cakrajihan.wordpress.com/'
global.qrcode_donate = ''
global.not_ppuser = fs.readFileSync('./file/img/no_ppuser.jpeg')  // You can change this image <Buffer>, if it user isn't using profile picture.
global.lib_package = '@adiwajshing/baileys-md (multi-device)'  // Package name Type for library name
global.author = 'Cakrayp'  // Author name
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
```

## Usage for Windows/RDP/linux In terminals

`FOR CLI (Command Line)`

### Requirement for installations

`FOR Manually Installation`

### Usage for Windows/RDP (Windows server Only)

- Node [`Click here`](https://nodejs.org/)
- ffmpeg [`Click here`](https://ffmpeg.org/)
- Git [`Click here`](https://git-scm.com/)

### Usage for debian Ubuntu/linux

``` bash
> apt update
```

Install [Git](https://git-scm.com/):

``` bash
> apt install git
```

Install [ffmpeg](https://ffmpeg.org/):

``` bash
> apt install ffmpeg
```

Node JS installation:

```bash
(for default version)
> apt install nodejs

(Change nodejs version)
You can see this for nvm Examples: "https://github.com/nvm-sh/nvm"

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm install 16.14.2
$ nvm use 16.14.2
Now using node v16.14.2 (npm v8.5.0)
```

Note:

If you have a sudo command, you can write the command "`sudo apt` `<command>` `<options>`"

if you do not have `curl` command, you can type the command "`apt install curl`"

### Cloning and Installation Programs

Clone this repository:

```bash
> git clone <link github>
> cd <path>
```

Install the dependencies:

```bash
> npm install
```

Installation for npm package:

You can [visit here.](https://www.npmjs.com/)

```bash
(Install packages)
> npm install <package name>

(Uninstall packages)
> npm uninstall <package name>
```

### Start Program in terminal:

Start program:

```bash
> npm start

Or

> node index.js
```

Start program with pm2:

You can see for Examples of pm2 in [Here](https://www.npmjs.com/package/pm2)

```bash
(Installation pm2)
> npm install pm2 -g

(start program)
> pm2 start index.js

(stop program)
> pm2 stop index.js

(restart program)
> pm2 restart index.js

(monitor logs)
> pm2 monit
```

### Contant us

if you have a problem, please [Contant me](https://wa.me/6285161422971)
Enjoyy...

## Donate

- [Saweria](https://saweria.co/cakrayp)
- [Trakterr](https://trakteer.id/cakrayp)

## thanks for

- [Nurutomo](https://github.com/Nurutomo)
- [sekhaa](https://github.com/inirey)
- [DikaArdnt](https://github.com/DikaArdnt)
- [Gimenz](https://github.com/Gimenz)
- [Tobz](https://github.com/TobyG74)
- [Adiwajshing](https://github.com/adiwajshing)
- [Hardianto](https://github.com/hardianto-cpu)
- And Others...
