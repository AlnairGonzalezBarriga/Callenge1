import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Login from '../auth/Login'
import { getEnV } from '../helpers/getEnv'
import {OperationRouter} from '../operations/routes/OperationRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {

  console.log(getEnV());

  return (
    <>

    <Routes>

      <Route path="/login" element={
        <PublicRoute>
          <Login/>
        </PublicRoute>
      }/>
      
      <Route path="/*" element={
        <PrivateRoute>
          <OperationRouter/>
        </PrivateRoute>
      }/>

    </Routes>
    </>
  )
}

export default AppRouter