/**
 * A cloud dispatcher is a dispatcher that redirects a discord command to the
 * appropriate URL endpoint for a cloud function.
 */
export interface CloudDispatcher {
  /**
   * The base URL for the cloud vendor's HTTP endpoint.
   */
  baseUrl: string;

  /**
   * Return a path pointed to the cloud function that lists cloud hosts
   */
  dispatchListCloudHosts(): string;
}
