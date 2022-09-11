module.exports = async (client) => {
    try {
        const promoMessages = [
            `${client.emotes.sparkles} Having problems? Join our support server! ** https://discord.gg/BZBsvuZ25n **`,
        ];
        
        return promoMessages[Math.floor(Math.random()*promoMessages.length)]

    } catch (e) { console.log(e) }
}
