const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("black")
.setAuthor("Łâventâ BOT Yardım Menüsü")
.setTitle("Davet etmek için `+davet` yazınız.")
 .setTimestamp()
.setDescription("😜 `+eğlence` \n **Eğlence komutlarını görürsünüz.** \n \n :gear:  `+moderasyon` \n  **Moderasyon komutlarını görürsünüz.** \n \n :busts_in_silhouette: `+kullanıcı` \n **Kullanıcı komutlarını görürsünüz.** \n \n :zap: `+logo` \n **Farklı Logo komutlarını görürsünüz.** \n \n :performing_arts: `Yapımcım` \n**youtube.com/xarjaabi\n**<@647103242911744000>"
  )
.setImage("https://i.hizliresim.com/KoioUG.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım', 
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+yardım'
}