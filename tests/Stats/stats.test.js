const { get100MostVisited } = require('../../src/Stats/stats').private;
const { shorter, getUrl, urls } = require('../../src/Shorter/shorter').public;

describe('get100MostVisited', () => {
    // so we short a couple of sites and visit the first one
    shorter('https://www.google.com');
    shorter('https://www.facebook.com');
    getUrl('a');

    it('should return the 100 most visited urls', () => {
        const mostVisited = get100MostVisited(urls);
        expect(mostVisited).toBeDefined();
        expect(mostVisited).toEqual([
            [ 'a', { url: 'https://www.google.com', shortUrl: 'a', visits: 1 } ],
            [ 'b', { url: 'https://www.facebook.com', shortUrl: 'b', visits: 0 } ]
        ]);
        // lets add a visit to the first url and see how it most visited changes
        getUrl('a');
        const mostVisitedSecondTime = get100MostVisited(urls);
        expect(mostVisitedSecondTime).toEqual([
            [ 'a', { url: 'https://www.google.com', shortUrl: 'a', visits: 2 } ],
            [ 'b', { url: 'https://www.facebook.com', shortUrl: 'b', visits: 0 } ]
        ]);
    });
});