const urls = [];

const generateShortUrl = (url) => {
    return url.split('').reduce((acc, char) => {
        const charCode = char.charCodeAt(0);
        return acc + charCode;
    }, 0).toString(36);
};

const shorter = (url) => {
    const shortUrl = generateShortUrl(url);
    urls.push({ shortUrl, url });
    return shortUrl;
};

const getUrl = (shortUrl) => {
    const originalUrl = urls.filter((url) => url.shortUrl === shortUrl);
    return originalUrl.length > 0 ? originalUrl[0].url : false;
};

const FUNCTIONS = { shorter, getUrl, generateShortUrl };

module.exports = { 
    private: FUNCTIONS,
    public: {
        shorter: FUNCTIONS.shorter,
        getUrl: FUNCTIONS.getUrl 
    }
};