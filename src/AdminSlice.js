import { createSlice } from "@reduxjs/toolkit";
const AdminSclice=createSlice({
    name:"adminuser",
    initialState:{
        adminnm:"",
        iddd:"",
        in:false,      
    },
    reducers:{
        adminlogin:(state,action)=>{
            state.adminnm=action.payload.name;
            state.iddd=action.payload.iddd;
            state.in=true;
        },
        adminLogout:(state,action)=>{
            state.adminnm="";
            state.in=false;
        }
    }
})
export default AdminSclice.reducer;
export const{adminLogout,adminlogin}=AdminSclice.actions;