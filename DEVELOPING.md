# Developer guide

The project is currently in development phase and much of this is subject
to changes, particularly anything involving environments and config files.
This is also a document I'll be using to self-document the development process.

Regardless, feel free to ask me (Kevin) about any changes to the development
environment and I'll be happy to help out.

## Set up your environment

This project uses a mix of Typescript and Python, with Typescript used for
the majority of development, and Python mostly for writing scripts. To this end, you'll need a few things:

- [Python3](https://www.python.org/downloads/)
- [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ngrok](https://ngrok.com/download)

## Install dependencies
In the project root directory (the directory this file is located in),
run `npm install` to install node dependencies.

For the python dependencies, run `pip install -r requirements.txt` in the project directory.

### Initialize the environment

We expect the `.env` file to be stored in the project directory. For a template
`.env` file, you can run the `scripts/ci-script.py` file to generate an example
env file which contains all the necessary variables. For the next steps, we'll
want to set up a Discord app for you to set up.

### Discord Dev setup

You'll want to follow the [official Discord documentation](https://discord.com/developers/docs/getting-started#getting-started-with-discord-app-development) up until the [slash command section](https://discord.com/developers/docs/getting-started#installing-slash-commands), since that is mostly specific to
the demo project. To that end, you should have created:
- An app id
- A guild id
- A discord token
- A public key

Make sure these are stored in the respective environment variables generated
when you ran `scripts/ci-script.py`.

Once you have this set up, you're set for the dev environment!

## Developing Azure functions

For a general overview of Azure functions, take a look at the [official website](https://azure.microsoft.com/en-us/services/functions/). I used [this guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-get-started?pivots=programming-language-javascript) to learn how to initially develop an Azure function.

Assuming you've authorized the bot with the appropriate commands on your development Discord server, you are almost ready to go. The last thing we need
to do is just modify the [Interaction endpoint URL](https://discord.com/developers/docs/getting-started#adding-interaction-endpoint-url) on your server's app.

To get started, first run `ngrok http 7071` (7071 being the port for running
 Azure functions on your computer). You should see that ngrok is forwarding
requests to a port on localhost. Leave this running on a terminal and open up another one.

The next step is to edit your `AZURE_ENDPOINT` env variable with that public ngrok URL. Save this and proceed with the next step.

Then, head into `{project_root}/cloud/azure/DiscordAzureFunction` and run `npm run start` (or just run `npm run azure` in the project directory). This will start the server. Make sure to wait and check to see if the server is ready.

Finally, take the ngrok url and drop it into the `Interaction Endpoint URL` form provided on the [Discord developer portal](https://discord.com/developers/applications).

Wait a few minutes, and you should be able to see that the commands have been populated on your server! This is a bit tedious, but sadly you'll have to repeat this process each time you want to add a feature or bug fix.