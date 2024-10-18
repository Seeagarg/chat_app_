import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {user : {
    id:'',
    email:'',
    fullName:''
}}

console.log(initialState,'initial state')

const UserSlice = createSlice({
    name:'UserSlice',
    initialState,
    reducers:{
        getAuth:(state,action)=>{
            state = initialState;
            return state; 
        },
        setAuth:(state,action)=>{
            state.user = action.payload;
            return state;
        },
        clearData:(state,action)=>{
            state.user.id = '';
            state.user.email = '';
            state.user.fullName = '';
            return state;
        }
    }
})


export const {getAuth,setAuth,clearData} = UserSlice.actions;
export default UserSlice.reducer;