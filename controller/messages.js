const axios = require("axios").default

function createMsg(money){
  return `${money.name} alta de ${money.high} e baixa de ${money.low}`
}
async function getData(){
  return await axios("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then((api)=>{ return api.data })
}


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

