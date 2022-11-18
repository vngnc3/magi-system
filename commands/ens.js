const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const key = process.env['ALCHEMY_TOKEN'];
let config = 'https://eth-mainnet.alchemyapi.io/v2/'+key;
const web3 = createAlchemyWeb3(config);
const osuri = "http://opensea.io/accounts/";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ens')
		.setDescription('Finds the owner of an ENS address')
		.addStringOption(option =>
		option.setName('name')
			.setDescription('ENS name')
			.setRequired(true)),
	async execute(interaction) {
		const name = interaction.options.getString('name');
		const owner = await web3.eth.ens.getOwner(name);

		// embed response
		const embedded = new MessageEmbed()
		.setColor('#c3b5fa')
		.setTitle(`${name}`)
		.setURL(`https://app.ens.domains/name/${name}/details`)
		.setAuthor({ name: 'ENS owner lookup', iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251510929477652/MAGI_icon_000.png', url: 'https://twitter.com/m3m0rydump' })
		.setThumbnail('https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png')
		.addFields(
			{ name: `${owner}`, value: `is the owner of ${name}`, inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `ens.domains`, iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png' });				
				
				return interaction.reply({ embeds: [embedded] });
	},
};