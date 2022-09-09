

module.exports = {
    // This returns an object of the base
    async getDefaultGuildDoc (client, guildId) {
        try {
            let data = {
                _id: guildId,
                prefix: ","
            }

            return data;

        } catch (e) { console.log(e) }
    },
}