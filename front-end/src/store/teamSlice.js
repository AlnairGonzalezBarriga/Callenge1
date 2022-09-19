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
        onCreateTeam: (state, { payload }) => {
            state.teams.push(payload)
            state.activeTeam = null
        },
        onUpdateTeam: (state, { payload }) => {
            state.teams = state.teams.map(team => {
                if (team._id === payload._id) {
                    return payload
                }
                state.activeTeam = null
                return team
            })            
        },
        onDeleteTeam: (state, { payload }) => {
            state.teams = state.teams.filter(team => team._id !== payload)
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

export const {
    onLoadTeams,
    onSetActiveTeam,
    onCreateTeam,
    onUpdateTeam,
    onDeleteTeam,
    onStartUpdate,
    onEndUpdate } = teamSlice.actions;