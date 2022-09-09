var MongoClient = require("mongodb").MongoClient;
var messageHandler = require("./handlers/messageHandler");
var Scrambow = require('scrambow').Scrambow;

const { ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle } = require('discord.js');

const schedule = require('node-schedule');
const cmd = require("./spoons/getCommandFiles");
const event = require("./spoons/getEventFiles");

module.exports = async (client) => {
    // Storing all commands into the .commandFiles object of client
    client.commandFiles = await cmd.getCommandFiles(client);
    console.log(`Stored commandfiles into client.commandFiles`);

    // Storing all event files into the .eventFiles object of client
    client.eventFiles = await event.getEventFiles(client);
    console.log(`Stored eventfiles into client.eventFiles`);

    var mongoClient = await MongoClient.connect(process.env.MONGO_URI);
    client.db = await mongoClient.db("mydb");

    try {
        for (const file of client.eventFiles) {
            const event = await require(`../src/events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(client, ...args));
            } else {
                client.on(event.name, (...args) => event.execute(client, ...args));
            }
        }

    } catch (e) { console.log(e) }
}