module.exports = {
    name: 'help',
    description: 'commands informations',
    async execute(client,message,args,cmd,Discord) {
        if(message.member.roles.cache.has('1128664114235965452')){
            const embed = new Discord.EmbedBuilder()
            .setColor(0xc4121a)
            .setAuthor({ name: 'Souhashi', iconURL: 'https://i.pinimg.com/736x/91/83/8f/91838f80de82e57a0b72c068e17784f3.jpg' })
            .setTitle('Commands list')
            .setDescription('This is a list of all the commands you can use')
            .addFields(
                { name: '$ping' , value: 'Pong!' },
                { name: '$help', value: 'Commands informations'},
                { name: '$rules', value: 'Some rules to respect'},
                { name: '$clear N', value: 'Clear N messages'},
                { name: '$kick @someone', value: 'Kick a member if you are 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬'},
                { name: '$ban @someone', value: 'Ban a member if you are 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬'},
                { name: '$mute @someone time(s,m,d,y)', value: 'Mute a member if you are 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬'},
                { name: '$unmute @someone', value: 'Unmute a member if you are 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬'},
                { name: '$reactionrole', value: 'Create auto role if you are 𝐓𝐡𝐞 𝐁𝐨𝐬𝐬'},
                { name: '$play name of song or url', value: 'Play music'},
                { name: '$leave', value: 'Stop music'},
                { name: '$spam message', value: 'spam message'},
                { name: '$giverole rolename @someone', value: 'to give roles'},
                { name: '$removerole rolename @someone', value: 'to remove roles'},
                

                
            )
            .setImage('https://i.ytimg.com/vi/B96Y3eyhBBE/maxresdefault.jpg')
            .setFooter({ text: 'Make sure to read this', iconURL: 'https://img.wattpad.com/3776eea396dd39d884c079072c22924bd262d57f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f42416c41387937345973577038513d3d2d3839343338383430302e313631333831353961303964396161303437323837373938343330342e6a7067?s=fit&w=720&h=720' });
            await message.channel.send({embeds: [embed]});
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}