const helpconverter = (countrycode, prefix) => {
    if (countrycode.startsWith('628')) {
        return `Penggunaan fitur *Menu Converter*
        
1.) *${prefix}sticker* (Image/video to Webp)

Usage: fitur *${prefix}sticker* berfungsi untuk mengconvert Gambar/Video/Gif menjadi WebP disetiap media, tetapi bertujuan untuk mengirim sticker.
Cara: Silahkan dikirim *Gambar/Video/Gif* dengan caption *${prefix}sticker* atau direply *Gambar/Video/Gif* yang sudah dikirim.


2.) *${prefix}toimg* (WebP to Image)

Usage: fitur *${prefix}toimg* berfungsi untuk mengirim sticker menjadi gambar.
Cara: Silahkan direply sticker yang sudah dikirim.


3.) *${prefix}tourl* ( *Gambar/Video/Gif* to URLs)

Usage: fitur *${prefix}tourl* berfungsi untuk mengupload *Gambar/Video/Gif* ke Link.
Cara: Silahkan dikirim *Gambar/Video/Gif* dengan caption *${prefix}sticker* atau direply *Gambar/Video/Gif* yang sudah dikirim.


4.) *${prefix}tomp4*
Message: Coming soon!

5.) *${prefix}tomp3* (video to audio)

Usage: fitur *${prefix}tomp3* berfungsi untuk menconvert video menjadi audio.
Cara: Silahkan dikirm *Video* dengan caption *${prefix}tomp3* atau direply *Video* yang sudah dikirim.


6.) *${prefix}towebp*

Usage: fitur *${prefix}towebp* berfungsi untuk mengconvert Gambar/video/Gif menjadi WebP.
Cara: Silahkan dikirim *Gambar/Video/Gif* dengan caption *${prefix}towebp* atau direply *Gambar/Video/Gif* yang sudah dikirim.
`
    } else {
        return `Use of the *Menu Converter* feature
        
1.) *${prefix}sticker* (Image/video to Webp)

Usage: *${prefix}sticker* feature functions to convert Images/Videos/Gifs into WebP on any media, but aims to send stickers.
Method: Please send *Image/Video/Gif* with the caption *${prefix}sticker* or reply *Image/Video/Gif* that has been sent.


2.) *${prefix}toimg* (WebP to Image)

Usage: the *${prefix}toimg* feature is used to send the sticker into an image.
Method: Please reply to the sticker that has been sent.


3.) *${prefix}tourl* ( *Image/Video/Gif* to URLs)

Usage: the *${prefix}tourl* feature is used to upload *Image/Video/Gif* to the link.
Method: Please send *Image/Video/Gif* with the caption *${prefix}sticker* or reply *Image/Video/Gif* that has been sent.


4.) *${prefix}tomp4*
Message: Coming soon!

5.) *${prefix}tomp3* (video to audio)

Usage: the *${prefix}tomp3* feature is used to convert video into audio.
Method: Please send *Video* with the caption *${prefix}tomp3* or reply to the *Video* that has been sent.


6.) *${prefix}towebp*

Usage: the *${prefix}towebp* feature is used to convert images/videos/gifs to webp.
How to: Please send *Image/Video/Gif* with the caption *${prefix}towebp* or reply *Image/Video/Gif* that has been sent.
`
    }
}

module.exports = helpconverter