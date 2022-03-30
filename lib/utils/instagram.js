// Instagram feature media downloader
const fetch = require('node-fetch')
const instatouch = require('instatouch')

// OPTIONS SESSION FOR INSTATOUCH
const options = {
    count: 0,
    mediaType: 'all',
    timeout: 0,
    session: "sessionid=41397968341:m4b9a9NtMEXXH1:2"   // You can get instagram session to work from "Auth"
}

// COOKIE SESSION AND BROWSER
const defaultHeaders = {
    'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'x-ig-app-id': '936619743392459',
    'x-ig-www-claim': 'hmac.AR0A6WzcCoXWstKAUuy1gRbCQFUs8FoZCp3ap2UMk_KQNBSH',
    'user-agent': 'Instagram 9.5.1 (iPhone9,2; iOS 10_0_2; en_US; en-US; scale=2.61; 1080x1920) AppleWebKit/420+',
    'host': 'i.instagram.com'
}

const getHeaders = (sessionid, userid) => {
    return Object.assign(defaultHeaders, {
        // cookie: `sessionid=${sessionid}; ds_user_id=${userid}`
        cookie: `${sessionid}; ds_user_id=${userid}`
    })
}


// instagram function

/**
 * // Instagram stalk user 
 * @param {string} username instagram stalk for see profile
 * @returns For check information
 */

const getUserProfile = (username) => new Promise(async (resolve, reject) => {
    instatouch.getUserMeta(username, options)
        .then(async (getProfile) => {
            resolve({
                id: getProfile.graphql.user.id,
                profile_pic: getProfile.graphql.user.profile_pic_url_hd,
                username: '@' + getProfile.graphql.user.username,
                fullname: getProfile.graphql.user.full_name,
                private: getProfile.graphql.user.is_private,
                verified: getProfile.graphql.user.is_verified,
                biography: getProfile.graphql.user.biography,
                followers: getProfile.graphql.user.edge_followed_by.count,
                following: getProfile.graphql.user.edge_follow.count,
                profile_url: `https://www.instagram.com/${getProfile.graphql.user.username}/`,
                mediadata: {
                    feed_totally: getProfile.graphql.user.edge_owner_to_timeline_media.count,
                    highlight_totally: getProfile.graphql.user.is_private ? 'is_private' : getProfile.graphql.user.highlight_reel_count,
                    external_link: getProfile.graphql.user.external_url ? getProfile.graphql.user.external_url : 'No link',
                },
                activity: {
                    is_business_count: getProfile.graphql.user.is_business_account,
                    is_profesional_count: getProfile.graphql.user.is_professional_account,
                    conneted_fb: getProfile.graphql.user.connected_fb_page ? true : false,
                    videotimeline: getProfile.graphql.user.edge_felix_video_timeline.count,
                    timeline: getProfile.graphql.user.edge_owner_to_timeline_media.count,
                    savedmedia: getProfile.graphql.user.edge_saved_media.count,
                    collections: getProfile.graphql.user.edge_media_collections.count
                }
            });
        }).catch((err) => {
            reject(err)
        })
})

/**
 * // Instagram Searching
 * @param {string} username To search instagram Username 
 * @returns Search instagram user
 */

const getSearchingUserMeta = async(username) => new Promise((resolve, reject) => {
    fetch(`https://i.instagram.com/api/v1/users/search/?is_typehead=true&q=${username}`, {
        headers: getHeaders(options.session)
    })
    .then(response => response.json())
    .then(async(data) => {
        const list_username = new Array();
        if (data.num_result == 0) {
            messageInfo = { message: 'This user is not found of results' }
        }
        for (let getListUser of data.users) {
            const response_info = await fetch(`https://i.instagram.com/api/v1/users/${getListUser.pk}/info/`, {
                headers: getHeaders(options.session, getListUser.pk)
            })
            const getInfoUsers = await response_info.json();
            list_username.push({
                id: getListUser.pk,
                profile_pic: getInfoUsers.user.hd_profile_pic_url_info.url,
                username: getListUser.username,
                fullname: getListUser.full_name,
                is_private: getListUser.is_private,
                is_verified: getListUser.is_verified,
                biography: getInfoUsers.user.biography,
                followers: getInfoUsers.user.follower_count,
                following: getInfoUsers.user.following_count,
                media_count: getInfoUsers.user.media_count,
                is_live_streaming: getListUser.live_broadcast_id ? true : false
            })
        }
        resolve(list_username)
    })
    .catch(err => {
        reject({ status: 403, response: err, message: 'Username is not found to search.' })
    })
})

/**
 * // Instagram stories
 * @param {string} username To get instagram stories with Username
 * @returns {string} Media story Downloads
 */

const getStories = (username) => new Promise(async (resolve, reject) => {
    instatouch.getUserMeta(username, options)
        .then(async (getProfile) => {
            const config_headers = {
                headers: getHeaders(options.session, getProfile.graphql.user.id)
            }
            fetch(`https://i.instagram.com/api/v1/feed/user/${getProfile.graphql.user.id}/story/`, config_headers)
                .then(response => response.json())
                .then(async (get_stories) => {
                    const list_stories = new Array();
                    const isNewStories = getProfile.graphql.user.is_private || get_stories.reel == null
                    if (getProfile.graphql.user.is_private == true) {
                        messageInfo = { message: 'This account is private!' }
                    } else if (get_stories.reel == null) {
                        messageInfo = { message: 'No stories!' }
                    } else {
                        for (let stories of get_stories.reel.items) {
                            // const media_type = Object.keys(stories)
                            if (!stories.video_versions) {
                                type = 'image'
                                fileType = 'jpg'
                                media_stories = stories.image_versions2.candidates[0].url
                            } else {
                                type = 'video'
                                fileType = 'mp4'
                                media_stories = stories.video_versions[0].url
                            }
                            list_stories.push({
                                type,
                                fileType,
                                previewUrl: stories.image_versions2.candidates[0].url,
                                url: media_stories,
                            })
                        }
                    }
                    resolve({
                        owner: {
                            id: getProfile.graphql.user.id,
                            profile_pic: getProfile.graphql.user.profile_pic_url_hd,
                            username: '@' + getProfile.graphql.user.username,
                            fullname: getProfile.graphql.user.full_name,
                            biography: getProfile.graphql.user.biography,
                            followers: getProfile.graphql.user.edge_followed_by.count,
                            following: getProfile.graphql.user.edge_follow.count,
                        },
                        totally: list_stories.length ? list_stories.length : 0,
                        stories: isNewStories ? messageInfo : list_stories
                    })
                })
                .catch(err => {
                    reject({ status: 403, response: err, message: 'Server failed, maybe this server is incorrect!.' })
                })
        })
        .catch(err => {
            reject({ status: 413, response: err, message: 'Username is not found' })
        })
})

/**
 * // Instagram feed user downloader
 * @param {string} url for get media instagram Posts and Reels
 * @returns Feed Downloads
 */

const getFeedUser = (url) => new Promise(async (resolve, reject) => {
    try {
        const igRegex = /http(?:s):\/\/(www.|)instagram.com\/(p|reel)\/([0-9a-z._\-+]+|)\/?([0-9A-Za-z._\-+]+)/.exec(url)
        const getFeedID = igRegex[4]
        const getPostMeta = await instatouch.getPostMeta(`https://www.instagram.com/p/${getFeedID}`, options)
        const mediaData = getPostMeta.items[0];
        // FEED & REEL DOWNLOADER
        const ig = new Array();
        const feed_id = mediaData.pk;
        // const thumbimg = mediaData.display_url;
        const likes = mediaData.like_count;
        const comment = mediaData.comment_count;
        const comment_disable = mediaData.comments_disabled;
        const usernameig = mediaData.user.username;
        if (!mediaData.carousel_media) {
            ig.push({
                type: mediaData.video_versions ? 'video' : 'image',
                url: mediaData.video_versions ? mediaData.video_versions[0].url : mediaData.image_versions2.candidates[0].url,
                previewUrl: mediaData.image_versions2.candidates[0].url
            })
        } else {
            for (let i = 0; i < mediaData.carousel_media.length; i++) {
                ig.push({
                    type: mediaData.carousel_media[i].video_versions ? 'video' : 'image',
                    url: mediaData.carousel_media[i].video_versions ? mediaData.carousel_media[i].video_versions[0].url : mediaData.carousel_media[i].image_versions2.candidates[0].url,
                    previewUrl: mediaData.carousel_media[i].image_versions2.candidates[0].url
                })
            }
        }
        instatouch.getUserMeta(usernameig, options)
            .then((iguser) => {
                resolve({
                    owner: {
                        id: iguser.graphql.user.id,    // STALK USERS
                        profile_pic: iguser.graphql.user.profile_pic_url_hd,
                        username: '@' + iguser.graphql.user.username,
                        fullname: iguser.graphql.user.full_name,
                        biography: iguser.graphql.user.biography,
                        followers: iguser.graphql.user.edge_followed_by.count,
                        following: iguser.graphql.user.edge_follow.count,
                    },
                    id: feed_id,
                    shortcode: mediaData.code,
                    likes: likes,
                    caption: mediaData.caption.text,
                    comments: comment_disable ? 'disable' : comment,
                    totally: ig.length,
                    display_url: ig
                })
            }).catch(err => {
                reject({ status: 413, response: err, message: 'Username is not found' })
            })
    } catch (err) {
        reject({ status: 403, response: err, message: 'Maybe this code is not found' })
    }
})


module.exports = {
    getUserProfile,
    getSearchingUserMeta,
    getStories,
    getFeedUser
}