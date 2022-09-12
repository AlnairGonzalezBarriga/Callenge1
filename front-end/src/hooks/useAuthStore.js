import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/authSlice"
import { onLoadUsers, onLogoutUsers } from '../store/userSlice'


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking())
        try {            
            const { data } = await challengeApi.post('/auth', { email, password })
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid, role: data.role }))

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startRegister = async ({ email, password, name, role }) => {
        dispatch(onChecking())
        try {
            await challengeApi.post('/auth/new', { email, password, name, role })
        } catch (error) {
            console.log(error)
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')
        if (!token) return dispatch(onLogout())

        try {
            const { data } = await challengeApi.get('auth/renew')
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid, role: data.role }))
        } catch (error) {
            localStorage.clear()
            dispatch(onLogout())
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogoutUsers())
        dispatch(onLogout())
    }

    const startLoadingUsers = async() => {
        try {
            const { data } = await challengeApi.get('/auth/users')
            const users = data.users
            dispatch(onLoadUsers(users))
        } catch (error) {
            console.log('Error al cargar usuarios')
        }
    }

    const startUpdate = async ({ email, password, name, role }) => {
        try {
            await challengeApi.put((`/auth/${'631f8bd36f3c5c813ce4b435'}`), { email, password, name, role })
            console.log('aqui andamios')
            return;
        } catch (error) {
            console.log(error)
        }
    }

    const startDeleting = async() => {
        try {
            await challengeApi.delete((`/auth/${'aqui va el id'}`))
        } catch (error) {
            console.log(error)
        }

    }

    return {
        //Propiedades
        errorMessage,
        status,
        user,

        //Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
        startLoadingUsers,
        startUpdate,
        startDeleting
    }
}