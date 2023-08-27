module.exports = {
    name: 'giverole',
    description: 'give  roles',
    async execute(client,message, args,Discord) {
        
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                const role = message.guild.roles.cache.find(r => r.name === args[0]);
                const member = message.mentions.users.first();
                if(member){
                    const memberName=message.guild.members.cache.get(member.id);
                    memberName.roles.add(role.id);
                    message.channel.send(`Hey Hey! ${memberName} has new role ::thumbsup: ${args[0]} :thumbsup:`);
                }
                else{
                    message.channel.send('Please mention someone to give him role');
                }
            }
            else{
                    message.channel.send('Just who have 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬 role can use this command');
            }
        }
        else{
            message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}