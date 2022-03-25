const helpsearching = (countrycode, prefix) => {
    if (countrycode.startsWith('628')) {
      return `Penggunaan fitur untuk *Menu group*
  
1.) *${prefix}ytsearch* <query> (youtube search)

Usage: fitur *${prefix}ytsearch* berfungsi untuk mencari video diyoutube.


2.) *${prefix}shoope* <query>
Message: Coming soon!

3.) *${prefix}googleimg* <query> (dari google)

Usage: fitur *${prefix}googleimg* berfungsi untuk mencari gambar dan mengirim gambar secara random.


4.) *${prefix}pinterest* <query>

Usage: fitur *${prefix}pinterest* berfungsi untuk mencari foto di pinterest secara random.


5.) *${prefix}wallpapersearch* <query>

Usage: fitur *${prefix}wallpapersearch* berfungsi untuk mencari wallpaper secara random


6.) *${prefix}stickersearch* <query>

Usage: fitur *${prefix}stickersearch* berfungsi untuk mencari stiker pack untuk digunakan dalam stiker whatsapp


7.) *${prefix}stickerwa* <query>

Usage: fitur *${prefix}stickerwa* berfungsi untuk mencari stiker secara random


8.) *${prefix}gimage* <query>
Message: Coming soon!


9.) *${prefix}konachan* <query>
Message: Coming soon!


10.) *${prefix}playstore* <query>
Message: Coming soon!
      `
    } else {
      return `Use of features for *Menu group*

1.) *${prefix}ytsearch* <query> (youtube search)

Usage: the *${prefix}ytsearch* feature is used to search for videos on YouTube.


2.) *${prefix}shope* <query>
Message: Coming soon!

3.) *${prefix}googleimg* <query> (from google)

Usage: the *${prefix}googleimg* feature functions to search for images and send images randomly.


4.) *${prefix}pinterest* <query>

Usage: the *${prefix}pinterest* feature is used to randomly search photos on Pinterest.


5.) *${prefix}wallpapersearch* <query>

Usage: the *${prefix}wallpapersearch* feature functions to search for wallpapers randomly


6.) *${prefix}stickersearch* <query>

Usage: the *${prefix}stickersearch* feature is used to find sticker packs to use in whatsapp stickers


7.) *${prefix}stickerwa* <query>

Usage: the *${prefix}stickerwa* feature functions to search for stickers randomly


8.) *${prefix}gimage* <query>
Message: Coming soon!


9.) *${prefix}konachan* <query>
Message: Coming soon!


10.) *${prefix}playstore* <query>
Message: Coming soon!
      `
    }
  }
  
  module.exports = helpsearching;