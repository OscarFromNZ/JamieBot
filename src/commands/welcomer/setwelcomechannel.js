var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["setwelcomechannel", "welcomechannel", "welcomechannelset"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 1,
        minArgs: 0,
        perms: 'ManageServer'
    },

    async execute(client, message, args) {
        try {
            if (!args) {
                await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                    {
                        $set: {
                            welcomechannel: undefined
                        }
                    }
                );

                return messageHandler.reply(client, `Sucessfully removed the welcomer channel, I will no longer welcome new users`, message.channel);
            }

            if (args[0] === 'dm') {
                await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                    {
                        $set: {
                            welcomechannel: 'dm'
                        }
                    }
                );

                return messageHandler.reply(client, `I will now **DM** new users the welcome message instead of posting it to a channel`, message.channel);
            }

            // Getting doc
            let guildDoc = await client.functions.getGuildDoc(client, message.guild.id);

            let channelId

            if (await args[0].startsWith('<#') && await args[0].endsWith('>')) {
                channelId = await args[0].slice("2", "-1");
            } else {

                return messageHandler.reply(client, `I couldn't read the message you sent, try again in this format:\n \`${guildDoc.prefix}setwelcomechannel #a-valid-channel\``, message.channel, undefined, undefined, "https://i.imgur.com/nBrHhCn.png");

            }

            if (!await message.guild.channels.cache.has(channelId)) {
                return messageHandler.reply(client, `I couldn't find the channel you gave me, are you sure it exists? Try again and if it still doesn't work, try caching the channel by sending a message in it.`, message.channel);
            }

            console.log("Changing welcomechannel to " + args[0]);

            await client.db.collection("guilds").updateOne({ _id: message.guild.id },
                {
                    $set: {
                        welcomechannel: await channelId
                    }
                }
            );

            return await messageHandler.reply(client, `I have successfully changed the welcomechannel of this server to <#${channelId}>`, message.channel);


        } catch (e) { console.log(e) }


    }
}