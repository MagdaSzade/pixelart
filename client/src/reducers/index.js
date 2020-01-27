import { combineReducers } from "redux";

const contentViewReducer = (view = "SHOW_ART", action) => {
    switch (action.type) {
        case "SHOW_ART":
            return "SHOW_ART";
        case "CREATE_ART":
            return "CREATE_ART";
        default:
            return view;
    }
}

export default combineReducers({
    actualView: contentViewReducer
});