import React, { useEffect } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'

import './styles/userStyle.css'

export const UserManage = () => {

  const { startLoadingUsers, startDeleting, startUpdate } = useAuthStore();

  useEffect(() => {
    startLoadingUsers()
    //startDeleting()
    //startUpdate( {email: 'miguel@gmail.com', password: '123456', name: 'Miguel', role: 'gerente'})  
  }, [])
  

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
                </tr>
              </thead>
              <tbody>
                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">Alnair González</h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li><i className="fa fa-envelope pr-1"></i>AlnairGl@gmail.com</li>
                            <li><i className="fa fa-address-book pr-1"></i><a href='#'>CV</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <ul className="list-unstyled mb-0 d-flex">
                      <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                      <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                    </ul>
                  </td>
                </tr>

                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">James Murphy</h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li><i className="fa fa-envelope pr-1"></i>JamesM@gmail.com</li>
                            <li><i className="fa fa-address-book pr-1"></i><a href='#'>CV</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <ul className="list-unstyled mb-0 d-flex">
                      <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                      <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                    </ul>
                  </td>
                </tr>

                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">Olivia Brown</h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li><i className="fa fa-envelope pr-1"></i>OliviaB@gmail.com</li>
                            <li><i className="fa fa-address-book pr-1"></i><a href='#'>CV</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <ul className="list-unstyled mb-0 d-flex">
                      <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                      <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                    </ul>
                  </td>
                </tr>

              </tbody>
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
      </div>
    </div>
  )
}
