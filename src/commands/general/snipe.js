const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["snipe", "snip"],
        description: "blah blah",

        ownerOnly: true,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0  
    },

    async execute(client, message, args) {
        try {
          const snipe = await client.snipes.get(message.channel.id);
          if (!snipe) {
            await messageHandler.reply(client, "There is nothing to snipe!", message.channel);
          } else {
            await messageHandler.reply(client, "**Sniped**\n " + snipe, message.channel);
          }

        } catch (e) { console.log(e) }

    }
}