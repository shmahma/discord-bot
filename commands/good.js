module.exports = {
    name: 'good',
    description: 'good',
    async execute(client,message, args,cmd,Discord,) {
        if(message.member.roles.cache.has('1128664114235965452')){
            if(message.member.roles.cache.has('1124785618812162181')){
                while(true){
                    let goodboolean = false;
                    let dateObject = new Date();
                    let hours = dateObject.getHours();
                    let minutes = dateObject.getMinutes();
                    let seconds = dateObject.getSeconds();
                    let goodmessage = "";
                    let image = "";
                    let isFriday = dateObject.getDay() === 5; 
                    let isFridayEvening = isFriday && hours === 22 && minutes === 0 && (seconds===0 || seconds===1); 
                    let isFridayMorning = isFriday && hours === 12-2 && minutes === 0 && (seconds===0 || seconds===1) ;

                    if (isFridayEvening) {
                        goodboolean = true;
                        goodmessage = 'Have a good weekend!';
                        image = 'https://i.pinimg.com/originals/b8/15/24/b81524efb1dfb43f2f0eec62e6a91cc0.gif'; 
                    } 
                    if (isFridayMorning) {
                        goodboolean = true;
                        goodmessage = 'Joumou3a Moubaraka!';
                        image = 'https://64.media.tumblr.com/08a6226fa4366fd86ca961f82dbec429/e1806311d9dc3b33-6a/s1280x1920/b823429e71c0c3aee049d84d9284fc6ff03f67b4.gif';
                      }
                    if (hours === 8-2 && minutes === 0 && seconds === 0) {
                        goodboolean = true;
                        goodmessage = 'Good morning!';
                        image= 'https://puxadinhogeek.com.br/wp-content/uploads/2020/04/2_image-asset.gif';
                    } if (hours === 12-2 && minutes === 0 && seconds === 0) {
                        goodboolean = true;
                        goodmessage = 'Good afternoon!';
                        image='https://media.tenor.com/j1-zeDg96xsAAAAC/tanjiro-inosuke.gif';
                    } if (hours === 18-2 && minutes === 0 && seconds === 0) {
                        goodboolean = true;
                        goodmessage = 'Good evening!';
                        image='https://www.gifcen.com/wp-content/uploads/2021/02/demon-slayer-gif-12.gif';
                    }
                      if(hours === 22 && minutes === 0 && seconds === 0){
                        goodboolean = true;
                        goodmessage = 'Good night!';
                        image='https://usagif.com/wp-content/uploads/2022/fzk5d/demon-slayer-anime-acegif-55.gif';
                    }
                      if(goodboolean){
                        const embed = new Discord.EmbedBuilder()
                        .setColor(0xc4121a)
                        .setAuthor({ name: 'Souhashi', iconURL: 'https://i.pinimg.com/736x/91/83/8f/91838f80de82e57a0b72c068e17784f3.jpg' })
                        .setTitle(goodmessage + '!')
                        .setImage(image);
                        await message.channel.send({embeds: [embed]});
                    }
                    // Attendre une seconde avant de vérifier à nouveau l'heure
                    await new Promise(resolve => setTimeout(resolve, 1000));
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

