const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["bunny", "bunnies", "bun"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        try {
            await messageHandler.reply(client, " ", message.channel, undefined, undefined, client.memer.bunny());

        } catch (e) { console.log(e) }

    }
}