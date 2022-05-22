# mc-discord-admin
A serverless discord bot to perform cloud-based server configuration ops.

## What is this project?
This is a small project I'm using to learn how Discord bots work, as well as to 
provide some nice utility for setting up Minecraft servers on the fly on a
Discord. However, I also didn't want to pay for any hosting time spent, and so
I see this as a great opportunity for me to learn how to use some of the
serverless features that cloud vendors offer at a greatly reduced cost.

## Technical Considerations
Currently, this project just supports Azure functions for hosting the Discord
bot. However, I may decide to support AWS Lambdas and Google Cloud Functions
later on if I decide that I want to host my services on another platform.

My own server is currently entirely Azure based, but I will do my best to
separate functionality so that it is easy and extensible for other major
cloud platforms.

## Contributions
If for some reason this project tickles your interests, feel free to send a 
pull request! I'll probably review it...