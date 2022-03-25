const Clientprograms = require('w5-textmaker')

const textpro = async(theme, text, text2) => {
    if (theme == 'blackpink') {
        return (await Clientprograms.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", text))
    } else if (theme == 'neonlight' || theme == 'neon light') {
        return (await Clientprograms.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", text))
    } else if (theme == 'discovery') {
        return (await Clientprograms.textpro("https://textpro.me/create-space-text-effects-online-free-1042.html", text))
    } else if (theme == 'transformer') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", text))
    } else if (theme == 'technology') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", text))
    } else if (theme == 'galaxy') {
        return (await Clientprograms.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", text))
    } else if (theme == 'berry') {
        return (await Clientprograms.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", text))
    } else if (theme == 'strawberry') {
        return (await Clientprograms.textpro("https://textpro.me/strawberry-text-effect-online-889.html", text))
    } else if (theme == 'juice') {
        return (await Clientprograms.textpro("https://textpro.me/fruit-juice-text-effect-861.html", text))
    } else if (theme == 'hammer') {
        return (await Clientprograms.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", text))
    } else if (theme == 'stone') {
        return (await Clientprograms.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", text))
    } else if (theme == 'breakwall') {
        return (await Clientprograms.textpro("https://textpro.me/break-wall-text-effect-871.html", text))
    } else if (theme == 'roadwarning') {
        return (await Clientprograms.textpro("https://textpro.me/road-warning-text-effect-878.html", text))
    } else if (theme == 'deapsea') {
        return (await Clientprograms.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", text))
    } else if (theme == 'dropwater') {
        return (await Clientprograms.textpro("https://textpro.me/dropwater-text-effect-872.html", text))
    } else if (theme == 'harrypotter') {
        return (await Clientprograms.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", text))
    } else if (theme == 'newyearcard') {
        return (await Clientprograms.textpro("https://textpro.me/happ-new-year-card-firework-gif-959.html", text))
    } else if (theme == 'avengers' || theme == 'avenger') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [text, text2]))
    } else if (theme == 'marvelstudio') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text, text2]))
    } else if (theme == 'captainamerica') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [text, text2]))
    } else if (theme == 'halloweenspooky') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [text, text2]))
    } else if (theme == 'halloweenspooky2') {
        return (Clientprograms.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", text))
    } else if (theme == 'halloweenfire') {
        return (Clientprograms.textpro("https://textpro.me/halloween-fire-text-effect-940.html", text))
    } else if (theme == 'advancedglow') {
        return (await Clientprograms.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", text))
    } else if (theme == 'bokeh') {
        return (await Clientprograms.textpro("https://textpro.me/bokeh-text-effect-876.html", text))
    } else if (theme == 'neon') {
        return (await Clientprograms.textpro("https://textpro.me/neon-light-text-effect-online-882.html", text))
    } else if (theme == 'neongreen') {
        return (await Clientprograms.textpro("https://textpro.me/green-neon-text-effect-874.html", text))
    } else if (theme == 'circuit') {
        return (await Clientprograms.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", text))
    } else if (theme == 'luxury') {
        return (await Clientprograms.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", text))
    } else if (theme == 'sand' || theme == 'sandwriting') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html", text) )
    } else if (theme == 'sandsummer') {
        return (await Clientprograms.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", text))
    } else if (theme == 'cloud') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html", text))
    } else if (theme == 'natureleaves') {
        return (await Clientprograms.textpro("https://textpro.me/natural-leaves-text-effect-931.html", text))
    } else if (theme == 'text1917') {
        return (await Clientprograms.textpro("https://textpro.me/1917-style-text-effect-online-980.html", text))
    } else if (theme == 'lovecloud') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", text))
    } else if (theme == 'fireworksparkle') {
        return (await Clientprograms.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", text))
    } else if (theme == 'snow') {
        return (await Clientprograms.textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", text))    
    } else if (theme == 'icecold') {
        return (await Clientprograms.textpro("https://textpro.me/ice-cold-text-effect-862.html", text))
    } else if (theme == 'fiction') {
        return (await Clientprograms.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", text))
    } else if (theme == 'jokerlogo') {
        return (await Clientprograms.textpro("https://textpro.me/create-logo-joker-online-934.html", text))
    }  else if (theme == 'toxic') {
        return (await Clientprograms.textpro("https://textpro.me/toxic-text-effect-online-901.html", text))
    } else if (theme == 'wolfgalaxy') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [text, text2]))
    } else if (theme == 'wolfblack' || theme == 'wolfdark') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [text, text2]))
    } else if (theme == 'ninjalogo') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text, text2]))
    } else if (theme == 'lionlogo') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [text, text2]))
    } else if (theme == 'wallgravity') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [text, text2]))
    } else if (theme == 'steel3d') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/3d-steel-text-effect-877.html", [text, text2]))
    } else if (theme == 'space3d') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [text, text2]))
    } else if (theme == 'christmas') {
        return (await Clientprograms.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", text))
    } else if (theme == 'christmascandy') {
        return (await Clientprograms.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", text))
    } else if (theme == 'electro') {
        return (await Clientprograms.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", text))
    } else if (theme == 'box3d') {
        return (await Clientprograms.textpro("https://textpro.me/3d-box-text-effect-online-880.html", text))
    } else if (theme == 'glitch') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text, text2]))
    } else if (theme == 'pornhub') {
        if (!text2) throw Error('text2 are required!')
        return (await Clientprograms.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [text, text2]))
    } else if (theme == 'rainbowcolor') {
        return (await Clientprograms.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", text))
    } else if (theme == 'pencil') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", text))
    } else if (theme == 'minion') {
        return (await Clientprograms.textpro("https://textpro.me/minion-text-effect-3d-online-978.html", text))
    } else if (theme == 'thunder') {
        return (await Clientprograms.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", text))
    } else if (theme == 'holographic') {
        return (await Clientprograms.textpro("https://textpro.me/holographic-3d-text-effect-975.html", text))
    } else if (theme == 'deluxesilver') {
        return (await Clientprograms.textpro("https://textpro.me/deluxe-silver-text-effect-970.html", text))
    } else if (theme == 'horrorblood') {
        return (await Clientprograms.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", text))
    } else if (theme == 'bloodfrosted') {
        return (await Clientprograms.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", text))
    } else if (theme == 'metalfire') {
        return (await Clientprograms.textpro("https://textpro.me/hot-metal-text-effect-843.html", text))
    } else if (theme == 'metallicblack' || theme == 'metaldark') {
        return (await Clientprograms.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", text))
    } else {
        throw Error('Theme is not avaiable!')
    }

}

module.exports = textpro;