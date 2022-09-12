const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
var messageHandler = require("../../handlers/messageHandler");

module.exports = {
    data: {
        name: ["8ball", "8balls", "magic8"],
        description: "blah blah",

        ownerOnly: false,
        premiumOnly: false,
        maxArgs: undefined,
        minArgs: 1
    },

    async execute(client, message, args) {
        try {
            await message.channel.sendTyping();
			let eightball = [
				'It is certain.',
				'It is decidedly so.',
				'Without a doubt.',
				'Yes definitely.',
				'You may rely on it.',
				'As I see it, yes.',
				'Most likely.',
				'Outlook good.',
				'Yes.',
				'Signs point to yes.',
				'Reply hazy try again.',
				'Ask again later.',
				'Better not tell you now.',
				'Cannot predict now.',
				'Concentrate and ask again.',
				'Don\'t count on it.',
				'My reply is no.',
				'My sources say no.',
				'Outlook not so good.',
				'Very doubtful.',
				'No way.',
				'Maybe',
				'The answer is hiding inside you',
				'No.',
				'||No||',
				'||Yes||'
			];
			let index = await (Math.floor(Math.random() * Math.floor(eightball.length)));
			await setTimeout(() => {
                messageHandler.reply(client, eightball[index], message.channel);
			}, 750);
        } catch (e) { console.log(e) }

    }
}