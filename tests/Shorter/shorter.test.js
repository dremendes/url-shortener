const { shorter, getUrl, get100MostVisited } = require('../../src/Shorter/shorter.js').private;

describe('shorter', () => {
    it('should return a short url', () => {
        const url = 'https://www.google.com';
        const shortUrl = shorter(url);
        expect(shortUrl).toBeDefined();
        expect(shortUrl).toEqual('1mw');
    });
});

describe('getUrl', () => {
    it('should return the original url', () => {
        const shortUrl = '1mw';
        const url = getUrl(shortUrl);
        expect(url).toBeDefined();
        expect(url).toEqual('https://www.google.com');
    });
});

describe('get100MostVisited', () => {
    it('should return the 100 most visited urls', () => {
        const mostVisited = get100MostVisited();
        expect(mostVisited).toBeDefined();
        expect(mostVisited).toEqual([
            { shortUrl: '1mw', url: 'https://www.google.com', visits: 1 }
        ]);
        getUrl('1mw');
        const mostVisitedSecondTime = get100MostVisited();
        expect(mostVisitedSecondTime).toEqual([
            { shortUrl: '1mw', url: 'https://www.google.com', visits: 2 }
        ]);
    });
});