const fetch = require('node-fetch');

const URL = 'https://www.siepomaga.pl/pixelart';

const scrapeId = async (id) => {
    const res = await fetch(URL);
    const html = await res.text();
    const isPayed = html.includes(id);

    return isPayed;
}

module.exports ={
    scrapeId
}