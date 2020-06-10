const {Command} = require("../../lib");
const ms = require("ms");

module.exports = class Mute extends Command {
	constructor() {
		super("mute", {
			description: "Mutes a Member",
			example: `!mute Chaos_Phoe 50s`,
			usage: `!mute {member} {time} [reason]`,
			userPermissions: "MANAGE_ROLES",
			botPermissions: "MANAGE_ROLES",
		});
	}

	async run(message, args) {
		if (!args[0])
			return message.sm(":no_entry: Provide a Member to mute!", {type: "error"});
		if (!args[1] || args[1].includes("-"))
			return message.sm(":no_entry: Provide a valid mute time!", {type: "error"});

		const member = await message.findMember(args[0]);
		const time = isNaN(args[1]) ? ms(args[1]) : parseInt(args[1]);
		const reason = args.slice(2).join(" ") || "No Reason";

		if (!member)
			return message.sm(":no_entry: Couldn't find that member!", {type: "error"});
		if (!time || isNaN(time) || time <= 0)
			return message.sm(":no_entry: Invalid mute time! Example: !mute Chaos 5m", {type: "error"});

		let muteRole = message.guild.roles.cache.find((role) => role.name.toLowerCase() === "muted");
 if(!muteRole){
   try{
	muteRole = await message.guild.roles.create({
		data: {
			name: "muted",
			color: "BLUE",
			permissions: []
		}
	});
	 message.guild.channels.cache.forEach(async (channel, id) => {
	   await message.channel.createOverwrite(muteRole, {
		 SEND_MESSAGES: false,
		 ADD_REACTIONS: false
	   });
	 });
   }catch(e){
	 console.log(e.stack);
   }
 }
 
  try {
 	member.db.set("muteTime", time);
 	message.guild.db.increaseCase();
 	member.db.save();
 	member.roles.add(muteRole);
  }catch(err)
  {
			console.log("Error with Mute command")
			console.log(err)
  }


		message.sm(`:white_check_mark: Successfully muted ${member} for ${args[1]}`);
		this.bot.emit("logs", "mute", {message, reason, member, time});
	};
};