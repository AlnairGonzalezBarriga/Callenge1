import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { AuthContext } from './context/AuthContext';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

import './styles/loginStyles.css'
import { useAuthStore } from '../hooks/useAuthStore';

const loginForm = {
  loginEmail: '',
  loginPassword: ''
}

const Login = () => {

  const { startLogin, errorMessage } = useAuthStore()

  const onLogin = () => {

    startLogin( {email: loginEmail, password: loginPassword})
  }

  useEffect(() => {
    if(errorMessage !== undefined){
      Swal.fire('Error de autenticacion', errorMessage, 'error')
    }
  }, [errorMessage])
  

  const { loginEmail, loginPassword, onInputChange } = useForm( loginForm )

  return (
    <div className='container login-page mt-5'>
      <h1>Login</h1>

      <form>
        <div className="form-outline mb-4">
          <input 
          type="email"  
          className="form-control"
          placeholder='Correo'
          name='loginEmail'
          value={ loginEmail }
          onChange={ onInputChange }
          />
        </div>

        <div className="form-outline mb-4">
          <input 
          type="password" 
          className="form-control" 
          placeholder='Contraseña'
          name='loginPassword'
          value={ loginPassword }
          onChange={ onInputChange }
          />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
              <label className="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button onClick={onLogin} type="button" className="btn btn-primary btn-block mb-4">Login</button>
      </form>
    </div>
  )
}

export default Login