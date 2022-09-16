const { add, min, mult, divi } = require("../commands/math")

module.exports = async function message(msg){
  if( msg.content.charAt(0) !== "!" ) return;

  const msgArray = msg.content.split(" ")
  var args = msgArray.slice(1)
  const cmd = msgArray[0]

  args = args.map( n => Number(n) )


  if(cmd === "!add"){
    await msg.reply( add(args) )

  } else if(cmd === "!min"){
    await msg.reply( min(args) )

  } else if(cmd === "!mult"){
    await msg.reply( mult(args) )

  } else if(cmd === "!divi"){
    await msg.reply( divi(args) )

  } else {
    await msg.reply( 'comando invalido' )

  }
}