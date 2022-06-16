import { SlashCommand, SlashCreator, CommandContext } from 'slash-create';

export = class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'hello',
      description: 'Greets you!',
    });
  }

  async run(ctx: CommandContext) {
    return `Hello, ${ctx.user.username}!`;
  }
};