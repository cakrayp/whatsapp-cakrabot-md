const {
    default: makeWASocket,
    DisconnectReason,
    useSingleFileAuthState,
    makeInMemoryStore,
    promiseTimeout,
    getBinaryNodeChild,
    Browsers
} = require('@adiwajshing/baileys-md');
const WHATSAPP_SESSION_PATH = "./whatsapp-session-md.json"
const WHATSAPP_MAKEINMEMORY_STORE_PATH = "./database/baileys-MemoryStore-md.json"
const { state, saveState } = useSingleFileAuthState(WHATSAPP_SESSION_PATH);
const pino = require('pino');
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const moment = require('moment-timezone')
const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const { Boom } = require('@hapi/boom')
const timezone_update = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss')
require('./plugins/autoclear-folder')
require('./settings')

const color = (text, color) => {
    return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text);
};

//Thanks To Nurutomo And Tobz
watchFile('./settings.js')
watchFile('./message/MsgHandler.js')
watchFile('./help/help.js')
watchFile('./help/allmenu.js')

// SAVE DATA MEMORY STORE
store.readFromFile(WHATSAPP_MAKEINMEMORY_STORE_PATH)
setInterval(() => {
    store.writeToFile(WHATSAPP_MAKEINMEMORY_STORE_PATH)
}, 10_000)


// Intro
console.log('------------------------------------------------')
lolcatjs.fromString(color(figlet.textSync(BotName.toUpperCase(), { horizontalLayout: 'full' })))
console.log('------------------------------------------------')


// Table list chats
store.chats.toJSON()[0] ? console.table(store.chats.toJSON()) : false
console.log(color("[ SERVER ]", 'aqua'), moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss'), color("Server is ready...", 'yellow'))


// AUTH AND START FOR WEB WHATSAPP
async function startSock() {
    //  WHATSAPP WEB VERSION
    const checkVersion = async () => {
        try {
            let BASE_URL = "https://web.whatsapp.com/check-update?version=1&platform=web";      // don't change it, except it developer
            const { data: JSONData } = await axios.get(BASE_URL);
            let version = JSONData.currentVersion.split(".").map((v) => parseInt(v));
            return version;
        } catch (err) {
            console.log(color("[ SERVER ]", 'aqua'), moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss'), color("Connection are required please check your connection...", 'yellow'))
        }
    }

    
    // AUTH
    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,                // if you want to use node express, you can change here to false
        auth: state,                            // for auth, after the file already exists, don't change it, except you're developer
        browser: ['Cakra Yp', 'Chrome'],        // you can change name here in browser name...

        /**
         * if you want to change the version without updating the version, don't change it because the version is automatically updated every whatsapp web...
         * if you want to change wa web version, you can change here...
         * if this version doesn't work, you can change here...
         * it must use Array every whatsapp web version, E.g: [2, 2204, 13]
         *  */
        version: await checkVersion(),

        getMessage: async (key) => {
            return {
                conversation: 'hello Everyone'
            }
        }
    })


    // Message store...
    store.bind(sock.ev)


    // Call detected.
    sock.ws.on('CB:call', async (data) => {
        require('./plugins/anticall')(sock, data)
    })


    // CONNECTION UPDATE.
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (update.qr) {
            console.log({ qr: update.qr, type: 'Barcode scan' })
        } else if (connection === 'connecting') {
            // console.log(color('[SYS]', '#009FFF'), color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'), color(`${package.name} is Authenticating...`, '#f12711'));
            console.log(color('[ SERVER ]', '#009FFF'), color(moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss'), '#A1FFCE'), color(`${BotName ? BotName : 'Client'} is Authenticating...`, '#f12711'));
        } else if (connection === 'close') {
            const log = msg => console.log(color('[ SERVER ]', '#009FFF'), color(moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss'), '#A1FFCE'), color(msg, '#f64f59'));
            const statusCode = new Boom(lastDisconnect?.error)?.output.statusCode

            if (statusCode == undefined) { log('Connection closed, as server is down, retrying in 30 seconds...'); setTimeout(() => startSock(), 30000) }
            else if (statusCode === DisconnectReason.badSession) { log(`Bad session file, it will be automatically deleted file from  "${WHATSAPP_SESSION_PATH}" and run again`); fs.unlinkSync(WHATSAPP_SESSION_PATH); process.exit(); }
            else if (statusCode === DisconnectReason.connectionClosed) { log('Connection closed, reconnecting....'); startSock() }
            else if (statusCode === DisconnectReason.connectionLost) { log('Connection lost, reconnecting....'); startSock() }
            else if (statusCode === DisconnectReason.connectionReplaced) { log('Connection Replaced, Another New Session Opened, Please Close Current Session First'); process.exit() }
            else if (statusCode === DisconnectReason.loggedOut) { log(`Device Logged Out, it will be automatically deleted file from "${WHATSAPP_SESSION_PATH}" and Scan Again.`); fs.unlinkSync(WHATSAPP_SESSION_PATH); process.exit(); }
            else if (statusCode === DisconnectReason.restartRequired) { log('Restart required, restarting...'); startSock(); }
            else if (statusCode === DisconnectReason.timedOut) { log('Connection timedOut, reconnecting...'); startSock(); }
            else { console.log(color('[ SERVER ]', '#009FFF'), color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'), `Unknown DisconnectReason: ${lastDisconnect.error?.output.payload.message}|${connection}, retrying in 5 minutes...`); setTimeout(() => startSock(), 300000) }
        } else if (connection === 'open') {
            console.log(
                color('[ SERVER ]', '#009FFF'),
                color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
                color(`${BotName ? BotName : 'Client'} is now Connected...`, '#38ef7d')
            );
        }
    })


    // GROUP UPDATE MEMBER
    sock.ev.on('group-participants.update', async (chat) => {
        require('./plugins/group')(sock, chat)
    })


    // MESSAGE UPSERT EVERY UPDATE
    sock.ev.on('messages.upsert', async (msg) => {
        if (!msg.messages) return
        const m = msg.messages[0];
        if (!selfbot && m.key.fromMe) return                        //  "fromMe" for itself 
        if (!LastSeenMessage && msg.type == 'append') return        //  Last Seen Message 
        require('./message/MsgHandler')(sock, store, m)
    })
    

    // Creds update.
    sock.ev.on('creds.update', () => saveState)

    return sock
}
startSock().catch(err => startSock())       // if it does not work, it will restart this program automatically.


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    // console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
/**
 * 
 * @param {string} path for watch file is updated...
 */
function watchFile(path) {
    require(path)
    nocache(path, (module) => {
        console.log(
            color('[ WATCH FILE ] :', 'yellow'),
            color(timezone_update, 'cyan'), ":",
            color(module, 'yellow'),
            color('File has been updated!')
        )
    })
}

// run in main file