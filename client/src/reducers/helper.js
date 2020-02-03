export default function createAnEmptyPixelArt() {
    const height = 250;
    const width = 250;
    const canva = new Array(height);
    for (let i = 0; i < height; i++) {
            canva[i] = new Array(width);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let color = 100 + i;
            color = '#' + color;
            canva[i][j] = color;
        } 
    }

    return canva;
}