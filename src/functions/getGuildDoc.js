module.exports = async (client, guildId) => {
    try {
        var guildDoc = await client.db.collection("guilds").findOne({
            _id: guildId
        });
        if (!guildDoc) {
            await client.db.collection("guilds").insertOne(await client.functions.getDefaultGuildSchema(client, guildId), async function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log("✅ Doc made");
            });

            guildDoc = await client.db.collection("guilds").findOne({
                _id: guildId
            });
        }

        return guildDoc;

    } catch (e) { console.log(e) }

}