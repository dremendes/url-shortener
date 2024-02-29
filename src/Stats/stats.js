const get100MostVisited = (urls) => {
    const sortedMap = [...urls.entries()].sort((a, b) => b[1].visits - a[1].visits).slice(0, 100);
    return sortedMap;
}

const FUNCTIONS = { get100MostVisited };

module.exports = { public: FUNCTIONS, private: FUNCTIONS };