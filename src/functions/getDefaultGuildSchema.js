module.exports = async (client, guildId) => {
    try {
        let data = {
            _id: guildId,
            prefix: ","
        }

        return data;

    } catch (e) { console.log(e) }

}