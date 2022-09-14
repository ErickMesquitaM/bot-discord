const axios = require("axios").default

function createMsg(money){
  return `${money.name} alta de ${money.high} e baixa de ${money.low}`
}
async function getData(){
  return await axios("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then((api)=>{ return api.data })
}


module.exports = { createMsg, getData }