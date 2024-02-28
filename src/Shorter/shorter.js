const urls = [];
let counter = 0;

const generateShortUrl = (url) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?~`-=[]\;,./';
    const charsLen = chars.length;
    let result = '';
    let num = counter++;
    do {
        result = chars[num % charsLen] + result;
        num = Math.floor(num / charsLen);
    } while (num > 0);
    return result;
};

const shorter = (url) => {
    const shortUrl = generateShortUrl(url);
    urls.push({ shortUrl, url, visits: 0});
    return shortUrl;
};

const getUrl = (shortUrl) => {
    const originalUrl = urls.filter((url) => url.shortUrl === shortUrl);
    
    if (originalUrl.length > 0) {
        originalUrl[0].visits++;
    }
    
    return originalUrl.length > 0 ? originalUrl[0].url : false;
};



const FUNCTIONS = { shorter, getUrl, generateShortUrl };

module.exports = { 
    private: FUNCTIONS,
    public: {
        shorter,
        getUrl,
        urls
    }
};