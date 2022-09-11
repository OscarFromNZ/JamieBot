const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["lizard", "lizards"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        try {
            await messageHandler.reply(client, " ", message.channel, undefined, undefined, client.memer.lizard());

        } catch (e) { console.log(e) }

    }
}