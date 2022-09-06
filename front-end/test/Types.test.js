import { types } from "../src/auth/types/types"


describe('Pruebas en types', () => {

    test('Consistencia de types', () => {
        expect(types).toEqual({
            login: '[Auth] Login', 
            logout: '[Auth] Logout'
        })
    })
})