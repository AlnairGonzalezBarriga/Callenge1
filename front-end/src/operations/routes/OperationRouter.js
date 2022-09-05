import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui/components/Navbar'
import {AccountManage} from '../AccountManage'
import { ProfileScreen } from '../ProfileScreen'
import { TeamHistory } from '../TeamHistory'
import {TeamsManage} from '../TeamsManage'
import {UserManage} from '../UserManage'

export const OperationRouter = () => {
  return (
    <>

    <Navbar/>

    <div className='container'>
        <Routes>
            <Route path="accountManage" element={ <AccountManage /> } />
            <Route path="teamsManage" element={ <TeamsManage /> } />
            <Route path="userManage" element={ <UserManage />} />
            <Route path="teamHistory" element={ <TeamHistory />} />
            <Route path="profileScreen" element={ <ProfileScreen />} />
            <Route path="/" element={<Navigate to="/profileScreen" />} />
        </Routes>
    </div>
    </>
  )
}
