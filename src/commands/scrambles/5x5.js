var Scrambow = require('scrambow').Scrambow;
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["5x5", "5x5x5", "5", "55", "555"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {
            var cube = new Scrambow().setType('555')
            scramble = cube.get(1);
            console.log(scramble[0].scramble_string);
            await messageHandler.reply(scramble[0].scramble_string, message.channel, undefined, "http://cube.rider.biz/visualcube.php?fmt=png&pzl=5&bg=t&size=150&alg=" + scramble[0].scramble_string.split(" "));
        } catch (e) { console.log(e) }

    }
}