import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false,
        isUserModalOpen: false, 
    },
    reducers: {
        onModalOpen: (state) => {
            state.isModalOpen = true
        },
        onModalClose: (state) => {
            state.isModalOpen = false
        },
        onUserModalListOpen: (state) => {
            state.isUserModalOpen = true
        },
        onUserModalListclose: (state) => {
            state.isUserModalOpen = false
        },
    }
})

export const { onModalOpen, onModalClose, onUserModalListOpen, onUserModalListclose } = uiSlice.actions;