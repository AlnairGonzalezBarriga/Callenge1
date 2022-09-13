import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false 
    },
    reducers: {
        onModalOpen: (state) => {
            state.isModalOpen = true
        },
        onModalClose: (state) => {
            state.isModalOpen = false
        },
    }
})

export const { onModalOpen, onModalClose } = uiSlice.actions;