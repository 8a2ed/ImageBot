const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'rip',
    aliases: [''],
    description: '',
    usage: 'rup <@user>',
    timeout: 00,
    nsfw: false,
    admin: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member;

        let img = await new DIG.Rip().getImage(member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "rip.png");

        message.channel.send(attach);
    }
}