const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Echoes your input')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('Input to be echoed')
			.setRequired(true)),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`${value}`);
		return interaction.reply('No option was provided!');
	},
};