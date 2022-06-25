import { CommandContext, SlashCreator } from 'slash-create';
import { ListResourcesCommand } from '../../../../discord/bot/commands/list-resources';
import { createMock } from 'ts-auto-mock';
import * as httpUtils from '../../../../discord/bot/utils/http-utils';

jest.mock('../../../../discord/bot/utils/http-utils', () => {
  return {
    fetchBodyString: jest.fn(),
  };
});

describe('listing vm resources', () => {
  let mockFetchBodyString: jest.SpyInstance<Promise<string>, [url: string]>;

  beforeEach(() => {
    mockFetchBodyString = jest
      .spyOn(httpUtils, 'fetchBodyString');
  });

  afterEach(() => {
    mockFetchBodyString.mockRestore();
  });

  test('listing an azure vm should return the string for now', () => {
    const s = new SlashCreator({ applicationID: 'someId' });
    const helloCommand = new ListResourcesCommand(s);

    const ctx = createMock<CommandContext>({
      options: {
        hosts: {
          vendor: 'azure',
        },
      },
    });

    mockFetchBodyString.mockImplementation(async () => {
      return 'foobar';
    });
    expect(helloCommand.run(ctx)).resolves.toBe('foobar');
  });
});
