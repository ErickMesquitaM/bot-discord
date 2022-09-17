require("dotenv").config()
const init = require("./init")
const interaction = require("./controller/interaction")
const message = require("./controller/message")

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

init()

client.on('ready', () => { console.log("Bot on!") });

client.on('interactionCreate', async (int) => await interaction(int) );
client.on("messageCreate", async (msg) => await message(msg) );

client.login(process.env.CLIENT_TOKEN);