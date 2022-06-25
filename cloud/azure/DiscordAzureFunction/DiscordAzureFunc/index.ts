import { commands } from '../../../../discord/bot/register-commands';
import { AzureFunctionServer, SlashCreator } from 'slash-create';
import { appId, publicKey, token } from '../../../../env';

const creator = new SlashCreator({
  applicationID: appId,
  publicKey: publicKey,
  token: token,
  maxSignatureTimestamp: 10000,
});

creator
  // The first argument is required, but the second argument is the "target" or the name of the export.
  // By default, the target is "interactions".
  .withServer(new AzureFunctionServer(module.exports))
  .registerCommands(commands)
  // Syncing the commands each time the function is executed is wasting computing time
  .syncCommands({ deleteCommands: true });

console.log('loaded. glhf!');