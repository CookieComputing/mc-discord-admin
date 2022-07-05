import { ConfigManager } from '../../../config-manager/config-manager';
import { TableClient } from '@azure/data-tables';
import { TokenCredential } from '@azure/identity';
import { AZURE_CONFIG_MANAGER_TABLE } from '../../../../env';
/**
 * A config manager for Azure Tables.
 */
class AzureConfigManager implements ConfigManager {
  private tableClient: TableClient;
  constructor(credentials: TokenCredential) {
    this.tableClient = new TableClient('', AZURE_CONFIG_MANAGER_TABLE, credentials);
  }

  async get(key: string) {
    const ent = await this.tableClient.getEntity('', key);
    return ent.rowKey;
  }

  async put(key: string, value: string) {
    return this.tableClient.upsertEntity(key).then(() => {return true; });
  }

  async del(key: string) {
    this.tableClient.deleteEntity()
    return true;
  }
}