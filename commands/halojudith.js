// dimas nakal

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('halojudith')
		.setDescription("Gives a random track from ramdhandim"),
	async execute(interaction) {
		const c0smicbliss = require('../contents/cosmicbliss.js');
		const ramdhan = c0smicbliss[Math.floor(Math.random() * c0smicbliss.length)];
    await interaction.reply(`${ramdhan}`);
	}
}