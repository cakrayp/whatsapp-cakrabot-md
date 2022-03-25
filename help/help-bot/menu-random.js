const helprandom = (countrycode, prefix) => {
    if (countrycode.startsWith('628')) {
      return `Penggunaan fitur untuk *Menu randomtext*
  
1.) *${prefix}cerpen* (cerita dalam kehidupan bahasa)

Usage: fitur *${prefix}cerpen* berfungsi untuk menunjukkan sebuah cerpen dalam berisi judul, cerita, pengalaman, dan sifat sebagai kehidupan dalam rangka cerita dan kehidupan dalam tertentu.


2.) *${prefix}pantun*

Usage: fitur *${prefix}pantun* berfungsi sebagai kata² dalam berisi pengalaman yang tertentu.


3.) *${prefix}quotes* (rangkainan kata² yang lebih tepat)

Usage: fitur *${prefix}quotes* berfungsi untuk menampilkan sebuah kata yang lebih tepat/bijaksana dalam tertentu.


4.) *${prefix}quotesdilan* (dilan 1991 version)

Usage: fitur *${prefix}quotesdilan* berfungsi sebagai kata² dalam seperti film dilan dengan berisi kata mutiara, kata sindiran,, kata jomblo, dan kata baper

5.) *${prefix}quotesanime* 

Usage: fitur *${prefix}quotesdilan* berfungsi sebagai kata² dalam video anime serta dalam karakter anime tersebut.

6.) *${prefix}faktaunik* (tentang unik)

Usage: fitur *${prefix}faktaunik* ini berfungsi sebagai fakta yang unik.


7.) fitur *${prefix}bucin* 

Usage: fitur *${prefix}bucin* berfungsi sebagai kata² bucin yang bijak dan jomblo.
      `
    } else {
      return `This is an indonesian only, you can use a translations`
    }
  }

const helprandom2 = (countrycode, prefix) => {
  if (countrycode.startsWith('628')) {
    return `Penggunaan fitur untuk *Menu randomimg*

1.) *${prefix}cecan* (foto cewek)

Usage: fitur *${prefix}cecan* kata cecan dalam bahasa gaul biasanya kepanjangan cecan adalah Cewek cantik, berfungsi untuk mengirim foto cecan secara random/acak.


2.) *${prefix}cogan* (foto cowok)

Usage: fitur *${prefix}cogan* kata cogan sama seperti perintah *${prefix}cecan*. tapi bedanya cogan biasanya kita sering dengar dalam bahasa gaul, kepanjangan cogan adalah Cowok ganteng, berfungsi untuk mengirim foto cogan secara random/acak.


3.) *${prefix}exo* (korean artist)

Usage: fitur *${prefix}exo* biasanya exo adalah seorang artis dari korea salah satu terkenal didunia, berfungsi untuk mengirim foto exo secara random/acak.


4.) *${prefix}bts* (korean artist)

Usage: fitur *${prefix}bts* bts adalah seorang artis dikorea salah satu yang paling terkenal diindonesia atau dikorea, berfungsi untuk mengirim foto bts secara random/acak


5.) *${prefix}art* (karya) 

Usage: fitur *${prefix}art* berfungsi untuk mengirim foto dengan berisi menggambar, animasi gambar, melukis gambar, dll secara acak.


6.) *${prefix}couple*

Usage: fitur *${prefix}couple* berfungsi untuk mengirim foto couple yang terpisah secara acak.

*------[ ANIME ]------*

7.) *${prefix}loli* (anime loli) 
8.) *${prefix}neko*
9.) *${prefix}waifu*
10.) *${prefix}shota*
11.) *${prefix}sagiri*
12.) *${prefix}megumin*
13.) *${prefix}shinobu*

Usage: fitur ini adalah anime yang super keren yang biasanya pencipta anime sebagai kartun animasi dijepang, berfungsi untuk mengirim foto anime loli secara random/acak.


14.) *${prefix}feed*

Usage: fitur *${prefix}feed* berfungsi untuk mengirim foto feed secara random.


15.) *${prefix}trap*

Usage: fitur *${prefix}trap* berfungsi untuk mengirim foto secara random.
    `
  } else {
    return `Use of features for *Menu randomimg*

1.) *${prefix}cecan* (girl photo)

Usage: feature *${prefix}cecan* the word cecan in slang usually stands for cecan is Beautiful girl, serves to send random photos of cecan.


2.) *${prefix}cogan* (boy photo)

Usage: the *${prefix}cogan* feature is the same as the *${prefix}check* command. but the difference is that we usually hear cogan in slang, the abbreviation of cogan is handsome guy, serves to send random photos of cogan.


3.) *${prefix}exo* (korean artist)

Usage: *${prefix}exo* feature usually exo is an artist from Korea, one of the world's famous, serves to send exo photos randomly.


4.) *${prefix}bts* (korean artist)

Usage: feature *${prefix}bts* BTS is an artist in Korea, one of the most famous in Indonesia or in Korea, serves to send random BTS photos.


5.) *${prefix}art* (work)

Usage: *${prefix}art* feature is used to send random photos containing drawings, animations, painting pictures, etc.


6.) *${prefix}couple*

Usage: the *${prefix}couple* feature is used to send randomly separated couple photos.

*------[ ANIME ]------*

7.) *${prefix}loli* (loli anime)
8.) *${prefix}neko*
9.) *${prefix}waifu*
10.) *${prefix}shota*
11.) *${prefix}sagiri*
12.) *${prefix}megumin*
13.) *${prefix}shinobu*

Usage: this feature is a super cool anime that anime creators usually use as Japanese animated cartoons, serves to send random loli anime photos.


14.) *${prefix}feed*

Usage: *${prefix}feed* feature is used to send random feed photos.


15.) *${prefix}trap*

Usage: *${prefix}trap* feature is used to send random photos.
    `
  }
}
module.exports = {
  helprandom,
  helprandom2
}