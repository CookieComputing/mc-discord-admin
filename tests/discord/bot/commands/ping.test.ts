import { CommandContext, SlashCreator } from 'slash-create';
import PingCommand from '../../../../discord/bot/commands/ping';
import { createMock } from 'ts-auto-mock';

test('ping returns pong', () => {
  const s = new SlashCreator({ applicationID: 'someId' });
  const pingCommand = new PingCommand(s);

  const ctx = createMock<CommandContext>();
  expect(pingCommand.run(ctx)).resolves.toBe('Pong!');
});