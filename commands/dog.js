const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports.config = { 
    name: "dog",
    aliases: ['doggy', 'doggo']
}

module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let dEmbed = new Discord.MessageEmbed()
        .setImage(body.message)
        .setTimestamp()

            message.channel.send(dEmbed)
            msg.delete();
        })
}