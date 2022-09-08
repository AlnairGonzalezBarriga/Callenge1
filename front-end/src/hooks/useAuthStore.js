import { useDispatch, useSelector } from "react-redux"
import {challengeApi} from "../api/challengeApi"
import { onChecking, onLogin, onLogout } from "../store/authSlice"


export const useAuthStore = () =>{
    
    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async({email, password}) =>{
        dispatch( onChecking() )
        try {
            const {data} = await challengeApi.post('/auth', {email, password} )
            localStorage.setItem('token', data.token)
            dispatch( onLogin({ name: data.name, uid: data.uid }) )

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') )
        }
    }

    return{
        //Propiedades
        errorMessage,
        status,
        user,

        //Metodos
        startLogin,
    }
}