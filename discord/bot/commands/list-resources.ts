import { SlashCommand, SlashCreator, CommandContext, CommandOptionType } from 'slash-create';
import { CloudVendor } from '../vendors';

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

  async run(ctx: CommandContext) {
    console.log(ctx.options);
    return `Hello, ${ctx.user.username}! I'm testing this new entry. You've selected ${ctx.options['hosts']['vendor']}`;
  }
};