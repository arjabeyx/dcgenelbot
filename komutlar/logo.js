const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("≶ | Łâventâ Discord Sunucusu.")
.setTitle("≶ | Łâventâ Logo Komutları.")
 .setTimestamp()
.setDescription("**+dinamik** = Dinamik logo oluşturur. \n **+altın** = Altın logo oluşturur. \n **+banner** = Banner logo oluşturur. \n **+habbo** = Habbo yazı tipinde logo oluşturur. \n **+arrow** = Ok işaretli logo oluşturur. \n **+green** = Yeşil logo oluşturur. \n **+alev** = Alevli logo oluşturur. \n **+red** = Kırmızı logo oluşturur.")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+logo'
}