require("dotenv").config()

const { REST, Routes } = require('discord.js');
const commands = require("./commands/commands.js")

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

module.exports = async function init(){
  try {
    console.log('começou');
    
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    
    console.log('terminou');
  } catch (error) {
      console.error(error);
  }
}