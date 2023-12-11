import { configureStore } from '@reduxjs/toolkit'
import subscribtionSliceReducer from './subscribtionSlice';
import appConfigSliceReducer from './appConfigSlice';
import youtubeVideosSliceReducer from './youTubeVideosSlice';
import searchResults from './searchResults';

const store = configureStore({
    reducer:{
        subscriptions:subscribtionSliceReducer,
        appconfig: appConfigSliceReducer,
        youTubeVideos: youtubeVideosSliceReducer,
        searchResults: searchResults
    }
})

export default store;