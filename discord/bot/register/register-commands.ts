import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { appId, token, guildId } from '../env';

const rest = new REST().setToken(token);

(async () => {
  try {
    console.log('Starting slash command registration');

    await rest.put(
      Routes.applicationGuildCommands(appId, guildId),
      { body: ['TODO'] },
    );

    console.log('Successfully registered commands');
  }
  catch (error) {
    console.error(error);
  }
})();