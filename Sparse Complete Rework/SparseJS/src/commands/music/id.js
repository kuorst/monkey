const {Command} = require("../../lib");


module.exports = class ID extends Command {
    constructor() {
        super("id", {
            description: "Shows the music source! And its unique id",
            usage: "`id`",
            aliases: ["id"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

