import { createSlice } from "@reduxjs/toolkit";

const searchResults = createSlice({
    name:'searchResults',
    initialState:{
        results: {}
    },
    reducers:{
        addSearchResult:(state, action)=>{
            state.results[action.payload.query.trim()] = action.payload.results;
        }
        ,
        getSearchResult:(state,action) =>{
            return state.results[action.payload.query.trim()]
        }
    }
})

export const {addSearchResult, getSearchResult} = searchResults.actions;
export default searchResults.reducer;