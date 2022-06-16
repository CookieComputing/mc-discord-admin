import { CommandContext, SlashCreator, User } from 'slash-create';
import HelloCommand from '../../../../discord/bot/commands/hello';
import { createMock } from 'ts-auto-mock';

test('hello returns a user\'s name', () => {
  const s = new SlashCreator({ applicationID: 'someId' });
  const helloCommand = new HelloCommand(s);

  const mockUser = createMock<User>({
    username: 'discordUser',
  });
  const ctx = createMock<CommandContext>({
    user: mockUser,
  });
  expect(helloCommand.run(ctx)).resolves.toContain('discordUser');
});