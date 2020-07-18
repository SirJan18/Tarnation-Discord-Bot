const vars = require('../config.json');

function start(message, args){
    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to kick them!');
    } else{
    const tagged = message.mentions.users.first();
     return message.channel.send(`You wanted to kick ${tagged.id}`);
    }
}

module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server',
    args: true,
    usage: `${vars.prefix}kick <user>`,
    guildOnly: true,
    execute(message, args){
        start(message, args);
    }
};