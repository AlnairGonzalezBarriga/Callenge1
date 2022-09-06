import { authReducer } from "../src/auth/context/AuthReducer"
import { types } from "../src/auth/types/types"


describe('Pruebas authReducer', () => {

    test('Estado por defecto', () => {
        const state = authReducer({ logged: false}, {})
        expect( state ).toEqual({ logged: false })
    })

    test('Autenticar Login', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Marco',
                role: 'Pirulas'
            }
        }

        const state = authReducer({ logged: false }, action)
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('Proceso de limpieza logout', () => {
        const state = { 
            logged: true,
            user: {name: 'Javier', role: 'Pirulas'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action)
        expect( newState ).toEqual({ logged: false })
    })
})