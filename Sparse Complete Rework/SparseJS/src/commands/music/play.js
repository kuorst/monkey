const {Command} = require("../../lib");


module.exports = class Play extends Command {
    constructor() {
        super("play", {
            description: "Play Music",
            usage: "play `<song name or url>`",
            aliases: ["Play"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

