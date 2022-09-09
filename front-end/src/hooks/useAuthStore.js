import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/authSlice"


export const useAuthStore = () =>{
    
    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async({email, password}) =>{
        dispatch( onChecking() )
        try {
            const {data} = await challengeApi.post('/auth', {email, password} )
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid, role: data.role }) )

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') )
            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 10)
        }
    }

    const startRegister = async({email, password, name, role}) =>{
        dispatch( onChecking() )
        try {
            await challengeApi.post('/auth/new', {email, password, name, role} )
        } catch (error) {
            console.log(error)
        }
    }

    const checkAuthToken = async() =>{
        const token = localStorage.getItem('token')
        if( !token ) return dispatch(onLogout())

        try {
            const {data} = await challengeApi.get('auth/renew')
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid, role: data.role }) )
        } catch (error) {
            localStorage.clear()
            dispatch(onLogout())
        }
    }

    const startLogout = () =>{
        localStorage.clear()
        dispatch(onLogout())
    }

    return{
        //Propiedades
        errorMessage,
        status,
        user,

        //Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister
    }
}