const { hyperlink, SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('greed')
		.setDescription("Shows cryptocurrency fear & greed index"),
	async execute(interaction) {
		const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth();
    const mmr = mm+1;
    const yyyy = d.getFullYear();
    const fulldate = [yyyy, mmr, dd].join('-');
    const tembakURL = "https://alternative.me/images/fng/crypto-fear-and-greed-index-";
    const tanggalURL = [tembakURL+fulldate+'.png'];
		const img = hyperlink('Crypto Fear & Greed Index', tanggalURL);		
    await interaction.reply(`${img}`);
	}
}