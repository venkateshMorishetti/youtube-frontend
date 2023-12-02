import { configureStore } from '@reduxjs/toolkit'
import subscribtionSliceReducer from './subscribtionSlice';
import appConfigSliceReducer from './appConfigSlice';
import youtubeVideosSliceReducer from './youTubeVideosSlice';

const store = configureStore({
    reducer:{
        subscriptions:subscribtionSliceReducer,
        appconfig: appConfigSliceReducer,
        youTubeVideos: youtubeVideosSliceReducer
    }
})

export default store;