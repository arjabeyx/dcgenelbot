const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("≶ | Łâventâ İyi Eğlenceler Diler.")
.setTitle("Sunucu Eğlence Menüsü.")
 .setTimestamp()
.setDescription("**+fbi** = FBI Gif Atar. \n **+token** = Tokenimi Öğrenmek İstemezmisin? \n **+düello** = Düello Atarsın. \n **+atatürk** = Dene ve gör... (1881 & 1938) \n **+kaçcm** = Malafatını ölçer. \n**+espri** = Bot Espri yapar. \n**+kartopu** = İstediğiniz kişiye kartopu atarsın. \n**+kapaklaflar** = istediğiniz kişiye laf sokarsınız. \n**+mcskin** = Minecraft karakterinizi gösterir.\n**+dünya** = Dünyayı gösterir.")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+eğlence'
}