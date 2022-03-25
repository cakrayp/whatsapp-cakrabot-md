const { default: Axios } = require('axios');


function emojiMix(input) {
    return new Promise(async (resolve, reject) => {
        Axios({
            method: "GET",
            url: "https://tenor.googleapis.com/v2/featured",
            params: {
                q: input.trim(),
                media_filter: "png_transparent",
                component: "proactive",
                contentfilter: "high",
                collection: "emoji_kitchen_v5",
                key: "AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ",
            },
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async ({ data }) => {
                if (!data.results[0]) {
                    let message_info = "This emoji is not supported!"
                    msgErr = new Error(message_info)
                    msgErr.message = message_info
                    msgErr.code = 403
                    reject(msgErr)
                } else {
                    resolve(data.results[0].url)
                }
            })
            .catch(err => {
                e = new Error(err)
                e.code = 406
                reject(e)
            })
    })
}


module.exports = emojiMix;