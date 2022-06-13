import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('pong')
  .setDescription('Sends a Pong! to a ping');

const action = async (interaction: CommandInteraction) => {
  return interaction.reply('Pong!');
};

export { data, action };