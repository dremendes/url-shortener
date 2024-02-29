const { addTitleToUrl, urls } = require('../Shorter/shorter').public;
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

const addTitlesJob = async () => {
    cron.schedule('* * * * *', async () => {
        const titlelessPromises = [...urls.values()]
            .filter(url => !url.title)
            .map(key => {
                return axios.get(key.url)
                .then(response => {
                    const $ = cheerio.load(response.data);
                    const title = $('title').text();
                    addTitleToUrl(key.shortUrl, title);
                })
                .catch(error => {
                    console.error(`Error fetching title for ${key.url}: ${error.message}`);
                });
            });
        
        console.log(`TitlesJob: Fetching titles for ${titlelessPromises.length} titleless urls`);        
        
        await Promise.all(titlelessPromises);
        
        console.log(`TitlesJob: Done for now.`);
    });

    console.log('TitlesJob: Job started!');
};

module.exports = { 
    public: { addTitlesJob},
    private: { addTitlesJob }  
};