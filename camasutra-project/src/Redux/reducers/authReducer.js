import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            break
    }
    return state;
}
export const setAuthUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

export const authMeThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(authData => {
            const {id, email, login} = authData;
            dispatch(setAuthUserDataAC(id, email, login));
        })
    }
}

export default authReducer;