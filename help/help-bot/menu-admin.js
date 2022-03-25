const adminGroup = (country_code, prefix, sender, botNumber) => {
if (country_code.startsWith('628')) {
  return `
Penggunaan fitur untuk *Menu admin*

fitur ini hanya dapat digunakan oleh khusus admin group, dan tidak dapat digunakan untuk semua member.


1.) *${prefix}add* <number>

Usage: fitur *${prefix}add* berfungsi untuk menambahkan sebuah member baru didalam group.
E.g: *${prefix}add* ${botNumber.split('@')[0]}


2.) *${prefix}kick* <tag member>

Usage: fitur *${prefix}kick* berfungsi untuk mengeluarkan sebuah member yang anda tag sebagai target.
E.g: *${prefix}kick* @${sender.split('@')[0]}


3.) *${prefix}kickall* (Remove all members)

Usage: fitur *${prefix}kickall* berfungsi untuk mengeluarkan semua member didalam group, kecuali admin group


4.) *${prefix}promote* <tag member>

Usage: fitur *${prefix}promote* berfungsi untuk menambahkan sebagai admin group.
E.g: *${prefix}promote* @${sender.split('@')[0]}


5.) *${prefix}demote* <tag member>

Usage: fitur *${prefix}demote* berfungsi untuk menghentikan/menghapus sebagai admin group.
E.g: *${prefix}demote* @${sender.split('@')[0]}


6.) *${prefix}leave* (leave this group)

Usage: fitur *${prefix}leave* berfungsi untuk meninggalkan/mengeluarkan bot didalam group.


7.) *${prefix}tagall* (tag all members)

Usage: fitur *${prefix}tagall* berfungsi untuk memanggil/mengtag ke semua member
E.g *${prefix}tagall*
*${prefix}tagall* (Mention Only)
*${prefix}tagall* <text>


8.) *${prefix}sendallmember* (send all member)

Usage: fitur *${prefix}sendallmember* berfungsi untuk mengirim pesan ke semua member.
E.g: *${prefix}sendallmember* (teks, photo/video)



*- SETTING GROUP*

1.) *${prefix}setgroupname* (change the group name)

Usage: fitur *${prefix}setgroupname* berfungsi untuk mengganti nama group
E.g: *${prefix}setgroupname* Hello World


2.) *${prefix}setgrouppic* (Picture/Image)

Usage fitur *${prefix}setgrouppic* untuk mengganti gambar/foto profile digroup
E.g: *${prefix}setgrouppic* (kirim foto dengan caption ${prefix}setgrouppic atau reply foto yang telah dikirim)


3.) *${prefix}setgroupdesc*

Usage fitur *${prefix}setgroupdesc* berfungsi untuk membuat/mengganti deskripsi group.
E.g: *${prefix}setgrouppic* Hello World


4.) *${prefix}setgroupchange*

Usage: fitur *${prefix}setgroupchange* berfungsi untuk mengubah peraturan group dan hanya admin dapat mengirim pesan tsb.
- Open (Membuka)
- Close (Menutup)
E.g *${prefix}setgroupchange* open/close
  `
  } else {
    return `
    Use of features *Admin menu*

This feature can only be used by special group admins, and cannot be used for all members


1.) *${prefix}add* <number>

Usage: the *${prefix}add* feature is used to add a newly grouped member
E.g: *${prefix}add* ${botNumber.split('@')[0]}


2.) *${prefix}kick* <member tag>

Usage: the *${prefix}kick* feature is used to remove a member that you tag as a target
E.g: *${prefix}kick* @${sender.split('@')[0]}


3.) *${prefix}kickall* (Remove all members)

Usage: the *${prefix}kickall* feature functions to remove all members in the group, except the admin group


4.) *${prefix}promote* <member tag>

Usage: the *${prefix}promote* feature is used to add an admin group.
E.g: *${prefix}promote* @${sender.split('@')[0]}


5.) *${prefix}demote* <member tag>

Usage: the *${prefix}demote* feature is used to delete/stop the admin group.
E.g: *${prefix}demote* @${sender.split('@')[0]}


6.) *${prefix}leave* (leave this group)

Usage: the *${prefix}leave* feature is used to leave/remove bots in a group.


7.) *${prefix}tagall* (tag all members)

Usage: *${prefix}tagall* feature functions to call/tag all members
E.g *${prefix}tagall*
*${prefix}tagall* (Mention Only)
*${prefix}tagall* <text>


8.) *${prefix}sendallmember* (send all member)

Usage: the *${prefix}sendallmember* feature is used to send messages to all members.
E.g: *${prefix}sendallmember* (text, photo/video)



*- GROUP SETTINGS*

1.) *${prefix}setgroupname* (change the group name)

Usage: the *${prefix}setgroupname* feature functions to change the group name
E.g: *${prefix}setgroupname* Hello World


2.) *${prefix}setgrouppic* (Picture/Image)

Usage of the *${prefix}setgrouppic* feature to change the profile picture/photo in the group
E.g: *${prefix}setgrouppic* (send a photo with the caption ${prefix}setgrouppic or reply to the photo that has been sent)


3.) *${prefix}setgroupdesc*

Usage feature *${prefix}setgroupdesc* functions to create/change group descriptions.
E.g: *${prefix}setgrouppic* Hello World


4.) *${prefix}setgroupchange*

Usage: the *${prefix}setgroupchange* feature is used to change group rules and only admins can send the message.
- Open
- Close
E.g *${prefix}setgroupchange* open/close
  `
  }
}

module.exports = adminGroup