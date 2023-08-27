module.exports = {
    name: 'reactionrole',
    description: 'Choose your roles',
    async execute(client,message,args,cmd,Discord) {
        
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                const channel = '1128342256781365248';
                const fifa = message.guild.roles.cache.find(r => r.name === 'Fifa');
                const pubg = message.guild.roles.cache.find(r => r.name === 'Pubg');
                const valorant = message.guild.roles.cache.find(r => r.name === 'Valorant');
                
                const fifaEmoji = '⚽';
                const pubgEmoji = '⛑';
                const valorantEmoji = '⚔';

                const embed = new Discord.EmbedBuilder()
                .setColor(0xc4121a)
                .setAuthor({ name: 'Souhashi', iconURL: 'https://i.pinimg.com/736x/91/83/8f/91838f80de82e57a0b72c068e17784f3.jpg' })
                .setTitle('Choose your games')
                .setImage('https://preview.redd.it/hks4uu938ga61.jpg?auto=webp&s=216f71627f2570339837c97f5cb2caee7630e97b')
                .setDescription('This is allow to choose your best games!\n\n'
                + ` ${fifaEmoji}Fifa\n`
                + ` ${pubgEmoji}Pubg\n`
                + ` ${valorantEmoji}Valorant\n`)
                let messageEmbed = await message.channel.send({embeds: [embed]});
                messageEmbed.react(fifaEmoji);
                messageEmbed.react(pubgEmoji);
                messageEmbed.react(valorantEmoji);
                client.on('messageReactionAdd', async (reaction, user)=>{
                    if(reaction.message.partial) await reaction.message.fetch();
                    if(reaction.partial) await reaction.fetch();
                    if(user.bot) return;
                    if(!reaction.message.guild) return;
                    if(reaction.message.channel.id == '1128342256781365248'){
                        if(reaction.emoji.name == fifaEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.add(fifa);
                        }
                        if(reaction.emoji.name == pubgEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.add(pubg);
                        }
                        if(reaction.emoji.name == valorantEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.add(valorant);
                        }
                        else{
                            return;
                        }
                    }
                });
                client.on('messageReactionRemove',async (reaction, user)=>{
                    if(reaction.message.partial) await reaction.message.fetch();
                    if(reaction.partial) await reaction.fetch();
                    if(user.bot) return;
                    if(!reaction.message.guild) return;
                    if(reaction.message.channel.id == '1128342256781365248'){
                        if(reaction.emoji.name == fifaEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(fifa);
                        }
                        if(reaction.emoji.name == pubgEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(pubg);
                        }
                        if(reaction.emoji.name == valorantEmoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(valorant);
                        }
                        else{
                            return;
                        }
                    }
                });
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