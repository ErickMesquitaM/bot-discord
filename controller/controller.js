const { createMsg, getData } = require("../mesages/currency")

module.exports = async (msg)=>{
  if (!msg.isChatInputCommand()) return;
  
  let api = await getData()
  
  if (msg.commandName === 'usd') {
    await msg.reply( createMsg(api.USDBRL) );

  } else if (msg.commandName === 'eur') {
    await msg.reply( createMsg(api.EURBRL) );
  
  } else if (msg.commandName === 'btc') {
    await msg.reply( createMsg(api.BTCBRL) );
  
  } else {
    await msg.reply('Ping!');
  }
}

