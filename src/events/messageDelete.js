var messageHandler = require("../handlers/messageHandler");
const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageDelete',
    once: false,
    async execute(client, message) {
        if (message.author.bot) return;
        // Saving the snipe
        await client.snipes.set(message.channel.id, message.content);
    },
};