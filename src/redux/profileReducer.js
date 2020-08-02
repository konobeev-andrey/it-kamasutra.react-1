import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'it\'s my first post', likesCount: 20},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, message: action.textPost, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case  DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case  SAVE_PHOTO_SUCCESS:

            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
    }
    return state
}

export const addPostActionCreator = (textPost) => ({type: ADD_POST, textPost})
export const setUserProfile = (profile) => ({profile, type: SET_USER_PROFILE})
export const setStatus = (status) => ({status, type: SET_STATUS})
export const deletePost = (postId) => ({postId, type: DELETE_POST})
export const savePhotoSuccess = (photos) => ({photos, type: SAVE_PHOTO_SUCCESS})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getUser(userId)
            dispatch(setUserProfile(data))
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
       let data = await profileApi.getStatus(userId)
            dispatch(setStatus(data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
       let data = await profileApi.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
       let data = await profileApi.savePhoto(file)
            if (data.resultCode === 0) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
    }
}

export default profileReducer;