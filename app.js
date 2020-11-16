const venom = require('venom-bot');
const express =require("express")
const index=express()
 
venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
 
function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome This is Test msg 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
  
}
const port = process.env.PORT || 3000


index.listen(port,()=>{
  console.log("server Start")
})