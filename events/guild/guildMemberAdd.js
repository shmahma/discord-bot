module.exports = (Discord, client,guildMember)=>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "LesZhomes");
    guildMember.roles.add(welcomeRole);
    const embed = new Discord.EmbedBuilder()
            .setColor(0xffd966)
            .setAuthor({ name: 'Souhashi', iconURL: 'https://i.pinimg.com/736x/91/83/8f/91838f80de82e57a0b72c068e17784f3.jpg' })
            .addFields(
                { name:  `Welcome !` , value: `Welcome ${guildMember} to the server!` },
            )
            .setImage('https://media.tenor.com/MNtqvOEE5Z0AAAAC/zenitsu-zenitsu-agatsuma.gif')
    guildMember.guild.channels.cache.get('1091349261037342733').send({embeds: [embed]});
       
}