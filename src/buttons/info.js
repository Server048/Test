export const customID = 'info_gtps';

export default async (interaction) => {
  if (interaction.isStringSelectMenu() && interaction.customId === 'info_gtps') {
    const selectedValue = interaction.values[0];

    switch (selectedValue) {
      case 'user_info':
        await interaction.reply({
          content: 'Kamu memilih Bulbasaur User 🎉',
          ephemeral: true
        });
        break;
      case 'charmander':
        await interaction.reply({
          content: 'Kamu memilih Charmander! 🔥',
          ephemeral: true
        });
        break;
      case 'squirtle':
        await interaction.reply({
          content: 'Kamu memilih Squirtle! 💧',
          ephemeral: true
        });
        break;
      default:
        await interaction.reply({
          content: 'Pilihan tidak valid!',
          ephemeral: true
        });
    }
  }
};
