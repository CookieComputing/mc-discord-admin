import { commandDir} from '../../../../discord/bot/register-commands';
import { AzureFunctionServer, SlashCreator } from 'slash-create';
import { appId, publicKey, token } from '../../../../discord/bot/env';

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
  .registerCommandsIn(commandDir)
  // Syncing the commands each time the function is executed is wasting computing time
  .syncCommands();