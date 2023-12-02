import { createSlice } from "@reduxjs/toolkit";

const subscriptionsSlice = createSlice({
    name:"subscriptions",
    initialState: {
        channels:[],
        isAllSubscriptionsShown:false
    },
    reducers:{
        addSubscription:(state,action) => {
            state.channels = [];
            action.payload.map((item)=>{
                state.channels.push(item);
            })
        }
        ,
        removeSubscription:(state,action) => {
            state.channels = [];
        },
        updateIsAllSubscriptionsShown:(state,action) => {
            state.isAllSubscriptionsShown = !state.isAllSubscriptionsShown;
        }
    }
})


export const {addSubscription,removeSubscription, updateIsAllSubscriptionsShown} = subscriptionsSlice.actions;
export default subscriptionsSlice.reducer;