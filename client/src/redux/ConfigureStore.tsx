import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from 'react-redux'
import Item from '../redux/Items'
import { useDispatch ,useSelector} from 'react-redux'


const rootReducer = combineReducers({Item})
const store = configureStore({
    reducer:{
        Item
    },

  })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
