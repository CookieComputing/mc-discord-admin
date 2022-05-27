import nacl from 'tweetnacl';

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
	return nacl.sign.detached.verify(
		Buffer.from(timestamp + body),
		Buffer.from(signature, 'hex'),
		Buffer.from(pubKey, 'hex'),
	);
}