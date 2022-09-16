import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"
import Swal from 'sweetalert2'

import { onEndUpdate, onLoadTeams, onSetActiveTeam } from "../store/teamSlice"

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
            /* try {
                await challengeApi.put((`/auth/${userId}`), user)
                dispatch(onEndUpdate())
                return;
            } catch (error) {
                console.log(error)
            } */
        } else {
            try {
                await challengeApi.post('/teams', team)
                Swal.fire({icon: 'success', title: 'Equipo creado con exito'})
            } catch (error) {
                console.log(error)
            }
        }
    }

    const startDeleting = async (userId) => {
        try {
            await challengeApi.delete((`/teams/${userId}`))
            Swal.fire({icon: 'success', title: 'Equipo eliminado con exito'})
        } catch (error) {
            console.log(error)
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
        startDeleting,
        setActiveTeam

    }
}