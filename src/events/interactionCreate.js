var messageHandler = require("../handlers/messageHandler");
const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        try {
            if (interaction.isButton()) {
                if (!interaction.customId === 'time') return;

                const modal = new ModalBuilder()
                    .setCustomId('timeSubmit')
                    .setTitle('Time Submission');

                const timeInput = new TextInputBuilder()
                    .setCustomId('timeinput')
                    .setLabel("What time did you get?")
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true);

                const commentInput = new TextInputBuilder()
                    .setCustomId('commentinput')
                    .setLabel("Add a comment if necessary")
                    // Paragraph means multiple lines of text.
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(false);

                const firstActionRow = new ActionRowBuilder().addComponents(timeInput);
                const secondActionRow = new ActionRowBuilder().addComponents(commentInput);

                await modal.addComponents(firstActionRow, secondActionRow);

                await interaction.showModal(modal);

            } else if (interaction.isModalSubmit()) {
                const time = await interaction.fields.getTextInputValue('timeinput');
                const comment = await interaction.fields.getTextInputValue('commentinput');
                console.log(time + comment);

                await interaction.reply({ content: 'Your submission was received successfully!' });

                var currentDoc = await client.db.collection("guilds").findOne({
                    _id: "global"
                });


                await client.db.collection("guilds").updateOne({ _id: "global" },
                    {
                        $set:
                        {
                            leaderboard: scramble[0].scramble_string
                        }

                    }
                );

                var lb = " ";

                for (let i = 0; i < 10; i++) {
                    if (currentDoc?.leaderboard[i]) {
                        lb = lb + "`" + i + ".` " + currentDoc?.leaderboard[i]?.time + " <@" + currentDoc?.leaderboard[i]?.user + ">" + "\n";
                    }
                }

                console.log("lb is " + lb);

                const emb = new EmbedBuilder()
                    .setTitle("Leaderboard for today")
                    .setDescription(lb)
                    .setColor(interaction.guild.members.me.displayHexColor)

                await interaction.followUp({ embeds: [emb] });
            }

        } catch (e) {
            console.log(e);
        }
    },
};