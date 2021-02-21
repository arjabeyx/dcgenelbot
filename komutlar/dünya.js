const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('İşte; milyarlarca hikâyeninin,\nmilyarlarca hayatın, milyarlarca\ngüzelliğin beraber olduğu o dünya.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dünya','Dünya','DÜNYA'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dünya gifi atar.',
  usage: 'dünya'
}