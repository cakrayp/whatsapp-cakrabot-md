const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')


/** Tiktok Downloader
 * @param {string} tiktok_url For use a tiktok downloader in thttps://ttdownloader.com/
 * @returns
 */

function ttdownloader(tiktok_url) {
    return new Promise(async (resolve, reject) => {
        if (/http(?:s):\/\/(www|[a-z]{2})\.tiktok.com/i.test(tiktok_url)) {
            axios.get('https://ttdownloader.com/', {
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                }
            })
                .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let token = $('#token').attr('value')
                    let config = {
                        'url': tiktok_url,
                        'format': '',
                        'token': token
                    }
                    axios('https://ttdownloader.com/req/', {
                        method: 'POST',
                        data: new URLSearchParams(Object.entries(config)),
                        headers: {
                            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                        }
                    })
                        .then(({ data }) => {
                            const $ = cheerio.load(data)
                            const downloader = $('#results-list')
                            const nowm = $(downloader).find('.download')[0]
                            const wm = $(downloader).find('.download')[1]
                            const mp3Audio = $(downloader).find('.download')[2]
                            if ($(wm).find('a').attr('href') === undefined) {
                                let messageInfo = 'Please enter a valid URL!'
                                msgErr = new Error(messageInfo);
                                msgErr.code = 419
                                msgErr.message = messageInfo
                                reject(msgErr)
                            } else {
                                resolve({
                                    status: 200,
                                    result: {
                                        nowm: $(nowm).find('a').attr('href'),
                                        wm: $(wm).find('a').attr('href'),
                                        audio: $(mp3Audio).find('a').attr('href')
                                    },
                                })
                            }
                        })
                })
                .catch(err => {
                    let messageInfo = "Server failed!"
                    msgErr = new Error(messageInfo);
                    msgErr.code = 503
                    msgErr.message = messageInfo
                    reject(msgErr)
                })
        } else {
            let messageInfo = "This is not Tiktok URL!"
            msgErr = new Error(messageInfo);
            msgErr.code = 503
            msgErr.message = messageInfo
            reject(msgErr)
        }
    })
}

/**
 * Pinterest images
 * @param {string} querry For search image in pinterest
 * @returns 
 */


function pinterest(querry) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
                "cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
            }
        }).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = [];
            const hasil = [];
            $('div > a').get().map(b => {
                const link = $(b).find('img').attr('src')
                result.push(link)
            });
            result.forEach(v => {
                if (v == undefined) return
                hasil.push(v.replace(/236/g, '736'))
            })
            hasil.shift();
            resolve(hasil)
        })
    })
}

function pinterestdl(url) {
    return new Promise(async (resolve, reject) => {
        axios.get(url, {
            headers: {
                "cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
            }
        }).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = [];
            const info_pin = []
            $('script#__PWS_DATA__').each((i, elem) => {
                // console.log(JSON.parse($(elem.children).text()))
                info_pin.push(JSON.parse($(elem.children).text()))
            })
            const metaData_pin = info_pin[0].props.initialReduxState.pins[info_pin[0].props.initialReduxState.location.pathname.split('/')[2]]
            const username_pin = metaData_pin.closeup_attribution.username
            const fullname_pin = metaData_pin.closeup_attribution.full_name
            const hasil = [];
            const img_url = $('div.Jea.XiG.mQ8.zI7.iyn.Hsu').find('img').attr('src')
            const profile_url = metaData_pin.closeup_attribution.image_medium_url
            // console.log(img)
            var pinterest_Media = []
            if (!metaData_pin.videos) {
                quality_img = ['236x', '564x', '736x', 'originals']
                for (let i = 0; i < quality_img.length; i++) {
                    pinterest_Media.push({
                        type: 'image',
                        quality: quality_img[i] == 'originals' ? quality_img[i] + ' (high)' : quality_img[i],
                        url: img_url.replace(/236x/g, quality_img[i])
                    })
                }
            } else {
                pinterest_Media.push({
                    type: 'video',
                    url: metaData_pin.videos.video_list.V_720P.url,
                    previewUrl: metaData_pin.videos.video_list.V_720P.thumbnail
                })
            }
            resolve({
                id: metaData_pin.closeup_attribution.id,
                profile_url,
                username: metaData_pin.closeup_attribution.username,
                full_name: metaData_pin.closeup_attribution.full_name,
                follower_count: metaData_pin.closeup_attribution.follower_count,
                location: metaData_pin.closeup_attribution.location,
                caption: metaData_pin.closeup_unified_description,
                pin_data: pinterest_Media
            })
        }).catch(err => {
            reject({ status: 403, message: err.message })
        })
    })
}

/**
 * 
 * @param {*} title 
 * @param {*} page 
 * @returns 
 */

function wallpaperflare(query) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.wallpaperflare.com/search?wallpaper=' + query, {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const result = [];
                $('#gallery > li > figure > a').each(function (a, b) {
                    result.push($(b).find('img').attr('data-src'))
                })
                resolve(result)
            })
            .catch({ status: 'err' })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
            .then((res) => {
                let $ = cheerio.load(res.data)
                let hasil = []
                $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                    hasil.push({
                        title: $(b).find('img').attr('alt'),
                        source: $(b).attr('href'),
                        image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                    })
                })
                resolve(hasil)
            })
    })
}

function lyrics(title) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://www.musixmatch.com/search/' + title)
            .then(async ({ data }) => {
                const $ = cheerio.load(data)
                const hasil = {};
                let limk = 'https://www.musixmatch.com'
                const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
                await axios.get(link)
                    .then(({ data }) => {
                        const $$ = cheerio.load(data)
                        hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
                        $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
                            hasil.lirik = $$(b).find('span > p > span').text() + '\n' + $$(b).find('span > div > p > span').text()
                        })
                    })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function tebakgambar() {
    return new Promise(async (resolve, reject) => {
        axios.get('https://jawabantebakgambar.net/all-answers/')
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const result = [];
                let random = Math.floor(Math.random() * 2836) + 2;
                let link2 = 'https://jawabantebakgambar.net'
                $(`#images > li:nth-child(${random}) > a`).each(function (a, b) {
                    const img = link2 + $(b).find('img').attr('data-src')
                    const jwb = $(b).find('span').text()
                    result.push({
                        image: img,
                        jawaban: jwb
                    })
                    resolve(result)
                })
            })
            .catch(reject)
    })
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin/web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    title: res.msong,
                                    album: res.malbum,
                                    singer: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    status: true,
                                    result: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function wattpad(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.wattpad.com/search/' + title)
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const result = [];
                const jdl = [];
                const img = [];
                const des = [];
                const lnk = [];
                const red = [];
                const vt = [];
                const limk = 'https://www.wattpad.com/'
                $('div.cover.cover-xs.pull-left').each(function (a, b) {
                    img.push($(b).find('img').attr('src'))
                })
                $('div.content > h5').each(function (a, b) {
                    jdl.push($(b).text().trim())
                })
                $('div.content > p').each(function (a, b) {
                    des.push($(b).text().trim())
                })
                $('#results-stories > div > ul > li').each(function (a, b) {
                    lnk.push(limk + $(b).find('a.on-result').attr('data-id'))
                })
                $('div.content > div > small.reads').each(function (a, b) {
                    red.push($(b).text())
                })
                $('div.content > div > small.votes').each(function (a, b) {
                    vt.push($(b).text())
                })
                for (let i = 0; i < lnk.length; i++) {
                    result.push({
                        title: jdl[i],
                        desc: des[i],
                        vote: vt[i],
                        reads: red[i],
                        image: img[i],
                        link: lnk[i]
                    })
                    resolve(result)
                }
            })
            .catch({ message: 'err' })
    })
}

function playstore(name) {
    return new Promise((resolve, reject) => {
        axios.get('https://play.google.com/store/search?q=' + name + '&c=apps')
            .then(({ data }) => {
                const $ = cheerio.load(data)
                let ln = [];
                let nm = [];
                let dv = [];
                let lm = [];
                const result = [];
                $('div.wXUyZd > a').each(function (a, b) {
                    const link = 'https://play.google.com' + $(b).attr('href')
                    ln.push(link);
                })
                $('div.b8cIId.ReQCgd.Q9MA7b > a > div').each(function (d, e) {
                    const name = $(e).text().trim()
                    nm.push(name);
                })
                $('div.b8cIId.ReQCgd.KoLSrc > a > div').each(function (f, g) {
                    const dev = $(g).text().trim();
                    dv.push(dev)
                })
                $('div.b8cIId.ReQCgd.KoLSrc > a').each(function (h, i) {
                    const limk = 'https://play.google.com' + $(i).attr('href');
                    lm.push(limk);
                })
                for (let i = 0; i < ln.length; i++) {
                    result.push({
                        name: nm[i],
                        link: ln[i],
                        developer: dv[i],
                        link_dev: lm[i]
                    })
                }
                resolve(result)
            })
            .catch(reject)
    })
}

function linkwa(nama) {
    return new Promise((resolve, reject) => {
        axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=' + nama + '&searchby=name')
            .then(({ data }) => {
                const $ = cheerio.load(data);
                const result = [];
                const lnk = [];
                const nm = [];
                $('div.wa-chat-title-container').each(function (a, b) {
                    const limk = $(b).find('a').attr('href');
                    lnk.push(limk)
                })
                $('div.wa-chat-title-text').each(function (c, d) {
                    const name = $(d).text();
                    nm.push(name)
                })
                for (let i = 0; i < lnk.length; i++) {
                    result.push({
                        nama: nm[i].split('. ')[1],
                        link: lnk[i].split('?')[0]
                    })
                }
                resolve(result)
            })
            .catch(reject)
    })
}

function porno() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
            .then((res) => {
                const $ = cheerio.load(res.data)
                const hasil = {}
                hasil.title = $('article > h1').text()
                hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
                hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
                hasil.desc = $('article > div.intro').text()
                hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
                hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
                hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
                hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
                hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
                hasil.tags = $('article > div.post-tags').text()
                hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
                resolve(hasil)
            })
    })
}

function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/' + page)
            .then((data) => {
                const $ = cheerio.load(data.data)
                const hasil = []
                $('#primary > div > div > ul > li > article').each(function (a, b) {
                    hasil.push({
                        title: $(b).find('header > h2').text(),
                        link: $(b).find('header > h2 > a').attr('href'),
                        category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                        share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                        views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                        type: $(b).find('source').attr('type') || 'image/jpeg',
                        video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                        video_2: $(b).find('video > a').attr('href') || ''
                    })
                })
                resolve(hasil)
            })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/' + page)
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('div.kotodama-list').each(function (l, h) {
                    hasil.push({
                        link: $(h).find('a').attr('href'),
                        gambar: $(h).find('img').attr('data-src'),
                        karakter: $(h).find('div.char-name').text().trim(),
                        anime: $(h).find('div.anime-title').text().trim(),
                        episode: $(h).find('div.meta').text(),
                        up_at: $(h).find('small.meta').text(),
                        quotes: $(h).find('div.quote').text().trim()
                    })
                })
                resolve(hasil)
            }).catch(reject)
    })
}

module.exports = {
    ttdownloader,
    pinterest,
    pinterestdl,
    wallpaperflare,
    tebakgambar,
    wattpad,
    joox,
    playstore,
    lyrics,
    linkwa,
    wikimedia,
    porno,
    hentai,
    quotesAnime
}