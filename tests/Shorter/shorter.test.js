const { shorter, getUrl, get100MostVisited } = require('../../src/Shorter/shorter.js').private;

describe('shorter', () => {
    it('should return a short url', () => {
        const url = 'https://www.google.com';
        const shortUrl = shorter(url);
        expect(shortUrl).toBeDefined();
        expect(shortUrl).toEqual('a');
    });

    it('the next site should be named b', () => {
        const url = 'https://www.facebook.com';
        const shortUrl = shorter(url);
        expect(shortUrl).toBeDefined();
        expect(shortUrl).toEqual('b');
    });
});

describe('getUrl', () => {
    it('should return the original url', () => {
        const shortUrl = 'a';
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
            { shortUrl: 'a', url: 'https://www.google.com', visits: 1 },
            { shortUrl: 'b', url: 'https://www.facebook.com', visits: 0 }
        ]);
        getUrl('a');
        const mostVisitedSecondTime = get100MostVisited();
        expect(mostVisitedSecondTime).toEqual([
            { shortUrl: 'a', url: 'https://www.google.com', visits: 2 },
            { shortUrl: 'b', url: 'https://www.facebook.com', visits: 0 }
        ]);
    });
});