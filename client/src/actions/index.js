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

export const isNotBlank = () => {
    return {
        type: "NOT_BLANK",
    }
}

export const sizeOfPixelArt = (width, height, blank) => {
    const payload = {
        width: width, 
        height: height, 
        blank: blank 
    }
    return {
        type: "SELECT_SIZE",
        payload: payload
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

export const popupLogin = () => {
    return {
        type: "LOGIN_POPUP",
    }
}

export const popupRegister = () => {
    return {
        type: "REGISTER",
    }
}

export const popupInfo = () => {
    return {
        type: "INFO",
    }
}

export const popupNone = () => {
    return {
        type: "NONE",
    }
}

export const login = (token) => {
    return {
        type: "LOGIN",
        payload: token
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
        payload: null
    }
}

//export const fetchMovies = () => async (dispatch) => {
//    const response = await database.get('/api/movies');
//    const movies = response.data.data;
//    dispatch( {
//        type: "MOVIES_LIST",
//        payload: movies
//    })
//}