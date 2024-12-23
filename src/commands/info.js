import { ActionRowBuilder, Client, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from 'discord.js'

export const config = {
        description: 'GTPS STAT!'
}

export default async (interaction) => {
               const sel = new StringSelectMenuBuilder()
             .setCustomId('info_gtps')
             .setPlaceholder('Make a selection GTPS!')
            // .setEmoji('<:emoji_1:1320174729960751174>')
             .addOptions(
        new StringSelectMenuOptionBuilder()
             .setLabel('User Info GTPS')
             .setDescription('The dual-type Grass/Poison Seed Pokémon.')
             .setValue('user_info'),
        new StringSelectMenuOptionBuilder()
             .setLabel('Charmander')
             .setDescription('The Fire-type Lizard Pokémon.')
             .setValue('charmander'),
        new StringSelectMenuOptionBuilder()
             .setLabel('Squirtle')
             .setDescription('The Water-type Tiny Turtle Pokémon.')
             .setValue('squirtle'),
)
const row = new ActionRowBuilder().addComponents(sel)
        await interaction.reply({
                content: '**Commands Tools Gtps**',
               // embeds: [embed],
                components: [row]
        })
}
