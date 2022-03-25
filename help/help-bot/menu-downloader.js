const help_downloader = (countrycode, prefix) => {
  username = ['njwaputri_', 'hanauraaa_', 'cakrayp_jhn']
  if (countrycode.startsWith('628')) {
    return `Penggunaan fitur untuk *Menu downloader*

1.) *${prefix}ytplay* <query> (for video)

Usage: fitur *${prefix}ytplay* berfungsi untuk sistem pencarian video diyoutube secara default/random.
Contoh: *${prefix}ytplay* melukis senja


2.) *${prefix}play* <query> (for audio)

Usage: fitur *${prefix}play* berfungsi untuk mencari video diyoutube dan akan diconvert ke audio/mp3
Contoh: *${prefix}play* melukis senja


3.) *${prefix}ytmp4* <URL YT>

Usage: fitur *${prefix}play* berfungsi untuk mendownload/mengambil video dari youtube.
Contoh: *${prefix}ytmp4* https://www.youtube.com/watch?v=dXCOXWPxwd4&t=2445s


4.) *${prefix}ytmp3* <URL YT>

Usage: fitur *${prefix}ytmp3* berfungsi untuk mendownload/mengambil audio dari youtube.
Contoh: *${prefix}ytmp3* https://www.youtube.com/watch?v=dXCOXWPxwd4&t=2445s


5.) *${prefix}tiktoknowm* <URL Tiktok>
Usage: fitur *${prefix}tiktoknowm* berfungsi untuk mendownload video tiktok tanpa watermark.
Contoh: *${prefix}tiktoknowm* https://vt.tiktok.com/ZSeu6R7bU/


6.) *${prefix}tiktokmusic* <URL Tiktok>

Usage: fitur *${prefix}tiktokmusic* berfungsi untuk mendownload dan dapat diconvert ke audio/mp3
Contoh: *${prefix}tiktokmusic* https://vt.tiktok.com/ZSeu6R7bU/


7.) *${prefix}igfeed* <URL ig>

Usage: fitur *${prefix}igfeed* berfungsi untuk mendownload/mengambil media diinstagram dari pengguna instagram.
Contoh: *${prefix}igfeed* https://www.instagram.com/reel/CYD_lD3lB9d/


8.) *${prefix}igstory* <username>

Usage: fitur *${prefix}igstory* berfungsi untuk mengambil/mendownload instagram story yang ada dari username (pengguna) instagram.
Contoh: *${prefix}igstory* ${username[Math.floor(Math.random() * username.length)]}


9.) *${prefix}jooxplay* <query>

Usage: fitur *${prefix}jooxplay* berfungsi untuk mencari lagu dari joox.
Contoh: *${prefix}jooxplay* akad


10.) *${prefix}pinterestdl* <URL pin>

Usage: fitur *${prefix}pinterestdl* berfungsi untuk mengambil/mendownload gambar/video dari pengguna pinterest tersebut
Contoh: *${prefix}pinterestdl* https://id.pinterest.com/pin/504825439490822472/


11.) *${prefix}pixivdl* <URL pixiv>
Message: Coming soon!


12.) *${prefix}zippyshare* <URL zippyshare>

Usage: *${prefix}zippyshare* berfungsi untuk melihat info isi data file zippyshare
Contoh: *${prefix}zippyshare* https://www37.zippyshare.com/v/MvF4ohr7/file.html


13.) *${prefix}mediafire* <URL mediafire>

Usage: *${prefix}mediafire* berfungsi untuk melihat info isi data dan mengirim file mediafire tersebut.
Contoh: *${prefix}mediafire* https://www.mediafire.com/file/a5jb5crl8s8juvd/Sample_-_Butterfly.jpg/file
    `
  } else {
    return `Use of features for *Menu downloader*

1.) *${prefix}ytplay* <query> (for video)

Usage: the *${prefix}ytplay* feature works for the YouTube video search system by default/random.
E.g: *${prefix}ytplay* painting twilight


2.) *${prefix}play* <query> (for audio)

Usage: the *${prefix}play* feature functions to search for videos on YouTube and will convert them to audio/mp3
E.g: *${prefix}play* painting twilight


3.) *${prefix}ytmp4* <URL YT>

Usage: *${prefix}play* feature functions to download/retrieve videos from youtube.
E.g: *${prefix}ytmp4* https://www.youtube.com/watch?v=dXCOXWPxwd4&t=2445s


4.) *${prefix}ytmp3* <URL YT>

Usage: the *${prefix}ytmp3* feature is used to download/retrieve audio from YouTube.
E.g: *${prefix}ytmp3* https://www.youtube.com/watch?v=dXCOXWPxwd4&t=2445s


5.) *${prefix}tiktoknowm* <Tiktok URL>
Usage: *${prefix}tiktoknowm* feature functions to download tiktok videos without a watermark.
E.g: *${prefix}tiktoknowm* https://vt.tiktok.com/ZSeu6R7bU/


6.) *${prefix}tiktokmusic* <Tiktok URL>

Usage: the *${prefix}tiktokmusic* feature functions to download and can be converted to audio/mp3
E.g: *${prefix}tiktokmusic* https://vt.tiktok.com/ZSeu6R7bU/


7.) *${prefix}igfeed* <URL ig>
Usage: the *${prefix}igfeed* feature functions to download/retrieve Instagram media from Instagram users.
E.g: *${prefix}igfeed* https://www.instagram.com/reel/CYD_lD3lB9d/


8.) *${prefix}igstory* <username>

Usage: the *${prefix}igstory* feature functions to retrieve/download existing Instagram stories from the Instagram username (user).
E.g: *${prefix}igstory* ${username[Math.floor(Math.random() * username.length)]}


9.) *${prefix}jooxplay* <query>

Usage: the *${prefix}jooxplay* feature is used to search for songs from Joox.
E.g: *${prefix}jooxplay* akad


10.) *${prefix}pinterestdl* <URL pin>

Usage: the *${prefix}pinterestdl* feature functions to take/download pictures/videos from that pinterest user
Example: *${prefix}pinterestdl* https://id.pinterest.com/pin/504825439490822472/


11.) *${prefix}pixivdl* <URL pixiv>
Message: Coming soon!


12.) *${prefix}zippyshare* <URL zippyshare>

Usage: *${prefix}zippyshare* functions to view information about the contents of the zippyshare file
Example: *${prefix}zippyshare* https://www37.zippyshare.com/v/MvF4ohr7/file.html


13.) *${prefix}mediafire* <URL mediafire>

Usage: *${prefix}mediafire* functions to view data content info and send the mediafire file.
Example: *${prefix}mediafire* https://www.mediafire.com/file/a5jb5crl8s8juvd/Sample_-_Butterfly.jpg/file
15.) *${prefix}telesticker* <URL Pack>
`
  }
}

module.exports = help_downloader;