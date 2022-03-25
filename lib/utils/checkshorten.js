const FormData = require('form-data')
const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const Caliph = require('ssweb-api')

function checkshorturl(url) {
    return new Promise((resolve, reject) => {
        const formData_expands = new FormData();
        formData_expands.append('u', url)
        Axios('http://checkshorturl.com/expand.php', {
            method: 'POST',
            headers: formData_expands.getHeaders(),
            data: formData_expands
        }).then(async ({ data }) => {
            const $ = cheerio.load(data)
            const table_results = $('tbody');
            const GetTable = $(table_results).find('tr');
            const Long_URL = $(GetTable).find('td')[1];
            const Delay_URL = $(GetTable).find('td')[3];
            const Short_URL = $(GetTable).find('td')[5];
            const Redirection_URL = $(GetTable).find('td')[7];
            const Title_URL = $(GetTable).find('td')[13];
            const Description_URL = $(GetTable).find('td')[15];
            const ToLinkString = $(Long_URL).text().replace(/\n/g, "").trim();
            if (!$(GetTable).text().trim()) {
                let messageInfo = "Please, provide a valid shortened URL."
                msgErr = new Error(messageInfo)
                msgErr.message = messageInfo
                msgErr.code = 403
                reject(msgErr)
            }
            Caliph.desktop({ url: ToLinkString })
                .then(async (data) => {
                    resolve({
                        screenshot: data.result,
                        title: $(Title_URL).text().replace(/\n/g, "").trim(),
                        description: $(Description_URL).text().trim(),
                        short: $(Short_URL).text().trim(),
                        expands: ToLinkString,
                        redirection: $(Redirection_URL).text().trim(),
                        delay: $(Delay_URL).text().trim(),
                    });
                })
            })
            .catch(err => {
                let messageInfo = "Server Error: Forbidden"
                msgErr = new Error(messageInfo)
                msgErr.message = messageInfo
                msgErr.code = 406
                reject(msgErr)
            })
    })
}

function exportFromShortUrl(url) {
    return new Promise((resolve, reject) => {
        const formData_expands = new FormData();
        formData_expands.append('u', url)
        Axios('http://checkshorturl.com/expand.php', {
            method: 'POST',
            headers: formData_expands.getHeaders(),
            data: formData_expands
        })
            .then(async ({ data }) => {
                const $ = cheerio.load(data)
                const table_results = $('tbody');
                const GetTable = $(table_results).find('tr');
                if (!$(GetTable).text().trim()) {
                    let messageInfo = "Please, provide a valid shortened URL."
                    msgErr = new Error(messageInfo)
                    msgErr.message = messageInfo
                    msgErr.code = 403
                    reject(msgErr)
                }
                const Long_URL = $(GetTable).find('td')[1];
                resolve($(Long_URL).text().replace(/\n/g, "").trim())
            })
            .catch(err => {
                let messageInfo = "Server Error: Forbidden"
                msgErr = new Error(messageInfo)
                msgErr.message = messageInfo
                msgErr.code = 406
                reject(msgErr)
            })
    })
}

module.exports = {
    checkshorturl,
    exportFromShortUrl
};