module.exports = {
    name: 'unmute',
    description: 'Unmute a member from the server',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                const member = message.mentions.users.first();
                if(member){
                    let mainRole= message.guild.roles.cache.find(role => role.name === 'LesZhomes');
                    let muteRole= message.guild.roles.cache.find(role => role.name === 'Mute');

                    let memberName= message.guild.members.cache.get(member.id);
                    memberName.roles.add(mainRole.id);
                    memberName.roles.remove(muteRole.id);
                    await message.channel.send(`${memberName} has been unmuted`);
                }
                else{
                    message.channel.send('Please mention an user to unmute');
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