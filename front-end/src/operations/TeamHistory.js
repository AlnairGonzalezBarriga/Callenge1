import React from 'react'

export const TeamHistory = () => {
  return (
    <div className='container mt-3 mb-4'>
      <div class="input-group d-flex justify-content-end">
        <div class="input-group rounded">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
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
    </div>
  )
}
