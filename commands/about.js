const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription("About MAGI System"),
	async execute(interaction) {
		const AboutMagi = require(`../contents/about.js`);
    await interaction.reply(`${AboutMagi}`);
	}
}