//Imports
require('dotenv').config()
const fs = require('fs')

//Dicord Setup
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();



//Variables
const { prefix  } = require('./config.json');

//Command Files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


commandFiles.forEach(file => {
    const commad = require(`./commands/${file}`);
    //Add item to command collection
    client.commands.set(commad.name, commad);
});



//On Ready
client.once('ready', () => {
    console.log("Ready!");
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(!client.commands.has(command)) return;

    //Execute
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        message.channel.send("There was an error :angry: Let the devs know and we'll take care of it.");
        console.error(error);
    }

});

//Login to Discord
client.login(process.env.TOKEN);