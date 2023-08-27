module.exports = {
    name: 'ping',
    description: 'Pong!',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            await message.channel.send('Pong!');
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}