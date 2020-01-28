
import {authMeThunkCreator} from "../auth/thunks";
import {initializingSuccess} from "../../reducers/app/actions";

export const initializeApp = () => async (dispatch: any) => {
        try {
            const promise = await dispatch(authMeThunkCreator());
            dispatch(initializingSuccess());
        }
        catch (e) {
            console.log(e)
        }
};