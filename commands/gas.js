const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require ('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gas')
		.setDescription("Ethereum gas price estimation"),
	async execute(interaction) {								
			axios
      .get('https://etherchain.org/api/gasnow')
      .then((res) => {
        console.log('Etherchain API triggered. Status:', res.data.code)
        var gwei = 1000000000;
        var rapid = Math.floor(Number(res.data.data.rapid)/gwei);
        var fast = Math.floor(Number(res.data.data.fast)/gwei);
        var standard = Math.floor(Number(res.data.data.standard)/gwei);
        var slow = Math.floor(Number(res.data.data.slow)/gwei);	
				
		const embedded = new MessageEmbed()
		.setColor('#c3b5fa')
		.setTitle('Ethereum gas price estimatation')
		.setURL('https://etherchain.org/tools/gasnow')
		.setAuthor({ name: 'MAGI System', iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251510929477652/MAGI_icon_000.png', url: 'https://twitter.com/m3m0rydump' })
		.setThumbnail('https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png')
		.addFields(
			{ name: `${slow} gwei`, value: `🐢 Slow`, inline: true },
			{ name: `${standard} gwei`, value: `✅ Average`, inline: true },
			{ name: `${fast} gwei`, value: `🚀 Fast`, inline: true },
		)
		.setTimestamp()
		.setFooter({ text: 'etherchain.org', iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png' });				
				
				return interaction.reply({ embeds: [embedded] });
			})
			.catch((err) => {
        console.error('ERR:', err)
        var error = err;
        message.channel.send(`Error: ${error}`)				
			})
	}
}