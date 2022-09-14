import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {

    const {startLogout, user} = useAuthStore()

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/profileScreen"
            >
                Perfil
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/accountManage"
                    >
                        Cuentas
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/teamsManage"
                    >
                        Equipos
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/teamHistory"
                    >
                        Movimientos
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/userManage"
                    >
                        Usuarios
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>

                    <button
                        className="nav-item nav-link btn btn-outline-danger"
                        onClick={ startLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}
