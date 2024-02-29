const { shorter, getUrl, addTitleToUrl, urls } = require('../../src/Shorter/shorter.js').private;
const { get100MostVisited } = require('../../src/Stats/stats.js').public;

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

    it('should return false if the url is not found', () => {
        const shortUrl = 'z';
        const url = getUrl(shortUrl);
        expect(url).toBeFalsy();
    });
});

describe('addTitleToUrl', () => {
    it('should add a title to the url', () => {
        const url = 'https://www.google.com';
        const shortUrl = shorter(url);
        const title = 'Google';

        addTitleToUrl(shortUrl, title);
        const result = get100MostVisited(urls);
        const [ filtered ] = result.filter((item) => item[0] === shortUrl);
        expect(filtered[1].title).toEqual('Google');
    });
});