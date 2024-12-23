import { ActionRowBuilder, Client, EmbedBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from 'discord.js'

export const config = {
	description: 'Start Up My Bot!'
}

export default async (interaction) => {
	const buy = new ButtonBuilder()
             .setCustomId('buy_role')
             .setStyle(ButtonStyle.Secondary)
             .setLabel('Buy')
             .setEmoji('<:emoji_1:1320174729960751174>')
        const role = new ButtonBuilder()
             .setCustomId('role_list')
             .setStyle(ButtonStyle.Secondary)
             .setLabel('Role List')
             .setEmoji('<:emoji_1:1320174729960751174>')
        const balance = new ButtonBuilder()
             .setCustomId('balance')
             .setStyle(ButtonStyle.Secondary)
             .setLabel('Balance')
             .setEmoji('<:emoji_1:1320174729960751174>')
        const world = new ButtonBuilder()
             .setCustomId('world_depo')
             .setStyle(ButtonStyle.Secondary)
             .setLabel('World Deposit')
             .setEmoji('<:emoji_1:1320174729960751174>')
        const tutorial = new ButtonBuilder()
             .setCustomId('tutorial')
             .setStyle(ButtonStyle.Secondary)
             .setLabel('Tutorial Buy Access')
             .setEmoji('<:emoji_1:1320174729960751174>')
        const sel = new StringSelectMenuBuilder()
             .setCustomId('starter')
             .setPlaceholder('Make a selection!')
            // .setEmoji('<:emoji_1:1320174729960751174>')
             .addOptions(
        new StringSelectMenuOptionBuilder()
             .setLabel('Bulbasaur')
             .setDescription('The dual-type Grass/Poison Seed Pokémon.')
             .setValue('bulbasaur'),
        new StringSelectMenuOptionBuilder()
             .setLabel('Charmander')
             .setDescription('The Fire-type Lizard Pokémon.')
             .setValue('charmander'),
        new StringSelectMenuOptionBuilder()
             .setLabel('Squirtle')
             .setDescription('The Water-type Tiny Turtle Pokémon.')
             .setValue('squirtle'),
)
//const emoji1 = await client.emojis.fetch('<:emoji_1:1320174729960751174>'); // Ganti emojiId dengan ID emoji
// inside a command, event listener, etc.
const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('GrowTree Info')
	//.setURL('https://discord.js.org/')
	.setAuthor({ name: 'GrowTree PS', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://cdn.discordapp.com/attachments/1320019030437789698/1320210398846128199/image_3.gif?ex=6768c53f&is=676773bf&hm=58462795e641293d32b2f37b5034fad84c5d6bcad7a500638b65e0dc668af2a3&' })
	.setDescription('**\`\`\`Server Status: Up ${emoji1}\nOnline Player: 100\nPing: 2ms\`\`\`**')
	.setThumbnail('https://cdn.discordapp.com/attachments/1320019030437789698/1320202731054698546/d5e386f5-e506-40e6-a832-b2836a5726eb.gif?ex=6768be1b&is=67676c9b&hm=debeefb77c9636c17894000d76d8419d37fb757c0306b39bde22293e46a1ae38&')
	.addFields(
		{ name: '**Price Role Access**', value: 'The GrowTopia private server was created by Server048 on Sunday, December 22, 2024.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Mitik', value: 'Price <:emoji_1:1320174729960751174>', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://cdn.discordapp.com/attachments/1320019030437789698/1320202820187852800/standard.gif?ex=6768be30&is=67676cb0&hm=847f4a01f94ac7c7010a8f15e46e94104709fae30e7addfb320f3cd4a9bba4f7&')
	.setTimestamp()
	.setFooter({ text: 'GrowTree - PS', iconURL: 'https://cdn.discordapp.com/attachments/1320019030437789698/1320204076419387423/skin31.webp?ex=6768bf5c&is=67676ddc&hm=c835fec562af0749c3a9c52406bfba032ce1a0fa2450038f7cf3825e8903dc5f&'
})

	const row = new ActionRowBuilder().addComponents(buy, role, balance, world, tutorial)
        const rowk = new ActionRowBuilder().addComponents(sel)
	await interaction.reply({
		content: '',
                embeds: [embed],
		components: [rowk, row]
	})
}

