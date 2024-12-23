import { EmbedBuilder } from 'discord.js';


export const customID = 'tutorial';

export default async (interaction) => { 
  const embed = new EmbedBuilder()
    .setTitle('Cara Deposit & Beli Access World JASA')
    .setDescription(`<a:SparklyEarth:1293780869609422922> 1. Cek “<a:SparklyEarth:1293780869609422922> World Deposit” untuk melihat depo world
<a:SparklyEarth:1293780869609422922> 2. Deposit di world yang ada di “<a:SparklyEarth:1293780869609422922> World Deposit (Cuma nerima <a:BGL:1295758898858561596>/<a:BLACK:1295758926263877713>)”
<a:SparklyEarth:1293780869609422922> 3. Setelah deposit nanti bakal muncul di <https://discord.com/channels/1092733560785485864/1247503900903346247> & balance kalian akan ditambah
<a:SparklyEarth:1293780869609422922> 4. Bakal ada jaminan deposit 10 <a:BGL:1295758898858561596>, jika ingin membeli (Bakal dikembalikan setelah masa access habis)
<a:SparklyEarth:1293780869609422922> 5. Ketik jumlah bulan & kode JASA yang ingin kalian beli (Contoh: "FARM"/"LAIN", wajib CAPS)
<a:SparklyEarth:1293780869609422922> 6. Send screenshot di claim access & tag manager yang memegang world **JASA**
<a:SparklyEarth:1293780869609422922> 7. Selamat profit 😊`)
    .setColor('#FFFFFF') 
    .setThumbnail('https://i.imgur.com/wQK7f0L.png')
    .setFooter({ text: 'BotJasa' });

  await interaction.reply({ embeds: [embed], ephemeral: true }); 
};
