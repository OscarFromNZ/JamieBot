var messageHandler = require("../../handlers/messageHandler");


module.exports = {
    data: {
        name: ["setwelcomechannel", "welcomechannel", "welcomechannelset"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: undefined,
        minArgs: 1
    },

    async execute(client, message, args) {
        try {
            // Getting doc
            let guildDoc = await client.functions.getGuildDoc(client, message.guild.id);

            if (!args[0]) {
                return await messageHandler.reply(client, `The current prefix I respond to in this server is \`${guildDoc.prefix}\``, message.channel);
            }

            console.log("Changing prefix to " + args[0]);

            await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                {
                    $set: {
                        prefix: args[0]
                    }
                }
            );

            return await messageHandler.reply(client, `I have successfully changed the prefix of this server to \`${args[0]}\``, message.channel);


        } catch (e) { console.log(e) }


    }
}