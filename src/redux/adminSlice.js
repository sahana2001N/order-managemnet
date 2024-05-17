import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        loginStatus: false,
        loggedInUser: '',
        jwtToken: ''
    },
    reducers: {
       
        adminLogin: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload.user;
            state.jwtToken = action.payload.token;
            state.loginStatus = true;
        },
        
    }
});

export default AdminSlice.reducer;

export const { adminLogin} = AdminSlice.actions;
