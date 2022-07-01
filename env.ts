import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/.env` });

function getEnvVal(val: string | undefined): string {
  if (typeof val !== 'string') {
    throw new Error(`Environment variable ${val} is not set, exiting`);
  }
  return val;
}

const [
  appId,
  token,
  guildId,
  publicKey,
  AZURE_ENDPOINT,
  AZURE_CLIENT_ID,
  AZURE_SUBSCRIPTION_ID,
  AZURE_TENANT_ID,
  AZURE_CLIENT_SECRET,
] = [
  process.env.APP_ID,
  process.env.DISCORD_TOKEN,
  process.env.GUILD_ID,
  process.env.PUBLIC_KEY,
  process.env.AZURE_ENDPOINT,
  process.env.AZURE_CLIENT_ID,
  process.env.AZURE_SUBSCRIPTION_ID,
  process.env.AZURE_TENANT_ID,
  process.env.AZURE_CLIENT_SECRET,
].map((val) => getEnvVal(val));

export {
  appId,
  token,
  guildId,
  publicKey,
  AZURE_ENDPOINT,
  AZURE_CLIENT_ID,
  AZURE_SUBSCRIPTION_ID,
  AZURE_TENANT_ID,
  AZURE_CLIENT_SECRET,
};
