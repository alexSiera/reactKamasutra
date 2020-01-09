// const ADD_USER = 'ADD-USER';
// const UPDATE_USER = 'UPDATE-USER';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SELECT_PAGE = 'SELECT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

// const initialState  = {
//     users: [{
//         id: 1,
//         userName: {
//             firstName: 'Alex',
//             lastName: 'K',
//             nickname: 'AK'
//         },
//         photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//         status: 'I am looking for a job right now',
//         creationTime: Date.now(),
//         followed: false,
//         location: {
//             country: 'Belarus',
//             region: '',
//             city: 'Minks',
//         },
//     },
//         {
//             id: 2,
//             userName: {
//                 firstName: 'German',
//                 lastName: 'Fauler',
//                 nickname: 'GF'
//             },
//             status: 'No i don\'t understand',
//             creationTime: Date.now(),
//             followed: true,
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             subscribes: [],
//             location: {
//                 country: 'Chernobyl',
//                 region: '',
//                 city: 'Pripyat',
//             },
//         },
//         {
//             id: 3,
//             userName: {
//                 firstName: 'Danil',
//                 lastName: 'B',
//                 nickname: 'DB'
//             },
//             status: 'I\'am boss',
//             creationTime: Date.now(),
//             followed: true,
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             location: {
//                 country: 'Russia',
//                 region: '',
//                 city: 'Yalta',
//             },
//         },
//         {
//             id: 4,
//             userName: {
//                 firstName: 'Tanya',
//                 lastName: 'Ogogo',
//                 nickname: 'TB'
//             },
//             status: 'Hello i\'am Tanya',
//             creationTime: Date.now(),
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             followed: true,
//             location: {
//                 country: 'Russia',
//                 region: 'Rostov-on-Don',
//                 city: 'Taganrog',
//             },
//         }]
// }
// const initialState = {};
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentSelectedPage: 3,
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }
            break;
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
            break;
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
            break;
        case SELECT_PAGE:
            return {
                ...state,
                currentSelectedPage: action.pageNum
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }


        break;
        default: return state;
    }
}
export const followAC = userId => ({type: FOLLOW, userId });
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users})
export const selectPageAC = pageNumber => ({type: SELECT_PAGE, pageNum: pageNumber});
export const setTotalUsersCountAC = usersCount => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount })

export default userReducer;