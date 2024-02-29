const express = require('express');
const { shorter, getUrl, urls} = require('./Shorter/shorter.js').public;
const { get100MostVisited } = require('./Stats/stats.js').public;
const { addTitlesJob } = require('./Jobs/jobs.js').public;
const { populateDatabase } = require('./Bots/databasePopulator.js').public;
const app = express();

app.use(express.json());

// curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.google.com"}' http://localhost:3000/shorten
app.post('/shorten', (req, res) => {
    const { url } = req.body;
    const shortUrl = shorter(url);
    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}` });
});

//  curl -X GET http://localhost:3000/100mostVisited
app.get('/100mostVisited', (req, res) => {
    res.json(get100MostVisited(urls));
});

// curl -X GET -L http://localhost:3000/a
app.get('/:shortUrl', (req, res) => {
    const { shortUrl } = req.params;
    const originalUrl = getUrl(shortUrl);
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(3000, async () => {
    await addTitlesJob();
    populateDatabase();
    console.log('Server running on port 3000');
});
