import {createSlice} from '@reduxjs/toolkit';
const appConfigSlice = createSlice({
    name:"appConfig",
    initialState: {
        displayHamburgerMenu: false
    },
    reducers:{
        updateToHamburgerMenu: (state, action) => {
            state.displayHamburgerMenu = !state.displayHamburgerMenu;
        }
    }
})


export const {updateToHamburgerMenu} = appConfigSlice.actions;

export default appConfigSlice.reducer;

