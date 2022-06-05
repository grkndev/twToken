const fetch = require("node-fetch");
const ayarlar = require("./ayarlar.json");

fetch(`https://id.twitch.tv/oauth2/token?client_id=${ayarlar.clientid}&client_secret=${ayarlar.secret}&grant_type=client_credentials`, {
    method: "POST"
}).then(res => {
    res.json().then(response => { console.log(response); })
})


