export const customID = 'poke'

export default async (interaction) => {
	await interaction.reply({
		content: 'Ouch that hurts! Hai Ini Test',
		ephemeral: true
	})
}
