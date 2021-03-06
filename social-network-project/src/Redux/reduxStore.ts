import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dialogsReducer from './reducers/dialogsReducer';
import newsReducer from './reducers/newsReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  newsPage: newsReducer,
  profilePage: profileReducer,
  sidebarData: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// window.__store__ = store;
export default store;
