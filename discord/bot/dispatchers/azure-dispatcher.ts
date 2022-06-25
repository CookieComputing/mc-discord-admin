import { CloudDispatcher } from './cloud-dispatcher';

/**
 * A dispatcher to convert a discord command to the appropriate Azure function endpoint.
 */
export class AzureDispatcher implements CloudDispatcher {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}/api/`;
  }

  dispatchListCloudHosts(): string {
    return new URL('ListAzureVms', this.baseUrl).toString();
  }
}