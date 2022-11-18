module.exports = {
	name: "messageCreate",
	once: false,
	execute(message) {
		if (message.author.bot) return; // ignore messages from bots
		const trigger = "gm"; // message content to look out for.
		
		if (message.content.startsWith(trigger)){ //function to fire when a message is heard.
			
		const t = message.createdAt;
			const h = t.getHours();
			const m = t.getMinutes();
			const hstr = '' + h;
			const mstr = '' + m;
		const time = hstr.padStart(2, '0') +":"+ mstr.padStart(2, '0') + " GMT";
		const user = message.author.tag;
    setTimeout(() => message.channel.send(`gm`), 500);
		console.log(`gm triggered by ${user} at ${time}`);
  };
	}
};