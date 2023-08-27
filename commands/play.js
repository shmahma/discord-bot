const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { AudioPlayerStatus,createAudioPlayer,createAudioResource,joinVoiceChannel } = require("@discordjs/voice");;
module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    aliases: ['p',],
    async execute(client,message, args,Discord) {
        if(message.member.roles.cache.has('1128664114235965452')){
           const voiceChannel = message.member.voice.channel; 
           if(!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');
           const permissions = voiceChannel.permissionsFor(message.client.user);
           if(!permissions.has('CONNECT') ||!permissions.has('SPEAK')) return message.channel.send('You don t have the permission');
           if(!args.length) return message.channel.send('You need to give me a video to play');
           const validURL = (str)=>{
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if(!regex.test(str)){
                    return false;
                }
                return true;
           }
           if(validURL(args[0])){
               const connection = joinVoiceChannel(
                {
                    channelId: message.member.voice.channel.id,
                    guildId: message.guild.id,
                    adapterCreator: message.guild.voiceAdapterCreator
                }); 
                const stream = ytdl(args[0],{filter: 'audioonly'});
                const player = createAudioPlayer();
                const ressource = createAudioResource(stream);
                await player.play(ressource);
                connection.subscribe(player);
                player.on('error', (error) => console.error(error));
                player.on(AudioPlayerStatus.Idle, () => {
                    console.log(`song's finished`);
                    connection.disconnect();
                });
                await message.reply(`:thumbsup: Now Playing ***from the link***`);
                return;
            }
            
           
           const connection = joinVoiceChannel(
            {
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator
            }); 
           const videoFinder = async(query) =>{
                const VideoResult = await ytSearch(query);
                return(VideoResult.videos.length > 1)? VideoResult.videos[0] : null;
            }
            const video = await videoFinder(args.join(' '));
            if(video){
                const stream = ytdl(video.url,{filter: 'audioonly'});
                const player = createAudioPlayer();
                const ressource = createAudioResource(stream);
                await player.play(ressource);
                connection.subscribe(player);
                player.on('error', (error) => console.error(error));
                player.on(AudioPlayerStatus.Idle, () => {
                    console.log(`song's finished`);
                    connection.disconnect();
                });
                await message.reply(`:thumbsup: Now Playing ***${video.title}***`);
            }
            else{
                await message.channel.send('No video found');
            }
        }
        else{
            await message.channel.send('Ask @souhashi or @erenox. to give you permission to use souhashi s slave');
        }
    }
}