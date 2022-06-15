import { verifyKey } from 'discord-interactions';
// The authentication module for verifying discord slash commands are coming from
// the application, and not from some other random traffic.
/**
 *
 * @param signature A cryptographic signature obtained from the HTTP request
 * @param timestamp The timestamp at which the signature was made
 * @param body The raw HTTP body
 * @param pubKey The application public key
 */
export function verifySignature(signature: string, timestamp: string, body: string, pubKey: string): boolean {
  // This is a little redundant, but leaving this here until the discord API
  // being used for the project is settled.
  return verifyKey(body, signature, timestamp, pubKey);
}