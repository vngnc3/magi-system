const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('magihelp')
		.setDescription("List all available commands"),
	async execute(interaction) {
		const cmds = require(`../contents/commandsList.js`);
		const tick = "```";
		const css = "```css"
		await interaction.reply(`${tick}diff\n+ MAGI System\n+ Here are the list of available commands:\n\r\r${cmds}\n\r\r- Start typing a slash command to see command description.${tick}`);
	},
};