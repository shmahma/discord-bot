module.exports = {
    name: 'kick',
    description: 'Kick a member from the server',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                const member = message.mentions.users.first();
                if(member){
                    const memberName=message.guild.members.cache.get(member.id);
                    memberName.kick();
                    message.channel.send(`${memberName} has been kicked`);
                }
                else{
                    message.channel.send('Please mention an user to kick');
                }
            }
            else{
                    await message.channel.send('Just who have 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬 role can use this command');
            }
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}