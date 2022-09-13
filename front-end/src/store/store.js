import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { uiSlice } from './uiSlice'
import { userSlice } from './userSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: userSlice.reducer,
        ui: uiSlice.reducer
    }
})