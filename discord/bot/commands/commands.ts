import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { data as pongData, action as pongAction } from './pong';

type DiscordAction = (interaction: CommandInteraction) => Promise<void>;
type DiscordCommand = [SlashCommandBuilder, DiscordAction];

export const commands: [DiscordCommand] = [[pongData, pongAction]];