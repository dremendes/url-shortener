const { addTitleToUrl, urls } = require('../Shorter/shorter').public;
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

const addTitlesJob = async () => {
    cron.schedule('* * * * *', async () => { 
        [...urls.values()]
            .filter(url => !url.title)
            .forEach(async key => {
                try {
                    const response = await axios.get(key.url);
                    const $ = cheerio.load(response.data);
                    const title = $('title').text();
                    
                    addTitleToUrl(key.shortUrl, title);
                } catch (error) {
                    console.error(`Error fetching title for ${key.url}: ${error.message}`);
                }
            })
        ;
    });
    console.log('Titles adder Cron Job started!');
};

module.exports = { 
    public: { addTitlesJob},
    private: { addTitlesJob }  
};