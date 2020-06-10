const {Command} = require("../../lib");


module.exports = class Shuffle extends Command {
    constructor() {
        super("Shuffle", {
            description: "This command will shuffle the songs in queue",
            usage: "`shuffle`",
            aliases: ["shuffle"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

