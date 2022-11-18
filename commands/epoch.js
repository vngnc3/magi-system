const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('epoch')
		.setDescription("Shows current epoch since Unix timestamp"),
	async execute(interaction) {
		const s = Math.floor(Date.now() / 1000);
    await interaction.reply(`${s} second since Unix timestamp`);
	}
}