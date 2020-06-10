const {Command} = require("../../lib");


module.exports = class Queue extends Command {
    constructor() {
        super("queue", {
            description: "This command will show the current music queued of the guild",
            usage: "`queue`",
            aliases: ["que"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

