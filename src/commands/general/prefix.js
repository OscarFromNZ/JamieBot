var messageHandler = require("../../handlers/messageHandler");


module.exports = {
    data: {
        name: ["prefix"],
        description: "blah blah",

        ownerOnly: true,
        premiumOnly: false,
        maxArgs: 1,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {
            // Getting doc
            var guildDoc = await client.db.collection("guilds").findOne({
                _id: message.guild.id
            });
            if (!guildDoc) {
                await client.db.collection("guilds").insertOne(await client.functions.getDefaultGuildDoc(client, message.guild.id), async function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("✅ Doc made");
                });

                guildDoc = await client.db.collection("guilds").findOne({
                    _id: message.guild.id
                });
            }

            if (!args[0]) {
                return await messageHandler.reply(`The current prefix I respond to in this server is \`${guildDoc.prefix}\``, message.channel);
            }

            console.log("Changing prefix to " + args[0]);

            await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                {
                    $set: {
                        prefix: args[0]
                    }
                }
            );

            return await messageHandler.reply(`I have successfully changed the prefix of this server to \`${args[0]}\``, message.channel);


        } catch (e) { console.log(e) }


    }
}