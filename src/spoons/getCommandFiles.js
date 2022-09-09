const fs = require('fs');

module.exports = {
    // This returns an array of all command files found
    async getCommandFiles (client) {
        try {
            let data = new Map();
            client.aliases = new Map();

            // A list of all plugs, eg: **joinping**
            const commands = await fs.readdirSync("./src/commands", { withFileTypes: true });

            // We are now going through each plug folder
            await commands.filter(file => file.isDirectory()).forEach(category => {
                // Now we are getting each file under the category
                fs.readdirSync(`./src/commands/${category.name}`, { withFileTypes: true })
                    .filter(file => file.isFile()).forEach(file => {
                        const filename = file.name.split(".");
                        const commandFile = require(`../commands/${category.name}/${file.name}`);
                        data.set(filename[0], commandFile);

                        for (const name of commandFile.data.name) {
                            client.aliases.set(name, file.name);
                        }
                    });
            });

            return data;

        } catch (e) { console.log(e) }
    },
}