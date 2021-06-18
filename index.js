require('dotenv').config()
const WebSocket = require('ws')
const ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json')
const fetch = require('node-fetch')
let interval = 0;

token = process.env.TOKEN
payload = {
    op: 2,
    d: {
        token: token,
        intents: 513,
        properties: {
            $os: 'linux',
            $browser: 'chrome',
            $device: 'chrome'
        },
        presence: {
            activities: [{
              name: "Cards Against Humanity",
              type: 0
            }],
            status: "dnd",
            since: 91879201,
            afk: false
        },
    }
}

ws.on('open', function open(data) {
    ws.send(JSON.stringify(payload))
})

ws.addEventListener('message', function(event) {
    const payload = event.data
    console.log(JSON.parse(payload.toString()))
}) 

ws.on('message', function incoming(data) {
    let payload = JSON.parse(data)
    const { t, event, op, d } = payload;

    switch (op) {
        case 10:
            const { heartbeat_interval } = d;
            interval = heartbeat(heartbeat_interval)
            break;
    }
    switch (t) {
        case "READY":
            if(t === "READY"){
                console.log('Bot is online!')
            }
        break;
        case "MESSAGE_CREATE":
         const command = d.content
            if(command === 'help'){
                let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages`;
                var requestOptions = {
                    method: 'POST',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
            body: JSON.stringify({
                "content": "Hello, World!",
                "tts": false,
                "embeds": [{
                   "title": "Hello World",
                   "description": "Embed Message"
                }]
            })
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);

            return
        }
        if(command === 'react'){
            let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages/${d.id}/reactions/%E2%9C%85/@me`;
                var requestOptions = {
                    method: 'PUT',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
            return
        }
        if(command === 'create'){
            let URL = `https://discord.com/api/v9/guilds/${d.guild_id}/channels`;
                var requestOptions = {
                    method: 'POST',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": "Hiiiii",
                    "type": 2,
                    "topic": "CrazyBotBoy",
                    "bitrate": 64000,
                    "user_limit": 10,
                })
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
            return
        }
        if(command === 'pin'){
            let URL = `https://discord.com/api/v9/channels/${d.channel_id}/pins/${d.id}`;
                var requestOptions = {
                    method: 'PUT',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
            return
        }
        if(command === 'delete'){
            let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages/${d.id}`;
                var requestOptions = {
                    method: 'DELETE',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
              return
        }
        if(command === 'slash'){
            let URL = `https://discord.com/api/v9/applications/786125193394651166/guilds/829587314924847174/commands`;
                var requestOptions = {
                    method: 'POST',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": "slash-lol1",
                    "description": "My first slash command through gateway",
                    "options": [
                        {
                            "name": "first-slash1",
                            "description": "This is an option for slash-lol",
                            "type": 3,
                            "required": true,
                            "choices": [
                                {
                                "name": "lol1",
                                "value": "LOL"
                                }
                            ]
                        }
                    ]
                })
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
            return
        }
        break;
        case "INTERACTION_CREATE":
            let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;
                var requestOptions = {
                    method: 'POST',
                    headers: {
                     "Authorization": `Bot ${token}`,
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "type": 4,
                    "data": {
                        "content": "Hello",
                    }
                })
        };

        fetch(URL, requestOptions)
              .then(response => response.text())
              .then(console.log)
              .catch(console.error);
              return 
            break
    }
})

const heartbeat = (ms) => {
    return setInterval(() => {
        ws.send(JSON.stringify({op: 2, d: null}))
    }, ms)
}