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

const selectWidthReducer = (width = 10, action) => {
    switch (action.type) {
        case "WIDTH":
            return action.payload;
        default:
            return width;
    }
}

const selectHeightReducer = (height = 10, action) => {
    switch (action.type) {
        case "HEIGHT":
            return action.payload;
        default:
            return height;
    }
}

export default combineReducers({
    actualView: contentViewReducer,
    viewData: viewDataReducer,
    selectedColor: selectedColorReducer,
    width: selectWidthReducer,
    height: selectHeightReducer
});