import { SlashCommand, SlashCreator, CommandContext } from 'slash-create';

export = class PingCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'ping',
      description: 'Replies with "Pong!"',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(_: CommandContext) {
    return 'Pong!';
  }
};