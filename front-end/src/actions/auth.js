import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import axios from 'axios'

export const startLogin = async (email, password) => {
    console.log(process.env.REACT_APP_API_URL)
    try {
        await axios.post('http://localhost:4000/api/auth', {
            email,
            password
        }).then(function (response) {
            console.log(response.data)
            axios.get('http://localhost:4000/api/auth/renew', {
                headers: {
                    'x-token': response.data.token
                }
            }).then(function (response) {
                console.log(response.data)
            })
        })
    } catch (error) {
        console.log(error)
    }

    /* console.log('antes del fetch sin token')
    const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
    console.log('despues del fetch sin token')
        const body = await resp.json();

        console.log(body)
    return async(  ) => {

        

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name,
                email: body.email,
                fullName: body.fullName,
                speciality: body.speciality,
                license: body.license,
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    } */
}