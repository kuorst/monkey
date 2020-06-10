const {Command} = require("../../lib");


module.exports = class Skip extends Command {
    constructor() {
        super("Skip", {
            description: "Skip a song",
            usage: "skip",
            aliases: ["next"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

