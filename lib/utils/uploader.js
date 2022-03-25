const axios = require('axios')
const BodyForm = require('form-data')
const { fromBuffer, fromStream } = require('file-type')
const fetch = require('node-fetch')
const fs = require('fs')
const cheerio = require('cheerio')
const { getRandom } = require('../myfunction')

/**
 * Telegraph file uploader
 * @param {Buffer} input_Buffer for upload file in "https://telegra.ph"
 * @returns 
 */

function TelegraPh(input_Buffer) {
	return new Promise(async (resolve, reject) => {
		try {
			const form = new BodyForm();
			const { ext } = await fromBuffer(input_Buffer)
			form.append("file", input_Buffer, getRandom(`.${ext}`))
			const { data } = await axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			if (data.error) throw new Error(data.error)
			return resolve("https://telegra.ph" + data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

/**
 * Uguu.se file uploader
 * @param {Buffer} input_Buffer for get and upload file in https://uguu.se
 * @returns 
 */

async function UploadFileUgu(input_Buffer) {
	return new Promise(async (resolve, reject) => {
		const form = new BodyForm();
		const { ext } = await fromBuffer(input_Buffer)
		form.append("files[]", input_Buffer, getRandom(`.${ext}`))
		await axios({
			url: "https://uguu.se/upload.php",
			method: "POST",
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				...form.getHeaders()
			},
			data: form
		}).then(({ data }) => {
			resolve(data.files[0])
		}).catch((err) => reject(err))
	})
}

/**
 * file.IO file uploader
 * @param {Buffer} buffer for get and upload file in "https://file.io"
 * @param {string} options 
 * @returns 
 */

async function fileIO(buffer, options = {}) {
	const { ext } = await fromBuffer(buffer) || options.ext
	const form = new BodyForm()
	form.append('file', buffer, getRandom('.' + ext))
	const res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
		method: 'POST',
		body: form
	})
	const json = await res.json()
	if (!json.success) throw json
	return json
}

module.exports = { 
	TelegraPh, 
	UploadFileUgu,
	fileIO
}
