
var messageHandler = require("../handlers/messageHandler");

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(client, message) {

        // Inefficient but does the job I guess...
        var guildDoc = await client.db.collection("guilds").findOne({
            _id: message.guild.id
        });
        if (!guildDoc) {
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

        let prefix = guildDoc.prefix;

        // Checking if the bot is being mentioned
        if (message.mentions.users.has(client.user.id) && !message.author.bot) {
            await messageHandler.reply(`The current prefix I respond to in this server is \`${prefix}\``, message.channel);
        };

        if (!message.content.startsWith(prefix)) return;
        try {
            if (!message.guild) return messageHandler.reply("You must be in a server to run any command");

            console.log("Getting args for message`");
            var args = await message.content.trim().split(/ +/g);
            var command = await args[0].slice(prefix.length).toLowerCase();
            await args.shift();
            console.log("Args found");
            
            if (client.aliases.has(command)) {
                // IF it is a valid command/alias
                    // Get the command
                    console.log("test");
                    command = await client.aliases.get(command); // returns eg: "2x2" if the command is "2"

            } else {
                return messageHandler.reply(`Unknown command, run ${prefix}help for a list of commands`, message.channel);
            }

            const cmdFile = await client.commandFiles?.get(command.split(".")[0]);
            
            // Checks
            if(cmdFile.data.isOwner == true && message.author.id !== "422603238936936450") return;
            if(cmdFile.data.minArgs > args) return await messageHandler.reply("You did not specify enough args", message.channel);

            if (!cmdFile) return await messageHandler.reply(`Unknown command, run ${prefix}help for a list of commands`, message.channel);
            
            await cmdFile.execute(client, message, args);
        
        } catch (e) {
            console.log(e);
        }
	},
};