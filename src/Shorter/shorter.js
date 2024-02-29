const urls = new Map();
let counter = 0;

const generateShortUrl = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789$-_.+!*'(),";
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
    urls.set(shortUrl, { url, shortUrl, visits: 0 });
    return shortUrl;
};

const getUrl = (shortUrl) => {
    const url = urls.get(shortUrl);
    
    if (url) {
        url.visits++;
    }
    
    return url?.url || false;
};

const addTitleToUrl = (shortUrl, title) => {
    const foundUrl = urls.get(shortUrl);
    
    if (foundUrl) {
        foundUrl.title = title;
    }

    return foundUrl;
}


const FUNCTIONS_AND_DATA = { shorter, getUrl, generateShortUrl, addTitleToUrl, urls };

module.exports = { 
    private: FUNCTIONS_AND_DATA,
    public: {
        shorter,
        getUrl,
        addTitleToUrl,
        urls
    }
};