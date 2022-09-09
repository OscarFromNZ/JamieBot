var Scrambow = require('scrambow').Scrambow;
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["pyra", "pyraminx", "pyram", "pyramix", "p"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {
            var cube = new Scrambow().setType('pyram')
            scramble = cube.get(1);
            console.log(scramble[0].scramble_string);
            await messageHandler.reply(scramble[0].scramble_string, message.channel);
        } catch (e) { console.log(e) }

    }
}