import { EmbedBuilder } from 'discord.js';

export const customID = 'world_depo'

export default async (interaction) => {
  //const emoji = await client.emojis.fetch('1295758898858561596'); 

  const embed = new EmbedBuilder()
    .setTitle('**World Deposite**')
    .setDescription(`• <:emoji_4:1320268957789192193> World: **ECNI**\n• <:emoji_3:1320267070314905651> Bot: **BOTJASA**\n\n
          Cuma menerima <a:BGL:1295758898858561596> & <a:BLACK:1295758926263877713>\n\n
          Note:\n
          Pastikan bahwa Bot sedang berada di world, jika tidak ada tolong lapor <@732015085475856384>`)
    .setColor('#FFFFFF') // Warna ungu (🟣)
    .setThumbnail('https://i.imgur.com/wQK7f0L.png') // Ganti dengan URL gambar donation box
    .setFooter({ text: 'BotJasa' })

  await interaction.reply({
    content: '',
    embeds: [embed], // Kirim embed bersama content
    ephemeral: true
  })
}

