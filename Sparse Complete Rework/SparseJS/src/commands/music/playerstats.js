const {Command} = require("../../lib");


module.exports = class PlayerStats extends Command {
    constructor() {
        super("playerstats", {
            description: "shows statistics of the server your playing from",
            usage: "`playerstats`",
            aliases: ["stats"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

