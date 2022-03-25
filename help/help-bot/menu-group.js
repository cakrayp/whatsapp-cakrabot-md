const helpgroup = (countrycode, prefix) => {
  if (countrycode.startsWith('628')) {
    return `Penggunaan fitur untuk *Menu group*

1.) *${prefix}infogroup* (see a group information)
Usage: fitur *${prefix}infogroup* dapat digunakan untuk melihat sebuah info group yang detail

2.) *${prefix}descgc* (see a description)
Usage: fitur *${prefix}descgc* dapat digunakan untuk melihat group deskripsi.

3.) *${prefix}linkgc* (for admin Only)
Usage: fitur *${prefix}linkgc* berfungsi untuk mengambil/mengirim tautan group tersebut. (khusus bot menjadi admin)

4.) *${prefix}welcome* (for participant update)
Usage: fitur *${prefix}welcome* berfungsi untuk mendeteksi setiap ada perubahan member di group

5.) *${prefix}antilink* (link detect)
Usage: fitur *${prefix}antilink* berfungsi untuk mendeteksi setiap peserta mengirim link group.
    `
  } else {
    return `Use of the *Menu group* feature

1.) *${prefix}infogroup* (see a group information)
Usage: the *${prefix}infogroup* feature can be used to view a detailed group info

2.) *${prefix}descgc* (see a description)
Usage: *${prefix}descgc* feature can be used to view group descriptions.

3.) *${prefix}linkgc* (for admin Only)
Usage: the *${prefix}linkgc* feature functions to retrieve/send the group link. (only for bots to be admin)

4.) *${prefix}welcome* (for participant update)
Usage: the *${prefix}welcome* feature is used to detect every member change in the group

5.) *${prefix}antilink* (link detect)
Usage: the *${prefix}antilink* feature is used to detect each participant sending a group link.
    `
  }
}

module.exports = helpgroup;