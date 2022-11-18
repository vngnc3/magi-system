module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`MAGI System is online as ${client.user.tag}.`);
		let activities = [`Melchior-Magi 1`, `Balthasar-Magi 2`, `Casper-Magi 3`],i = 0;
		setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,	  {type:"WATCHING",url:"https://www.youtube.com/watch?v=BRmtgCKCLAA"  }), 8000)
	},
};