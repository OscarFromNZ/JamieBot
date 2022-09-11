const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["lookup-user", "user", "whois", "userinfo"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 1,
        minArgs: 0  
    },

    async execute(client, message, args) {
        try {

            let user = args[1]
            if (!user) {
                user = message.author;
            }

            let member = message.guild.members.cache.get(user.id);

            const username = user.username;
            const createdAt = Math.ceil(user.createdTimestamp / 1000);
            const joinedAt = Math.ceil(member.joinedTimestamp / 1000);
            const banner = await user.bannerURL({ size: 1024 });
            const avatar = await user.displayAvatarURL();

            let send = `\
            Account created <t:${createdAt}:R>
            Joined <t:${joinedAt}:R>
            \`${user.id}\`
            `

            await messageHandler.reply(client, send, message.channel, undefined, avatar, banner)

        } catch (e) { console.log(e) }

    }
}