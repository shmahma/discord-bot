module.exports = {
    name: 'clear',
    description: 'Clear messages specified in the channel',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(!args[0]) return message.reply('please specify the number of messages you want to clear');
            if(isNaN(args[0]) ) return message.reply('please enter a real number of messages you want to clear');
            if(args[0] > 100) return message.reply('you cannot clear more than 100 messages');
            if(args[0] < 1) return message.reply('you cannot clear less than 1 message');
            await message.channel.messages.fetch({limit: args[0]}).then(messages => message.channel.bulkDelete(messages));
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}