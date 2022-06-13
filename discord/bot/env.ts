import * as dotenv from 'dotenv';

dotenv.config();

function getEnvVal(val: string | undefined): string {
  if (typeof (val) !== 'string') {
    throw new Error(`Environment variable ${val} is not set, exiting`);
  }
  return val;
}

const [appId, token, guildId, publicKey] = [process.env.APP_ID, process.env.DISCORD_TOKEN, process.env.GUILD_ID, process.env.PUBLIC_KEY].map(val => getEnvVal(val));

export {
  appId, token, guildId, publicKey,
};