const { shorter, getUrl } = require('../Shorter/shorter').public;

const urlList = [
    'https://mendesc.com',
    'https://news.ycombinator.com',
    'https://www.google.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
    'https://www.instagram.com',
    'https://www.linkedin.com',
    'https://www.reddit.com',
    'https://www.github.com'
];

const populateDatabase = () => {
    for (const url of urlList) {
        shorter(url);
    };

    // make some visits to a few websites:
    getUrl('a');
    getUrl('a');
    getUrl('a');
    getUrl('b');
    getUrl('d');
    getUrl('h');

    console.log('DatabasePopulator: Database got populated!');
};

module.exports = { public: { populateDatabase }, private: { populateDatabase } };