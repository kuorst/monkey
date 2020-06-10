const {Command} = require("../../lib");


module.exports = class Bands extends Command {
    constructor() {
        super("bands", {
            description: "Can edit the gain of the music | Premium",
            usage: "bands `<band>` `<freq>`",
            aliases: ["bands"],
        });
    }

    async run(message, args) {
// nothing needed here... Music is handled thru discord.py
    }
};

