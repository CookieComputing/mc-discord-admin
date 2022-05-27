import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { verifySignature } from '../../../../discord/bot/auth/slash_auth';
import { publicKey } from '../../../../discord/bot/env';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
	context.log('HTTP trigger function processed a request.');

	context.log(req.headers['X-Signature-Ed25519']);
	if (!verifySignature(req.headers['X-Signature-Ed25519'],
		req.headers['X-Signature-Timestamp'],
		req.rawBody,
		publicKey)) {
		context.res = {
			// Unauthorized
			status: 401,
			body: 'Given invalid signature',
		};
		return;
	}

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: 'Hello, world!',
	};
};

export default httpTrigger;