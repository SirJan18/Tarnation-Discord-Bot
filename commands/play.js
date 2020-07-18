const vars = require('../config.json');

function start(message, args){
    
}

module.exports = {
    name: 'play',
    description: 'This plays sfx or YouTube Videos',
    help: `${vars.prefix}`,
    execute(message, args){
        start(message, args);
    }
};