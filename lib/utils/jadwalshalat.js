const axios = require('axios')
const cheerio = require('cheerio')

const getListDaerah = async () => new Promise((resolve, reject) => {
    axios.get('https://kalam.sindonews.com/jadwalsholat/').then(({ data }) => {
        const $ = cheerio.load(data)
        const nama_daerah = []
        $('div.imsakiyah-content > div.imsakiyah-select > select > option').get().map(function (data) {
            nama_daerah.push($(data).text())
        })
        resolve(nama_daerah)
    }).catch(err => {
        msgErr = new Error("Server is forbidden!")
        msgErr.code = 403
        throw reject(msgErr)
    })
})
const jadwalSolat = async (tempat) => new Promise((resolve, reject) => {
    axios.get('https://kalam.sindonews.com/jadwalsholat/').then(({ data }) => {
        const $ = cheerio.load(data)
        const nama_daerah = []
        $('div.imsakiyah-content > div.imsakiyah-select > select > option').get().map(function (data) {
            nama_daerah.push({
                nomor: $(data).attr('value'),
                kota: $(data).text()
            })
        })
        try { 
            var { nomor, kota } = nama_daerah.find(x => x.kota.toLowerCase().includes(tempat.toLowerCase())); 
        } catch (e) {
            msgErr = new Error("Daerah tidak ditemukan!")
            msgErr.code = 404
            throw reject(msgErr)
        }
        axios.get('https://kalam.sindonews.com/jadwalsholat/' + nomor).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = {};
            $('div.imsakiyah-content').each(function (i, elem) {
                const table_current_now = $(elem).find('tr.current-date');
                const getTable_td = $(table_current_now).find('td');        // You can use this child html elemnts of "td:nth-child(1)"
                result.kota = kota
                result.tanggal = $(table_current_now).find(getTable_td[0]).text().trim()
                result.imsak = $(table_current_now).find(getTable_td[1]).text().trim()
                result.subuh = $(table_current_now).find(getTable_td[2]).text().trim()
                result.zuhur = $(table_current_now).find(getTable_td[3]).text().trim()
                result.ashar = $(table_current_now).find(getTable_td[4]).text().trim()
                result.maghrib = $(table_current_now).find(getTable_td[5]).text().trim()
                result.isya = $(table_current_now).find(getTable_td[6]).text().trim()
            })
            resolve(result)
        }).catch(err => {
            msgErr = new Error("Server is forbidden!")
            msgErr.code = 403
            throw reject(msgErr)
        })
    })
    .catch(err => {
        msgErr = new Error("Server is forbidden!")
        msgErr.code = 403
        throw reject(msgErr)
    })
})

module.exports = {
    getListDaerah,
    jadwalSolat
}