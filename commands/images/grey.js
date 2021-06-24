const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'grey',
    aliases: [''],
    description: '',
    usage: 'grey <@user>',
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

        let img = await new DIG.Greyscale().getImage(member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "greyscale.png");

        message.channel.send(attach);
    }
}