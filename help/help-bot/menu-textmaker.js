const help_textmaker = (countrycode, prefix) => {
  if (countrycode.startsWith('628'))  {
    return `Penggunaan untuk fitur Menu Textprome

1.) Satu teks [text]

Usage: Masukkan satu text yang disediakan pada contoh yang ada dimenu *${prefix}menutextpro* dan *${prefix}menuphotooxy*
Commands: *${prefix}blackpink* <text>
E.g: *${prefix}blackpink* Cakra


2.) Dua teks [text1 & text2] atau [text1 | text2]

Usage: Masukkan dua teks yang disediakan pada contoh yang ada dimenu *${prefix}menutextpro* dan *${prefix}menuphotooxy*
Commands: *${prefix}pornhub* <text> <text2> atau <text> | <text2>
E.g: *${prefix}pornhub* Cakra jihan atau *${prefix}pornhub* Cakra | Jihan


3.) Tiga teks [text1 | text2 | text3]

Usage: Masukkan tiga text yang disediakan pada contoh dari perintah *${prefix}googlesuggestion*
E.g: *${prefix}googlesuggestion* Jihan Aura | You're Beautifull :) | Kamu Cantik :)
    `
  } else {
    return `
Usage for the Textprome Menu features

1.) One text [text]

Usage: Enter one text provided in the example in the menu *${prefix}menutextpro* and *${prefix}menuphotooxy*
Commands: *${prefix}blackpink* <text>
E.g: *${prefix}blackpink* Cakra


2.) Two texts [text & text2] or [text | text2]

Usage: Enter the two texts provided in the example in the menu *${prefix}menutextpro* and *${prefix}menuphotooxy*
Commands: *${prefix}pornhub* <text> <text2> or <text> | <text2>
E.g: *${prefix}pornhub* Cakra jihan or *${prefix}pornhub* Cakra | Jihan


3.) Three texts [text | text2 | text3]

Usage: Enter the three texts provided in the example of the command *${prefix}googlesuggestion*
E.g: *${prefix}googlesuggestion* Jihan Aura | You're Beautifull :) | Kamu cantik :)`
  }
}

module.exports = help_textmaker;