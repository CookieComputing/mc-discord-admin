import { CommandContext, SlashCreator } from 'slash-create';
import { ListResourcesCommand } from '../../../../discord/bot/commands/list-resources';
import { createMock } from 'ts-auto-mock';

test('listing an azure vm should return the string for now', () => {
  const s = new SlashCreator({ applicationID: 'someId' });
  const helloCommand = new ListResourcesCommand(s);

  const ctx = createMock<CommandContext>({
    options: {
      'hosts': {
        'vendor': 'azure',
      },
    },
  });
  expect(helloCommand.run(ctx)).resolves.toContain('ListAzureVms');
});