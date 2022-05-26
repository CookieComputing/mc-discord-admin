import { REST } from '@discordjs/rest';
import * as dotenv from 'dotenv';
import { Routes } from 'discord-api-types/v10';
import fs from 'node:fs';
import path from 'node:path';

dotenv.config();

const commands = []
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const [token, clientId, guildId] = [process.env.DISCORD_TOKEN, process.env.APP_ID, process.env.GUILD_ID].map(x => (x === undefined) ? '' : x);
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered commands'))
	.catch(console.error);