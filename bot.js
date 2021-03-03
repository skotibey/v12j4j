const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("") // Discord sunucunuzun kalıcı linkini girin    
          await sleep(1500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", lunex => {
  sleep(1000);
  if (
    lunex.id=== "" ||  // j4j sunucusunun idsi
    lunex.id === ""  // j4j sunucusunun idsi
  ) {
    
  } else {
    lunex.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("") // j4j sunucusunun kanal id'si


       a.send("**J4J DM NO BOT**")


      }, 5000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("") // j4j sunucusunun kanal id'si


       a.send("``J4J DM NO BOT``")


      }, 60000);
})

client.login("") // user tokeniniz