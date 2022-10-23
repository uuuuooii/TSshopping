import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Item from '../redux/Items'

const rootReducer = combineReducers({
    Item
    
});
const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;
export default store;
