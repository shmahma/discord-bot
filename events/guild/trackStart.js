module.exports = async(client,queue,track) =>{
    queue.metadata.message.channel.send(`Music ${track.title} is launched`);
}