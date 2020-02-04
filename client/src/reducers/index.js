import { combineReducers } from "redux";

import helper from './helper';

const contentViewReducer = (view = "CREATE_ART", action) => {
    switch (action.type) {
        case "SHOW_ART":
            return "SHOW_ART";
        case "CREATE_ART":
            return "CREATE_ART";
        default:
            return view;
    }
}

const startData = helper();
const viewDataReducer = (data = startData, action) => {
    switch (action.type) {
        case "VIEW_DATA":
            return action.payload;
        default:
            return data;
    }
}

const selectedColorReducer = (selectedColor = "red", action) => {
    switch (action.type) {
        case "SELECT_COLOR":
            return action.payload;
        default:
            return selectedColor;
    }
}

const sizeReducer = (size = { width: 10, height: 10, blank: true }, action) => {
    switch (action.type) {
        case ("SELECT_SIZE"):
            return action.payload;
        case ("NOT_BLANK"):
            return {
                width: size.width,
                height: size.height,
                blank: false
            }
        default:
            return size;
    }
}

export default combineReducers({
    actualView: contentViewReducer,
    viewData: viewDataReducer,
    selectedColor: selectedColorReducer,
    size: sizeReducer,
});