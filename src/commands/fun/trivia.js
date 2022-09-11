const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["trivia", "question"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
    },

    async execute(client, message, args) {
        let trivia = await client.memer.trivia()
        try {
            await messageHandler.reply(client, `${trivia.question} \n Answer: ||${trivia.answer}||`, message.channel);

        } catch (e) { console.log(e) }

    }
}