const helpanime = (countrycode, prefix) => {
    if (countrycode.startsWith('628')) {
        return `Penggunaan fitur *Menu Anime*
        
1.) *${prefix}wait* (search anime with images)

Usage: fitur *${prefix}wait* berfungsi untuk mencari anime dengan gambar yang tertentu serta bersangkutan dengan gambar anime
Cara: Silahkan dikirim *Gambar* dengan caption *${prefix}wait* atau direply Gambar yang sudah dikirim.


2.) *${prefix}kusonimesearch* [query]

Usage: fitur *${prefix}kusonimesearch* berfungsi untuk mencari anime dengan berisi video anime serta dalam terjemahaan.
Contoh: *${prefix}kusonimesearch* <query>
*${prefix}kusonimesearch* naruto


3.) *${prefix}manga* [query]

Usage: fitur *${prefix}manga* berfungsi untuk mencari anime dengan sama seperti perintah *${prefix}kusonimesearch* serta berisi PDF komik
Contoh: *${prefix}manga* <query>
*${prefix}manga* naruto
`
    } else {
        return `Use of the *Anime Menu* feature
        
1.) *${prefix}wait* (search anime with images)

Usage: the *${prefix}wait* feature functions to search for anime with certain images and related to anime images
Method: Please send *Image* with the caption *${prefix}wait* or reply to the Image that has been sent.


2.) *${prefix}kusonimesearch* [query]

Usage: the *${prefix}kusonimesearch* feature functions to search for anime by containing anime videos as well as in translation.
Example: *${prefix}kusonimesearch* <query>
*${prefix}kusonimesearch* naruto


3.) *${prefix}manga* [query]

Usage: the *${prefix}manga* feature functions to search for anime in the same way as the *${prefix}kusonimesearch* command and contains a PDF of comics
Example: *${prefix}manga* <query>
*${prefix}manga* naruto
`
    }
}
module.exports = helpanime