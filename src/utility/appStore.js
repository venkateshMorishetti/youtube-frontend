import { configureStore } from '@reduxjs/toolkit'
import subscribtionSliceReducer from './subscribtionSlice';
import appConfigSliceReducer from './appConfigSlice';
const store = configureStore({
    reducer:{
        subscriptions:subscribtionSliceReducer,
        appconfig: appConfigSliceReducer
    }
})

export default store;