const {Command} = require("../../lib");

module.exports = class Ban extends Command {
	constructor() {
		super("ban", {
			description: "Bans a member",
			usage: `!ban {member} [reason]`,
			userPermissions: ["BAN_MEMBERS"],
			botPermissions: ["BAN_MEMBERS"],
			cooldown: 5000
		});
	}

	async run(message, args) {
		if (!args[0]) return message.sm(":no_entry: Mention a Member to ban!", {type: "error"}).then(msg => msg.delete({timeout: 5000}));
      if(!message.member.hasPermission("BAN_MEMBERS", { checkAdmin: true, checkOwner: true }))
        return message.sm(":no_entry: You dont have perms for that!", { type: "error"})
		const member = await message.findMember(args[0]);
		const reason = args.slice(1).join(" ") || "No Reason";

		if (!member) return message.sm(":no_entry: Couldn't find that member!", {type: "error"}).then(msg => msg.delete({timeout: 50000}));
		if (member.roles.highest.position > message.member.roles.highest.position && message.member.id !== message.guild.owner.id)
			return message.sm(":no_entry: You can't ban that Member!", {type: "error"});

		member.ban({reason});
		message.guild.db.increaseCase();
		message.sm(`:white_check_mark: Successfully banned ${member}`).then(msg => msg.delete({timeout: 5000}));

		this.bot.emit("logs", "ban", {reason, member, message});
	}
};

