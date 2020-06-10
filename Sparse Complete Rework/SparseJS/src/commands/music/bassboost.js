const {Command} = require("../../lib");


module.exports = class BassBoost extends Command {
    constructor() {
        super("bassboost", {
            description: "Bassboost a song playing",
            usage: "bassboost or bass `0`, `negative`, `1`, `2`, `3`, `4`, `5`",
            aliases: ["bass"],
        });
    }

 
    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

