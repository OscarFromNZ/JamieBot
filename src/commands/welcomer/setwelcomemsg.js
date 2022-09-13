var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["setwelcomemsg", "welcomemsg", "welcomemsgset", "welcomemessage", "setwelcomemessage"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: undefined,
        minArgs: 0,
        perms: 'ManageServer'
    },

    async execute(client, message, args) {
        try {
            if (!args) {
                await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                    {
                        $set: {
                            welcomemsg: undefined
                        }
                    }
                );

                return messageHandler.reply(client, `Sucessfully removed the welcome message, I will no longer welcome new users`, message.channel);
            }

            let rawWelcomeMsgInput = await args.join(' ');

            await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                {
                    $set: {
                        welcomemsg: await rawWelcomeMsgInput
                    }
                }
            );

            return messageHandler.reply(client, "I have sucessfully updated the welcome message", message.channel);

        } catch (e) { console.log(e) }


    }
}