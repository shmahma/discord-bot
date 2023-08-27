const voice = require('@discordjs/voice');
module.exports = {
    name: 'stop',
    description: 'stop the bot and leave the chnnel',
    aliases: ['leave','s'],
    async execute(client,message, args,Discord) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');
        await voice.getVoiceConnection(message.guild.id).disconnect();
        await message.channel.send('Left the voice channel! :smiling_face_with_tear:');

    }
}
        