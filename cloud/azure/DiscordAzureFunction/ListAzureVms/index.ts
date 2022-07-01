import { ComputeManagementClient } from '@azure/arm-compute';
import { SubscriptionClient } from '@azure/arm-subscriptions';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { AzureCliCredential, ClientSecretCredential } from '@azure/identity';
import { AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET, AZURE_SUBSCRIPTION_ID } from '../../../../env';

const httpTrigger: AzureFunction = async function (
  context: Context,
  _req: HttpRequest,
): Promise<void> {
  // const credentials = new ClientSecretCredential(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET);

  // TODO: Figure out how to set up the service principal...
  const creds = new AzureCliCredential();
  const computeClient = new ComputeManagementClient(creds, AZURE_SUBSCRIPTION_ID);

  const vmNames = [];
  for await (const vm of computeClient.virtualMachines.listAll()) {
    vmNames.push(vm.name);
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: vmNames,
  };
};

export default httpTrigger;
