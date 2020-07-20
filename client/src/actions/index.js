export const selectColor = (color) => {
    return {
        type: "SELECTED_COLOR",
        payload: color
    }
}

export const selectSize = (width, height) => {
    const payload = {
        width: width, 
        height: height, 
    }
    return {
        type: "SELECT_SIZE",
        payload: payload
    }
}

export const setPixels = (pixels) => {
    return {
        type: "PIXELS",
        payload: pixels
    }
}