const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'slap',
    aliases: [''],
    description: '',
    usage: 'slap <@user>',
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

        let img = await new DIG.Batslap().getImage(member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "slap.png");

        message.channel.send(attach);
    }
}