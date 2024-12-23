export const customID = 'starter'; 

export default async (interaction) => {
  if (interaction.isStringSelectMenu() && interaction.customId === 'starter') {
    const selectedValue = interaction.values[0]; 

    switch (selectedValue) {
      case 'bulbasaur':
        await interaction.reply({
          content: 'Kamu memilih Bulbasaur 🎉',
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

