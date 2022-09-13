// var messageHandler = require("../handlers/messageHandler"); ~ We won't be using this as this is for replies BTW
const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        let guildDoc = await client.functions.getGuildDoc(client, member.guild.id);
        if (guildDoc.welcomechannel) {
            if (guildDoc.welcomemsg) {
                let msg = await guildDoc.welcomemsg
                    .replace(`{user}`, `<@${member.id}>`)
                    .replace(`{server}`, `${member.guild.name}`);

                if (guildDoc.welcomechannel === 'dm') {
                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('alert')
                                .setLabel(`This welcome message was sent from ${member.guild.name}`)
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true),
                        );
                    await member.user.send({ content: msg, components: [row] });
                } else {
                    let channel = await member.guild.channels.cache.get(guildDoc.welcomechannel);
                    await channel.send(msg);
                }
            };
        };

        if (guildDoc.joinpingchannels) {

        }
    },
};