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
        .setName('options-info')
        .setDescription('Information about the options provided.')
        .addStringOption(option => option.setName('input').setDescription('The input to echo back')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = interaction.options.getString('input');
            if (value)
                return interaction.reply(`The options value is: \`${value}\``);
            return interaction.reply('No option was provided!');
        });
    },
};
