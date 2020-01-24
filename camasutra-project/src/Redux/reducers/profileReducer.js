import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const UPDATE_PROFILE_DATA = 'profile/UPDATE_PROFILE_DATA';
const initialState = {
    posts: [{
        id: 113,
        message: "Hi how are you ?",
        likesCount: 12
    }, {
        id: 2123,
        message: "It's my first post",
        likesCount: 11
    }, {
        id: 3221,
        message: "Blabla",
        likesCount: 13
    }, {
        id: 4332,
        message: "Dada",
        likesCount: 15
    }],
    profileData: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newProfile = {
                id: Math.floor(Math.random() * 100),
                message: action.newPost,
                likesCount: Math.floor(Math.random() * 100),
            };
            return {
                ...state,
                posts: [...state.posts, newProfile],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST :
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    return p.id !== action.id;
                })
            };
        case SAVE_PHOTO_SUCCESS :
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            };
        case UPDATE_PROFILE_DATA :
            return {
                ...state,
                profileData: {...state.profileData, ...action.profileData}
            };
        default:
            return state;
    }
};

export const addPostAC = (newPost) => ({type: ADD_POST, newPost});
export const setProfileAC = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setUserStatusAC = status => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});
export const deletePostAC = id => ({type: DELETE_POST, id});
export const saveProfileDataAC = profileData => ({type: UPDATE_PROFILE_DATA, profileData});
export default profileReducer;

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    try {
        const profile = await profileAPI.getUserProfile(userId);
        dispatch(setProfileAC(profile));
    } catch (e) {
        console.log(e)
    }
};
export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    try {
        const status = await profileAPI.getStatus(userId);
        dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    try {
        const serverStatus = await profileAPI.updateStatus(status);
        if (serverStatus.data.resultCode === 0) dispatch(setUserStatusAC(status));
    } catch (e) {
        console.log(e)
    }
};
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (e) {
        console.log(e)
    }
};
export const saveProfileDataThunkCreator = (profileData) => async (dispatch) => {
    try {
        const response = await profileAPI.saveProfileData(profileData);
        if (response.data.resultCode === 0) dispatch(saveProfileDataAC(profileData));
    } catch (e) {
        console.log(e)
    }
};