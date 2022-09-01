import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui/components/Navbar'
import {AccountManage} from '../AccountManage'
import {UserInfo} from '../UserInfo'
import {UserManage} from '../UserManage'

export const OperationRouter = () => {
  return (
    <>

    <Navbar/>

    <div className='container'>
        <Routes>
            <Route path="accountManage" element={ <AccountManage /> } />
            <Route path="userInfo" element={ <UserInfo /> } />
            <Route path="userManage" element={ <UserManage />} />
            <Route path="/" element={<Navigate to="/userManage" />} />
        </Routes>
    </div>
    </>
  )
}
