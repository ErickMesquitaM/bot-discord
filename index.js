require("dotenv").config()
const init = require("./initCommands")
const controllerMsg = require("./controller/messages")

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

init() // INICIALIZADOR DOS COMANDOS

client.on('ready', () => { console.log("Bot on!") });  // QUANDO O SERVIDOR CARREGAR

client.on('interactionCreate', async (interaction) =>  await controllerMsg(interaction) ); // GERENCIADOR DE MENSAGENS



client.login(process.env.CLIENT_TOKEN);