const {Command} = require("../../lib");
const {MessageAttachment} = require("discord.js");
const fetch = require("node-fetch");
const randomPuppy = require("random-puppy");

module.exports = class Invite extends Command {
    constructor() {
        super("invite", {
            description: "invite me to your server yeah!",
            usage: "!invite",
            aliases: ["inv"],
            cooldown: 5000
        });
    }

    async run(message, args) {

        const invite = message.embed()
        
        .setDescription( `**[Invite me](https://discord.com/api/oauth2/authorize?client_id=717700155469463590&permissions=8&scope=bot) | [Top.gg](https://top.gg)**`)
        
        message.channel.send(invite)
    
    }
};