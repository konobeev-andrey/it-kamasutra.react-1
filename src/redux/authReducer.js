import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching : false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
    }
    return state
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})

export const getAuthUserData = () => {
    return async (dispatch) => {
       let response = await authApi.me()
            if(response.resultCode === 0 ){
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
       let response =  await authApi.login(email, password, rememberMe)
            if(response.resultCode === 0 ){
                dispatch(getAuthUserData())
            }
            else{
                let message = response.messages.length > 0 ? response.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}));
            }
    }
}
export const logout = () => {
    return async (dispatch) => {
       let response = await authApi.logout()
            if(response.resultCode === 0 ){
                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}


export default authReducer;