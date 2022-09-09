var base = require('../../spoons/getGuildSchema');
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
            var guildDoc = await client.db.collection("guilds").findOne({
                _id: message.guild.id
            });
            if (!guildDoc) {
                console.log("null");
                await client.db.collection("guilds").insertOne(await base.getDefaultGuildDoc(client, message.guild.id), async function (err, res) {
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


        } catch (e) { console.log(e) }


    }
}