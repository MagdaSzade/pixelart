

export const createWhiteBoard = (height, width) => {
    let whiteBoard = [];
    for (let i = 0; i < height * width; i++) {
        const key = indexToKey(i, width);
        const pixel = { color: 'white', key: key };
        whiteBoard.push(pixel);
    }
    return whiteBoard;
}

export const createGivenBoard =  (pixels, width) => {
    let board = [];
    for (let i = 0; i < pixels.length; i++) {
        const key = indexToKey(i, width);
        const pixel = { color: pixels[i], key: key };
        board.push(pixel);
    }
    return board;
}

export const indexToKey = (index, maxWidth) => {
    const width = (index)%maxWidth;
    const height = Math.floor(index/maxWidth);
    const key = createKey(height, width);
    return key;
}

export const createKey = (height, width) => {
    let key = "";
    if (height < 10) {
        key += "0" + height;
    } else {
        key += height;
    }
    if (width < 10) {
        key += "0" + width;
    } else {
        key += width;
    }
    return key;
}

export const indexOfPixel = (pixelId, maxWidth) => {
    const height = parseInt(pixelId.substring(0, 2));
    const width = parseInt(pixelId.substring(2));
    const index = height * maxWidth + width;
    return index;
}