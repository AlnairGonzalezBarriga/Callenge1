import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        loadStatus: true,
        users: [],
        activeUser: null,
    },
    reducers: {
        onLoadUsers: (state, { payload = [] }) =>{
            state.loadStatus = false;
            payload.forEach(user => {            
                const exists = state.users.some( dbUser => dbUser._id === user._id )
                if( !exists ){
                    state.users.push( user )                    
                }            
            });
        },
        onLogoutUsers: (state) =>{
            state.loadStatus = true
            state.users = []
            state.activeUser = null
        },
    }
})

export const { onLoadUsers, onLogoutUsers } = userSlice.actions;