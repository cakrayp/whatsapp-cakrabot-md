const FormData = require('form-data')
const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const { getRandom } = require('../myfunction')


/**
 * WebP converter to video
 * @param {void} source for get WebP to video converter
 * @returns 
 */

exports.webpToFile = (source, fileType) => {
    return new Promise((resolve, reject) => {
        const bodyForm = new FormData()
        const isUrl = /http(?:s):\/\//.test(source)
        // if you want to use manually, you can use this one of file path for creation
        // Read file stteam from "messageMediaContent"
        isUrl   // true and false
            ? bodyForm.append('new-image-url', source)                          // for URL webp link
            : bodyForm.append('new-image', source, getRandom('.webp'))          // for stream file  
        
        // GET LINK WEBP TO FILE WITH POST
        if (/^jpg|png|mp4$/.test(fileType)) {
            Axios({
                method: 'post',
                url: `https://ezgif.com/webp-to-${fileType}`,
                data: bodyForm,
                headers: {
                    // 'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
                    ...bodyForm.getHeaders()
                }
            }).then(({ data }) => {
                const bodyFormThen = new FormData()
                const $ = cheerio.load(data)
                const gotdata = {
                    file: $('input[name="file"]').attr('value'),
                    convert: $('input[name="file"]').attr('value')
                }
                bodyFormThen.append('file', gotdata.file)
                bodyFormThen.append('convert', gotdata.convert)
                Axios({
                    method: 'post',
                    url: `https://ezgif.com/webp-to-${fileType}/` + gotdata.file,
                    data: bodyFormThen,
                    headers: {
                        // 'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                        ...bodyFormThen.getHeaders()
                    }
                }).then(({ data }) => {
                    const $ = cheerio.load(data)
                    const getMediaResult = $('div#output > p.outfile').html();
                    const result = 'https:' + /src="(.+?)"/.exec(getMediaResult)[1]
                    resolve(result)
                }).catch(reject)
            }).catch(reject)
        } else {
            if (!fileType) msgErr = new Error(`fileType is required for paramenter URL!`);
            else msgErr = new Error(`${fileType} is not avaiable for ezgif.com`);
            msgErr.code = 404;
            reject(msgErr)
        }
    })
}