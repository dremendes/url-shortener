const urls = [];

const generateShortUrl = (url) => {
    return url.split('').reduce((acc, char) => {
        const charCode = char.charCodeAt(0);
        return acc + charCode;
    }, 0).toString(36);
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

const get100MostVisited = () => {
    return urls
        .sort((a, b) => b.visits - a.visits)
        .slice(0, 100);
}

const FUNCTIONS = { shorter, getUrl, generateShortUrl, get100MostVisited };

module.exports = { 
    private: FUNCTIONS,
    public: {
        shorter,
        getUrl,
        get100MostVisited
    }
};