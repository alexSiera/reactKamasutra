const SET_NEWS_VALUE = 'SET-NEWS-VALUE';
const ADD_NEWS = 'ADD-NEWS';
const initialState = {
    newsData: [{
        id: 1131,
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        autor: 'Andrew',
        message: 'BBC News provides trusted World and UK news as well as local and regional perspectives. ... The latest global news, sport, weather and documentaries.'
    }, {
        id: 2456,
        img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        autor: 'Nike',
        message: 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
    }, {
        id: 343,
        img: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        autor: 'Micle',
        message: 'Latest breaking news, including politics, crime and celebrity. Find stories, updates and expert opinion.'
    }],
    newsPageInput: ''
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            const newNews = {
                id: Math.floor(Math.random() * 100),
                img: 'http://ldfl.ru/wp-content/uploads/2017/09/news.jpg',
                autor: "Someone",
                message: state.newsPageInput
            }
            return {
                ...state,
                newsData: [...state.newsData, newNews],
                newsPageInput: ''
            }
            break;
        case SET_NEWS_VALUE:
            return {
                ...state,
                newsPageInput: action.newValue
            }
        default:
            break;
    }
    return state;
}

export const addNewsActionCreator = () => {
    return {
        type: ADD_NEWS,
    }
}
export const updateNewsActionCreator = (newValue) => {
    return {
        type: SET_NEWS_VALUE,
        newValue: newValue
    }
}
export default newsReducer;