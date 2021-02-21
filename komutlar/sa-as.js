const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç veya Kapat yazmalısın, Örnek: **+Sa-As Aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`Sa-As Sistemi Ayarlandı. \nKapatmak için; "\`+Sa-As Kapat\`" Yazmalısın.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`Sa-As Sistemi Kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};