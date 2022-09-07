import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'


export const AccountManage = () => {

  const { user } = useContext(AuthContext)

  return (
    <div class="container profile-page mt-3 mb-4">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>Nombre de cuentas: </strong></h4>
                <h5 className="job_post">Cliente: </h5>
                <h5 className="job_post">Encargado: </h5>
              </div>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <table className="table table-striped table-bordered table-hover table-light mt-2">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Equipo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Fecha de Entrada</th>
                  <th scope="col">Fecha de Salida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Martin González</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Hugo Chavez</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Manuel</td>
                  <td>Javier Martinez</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
              </tbody>
            </table>
            <br></br>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>Nombre de cuentas: </strong></h4>
                <h5 className="job_post">Cliente: </h5>
                <h5 className="job_post">Encargado: </h5>
              </div>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExampleTwo">
            <table className="table table-striped table-bordered table-hover table-light mt-2">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Equipo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Fecha de Entrada</th>
                  <th scope="col">Fecha de Salida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Martin González</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Hugo Chavez</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Manuel</td>
                  <td>Javier Martinez</td>
                  <td>02/09/22</td>
                  <td>05/09/22</td>
                </tr>
              </tbody>
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
