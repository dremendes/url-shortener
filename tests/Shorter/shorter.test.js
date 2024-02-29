const { shorter, getUrl, addTitleToUrl } = require('../../src/Shorter/shorter.js').private;

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
        const shortUrl = 'a';
        const title = 'Google';
        const urlWithTitle = addTitleToUrl(shortUrl, title);
        expect(urlWithTitle.title).toEqual('Google');
    });
});