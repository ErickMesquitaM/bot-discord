require("dotenv").config()

const { REST, Routes } = require('discord.js');
const commands = require("../commands/commands.js")

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

module.exports = async function init(){
  try {
    console.log('Started refreshing application (/) commands.');
    
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
      console.error(error);
  }
}