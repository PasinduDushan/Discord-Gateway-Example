# This code has been archieved

# Discord Gateway Example
> You can connect with discord gateway and make requests to it using this code. This code contains most basic structures that you can use.

This code use latest version of discord Gateway (v9) and latest version of discord API (v9). This code can be updated anytime. Video tutorial of this code will be added soon

![](https://thetechyinfo.com/wp-content/uploads/2021/05/How-to-Fix-Discord-not-Detecting-Mic-696x392.jpg)

## Setup for code

1. Clone this repository.
```bash
git clone https://github.com/PasinduDushan/Discord-Gateway-Example
```
2. Add your bot TOKEN inside the ```.env``` file.
3. Open up your terminal, Go to file directory and type ```npm i```.
4. Type ```npm start``` in the terminal.

After you enter the ```npm start``` command, you should be connected to the discord gateway. You have to get a responce like this when you connect to the gateway.

```bash
{
  t: null,
  s: null,
  op: 10,
  d: {
    heartbeat_interval: 41250,
    _trace: [ '["gateway-prd-main-4xgr",{"micros":0.0}]' ]
  }
}
```

After the above responce you will get bunch of more responces like ```READY, GUILD_CREATE```.

## More details

This is the base knowledge that you should have to interact with discord Gateway and discord API. This process is the actual thing happening inside packages like ```discord.js``` under the hood. Connecting to the discord gateway is really easy but requesting is kind of complex. You can learn how to send requests to discord gateway and receive requests from it. This code contains how you can send an API request to the discord gateway, receieve it and POST it to discord chat. Also because this code written in the latest version of discord API, So you can create slash commands and buttons also.

This is basically a DISCORD BOT made without any packages like ```discord.js```, Made just using discord gateway and discord API.

## Developer Details

Discord - CoolDudeBonker#6655 <br>
Github - [PasinduDushan](https://github.com/PasinduDushan)

If you have any questions about this code or if you want support for running your own instance, I'll be really happy to help you. You can contact me via Discord at any time.

## Contributing

1. Fork & clone the repository, and make sure you're on the **master** branch
2. Run `npm ci`
3. Code your magic
4. Run `npm test` to run ESLint and ensure any JSDoc changes are valid
5. [Submit a pull request](https://github.com/PasinduDushan/Discord-Gateway-Example/compare)
