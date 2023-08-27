module.exports = {
    name: 'spam',
    description: 'spam!',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(!args.length) return message.channel.send('You need to give a spam message');
            let i=0;
            for( i = 0; i < 50; i++){
                await message.channel.send(args.join(' '));
            }
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}