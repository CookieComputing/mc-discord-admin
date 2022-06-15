import { SlashCommand, SlashCreator, CommandContext } from 'slash-create';


module.exports = class PongCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'pong',
      description: 'Replies with "Pong!"',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(_: CommandContext) {
    return 'Pong!';
  }
};