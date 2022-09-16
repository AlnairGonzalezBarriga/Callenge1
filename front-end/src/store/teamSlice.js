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
        onSetActiveTeam: (state, payload) => {
            state.activeTeam = payload
        },
        onCreateUser: (state, {payload}) => {
            state.teams.push = payload
            state.activeTeam = null
        },
        onStartUpdate: (state) => {
            state.isUpdating = true
        },
        onEndUpdate: (state) => {
            state.isUpdating = false
        },
    }
})

export const { onLoadTeams, onSetActiveTeam, onStartUpdate, onEndUpdate } = teamSlice.actions;