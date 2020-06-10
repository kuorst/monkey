const {Command} = require("../../lib");


module.exports = class Song extends Command {
    constructor() {
        super("song", {
            description: "shows the current song information, (Youtube songs only)",
            usage: "song",
            aliases: ["song"],
        });
    }


    async run(message, args) {
        // nothing needed here... Music is handled thru discord.py
            }
};

