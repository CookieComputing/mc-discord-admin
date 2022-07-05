import { TableServiceClient } from '@azure/data-tables';
import { DefaultAzureCredential, TokenCredential } from '@azure/identity';
import { AZURE_ACCOUNT, AZURE_CLIENT_ID, AZURE_CONFIG_MANAGER_TABLE, AZURE_TENANT_ID } from '../../../../env';

/**
 * Creates an Azure data table (NoSQL) using the provided account and credentials.
 * @param credentials Authentication credentials needed before creating the table.
 */
export async function createDataTable(
  credentials: TokenCredential,
  tableName: string,
  accountName: string,
) {
  const serviceClient = new TableServiceClient(
    `https://${accountName}.table.core.windows.net`,
    credentials,
  );

  return serviceClient.createTable(tableName, {
    onResponse: (response) => {
      if (response.status == 409) {
        console.log(`Error: Table ${tableName} already exists`);
      }
    },
  });
}

function main() {
  // AZURE_CLIENT_SECRET is implied
  const creds = new DefaultAzureCredential({
    tenantId: AZURE_TENANT_ID,
    managedIdentityClientId: AZURE_CLIENT_ID,
  });

  createDataTable(creds, AZURE_CONFIG_MANAGER_TABLE, AZURE_ACCOUNT);
}

if (require.main === module) {
  main();
}
