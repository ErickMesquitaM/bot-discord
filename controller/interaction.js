const { createMsg, getData } = require("../events/currency")
const sendMeme = require("../events/memes")
const movies = require("../events/movies")

module.exports = async (interaction)=>{
  if (!interaction.isChatInputCommand()) return;

  let cmd = interaction.commandName
  
  if (cmd === 'currency') {
    let type = interaction.options.data[0].value
    let api = await getData()

    if(type === 'usd'){
      await interaction.reply( createMsg(api.USDBRL) );

    } else if (type === 'eur') {
      await interaction.reply( createMsg(api.EURBRL) );
    
    } else if (type === 'btc') {
      await interaction.reply( createMsg(api.BTCBRL) );
    
    }
  } else if (cmd === 'meme') {
    await interaction.reply( {files: [ sendMeme() ] });
  
  } else if( cmd === 'commands' ){
    await interaction.reply( "commands" );

  } else if( cmd === 'movie' ){

    await movies()
    await interaction.reply( "movie" );

  }
}