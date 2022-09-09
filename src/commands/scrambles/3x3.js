var Scrambow = require('scrambow').Scrambow;
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["3x3", "3x3x3", "3", "33", "333"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {
            var cube = new Scrambow();
            scramble = cube.get(1);
            console.log(scramble[0].scramble_string);
            await messageHandler.reply(scramble[0].scramble_string, message.channel, undefined, "http://cube.rider.biz/visualcube.php?fmt=png&pzl=3&bg=t&size=150&alg=" + scramble[0].scramble_string.split(" "));    
        } catch (e) { console.log(e) }

    }
}