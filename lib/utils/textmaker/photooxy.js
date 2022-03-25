const Clientprograms = require('w5-textmaker')
const request = require('request')
const cheerio = require('cheerio')

const photooxy = async(theme, text, text2, text3) => {
    if (text.length < 3) throw Error(`'${text}' is less than three characters long, Enter text at least 3 characters`)

    if (theme == 'metallicneon') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', text))
    } else if (theme == 'shadow') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', text))
    } else if (theme == 'metallicglow') {
        return (await Clientprograms.photooxy('https://photooxy.com/other-design/create-metallic-text-glow-online-188.html', text))
    } else if (theme == 'writestars') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', text))
    } else if (theme == 'glowrainbow') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html', text))
    } else if (theme == 'glowingneon') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html', text))
    } else if (theme == 'rainbowshine') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html', text))
    } else if (theme == 'summer3d') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', text))
    } else if (theme == 'nature3d') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html', text))
    } else if (theme == 'smoke') {
        return (await Clientprograms.photooxy('https://photooxy.com/other-design/create-a-smoke-text-effect-online-free-390.html', text))
    } else if (theme == 'underwater') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/creating-text-underwater-ocean-363.html', text))
    } else if (theme == 'flower') {
        return (await Clientprograms.photooxy('https://photooxy.com/art-effects/flower-typography-text-effect-164.html', text))
    } else if (theme == 'goldenrose') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-golden-roses-background-360.html', text))
    } else if (theme == 'flaming') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', text))
    } else if (theme == 'slideshow') {
        return new Promise((resolve, reject) => {
            request.post({
                url: "https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `options=optionNumber_0-0-Form&text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $(".thumbnail").find("source").each(function () {
                        resolve("https://photooxy.com" + $(this).attr("src"))
                    })
                }
            })
        })
    } else if (theme == 'harrypotter') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', text))
    } else if (theme == 'lovemessage') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html', text))
    } else if (theme == 'writemessage' || theme == 'undergrass') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', text))
    } else if (theme == 'woodheart') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html', text))
    } else if (theme == 'woodenboard') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/writing-your-text-on-wooden-boards-368.html', text))
    } else if (theme == 'carvedwood') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/create-a-woodblock-effect-online-171.html', text))
    } else if (theme == 'embroidery') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html', text))
    } else if (theme == 'fallleaves') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/write-text-quotes-under-fall-leaves-347.html', text))
    } else if (theme == 'arcade8bit') {
        if (!text2) throw Error('Text2 are required!')
        if (text2.length < 3) throw Error(`'${text2}' is less than three characters long, Enter text at least 3 characters`)
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/create-your-own-8-bit-text-on-arcade-rift-175.html', [text, text2]))
    } else if (theme == 'glitch' || theme == 'tiktok') {
        if (!text2) throw Error('Text2 are required!')
        if (text2.length < 3) throw Error(`'${text2}' is less than three characters long, Enter text at least 3 characters`)
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html', [text, text2]))
    } else if (theme == 'googlesuggestion') {
        if (!text2) throw Error('Text2 are required!')
        if (!text3) throw Error('Text3 are required!')
        if (text2.length < 3) throw Error(`'${text2}' is less than three characters long, Enter text at least 3 characters`)
        if (text3.length < 3) throw Error(`'${text3}' is less than three characters long, Enter text at least 3 characters`)
        // return (await Clientprograms.photooxy('https://photooxy.com/other-design/make-google-suggestion-photos-238.html', [text, text2. text3]))
        return new Promise((resolve, reject) => {
          request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $(".thumbnail").find("img").each(function () {
                        resolve("https://photooxy.com" + $(this).attr("src"))
                    })
                }
            })
        })
    } else if (theme == 'pubg') {
        if (!text2) throw Error('Text2 are required!')
        if (text2.length < 3) throw Error(`'${text2}' is less than three characters long, Enter text at least 3 characters`)
        return (await Clientprograms.photooxy('https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html', [text, text2]))
    } else if (theme == 'battlefield') {
        if (!text2) throw Error('Text2 are required!')
        if (text2.length < 3) throw Error(`'${text2}' is less than three characters long, Enter text at least 3 characters`)
        return (await Clientprograms.photooxy('https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html', [text, text2]))
    } else if (theme == 'coffeecup') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', text))
    } else if (theme == 'coffeecup2') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html', text))
    } else if (theme == 'naruto') {
        return (await Clientprograms.photooxy('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', text))
    } else if (theme == 'burnpaper') {
        return (await Clientprograms.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', text))
    } else {
        throw Error('Theme is not avaiable!')
    }
}

module.exports = photooxy;