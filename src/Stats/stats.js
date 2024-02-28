const get100MostVisited = (urls) => {
    return urls
        .sort((a, b) => b.visits - a.visits)
        .slice(0, 100);
}

const FUNCTIONS = { get100MostVisited };

module.exports = { public: FUNCTIONS, private: FUNCTIONS };