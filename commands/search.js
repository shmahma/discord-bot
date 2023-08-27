var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

module.exports = {
    name: 'search',
    description: 'Send picture (possibly automatically maybe)',
    async execute( client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('> **Please enter name of the image!**');

        const image_results = await google.scrape(image_query, 1);
        console.log(image_results);
        await message.channel.send("out of service");
        

    }
}