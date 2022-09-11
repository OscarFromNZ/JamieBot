// Probably a more efficient way of doing this but oh well

var { EmbedBuilder } = require("discord.js");
// Only reason I'm doing this and not client.functions is because nobody is calling this handler with client :(
const functions = require('../functions/functions');

module.exports = {
    async reply(client, content, channel, row, thumbnail, banner) {
        // No row support yet btw
        try {
            let emb = new EmbedBuilder()
                .setDescription(content)
                .setColor(channel.guild.members.me.displayHexColor == '#000000' ? '2f3136' : channel.guild.members.me.displayHexColor)
                .setImage(banner)
                .setThumbnail(thumbnail)

                let m = await channel.send({ content: await functions.getMessage(client), embeds: [emb] });
                return m;

        } catch (e) { console.log(e) }
    }
}