const {Command} = require("../../lib");

module.exports = class Lyrics extends Command {
    constructor() {
        super("lyrics", {
            description: "Shows lyrics of a song you choose",
            usage: "`Lyrics <songname>`",
            aliases: ["lyrics"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

