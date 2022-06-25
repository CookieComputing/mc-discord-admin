import {
  SlashCommand,
  SlashCreator,
  CommandContext,
  CommandOptionType,
} from 'slash-create';
import { AzureDispatcher } from '../dispatchers/azure-dispatcher';
import { AZURE_ENDPOINT } from '../../../env';
import { CloudVendor } from '../vendors';
import { fetchBodyString } from '../utils/http-utils';

export class ListResourcesCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'list',
      description: 'List cloud resources',
      options: [
        {
          name: 'hosts',
          description: 'List all hosts for a given cloud vendor.',
          type: CommandOptionType.SUB_COMMAND,
          options: [
            {
              name: 'vendor',
              description: 'The cloud vendor your hosts are located on.',
              type: CommandOptionType.STRING,
              required: true,
              choices: [
                {
                  // eslint-disable-next-line quotes
                  name: "azure",
                  value: CloudVendor.Azure,
                },
              ],
            },
          ],
        },
      ],
    });
  }

  async run(ctx: CommandContext): Promise<string> {
    const vendor = ctx.options['hosts']['vendor'] as CloudVendor;
    switch (vendor) {
    case CloudVendor.Azure:
      return fetchBodyString(
        new AzureDispatcher(AZURE_ENDPOINT).dispatchListCloudHosts(),
      );
    }
  }
}
