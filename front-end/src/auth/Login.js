import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

import './styles/loginStyles.css'

const Login = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    login('Alnair', 'Pirulas')
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className='container login-page mt-5'>
      <h1>Login</h1>

      <form>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button onClick={onLogin} type="button" class="btn btn-primary btn-block mb-4">Login</button>
      </form>
    </div>
  )
}

export default Login