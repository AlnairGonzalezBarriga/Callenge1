import React, { useContext } from 'react'

import { AuthContext } from '../auth/context/AuthContext'
import './styles/profileStyles.css'

export const ProfileScreen = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="container profile-page mt-3 mb-4">
            <div className="card profile-header">
                <div className="body">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /> </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <h4 className="m-t-0 m-b-0"><strong>{user.name}</strong></h4>
                            <h5 className="job_post">alnair@gmail.com</h5>
                            <div>
                                <p>Conocimientos generales de porgramacion y mandejo de equipos.</p>
                                <i class="fa-brands fa-google-drive">Icono para el cv</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
