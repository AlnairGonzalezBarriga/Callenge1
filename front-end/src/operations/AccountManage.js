import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

import './styles/profileStyles.css'

export const AccountManage = () => {

  const { user } = useContext(AuthContext)

  return (
    <div class="container profile-page mt-3 mb-4">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <div className="card profile-header">
                <div className="body">
                    <div className="row">
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
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>       
      </div>
    </div>
  )
}
