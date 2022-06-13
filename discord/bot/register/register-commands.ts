import { REST } from '@discordjs/rest';
import { appId, token, guildId, publicKey } from '../env';

const rest = new REST().setToken(token);
