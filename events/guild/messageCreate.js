require('dotenv').config();

module.exports = (Discord, client,message)=>{

    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if(command) {
        try{
            command.execute(client,message,args,cmd,Discord);
        }
        catch(err){
            console.log(err);
            message.reply("There was an error trying to execute that command");
        }
    }
}