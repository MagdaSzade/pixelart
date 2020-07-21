import { combineReducers } from "redux";

import { createWhiteBoard } from '../helpers/key';


const selectedColorReducer = (selectedColor = "red", action) => {
    switch (action.type) {
        case "SELECTED_COLOR":
            return action.payload;
        default:
            return selectedColor;
    }
}

const sizeReducer = (size = { width: 10, height: 10 }, action) => {
    switch (action.type) {
        case ("SELECT_SIZE"):
            return action.payload;
        default:
            return size;
    }
}

const pixelsReducer = (pixels = createWhiteBoard(10, 10), action) => {
    switch (action.type) {
        case ("PIXELS"):
            return action.payload;
        default:
            return pixels;
    }
}


export default combineReducers({
    selectedColor: selectedColorReducer,
    size: sizeReducer,
    pixels: pixelsReducer,
});