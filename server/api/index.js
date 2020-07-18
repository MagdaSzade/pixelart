const fetch = require('node-fetch');

const URL = 'https://www.siepomaga.pl/pixelart';

const scrapeId = async (id) => {
    const res = await fetch(URL);
    const html = await res.text();
    const isPaid = html.includes(id);

    return isPaid;
}

module.exports ={
    scrapeId
}