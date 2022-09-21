/* import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../src/auth/context/AuthContext'
import { PrivateRoute } from '../src/router/PrivateRoute'


describe('Pruebas en PublicRouter', () => {

    test('Estado no loggeado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Javier',
                role: 'Pirulas'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PrivateRoute >
                    <div>Ruta privada</div>
                </PrivateRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta privada')).toBeTruthy()
    })

}) */