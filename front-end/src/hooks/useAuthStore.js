import { useDispatch, useSelector } from "react-redux"
import challengeApi from "../api/challengeApi"
import Swal from 'sweetalert2'
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/authSlice"
import { onLoadUsers, onLogoutUsers, onSetActiveUser, onStartUpdate, onEndUpdate, onCreateUser, onUpdateUser, onDeleteUser } from '../store/userSlice'


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const { users, activeUser, isUpdating } = useSelector(state => state.users)
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

    const startLoadingUsers = async () => {
        try {
            const { data } = await challengeApi.get('/auth/users')
            const users = data.users
            dispatch(onLoadUsers(users))
        } catch (error) {
            console.log('Error al cargar usuarios')
        }
    }

    const startUpdate = async (user, userId) => {
        if (isUpdating === true) {
            try {
                await challengeApi.put((`/auth/${userId}`), user)
                dispatch(onUpdateUser(user))
                dispatch(onEndUpdate())
                Swal.fire({ icon: 'success', title: 'Usuario editado con exito' })
                return;
            } catch (error) {
                console.log(error)
                Swal.fire('Error', error.response.data.msg, 'error')
            }
        } else {
            try {
                const { data } = await challengeApi.post('/auth/new', user)
                dispatch(onCreateUser({...user, _id: data.uid}))
                Swal.fire({ icon: 'success', title: 'Usuario creado con exito' })
            } catch (error) {
                console.log(error)
                Swal.fire('Error', error.response.data.msg, 'error')
            }
        }
    }

    const startDeleting = async (userId) => {
        try {
            await challengeApi.delete((`/auth/${userId}`))
            dispatch(onDeleteUser(userId))
            Swal.fire({ icon: 'success', title: 'Usuario eliminado con exito' })
        } catch (error) {
            console.log(error)
            Swal.fire('Error', error.response.data.msg, 'error')
        }

    }

    const setActiveUser = (activeUser) => {
        dispatch(onSetActiveUser(activeUser))
    }

    const setUpdateStatus = () => {
        dispatch(onStartUpdate())
    }

    return {
        //Propiedades
        errorMessage,
        status,
        user,
        users,
        activeUser,

        //Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
        startLoadingUsers,
        startUpdate,
        startDeleting,
        setActiveUser,
        setUpdateStatus
    }
}