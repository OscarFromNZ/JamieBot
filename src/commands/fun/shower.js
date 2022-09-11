const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["shower", "showerthought"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        try {
            await messageHandler.reply(client, client.memer.showerThought(), message.channel);

        } catch (e) { console.log(e) }

    }
}