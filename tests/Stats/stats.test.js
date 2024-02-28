const { get100MostVisited } = require('../../src/Stats/stats').private;
const { shorter, getUrl, urls } = require('../../src/Shorter/shorter').public;

describe('get100MostVisited', () => {
    shorter('https://www.google.com');
    shorter('https://www.facebook.com');
    getUrl('a');

    it('should return the 100 most visited urls', () => {
        const mostVisited = get100MostVisited(urls);
        expect(mostVisited).toBeDefined();
        expect(mostVisited).toEqual([
            { shortUrl: 'a', url: 'https://www.google.com', visits: 1 },
            { shortUrl: 'b', url: 'https://www.facebook.com', visits: 0 }
        ]);
        // lets add a visit to the first url and see how it most visited changes
        getUrl('a');
        const mostVisitedSecondTime = get100MostVisited(urls);
        expect(mostVisitedSecondTime).toEqual([
            { shortUrl: 'a', url: 'https://www.google.com', visits: 2 },
            { shortUrl: 'b', url: 'https://www.facebook.com', visits: 0 }
        ]);
    });
});