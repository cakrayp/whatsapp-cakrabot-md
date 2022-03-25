const help_creator = (countrycode, prefix) => {
    emojirandom = ['😀', '😃', '😄', '😁', '😆', '😅', '😂']
    if (countrycode.startsWith('628')) {
      return `Penggunaan fitur untuk *Menu creator*
      
1.) *${prefix}sticker* (media converter to sticker)

Usage: Fitur *${prefix}sticker* berfungsi setiap media file akan diconvert sebagai type file image/webp (web picture) dan akan mengirimkan sebuah dalam stiker.
Contoh:  *${prefix}sticker* (kirim video/gambar dengan caption ${prefix}sticker atau direply yang telah dikirim)


2.) *${prefix}emoji* (Emoji to PNG and converter to webp)

Usage: *${prefix}emoji* berfungsi untuk setiap emotion (emoji) biasanya emoji dijadikan sebuah gambar dan file akan diconvert sebagai type file image/webp (web picture) dan akan mengirimkan sebuah dalam stiker.
Contoh: *${prefix}emoji* ${emojirandom[Math.floor(Math.random() * emojirandom.length)]}


3.) *${prefix}emoji* (Emoji to PNG and converter to webp)

Usage: *${prefix}emoji* berfungsi untuk setiap emotion (emoji) biasanya emoji dijadikan sebuah gambar dan file akan diconvert sebagai type file image/webp (web picture) dan akan mengirimkan sebuah dalam stiker.
Contoh: *${prefix}emoji* ${emojirandom[Math.floor(Math.random() * emojirandom.length)]}


4.) *${prefix}ttp* [text]
Usage: Fitur *${prefix}ttp* berfungsi untuk membuat sebuah dalam text dan mengirimkan sebuah sticker
Contoh: *${prefix}ttp* Jihan


5.) *${prefix}attp* [text]
Usage: Fitur *${prefix}attp* berfungsi untuk membuat sebuah dalam text yang berwarna kedip dan mengirimkan sebuah sticker
Contoh: *${prefix}attp* Jihan
    `
    } else {
      return `Use of features for *Menu creator*

1.) *${prefix}sticker* (media converter to sticker)

Usage: The *${prefix}sticker* feature functions that every media file will be converted as an image/webp (web picture) file type and will send one as a sticker.
E.g: *${prefix}sticker* (send video/image with caption ${prefix}sticker or reply that has been sent)


2.) *${prefix}emoji* (Emoji to PNG and converter to webp)

Usage: *${prefix}emoji* functions for every emotion (emoji) usually emoji is made into an image and the file will be converted as an image/webp (web picture) file type and will send one in a sticker.
E.g: *${prefix}emoji* ${emojirandom[Math.floor(Math.random() * emojirandom.length)]}


3.) *${prefix}emoji* (Emoji to PNG and converter to webp)

Usage: *${prefix}emoji* functions for every emotion (emoji) usually emoji is made into an image and the file will be converted as an image/webp (web picture) file type and will send one in a sticker.
Example: *${prefix}emoji* ${emojirandom[Math.floor(Math.random() * emojirandom.length)]}


4.) *${prefix}ttp* [text]
Usage: The *${prefix}ttp* feature is used to create a text and send a sticker
Example: *${prefix}ttp* Jihan


5.) *${prefix}attp* [text]
Usage: The *${prefix}attp* feature is used to create a blinking text in text and send a sticker
Example: *${prefix}attp* Jihan
`
    }
}

module.exports = help_creator;