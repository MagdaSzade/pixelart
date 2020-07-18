const { scrapeId } = require('../api');

test('find text', async () => {
    const res = await scrapeId('5f0f52155e76773a3011252c');
    expect(res).toBe(true);
});

test('find text', async () => {
    const res = await scrapeId('próba');
    expect(res).toBe(true);
});

test('find text', async () => {
    const res = await scrapeId('dupa-blada');
    expect(res).toBe(false);
});