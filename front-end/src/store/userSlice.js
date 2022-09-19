import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        loadStatus: true,
        users: [],
        activeUser: null,
        isUpdating: false
    },
    reducers: {
        onLoadUsers: (state, { payload = [] }) => {
            state.loadStatus = false;
            payload.forEach(user => {
                const exists = state.users.some(dbUser => dbUser._id === user._id)
                if (!exists) {
                    state.users.push(user)
                }
            });
        },
        onLogoutUsers: (state) => {
            state.loadStatus = true
            state.users = []
            state.activeUser = null
        },
        onSetActiveUser: (state, payload) => {
            state.activeUser = payload
        },
        onCreateUser: (state, {payload}) => {
            state.users.push(payload)
            state.activeUser = null
        },
        onStartUpdate: (state) => {
            state.isUpdating = true
        },
        onEndUpdate: (state) => {
            state.isUpdating = false
        },
    }
})

export const { onLoadUsers, onLogoutUsers, onSetActiveUser, onCreateUser, onStartUpdate, onEndUpdate } = userSlice.actions;