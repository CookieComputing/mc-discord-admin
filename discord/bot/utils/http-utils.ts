import { fetch } from 'undici';

// Fetch the body of a GET request as a string
export async function fetchBodyString(url: string): Promise<string> {
  return (await fetch(url)).text();
}