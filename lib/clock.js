const swichtime = (get_time) => {
    let jams = parseInt(get_time);
    switch (jams) {
        case 0: jams = "Malam"; break;
        case 1: jams = "Malam"; break;
        case 2: jams = "Malam"; break;
        case 3: jams = "Pagi"; break;
        case 4: jams = "Pagi"; break;
        case 5: jams = "Pagi"; break;
        case 6: jams = "Pagi"; break;
        case 7: jams = "Pagi"; break;
        case 8: jams = "Pagi"; break;
        case 9: jams = "Pagi"; break;
        case 10: jams = "Pagi"; break;
        case 11: jams = "Siang"; break;
        case 12: jams = "Siang"; break;
        case 13: jams = "Siang"; break;
        case 14: jams = "Siang"; break;
        case 15: jams = "Sore"; break;
        case 16: jams = "Sore"; break;
        case 17: jams = "Sore"; break;
        case 18: jams = "Malam"; break;
        case 19: jams = "Malam"; break;
        case 20: jams = "Malam"; break;
        case 21: jams = "Malam"; break;
        case 22: jams = "Malam"; break;
        case 23: jams = "Malam"; break;
    }
    return jams
}
const switchdays = (get_days) => {
    let hari = parseInt(get_days);
    switch (hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum'at"; break;
        case 6: hari = "Sabtu"; break;
    }
    return hari
}
const switchmonths = (get_months) => {
    let bulan = parseInt(get_months)
    switch (bulan) {
        case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
        case 2: bulan = "Maret"; break;
        case 3: bulan = "April"; break;
        case 4: bulan = "Mei"; break;
        case 5: bulan = "Juni"; break;
        case 6: bulan = "Juli"; break;
        case 7: bulan = "Agustus"; break;
        case 8: bulan = "September"; break;
        case 9: bulan = "Oktober"; break;
        case 10: bulan = "November"; break;
        case 11: bulan = "Desember"; break;
    }
}


module.exports = {
    swichtime,
    switchdays,
    switchmonths
};