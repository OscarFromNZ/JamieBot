module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        await client.user.setActivity({
            name: "/help",
            type: "LISTENING"
        });
	},
};