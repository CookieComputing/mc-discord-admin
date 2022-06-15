import { SlashCommand, SlashCreator, CommandContext } from 'slash-create';

module.exports = class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'hello',
      description: 'Greets you!',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(ctx: CommandContext) {
    return `Hello, ${ctx.user.username}!`;
  }
};