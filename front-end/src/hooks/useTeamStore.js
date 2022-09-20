import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"
import Swal from 'sweetalert2'

import { onEndUpdate, onLoadTeams, onCreateTeam, onUpdateTeam, onSetActiveTeam, onStartUpdate, onDeleteTeam, onUpdateTeamMember } from "../store/teamSlice"

export const useTeamStore = () => {

    const dispatch = useDispatch()
    const { teams, activeTeam, isUpdating } = useSelector(state => state.teams)

    const startLoadingTeams = async () => {
        try {
            const { data } = await challengeApi.get('/teams')
            const teams = data.teams
            dispatch(onLoadTeams(teams))
        } catch (error) {
            console.log('Error al cargar teams')
        }
    }

    const startUpload = async (team, teamId) => {
        if (isUpdating === true) {
            try {
                await challengeApi.put((`/teams/${teamId}`), team)
                dispatch(onUpdateTeam(team))
                dispatch(onEndUpdate())
                Swal.fire({ icon: 'success', title: 'Equipo editado con exito' })
                return;
            } catch (error) {
                console.log(error)
                Swal.fire('Error', error.response.data.msg, 'error')
            }
        } else {
            try {
                const { data } = await challengeApi.post('/teams', team)
                dispatch(onCreateTeam({...team, _id: data.team._id}))
                Swal.fire({ icon: 'success', title: 'Equipo creado con exito' })
            } catch (error) {
                console.log(error)
                Swal.fire('Error', error.response.data.msg, 'error')
            }
        }
    }

    const setUpdateStatus = () => {
        dispatch(onStartUpdate())
    }

    const startDeleting = async (teamId) => {
        try {
            await challengeApi.delete((`/teams/${teamId}`))
            dispatch(onDeleteTeam(teamId))
            Swal.fire({ icon: 'success', title: 'Equipo eliminado con exito' })
        } catch (error) {
            console.log(error)
            Swal.fire('Error', error.response.data.msg, 'error')
        }

    }

    const startAddingMember = async (teamId, memberId) => {
        try {
            const {data} = await challengeApi.put((`/teams/addTeamMember/${teamId}`), {addId: memberId})
            dispatch(onUpdateTeamMember({...data.team, teamMembers: data.team.teamMembers}))
            Swal.fire({ icon: 'success', title: 'Equipo editado con exito' })
        } catch (error) {
            console.log(error)
            Swal.fire('Error', error.response.data.msg, 'error')
        }
    }

    const startDeletingMember = async (teamId, memberId) => {
        try {
            const {data} = await challengeApi.put((`/teams/deleteTeamMember/${teamId}`), {deleteId: memberId})
            dispatch(onUpdateTeam({...data.team, teamMembers: data.team.teamMembers}))
            Swal.fire({ icon: 'success', title: 'Equipo editado con exito' })
        } catch (error) {
            console.log(error)
            Swal.fire('Error', error.response.data.msg, 'error')
        }
    }

    const setActiveTeam = (activeTeam) => {
        dispatch(onSetActiveTeam(activeTeam))
    }

    return {
        //Propiedades
        teams,
        activeTeam,

        //Metodos
        startLoadingTeams,
        startUpload,
        setUpdateStatus,
        startDeleting,
        startAddingMember,
        startDeletingMember,
        setActiveTeam

    }
}