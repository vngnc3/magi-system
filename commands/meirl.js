const { hyperlink, SlashCommandBuilder } = require('@discordjs/builders');
const axios = require ('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meirl')
		.setDescription("me irl"),
	async execute(interaction) {
		// API request
		axios
      .get('https://meme-api.herokuapp.com/gimme/me_irl')
      .then((res) => {
				const data = res.data.preview;
				const len = data.length - 1;
				const img = hyperlink('me irl', data[len]);
				console.log('me_irl API triggered. Sauce:', res.data.postLink, 'Quality: ', len);
				return interaction.reply(`${img}`);
			})
			.catch((err) => {
        console.error('ERR:', err)
        var error = err;
        message.channel.send(`Error: ${error}`)				
			})
	}
}