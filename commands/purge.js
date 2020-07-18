const vars = require('../config.json');

function start(message, args){
    let repeat = 0;
    const amount = parseInt(args[0]+1);
    let final = 0;
    
    if(isNaN(amount)){
        message.channel.send("You need to have a number between 1 and 100")
    }

    if(args[0]/100 < 1){
        //Check if less than 100 and delete
        purge(message, args[0]);
        message.channel.send('Done! :shit:');
        }  else{    
        //If it is divide and repeat x amount of time
        repeat = parseInt(args[0]/100, 10);
        final = args[0]%100
        console.log(`Repeat: ${repeat}\nFinal: ${final}`);

        //loop for i amount of times
        for (let i = 0; i < repeat; i++) {
            purge(message, 100);
        }
        
        //finally delete the remaining
        purge(message, final);

         message.channel.send('Done! :shit:');
        }
}


module.exports = {
    name: 'purge',
    description: 'A simple purge command',
    args: true,
    usage: `${vars.prefix}purge 1-999`,
    execute(message, args){
        start(message, args);
    }
};