const axios = require('axios');
const cheerio = require('cheerio');

/**
 * @param {string} url For see mediafire infromation...
 * @returns 
 */


const mediafire = async (url) => new Promise(async (resolve, reject) => {
    if (/http(?:s):\/\/(www\.|)mediafire.com\/view/.test(url)) {
        url = url.replace('view', 'file')
    }
    if (/http(?:s):\/\/(www\.|)mediafire.com\/(file|download)/.test(url)) {
        try {
            // Program scraper
            const res = await axios.get(url);
            const $ = cheerio.load(res.data)
            const link = $('a#downloadButton').attr('href')
            // const typeFile = $('.filetype')
            // const seplit = $(typeFile).find('span')[1]
            // const typeFile2 = $(seplit).text()
            // const type = typeFile2.split('.')
            // const type2 = type[1].split(')')
            const filedata = $('.center')
            const filename = $(filedata).find('.filename')[0];
            const type = $(filename).text().split(".");
            const filetype = type[type.length - 1].toLocaleLowerCase();
            const detail = $('.details');
            const filesize = $(detail).find('li')[0]
            const publish = $(detail).find('li')[1]

            // Result
            var published = $(publish).find('span').text()
            var datetime = published.split(" ")
            var date = datetime[0]
            var time = datetime[1]
            resolve({
                // mediafire_img : 'https://i.postimg.cc/VsW-CDGvL/mediafire-api-images.png',
                title: $(filedata).find('.dl-btn-label').text().trim(),
                filename: $(filename).text().trim(),
                filetype: filetype,
                filesize: $(filesize).find('span').text(),
                published: published.split(" ").join(" | "),
                date: date,
                time: time,
                downloads: link
            })
        } catch (err) {
            throw reject(err)
        }

    } else {
        throw reject({
            message: 'Please enter Mediafire only for file URL!'
        })
    }
})

module.exports = mediafire;