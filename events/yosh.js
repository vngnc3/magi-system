module.exports = {
	name: "messageCreate",
	once: false,
	execute(message) {
		if (message.author.bot) return; // ignore messages from bots.
		const trigger = "!yosh"; // message content to look out for.
		if (message.content.startsWith(trigger)){ //function to fire when a message is heard.
		const Yosh = require(`../contents/yosh.js`);
    setTimeout(() => message.reply(Yosh), 900);
  };
	}
};