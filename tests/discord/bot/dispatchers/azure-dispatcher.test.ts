import { AzureDispatcher } from '../../../../discord/bot/dispatchers/azure-dispatcher';

test('list dispatch should return the correct API endpoint', () => {
  const base = 'https://foobar.com';
  const d = new AzureDispatcher(base);
  expect(d.dispatchListCloudHosts()).toBe(`${base}/api/ListAzureVms`);
});