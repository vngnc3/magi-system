  
  /////////////////////
  //                 //
  //  |||  |||  |||  //
  //  |||  |||  |||  //
  //  |||  |||  |||  //    Archillect.com
  //  |||  |||  |||  //    The ocular engine.
  //  |||  |||  |||  //
  //  |||  |||  |||  //
  //                 //
  /////////////////////

const { SlashCommandBuilder } = require('@discordjs/builders');

  const archilink = "https://archillect.com/"
  const epoch = 1649268000 //sync unix time in sec
  const archie = 376382    //with corresponding archillect post

module.exports = {
	data: new SlashCommandBuilder()
		.setName('archillect')
		.setDescription('Returns an Archillect post')
		.addStringOption(option =>
		option.setName('index')
			.setDescription('Pick a specific Archillect post by index')
			.setRequired(false)),
	
	async execute(interaction) {
		const index = interaction.options.getString('index');
		const offset = Math.floor((Math.floor(Date.now() / 1000)-(epoch))/720)+archie;
		const rng = Math.floor(Math.random() * offset);
		
		if (index === null){
    	f = archilink+rng;
		} 
		else {
			f = archilink+index;
		}
		return interaction.reply(`${f}`);
	}
};