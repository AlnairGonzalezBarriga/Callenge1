import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Login from '../auth/Login'
import {OperationRouter} from '../operations/routes/OperationRouter'

const AppRouter = () => {
  return (
    <>

    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<OperationRouter/>} />
    </Routes>
    </>
  )
}

export default AppRouter