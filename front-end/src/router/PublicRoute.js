import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'
import { useAuthStore } from '../hooks/useAuthStore'

export const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

    const { status, checkAuthToken } = useAuthStore()

    useEffect(() => {
      checkAuthToken()
    }, [])

    if(status === 'checking'){
        return(
            <h3>Cargando...</h3>
        )
    }

    return (status === 'not-authenticated')
    ? children
    : <Navigate to="/userManage"/>
}
