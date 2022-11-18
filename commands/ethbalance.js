const { hyperlink, SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const key = process.env['ALCHEMY_TOKEN'];
let config = 'https://eth-mainnet.alchemyapi.io/v2/'+key;
const web3 = createAlchemyWeb3(config);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ethbalance')
		.setDescription('Check an Ethereum wallet balance')
		.addStringOption(option =>
		option.setName('address')
			.setDescription('ETH address or ENS name')
			.setRequired(true)),
	async execute(interaction) {
		const address = interaction.options.getString('address');
		var addressChecked;
		if (address.indexOf('eth') > -1)
			{
  			console.log(`ENS look up for ${address} requested.`);
				var addressChecked = await web3.eth.ens.getOwner(address);
			} else {
				console.warn('AlchemyWeb3 API triggered.');
				var addressChecked = address;
			}

			const bal = await web3.eth.getBalance(addressChecked);
			const balanceeth = bal/(10**18);
			const b = Math.round((balanceeth + Number.EPSILON) * 100) / 100;

			const oslink = hyperlink('OpenSea', `http://opensea.io/accounts/${address}`);
			const eslink = hyperlink('Etherscan', `https://etherscan.io/address/${address}`);
		
		// embed reply
		const embedded = new MessageEmbed()
		.setColor('#c3b5fa')
		.setTitle(`${address}`)
		.setURL(`https://etherscan.io/address/${address}`)
		.setAuthor({ name: 'ETH Balance Lookup', iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251510929477652/MAGI_icon_000.png', url: 'https://twitter.com/m3m0rydump' })
		.setThumbnail('https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png')
		.addFields(
			{ name: `${b} ETH`, value: `Balance`, inline: true },
			{ name: `📈`, value: eslink, inline: true },
			{ name: `🌊`, value: oslink, inline: true },
		)
		.setTimestamp()
		.setFooter({ text: `${address} is an Ethereum address`, iconURL: 'https://cdn.discordapp.com/attachments/961184703631732736/961251081009135676/L-MtJkZw.png' });				
				
				return interaction.reply({ embeds: [embedded] });
	}
};