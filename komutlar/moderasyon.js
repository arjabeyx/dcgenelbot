const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("blue")
.setAuthor("≶ | Łâventâ İyi Eğlenceler Diler.")
.setTitle("Sunucu Moderasyon Komutları.")
 .setTimestamp()
.setDescription("**+sil** = Yazdığınız miktarda mesajı siler. \n **+ban** = Etiketlediğiniz kişiyi banlarsınız. \n **+kick** = Etiketlediğiniz kişiyi atarsınız. \n**+küfür** = Küfür engel sistemini açarsınız. \n **+mute** = Belirlenen kullanıcıyı susturursunuz. \n **+jail** = Belirlenen kullanıcıyı ceza odasına atarsınız. \n **+unjail** = Belirlenen kullanıcıyı ceza odasından çıkarırsınız. \n **+reklam** = Reklam engel sistemi açarsınız. \n **+slowmode** = Yavaş modu ayarlarsınız. \n **+forceban** = Birisine id ban atarsınız. \n **+unban** = Birisinin banını açarsınınız. \n **+sa-as** = Selam sistemini açar. \n **+sunucubilgi** = Sunucu bilgilerini görürsün. \n **+çekiliş** = Çekiliş başlatırsınız. \n **+abone** = Abone rolü verirsiniz. \n **+abone-sıfırla** = Aboneleri sıfırlarsınız.\n **+duyuru** = Bota Duyuru Yaptırırsınız.")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+moderasyon'
}