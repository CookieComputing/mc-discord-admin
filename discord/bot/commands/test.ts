import { SlashCommand, SlashCreator, CommandContext } from 'slash-create';

export class TestCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'test',
      description: 'Greets you with a test!',
    });
  }

  async run(ctx: CommandContext) {
    return `Hello, ${ctx.user.username}! I'm testing this new entry`;
  }
};