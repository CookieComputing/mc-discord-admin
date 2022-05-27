import * as dotenv from 'dotenv';

dotenv.config();

const appId = process.env.APP_ID;
const token = process.env.DISCORD_ID;
const guildId = process.env.GUILD_ID;
const publicKey = process.env.PUBLIC_KEY;

export {
	appId, token, guildId, publicKey,
};