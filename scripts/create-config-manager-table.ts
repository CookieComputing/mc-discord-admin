import { exec } from 'child_process';
import { command, run, Type, option } from 'cmd-ts';
import { CloudVendor } from '../discord/bot/vendors';

/**
 * A script you can run to create a config manager table in a supported
 * cloud vendor of your choice.
 */

const cloudPlatform: Type<string, CloudVendor> = {
  async from(str) {
    if (Object.values(CloudVendor).includes(str as CloudVendor)) {
      return str as CloudVendor;
    }

    throw new Error(
      `Provided an unsupported cloud vendor: ${str}. Expected: ${Object.values(
        CloudVendor,
      )}`,
    );
  },
};

const app = command({
  name: 'create-config-manager-table',
  args: {
    cloudVendor: option({
      type: cloudPlatform,
      long: 'cloud-vendor',
      short: 'c',
      description: 'A cloud vendor supported in the project.',
    }),
  },
  handler: ({ cloudVendor }) => {
    switch (cloudVendor) {
    case CloudVendor.Azure:
      exec(
        'cd cloud/azure/DiscordAzureFunction && ts-node ops/create-data-table.ts',
        (error, stdout) => {
          if (error) {
            console.log(
              `Encountered error in running Azure command: ${error}`,
            );
          }
          if (stdout) {
            console.log(stdout);
          }
        },
      );
      break;
    default: {
      throw new Error('Given unsupported cloud vendor');
    }
    }
  },
});

run(app, process.argv.slice(2));
