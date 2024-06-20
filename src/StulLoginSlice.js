import { createSlice } from "@reduxjs/toolkit"

const StuLoginSlice=createSlice({
    name:"stuuser",
    initialState:{
        user:null,
        loggedIn:false,
        stuid:""
    },
    reducers:{
        login:(state,action)=>{
            state.loggedIn=true
            // state.stuUser=action.payload;
            state.user=action.payload.name;
            state.stuid=action.payload.iddd;
        },
        logout:(state)=>{
            state.user=null;
            state.loggedIn=false
        }
    }
})
export default StuLoginSlice.reducer;
export const {login,logout}=StuLoginSlice.actions;

   