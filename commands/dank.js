const { hyperlink, SlashCommandBuilder } = require('@discordjs/builders');
const axios = require ('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dank')
		.setDescription("dank memes"),
	async execute(interaction) {
		// API request
		axios
      .get('https://meme-api.herokuapp.com/gimme/dankmemes')
      .then((res) => {
				const data = res.data.preview;
				const len = data.length - 1;
				const img = hyperlink('danky', data[len]);
				console.log('r/dankmemes API triggered. Sauce:', res.data.postLink, 'Quality: ', len);
				return interaction.reply(`${img}`);
			})
			.catch((err) => {
        console.error('ERR:', err)
        var error = err;
        message.channel.send(`Error: ${error}`)				
			})
	}
}