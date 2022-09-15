import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"

import { onLoadTeams } from "../store/teamSlice"

export const useTeamStore = () => {

    const dispatch = useDispatch()

    const startLoadingTeams = async () => {
        try {
            const { data } = await challengeApi.get('/teams')
            console.log(data.teams)
            const teams = data.teams
            dispatch(onLoadTeams(teams))
        } catch (error) {
            console.log('Error al cargar teams')
        }
    }

    return {
        //Propiedades
        

        //Metodos
        startLoadingTeams

    }
}