//                         `-/osyyyyys+:.`                        
//                      ./ydmNNNNNNNNNNNmhs:`                     
//                    .sdNNNNNNNNNNNNNNNNNNNd+`                   
//                  `+mNNNNNNNNNNNNNNNNNNNNNNNd:                  
//                 `yNNNNNNNNmds+///oydmNNNNNNNm+                 
//                 yNNNNNNNmy-        `:hNNNNNNNN+                
//                :NNNNNNNm/             oNNNNNNNm`               
//                yNNNNNNNo               hNNNNNNN/               
//                hNNNNNNN:               oNNNNNNNo               
//                yNNNNNNNo               hNNNNNNN/               
//                :NNNNNNNm/             oNNNNNNNm`               
//                 yNNNNNNNmy-        `:hNNNNNNNN+                
//                 `yNNNNNNNNmds+///oydmNNNNNNNm+                 
//                  `+mNNNNNNNNNNNNNNNNNNNNNNNd:                  
//                    .sdNNNNNNNNNNNNNNNNNNNd+`                   
//                      ./ydmNNNNNNNNNNNmhs:`                     
//                         `-/osyyyyys+:.`                                            //                                                                                
//                           The Nothing.

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pak')
		.setDescription("Gives a random @muratpak tweet"),
	async execute(interaction) {
		const Pak = require('../contents/pak.js');
		const tweetPak = Pak[Math.floor(Math.random() * Pak.length)];
    await interaction.reply(`${tweetPak}`);
	}
}