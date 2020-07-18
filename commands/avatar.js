//return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
const vars = require('../config.json');
function start(message, args){
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
    });

    message.channel.send(avatarList);
}

module.exports = {
    name: 'avatar',
    description: 'A command that sends a link for the avatar of mentioned users',
    args: true,
    usage: `${vars.prefix}avatar <user>`,    
    execute(message, args){
        start(message, args);
    }
};