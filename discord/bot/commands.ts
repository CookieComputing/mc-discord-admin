import { InteractionType } from 'discord-interactions';

/**
 * A slash command provided by an admin or otherwise authorized user. This
 * is a one way message passed from the serverless function to the bot.
 */
export interface DiscordCommand {

    // The type of command that was used.
    type: InteractionType,

    // data provided by the command
    data: string | null;
}