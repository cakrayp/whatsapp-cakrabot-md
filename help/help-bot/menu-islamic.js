const helpislamic= (countrycode, prefix) => {
  if (countrycode.startsWith('628')) {
    return `Penggunaan fitur untuk *Menu islamic*

1.) *${prefix}listsurah* (see a list surah)

Usage: fitur *${prefix}listsurah* dapat digunakan untuk melihat nomor surah dalam alqur'an tersebut terdapat pada nama surah untuk perintah *${prefix}alquran* dan *${prefix}alquranaudio*. 


2.) *${prefix}alquran* [No surah/Ayat]

Usage: fitur *${prefix}alquran* berfungsi untuk menunjukkan/melihat bacaan alqur'an surah dan beserta ayat alqur'an tersebut.
Contoh: *${prefix}alquran* [No surah/Ayat]
*${prefix}alquran* 18 (Untuk surah)
*${prefix}alquran* 18/1 (Untuk surah beserta ayat)
*${prefix}alquran* 18/1-10 (for surah and verse (ayat) 1-10)


3.) *${prefix}alquranaudio* [No surah/ayat] (alqur'an audio)

Usage: fitur *${prefix}alquranaudio* berfungsi untuk mengirim audio dalam bacaan alqur'an serta diiringi musik. (cukup 1 ayat)
Contoh: *${prefix}alquranaudio* 18/10


4.) *${prefix}asmaulhusna*

Usage: fitur *${prefix}asmaulhusna* dapat melihat kumpulan dalam nama asmaul husna tersebut.


5.) *${prefix}hadits* [Nama hadits & No hadits]

Usage: fitur *${prefix}hadits* berfungsi untuk melihat/menunjukkan dalam sumber hadits tersebut.
Contoh: *${prefix}hadits* bukhari 52


6.) *${prefix}kisahnabi* [nama nabi] (sejarah islam dan nabi)

Usage: fitur *${prefix}kisahnabi* berfungsi untuk melihat sebuah kisah sejarah nabi terdapat pada dalam alqur'an.
Contoh: *${prefix}kisahnabi* muhammad


7.) *${prefix}jadwalshotat* [nama daerah]

Usage: fitur *${prefix}jadwalshotat* berfungsi untuk melihat jadwalsholat dengan masing-masing daerah
Contoh: *${prefix}jadwalshotat* Jambi
    `
  } else {
    return `Use of features for *Islamic Menu*

1.) *${prefix}listsura* (see a list of surahs)

Usage: the *${prefix}infogroup* feature can be used to view the number of the surah in the Qur'an contained in the name of the surah for the commands *${prefix}alquran* and *${prefix}alquranaudio*.


2.) *${prefix}alquran* [No surah/verse]

Usage: the *${prefix}alquran* feature is used to show/view the reading of the sura and its verses.
E.g: *${prefix}alquran* [No surah/verse]
*${prefix}alquran* 18 (for surah)
*${prefix}alquran* 18/1 (for surah and verse (verse))
*${prefix}alquran* 18/1-10 (for surah and verse (verse) 1-10)


3.) *${prefix}alquranaudio* [No surah/verse] (audio Quran)

Usage: the *${prefix}alquranaudio* feature functions to send audio in the recitation of the Koran and accompanied by music. (1 verse)
E.g: *${prefix}alquranaudio* 18/10


4.) *${prefix}asmaulhusna*

Usage: the *${prefix}asmaulhusna* feature can see the collection in the name of the Asmaul Husna.


5.) *${prefix}hadits* [Name of hadith & No hadith]

Usage: the *${prefix}hadits* feature is used to view/show the source of the hadith.
E.g: *${prefix}hadits* bukhari 52


6.) *${prefix}kisahnabi* [name of the prophet] (history of Islam and the prophet)

Usage: *${prefix}kisahnabi* functions to view a historical story of the prophet contained in the Koran.
E.g: *${prefix}kisahnabi* muhammad


7.) *${prefix}jadwalshotat* [region name]

Usage: *${prefix}jadwalshotat* function to view prayer schedules with each region.
Contoh: *${prefix}jadwalshotat* Jambi
`
  }
}

module.exports = helpislamic;