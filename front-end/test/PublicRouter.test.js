/* import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../src/auth/context/AuthContext'
import { PublicRoute } from '../src/router/PublicRoute'


describe('Pruebas en PublicRouter', () => {

    test('Estado no loggeado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <div>Ruta publica</div>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy()
    })

    test('Estado loggeado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Javier',
                role: 'Pirulas'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <div>Ruta publica</div>
                            </PublicRoute>
                        } />
                        <Route path='accountManage' element={<h1>Ruta accountManage</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta accountManage')).toBeTruthy()
    })
}) */