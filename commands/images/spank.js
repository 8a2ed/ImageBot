const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'spank',
    aliases: [''],
    description: '',
    usage: 'spank [@user]',
    timeout: 00,
    nsfw: false,
    admin: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let member = message.mentions.members.first();

        if (!member) return message.channel.send(`You must mention member!`);

        let img = await new DIG.Spank().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }), member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "spank.png");

        message.channel.send(attach);
    }
}