const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'bed',
    aliases: [''],
    description: '',
    usage: 'bed <@user>',
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

        let img = await new DIG.Bed().getImage(member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "bed.png");

        message.channel.send(attach);
    }
}