const cheerio = require('cheerio');
const { default: Axios } = require('axios');

const getHerolist = () => new Promise((resolve, reject) => {
    Axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let data_hero = []
            let url = []
            $('div > div > span > span > a').get().map((result) => {
                const name = decodeURIComponent($(result).attr('href').replace('/wiki/', ''))
                const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                data_hero.push(name)
                url.push(urln)
            })
            resolve({ status: 200, hero: data_hero })
        }).catch((e) => reject({ status: 404, message: e.message }))
})

const getWikiDetails = async (name) => new Promise((resolve, reject) => {
    var splitStr = name.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    const que = splitStr.join(' ')
    Axios.get('https://mobile-legends.fandom.com/wiki/' + que)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let mw = []
            let attrib = []
            let skill = []
            // const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text()
            const name = $('tbody').find('td > span > b').text()
            $('.mw-headline').get().map((res) => {
                const mwna = $(res).text()
                mw.push(mwna)
            })
            $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                const haz = $(rest).text().replace(/\n/g, '')
                attrib.push(haz)
            })
            $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                skill.push($(rest).attr('style').replace('width:', '').replace(';', ''))
            })
            Axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let pre = []
                    $('#mw-content-text > div > p').get().map((rest) => {
                        pre.push($(rest).text())
                    })
                    const story = pre.slice(3).join('\n')
                    const items = []
                    const character = []
                    $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                        character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                    })
                    $('#mw-content-text > div > aside > div').get().map((rest) => {
                        items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                    })
                    // const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                    const getImage = $('#mw-content-text > div > aside > figure > a > img').attr('src').replace("281", "1033").trim()
                    const chara = character.slice(0, 2)
                    const result = {
                        status: 200,
                        creator: "@cakrayp_jhn",
                        result: {
                            website: 'https://mobile-legends.fandom.com/wiki/' + que,
                            hero_name: name + ` ( ${mw[0].replace('CV:', ' CV:')} )`,
                            hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                            entrance_quotes: attrib[2].replace('Entrance Quotes', '').replace('\n', ''),
                            image: getImage,
                            items: items,
                            character: {
                                chara
                            },
                            attributes: {
                                movement_speed: attrib[21].replace('● Movement SPD', ''),
                                physical_attack: attrib[16].replace('● Physical Attack', ''),
                                magic_power: attrib[17].replace('● Magic Power', ''),
                                attack_speed: attrib[20].replace('● Attack Speed', ''),
                                physical_defense: attrib[18].replace('● Physical Defense', ''),
                                magic_defense: attrib[19].replace('● Magic Defense', ''),
                                // basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate', ''),
                                hp: attrib[12].replace('● HP', ''),
                                mana: attrib[13].replace('● Mana', ''),
                                // ability_crit_rate: attrib[21].replace('● Ability Crit Rate', ''),
                                hp_regen: attrib[14].replace('● HP Regen', ''),
                                mana_regen: attrib[15].replace('● Mana  Regen', '')
                            },
                            price: {
                                battle_point: mw[1].split('|')[0].replace(/ /g, '').trim(),
                                diamond: mw[1].split('|')[1].replace(/ /g, ''),
                                hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g, '') : 'none'
                            },
                            role: mw[2],
                            skill: {
                                durability: skill[0],
                                offense: skill[1],
                                skill_effects: skill[2],
                                difficulty: skill[3]
                            },
                            speciality: mw[3],
                            laning_recommendation: mw[4],
                            release_date: mw[5],
                            background_story: story.trim()
                        }
                    }
                    resolve(result)
                }).catch((e) => reject({ status: 404, message: e.message }))
        }).catch((e) => reject({ status: 404, message: e.message }))
})

module.exports = {
    getHerolist,
    getWikiDetails
};