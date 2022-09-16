import React, { useEffect } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'
import { useUiStore } from '../hooks/useUiStore';

import './styles/userStyle.css'
import { UserModal } from './UserModal';

export const UserManage = () => {

  const { openModal } = useUiStore()

  const { startLoadingUsers, startDeleting, startUpdate, setActiveUser, setUpdateStatus, users } = useAuthStore();

  useEffect(() => {
    startLoadingUsers()    
  }, [])

  const onSelect = (user) => {
    setUpdateStatus()
    setActiveUser(user)
  }

  const onClickCreate = () => {
    setActiveUser({
      name: '',
      email: '',
      password: '',
      role: 'admin'
    })
    openModal()
  }

  const onClickDelete = (userId) => {
    startDeleting(userId)
  }

  return (
    <div className="container mt-3 mb-4 user-page">
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
            <table className="table manage-candidates-top mb-0">
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th className="action text-right">Action</th>
                  <th className="action text-right">
                    <button type='button' className='btn btn-primary rounded-circle' onClick={() => { onClickCreate() }}><i className="fa fa-plus"></i></button>
                  </th>
                </tr>
              </thead>
              {users.map(function (element, index) {
                return (
                  <tbody>
                    <tr className="candidates-list">
                      <td className="title">
                        <div className="thumb">
                          <img className="img-fluid" src={`https://bootdey.com/img/Content/avatar/avatar${index + 1}.png`} alt="" />
                        </div>
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">{element.name}</h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-envelope pr-1"></i>{element.email}</li>
                                <li><i className="fa fa-address-book pr-1"></i><a href='#'>CV</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center">
                        <ul className="list-unstyled mb-0 d-flex">
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                            onSelect(element)
                          }}>
                            <i className="fas fa-eye text-primary"></i></button></li>
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                            openModal()
                            onSelect(element)
                          }}>
                            <i className="fas fa-pencil-alt text-info"></i></button></li>
                          <li><button type="button" className='btn bg-transparent' onClick={() => {
                            onClickDelete(element._id)
                          }}>
                            <i className="far fa-trash-alt text-danger"></i></button></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
            <div className="text-center mt-3 mt-sm-3">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">25</a></li>
                <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div >
      {/*Modales */}
      <UserModal />
    </div >
  )
}
