const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["howgay", "gay", "gaylevel"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        try {
            let p = await Math.floor(Math.random() * 100);
            await messageHandler.reply(client, `You are ${p}% gay :O`, message.channel);

        } catch (e) { console.log(e) }

    }
}