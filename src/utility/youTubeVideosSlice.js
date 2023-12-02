import { createSlice } from "@reduxjs/toolkit";

const youTubeVideosSlice = createSlice({
    name:"youTubeVideos",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state, action)=>{
            state.videos = action.payload;
        },
        removeVideos:(state,actions) =>{
            state.videos = [];
        }
    }
});


export const { addVideos, removeVideos } = youTubeVideosSlice.actions;
export default youTubeVideosSlice.reducer;