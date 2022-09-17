import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useTeamStore } from '../hooks/useTeamStore';
import { useUiStore } from '../hooks/useUiStore';

import './styles/userStyle.css'
import { TeamsModal } from './TeamsModal';

export const TeamsManage = () => {

  const { startLoadingTeams, setActiveTeam, startDeleting, teams } = useTeamStore();
  const { openModal } = useUiStore()

  useEffect(() => {
    startLoadingTeams()
  }, [teams])

  const onClickCreate = () => {
    setActiveTeam({
      accountName: '',
      teamClient: '',
      leaderName: ''
    })
    openModal()
  }

  const onClickDelete = (userId) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',      
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleting(userId)
      }
    })
  }

  return (
    <div className="container profile-page mt-3 mb-4 user-page">
      <div className='container pt-4'>
        <h1>Cuentas</h1>
        <button type='button' className='btn btn-primary rounded-circle' onClick={() => { onClickCreate() }}><i className="fa fa-plus"></i></button>
      </div>
      <hr />
      {teams.map(function (element, index) {
        return (
          <div className="accordion accordion-flush" id={`accordionFlush${index}`}>
            <div className="accordion-item">
              <button type="button" className='btn bg-transparent' onClick={() => {
                //openModal()
                //onSelect(element)
              }}>
                <i className="fas fa-pencil-alt text-info"></i></button>
              <button type="button" className='btn bg-transparent' onClick={() => {
                onClickDelete(element._id)
              }}>
                <i className="far fa-trash-alt text-danger"></i></button>
              <h2 className="accordion-header" id={`flush-heading${index}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h4 className="m-t-0 m-b-0"><strong>Cuenta: {element.accountName}</strong></h4>
                    <h5 className="job_post">Cliente: {element.teamClient}</h5>
                    <h5 className="job_post">Encargado: {element.leaderName}</h5>
                  </div>
                </button>
              </h2>
              <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent={`#accordionFlush${index}`}>

                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Miembros</th>
                      <th className="action text-right">Action</th>
                      <th className="action text-right">
                        <button type='button' className='btn'><i className="fa fa-plus"></i></button>
                      </th>
                    </tr>
                  </thead>
                  {element.teamMembers.map(function (element, index) {
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
              </div>
            </div>
            <hr />
          </div>
        )
      })}
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
      <TeamsModal />
    </div>
  )
}
