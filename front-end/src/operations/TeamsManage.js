import React, { useEffect } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'

import './styles/userStyle.css'

export const TeamsManage = () => {

  const { startLoadingUsers, users } = useAuthStore();

  useEffect(() => {
    startLoadingUsers()
  }, [])

  return (
    <div className="container profile-page mt-3 mb-4 user-page">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>Equipo: </strong></h4>
                <h5 className="job_post">Cuenta: </h5>
                <h5 className="job_post">Cliente: </h5>
              </div>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

            <table className="table manage-candidates-top mb-0">
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th className="action text-right">Action</th>
                  <th className="action text-right">
                    <button type='button' className='btn btn-primary rounded-circle'><i class="fa fa-plus"></i></button>
                  </th>
                </tr>
              </thead>
              {users.map(function (element, index) {
                return (
                  <tbody>
                    <tr className="candidates-list">
                      <td className="title">
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">{element.name}</h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-envelope pr-1"></i>{element.email}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center">
                        <ul className="list-unstyled mb-0 d-flex">
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                          }}>
                            <i className="fas fa-eye text-primary"></i></button></li>
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                          }}>
                            <i className="far fa-trash-alt text-danger"></i></button></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>

            <br></br>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>Nombre de cuentas: </strong></h4>
                <h5 className="job_post">Cliente: </h5>
                <h5 className="job_post">Encargado: </h5>
              </div>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExampleTwo">

            <table className="table manage-candidates-top mb-0">
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th className="action text-right">Action</th>
                  <th className="action text-right">
                    <button type='button' className='btn btn-primary rounded-circle'><i class="fa fa-plus"></i></button>
                  </th>
                </tr>
              </thead>
              {users.map(function (element, index) {
                return (
                  <tbody>
                    <tr className="candidates-list">
                      <td className="title">
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">{element.name}</h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-envelope pr-1"></i>{element.email}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center">
                        <ul className="list-unstyled mb-0 d-flex">
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                          }}>
                            <i className="fas fa-eye text-primary"></i></button></li>
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                          }}>
                            <i className="far fa-trash-alt text-danger"></i></button></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>

            <br></br>
          </div>
        </div>

        <div className="text-center mt-3 mt-sm-3">
          <ul className="pagination justify-content-center mb-">
            <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
            <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">...</a></li>
            <li className="page-item"><a className="page-link" href="#">25</a></li>
            <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
          </ul>
          <br></br>
        </div>
      </div>
    </div>
  )
}
