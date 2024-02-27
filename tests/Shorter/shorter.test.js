const { shorter, getUrl } = require('../../src/Shorter/shorter.js').private;

describe('shorter', () => {
    it('should return a short url', () => {
        const url = 'https://www.google.com';
        const shortUrl = shorter(url);
        expect(shortUrl).toBeDefined();
        expect(shortUrl).toEqual('1mw');
    });
});
