var Scrambow = require('scrambow').Scrambow;
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["2x2", "2x2x2", "2", "22", "222"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: 0,
        minArgs: 0
    },

    async execute(client, message, args) {
        try {
            var cube = new Scrambow().setType('222');
            scramble = cube.get(1);
            console.log(scramble[0].scramble_string);
            await messageHandler.reply(client, scramble[0].scramble_string, message.channel, undefined, "http://cube.rider.biz/visualcube.php?fmt=png&pzl=2&bg=t&size=150&alg=" + scramble[0].scramble_string.split(" "));            
        } catch (e) { console.log(e) }

    }
}