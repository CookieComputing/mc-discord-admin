import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { verifySignature } from '../../../../discord/bot/auth/slash_auth';
import { publicKey } from '../../../../discord/bot/env';
import { InteractionType, InteractionResponseType } from 'discord-api-types/v10';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
	context.log('HTTP trigger function processed a request.');
	context.log(req.headers);
	if (!verifySignature(req.headers['x-signature-ed25519'],
		req.headers['x-signature-timestamp'],
		req.rawBody,
		publicKey as string)) {
		context.res = {
			// Unauthorized
			status: 401,
			body: 'Given invalid signature',
		};
		return;
	}

	if (req.body.type === InteractionType.Ping) {
		console.log('Received ping');
		context.res = {
			status: 200,
			body: {
			type: InteractionResponseType.Pong,

			},
		};
		return;
	}
	context.log(req.rawBody);

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: 'Hello, world!',
	};
};

export default httpTrigger;