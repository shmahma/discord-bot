const ms=require('ms');
module.exports = {
    name: 'mute',
    description: 'Mute a member from the server',
    async execute(client,message, args) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                const member = message.mentions.users.first();
                if(member){
                    let mainRole= message.guild.roles.cache.find(role => role.name === 'LesZhomes');
                    let muteRole= message.guild.roles.cache.find(role => role.name === 'Mute');

                    let memberName= message.guild.members.cache.get(member.id);
                    if(!args[1]){
                        memberName.roles.remove(mainRole.id);
                        memberName.roles.add(muteRole.id);
                        await message.channel.send(`${memberName} has been muted`);
                        return;
                    }
                    
                    memberName.roles.remove(mainRole.id);
                    memberName.roles.add(muteRole.id);
                    await message.channel.send(`${memberName} has been muted for ${ms(ms(args[1]))}`);
                    setTimeout(() => {
                        memberName.roles.add(mainRole.id);
                        memberName.roles.remove(muteRole.id);
                    }, ms(args[1]));
                }
                else{
                    message.channel.send('Please mention an user to mute');
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