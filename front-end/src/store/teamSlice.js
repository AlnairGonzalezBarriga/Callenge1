import { createSlice } from '@reduxjs/toolkit'

export const teamSlice = createSlice({
    name: 'teams',
    initialState: {
        loadStatus: true,
        teams: [],
        teamMembers: [],
        activeTeam: null,
        isUpdating: false
    },
    reducers: {
        onLoadTeams: (state, { payload = [] }) => {
            state.loadStatus = false;
            payload.forEach(team => {
                const exists = state.teams.some(dbTeam => dbTeam._id === team._id)
                if (!exists) {
                    state.teams.push(team)
                }
            });
        },
    }
})

export const { onLoadTeams } = teamSlice.actions;