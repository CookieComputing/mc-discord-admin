"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('prune')
        .setDescription('Prune up to 99 messages.')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const amount = interaction.options.getInteger('amount');
            if (amount < 1 || amount > 99) {
                return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
            }
            yield interaction.channel.bulkDelete(amount, true).catch(error => {
                console.error(error);
                interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
            });
            return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
        });
    },
};
