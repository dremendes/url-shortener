const express = require('express');
const { shorter, getUrl } = require('./Shorter/shorter.js').public;
const app = express();

app.use(express.json());

// curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.google.com"}' http://localhost:3000/shorten
app.post('/shorten', (req, res) => {
    const { url } = req.body;
    const shortUrl = shorter(url);
    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}` });
});

// curl -X GET -L http://localhost:3000/1mw
app.get('/:shortUrl', (req, res) => {
    const { shortUrl } = req.params;
    const originalUrl = getUrl(shortUrl);
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
