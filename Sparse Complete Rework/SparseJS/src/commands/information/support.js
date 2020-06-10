  const {Command} = require("../../lib");

module.exports = class Support extends Command {
    constructor() {
        super("support", {
            description: `shows the support server information!`,
            usage: "!support",
            aliases: ["support"],
          
        })
    }

    run(message, args) {
        const supportEmbed = message.embed()
        
            .addField('**Our Support Options**', `**[Support Server](https://discord.gg/UURNHD) | [Website](https://sparsebot.io)**  `)
            
            message.channel.send(supportEmbed)
    }

};