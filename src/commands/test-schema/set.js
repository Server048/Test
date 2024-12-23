import { SlashCommandBuilder } from 'discord.js'
import testschema from '../../schemas/test.js'

export const config = {
    //admin: true,
    data: new SlashCommandBuilder()
        .setName('test-schema')
        .setDescription('testschema')
        .addSubcommand(command => command.setName('add')
            .setDescription('Add data')
            .addStringOption(option => option
                .setName('schema-input')
                .setDescription('text to save')
                .setRequired(true)
            )
        )
        .addSubcommand(command => command.setName('get').setDescription('Get data'))
        .addSubcommand(command => command.setName('remove').setDescription('Remove data')),
    async execute(interaction) {
        const { options } = interaction;
        const sub = options.getSubcommand();
        const data = await testschema.find();

        switch (sub) {
            case 'add':
                const string = options.getString('schema-input');
                await testschema.create({
                    Content: string
                });
                await interaction.reply(`I saved the data`);
                break;
            case 'get':
                const values = data.map(d => d.Content);
                await interaction.reply({ content: `${values.join('\n') || 'No content found'}` });
                break;
            case 'remove':
                await testschema.deleteMany({});
                await interaction.reply({ content: `I deleted the values` });
                break;
        }
    }
}

