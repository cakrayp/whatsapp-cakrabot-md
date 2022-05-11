const axios = require("axios");
const fs = require("fs");
const TinyURL = require('tinyurl');
const FormData = require("form-data");
const { default: Axios } = require('axios');
const cheerio = require("cheerio");
const { sizeFormatter } = require('human-readable');
const ffmpeg = require("fluent-ffmpeg");


exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 100000000000000000000)}${ext ? ext : ''}`
}

exports.getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}

exports.getGroupAdmins = function (participants) {
    let admins = []
    for (let i of participants) {
        i.admin !== null ? admins.push(i.id) : ''
    }
    return admins
}

// exports.runtime = function (seconds) {
//     seconds = Number(seconds);
//     var d = Math.floor(seconds / (3600 * 24));
//     var h = Math.floor(seconds % (3600 * 24) / 3600);
//     var m = Math.floor(seconds % 3600 / 60);
//     var s = Math.floor(seconds % 60);
//     var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "0 day, ";
//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "0 hour, ";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "0 minute, ";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 second ";
//     return dDisplay + hDisplay + mDisplay + sDisplay;
// }

exports.runtime = function(seconds) {
	seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " Hari " : " Hari ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam " : " Jam ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit " : " Menit ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik " : " Detik ") : "";
    // Set Timer
    if (d > 0) return dDisplay + hDisplay
    else if (h > 0) return hDisplay + mDisplay
    else if (m > 0) return mDisplay + sDisplay
    else return sDisplay;
}

// Generates a Serial Number, based on a certain mask
exports.GenerateSerialToken = function(mask) {
    // Serial Number Generator
    function GenerateRandomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Generates a random alphanumberic character
    function GenerateRandomChar() {
        var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
        var randomNumber = GenerateRandomNumber(0,chars.length - 1);
        return chars[randomNumber];
    }
    var serialNumber = "";
    if(mask != null){
        for(var i=0; i < mask.length; i++){
            var maskChar = mask[i];
            serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
        }
    }
    return serialNumber;
}


exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.url = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

exports.short = (url) => {
    return TinyURL.shorten(url)
}

exports.convert = async (input) => {
    return new Promise(async (resolve, reject) => {
        const Path = `./temp/${this.getRandom('.webp')}`;
        await ffmpeg(input)
            .outputOptions(['-vcodec', 'libwebp', "-framerate", "20", '-vf', `crop=w='min(min(iw\,ih)\,512)':h='min(min(iw\,ih)\,512)',scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=15`, "-q:v", "50", "-fs", "1M", '-loop', '0', '-preset', 'default', '-an', '-vsync', '0', '-s', '512:512'])
            .save(Path)
            .on("error", (err) => {
                if (fs.existsSync(Path))
                    fs.unlinkSync(Path);
                if (fs.existsSync(input))
                    fs.unlinkSync(input);
                return reject(new Error(err));
            })
            .on('end', () => {
                if (fs.existsSync(input))
                    fs.unlinkSync(input);
                    resolve(Path);
                    setTimeout(() => fs.unlinkSync(Path), 5000);
            });
    });
};

exports.humanFileSize = (bytes, si = true, dp = 1) => {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    let units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    let r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (
        Math.round(Math.abs(bytes) * r) / r >= thresh &&
        u < units.length - 1
    );

    return bytes.toFixed(dp) + ' ' + units[u];
}

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.times = (second) => {
    days = Math.floor((second / 60) / 60 / 24)
    hours = Math.floor((second / 60) / 60)
    minute = Math.floor(second / 60)
    sec = Math.floor(second)
    return days + ' days, ' + hours + ' hours, ' + minute + ' minutes, ' + sec + ' seconds'
}