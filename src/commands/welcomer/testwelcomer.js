var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["testwelcomer", "testwelcome", "welcometest", "welcomertest", "testgreet"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0,
        perms: 'MANAGE_SERVER'
    },

    async execute(client, message, args) {
        try {

            return await messageHandler.reply(client, `Command disabled`, message.channel);

            console.log(args);
            await client.emit('guildMemberAdd', message.member);

            return messageHandler.reply(client, "Tested the thingy :)", message.channel);

        } catch (e) { console.log(e) }


    }
}