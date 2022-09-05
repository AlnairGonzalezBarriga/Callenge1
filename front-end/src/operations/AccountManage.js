import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export const AccountManage = () => {

  const { user } = useContext(AuthContext)

  return (
    <div class="container mt-3 mb-4">
      <h2>Simple Collapsible</h2>
      <p>Click on the button to toggle between showing and hiding content.</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">Simple collapsible</button>
      <div id="demo" class="collapse">
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
    </div>
  )
}
