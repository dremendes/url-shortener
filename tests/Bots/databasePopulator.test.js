// write the test for populateDatabase
const { populateDatabase } = require('../../src/Bots/databasePopulator').public;
const { get100MostVisited } = require('../../src/Stats/stats').public;
const { urls } = require('../../src/Shorter/shorter').public;

describe('populateDatabase', () => {
    it('should populate the database', () => {
        populateDatabase();
        const mostVisited = get100MostVisited(urls);
        expect(mostVisited).toEqual([
            ["a", { "url": "https://mendesc.com", "shortUrl":"a", "visits": 3 }],
            ["b", { "url": "https://news.ycombinator.com", "shortUrl":"b", "visits": 1 }],
            ["d", { "url": "https://www.facebook.com", "shortUrl":"d", "visits": 1 }],
            ["h", { "url": "https://www.reddit.com", "shortUrl":"h", "visits": 1 }],
            ["c", { "url": "https://www.google.com", "shortUrl":"c", "visits": 0 }],
            ["e", { "url": "https://www.twitter.com", "shortUrl":"e", "visits": 0 }],
            ["f", { "url": "https://www.instagram.com", "shortUrl":"f", "visits": 0 }],
            ["g", { "url": "https://www.linkedin.com", "shortUrl":"g", "visits": 0 }],
            ["i", { "url": "https://www.github.com", "shortUrl":"i", "visits": 0 }]
        ]);
    });
});