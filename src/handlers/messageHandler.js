var { EmbedBuilder } = require("discord.js");

module.exports = {
    async reply(content, channel, row, thumbnail, banner) {
        try {
            console.log(thumbnail);
            let emb = new EmbedBuilder()
                .setDescription(content)
                .setColor(channel.guild.members.me.displayHexColor)
                .setImage(banner)
                .setThumbnail(thumbnail)

            if (row) {
                let m = await channel.send({ embeds: [emb], components: [row] });
                return m;
            } else {
                let m = await channel.send({ embeds: [emb] });
                return m;
            }
        } catch (e) { console.log(e) }
    }
}