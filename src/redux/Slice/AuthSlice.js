import { createSlice } from "@reduxjs/toolkit";

const AuthSlice =createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        isLogin:false
    },
    reducers: {
    login:(state,action)=>{
        state.user=action.payload,
        state.isLogin=true
    },
    logOut: (state,action)=>{
        state.user=null,
        state.isLogin=false
    }

}

})

export const {login,logOut}=AuthSlice.actions;
export default AuthSlice.reducer
