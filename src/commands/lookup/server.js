const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["lookup-server", "server", "serverinfo"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {

            let guild = await message.guild;

            var description = guild.description
            if (!description) {
                description = "";
            }

            const createdAt = Math.ceil(guild.createdTimestamp / 1000);
            const membercount = await guild.members.cache.size;
            const bans = await guild.bans.cache.size;
            const emojis = await guild.emojis.cache.size;
            const roles = await guild.roles.cache.size;
            const channels = await guild.channels.channelCountWithoutThreads.toString();
            const banner = await guild.bannerURL({ size: 1024 });
            const avatar = await guild.iconURL({ size: 1024 });

            console.log(banner, avatar);

            let send = `\
            ${description}
            Guild created <t:${createdAt}:R> (<t:${createdAt}:D>)
            ${membercount} members
            ${bans} bans
            ${emojis} emojis
            ${roles} roles
            ${channels} channels
            `

            await messageHandler.reply(send, message.channel, undefined, avatar, banner);

        } catch (e) { console.log(e) }

    }
}