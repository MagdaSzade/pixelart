import database from '../api/database';

export const createArt = () => {
    return {
        type: "CREATE_ART"
    }
}

export const showArt = () => {
    return {
        type: "SHOW_ART"
    }
}

export const selectColor = (color) => {
    return {
        type: "SELECT_COLOR",
        payload: color
    }
}

export const widthOfPixelArt = (width) => {
    return {
        type: "WIDTH",
        payload: width
    }
}

export const heightOfPixelArt = (height) => {
    return {
        type: "HEIGHT",
        payload: height
    }
}

export const fetchView = () => async (dispatch) => {
    const response = await database.get('/api/view');
    console.log(response);
    const view = response.data.view;
    dispatch({
        type: "VIEW_DATA",
        payload: view
    });
}

//export const fetchMovies = () => async (dispatch) => {
//    const response = await database.get('/api/movies');
//    const movies = response.data.data;
//    dispatch( {
//        type: "MOVIES_LIST",
//        payload: movies
//    })
//}