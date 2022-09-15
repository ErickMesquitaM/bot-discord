const { createMsg, getData } = require("../mesages/currency")
const sendMeme = require("../mesages/memes")

module.exports = async (interaction)=>{

  // const msgArray = interaction.content.split(" ")
  // const argument = msgArray.slice(1)
  // const cmd = msgArray[0]


  if (!interaction.isChatInputCommand()) return;
  
  console.log(interaction)

  let cmdName = interaction.commandName
  
  if (cmdName === 'currency') {
    let type = interaction.options.data[0].value
    let api = await getData()

    if(type === 'usd'){
      await interaction.reply( createMsg(api.USDBRL) );

    } else if (type === 'eur') {
      await interaction.reply( createMsg(api.EURBRL) );
    
    } else if (type === 'btc') {
      await interaction.reply( createMsg(api.BTCBRL) );
    
    }

  } else if(cmdName === "math") {
    let type = interaction.options.data[0].value

    if(type === 'add'){
      await interaction.reply( "add" );

    } else if (type === 'min') {
      await interaction.reply( "min" );
    
    } else if (type === 'mult') {
      await interaction.reply( "mult" );
    
    } else if (type === 'divi') {
      await interaction.reply( "divi" );
    
    }
  } else if (cmdName === 'meme') {
    await interaction.reply( {files: [ sendMeme() ] });
  
  }
}