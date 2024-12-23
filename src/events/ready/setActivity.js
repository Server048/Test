import { ActivityType } from 'discord.js'

export default async (client) => {
	client.user?.setActivity({
		name: '🌍 Run Server GrowTree',
		type: ActivityType.Custom
		// url: 'https://www.twitch.tv/discord'
	})
}
