const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");
var Scrambow = require('scrambow').Scrambow;

module.exports = {
    data: {
        name: ["test"],
        description: "blah blah",

        ownerOnly: true,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        try {
          

        } catch (e) { console.log(e) }

    }
}