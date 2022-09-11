// Probably a more efficient way of doing this but oh well

const getCommandFiles = require('./getCommandFiles');
const getDefaultGuildSchema = require('./getDefaultGuildSchema');
const getEventFiles = require('./getEventFiles');
const getMessage = require('./getMessage');

module.exports = {
    getCommandFiles: getCommandFiles,
    getDefaultGuildSchema: getDefaultGuildSchema,
    getEventFiles: getEventFiles,
    getMessage: getMessage
}