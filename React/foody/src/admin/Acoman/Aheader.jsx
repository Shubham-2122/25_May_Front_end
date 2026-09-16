import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        toast.success("logout Successfully")
        redirect("/alogin")
    }

  return (
    <div>
          <div>

            {/* Navbar Start */}
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
               
                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <NavLink to="/dash" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">Dashboard</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to="/dash" className="nav-item nav-link ">Home</NavLink>
                            
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/productmanage" className="dropdown-item">Manage</NavLink>
                                    <NavLink to="/productadd" className="dropdown-item">Add</NavLink>
                                   
                                    
                                </div>
                            </div>
                            {
                                // Acii 
                                (()=>{
                                    if(localStorage.getItem("Aid")){
                                        return(
                                            <NavLink  className="nav-item nav-link">{localStorage.getItem("Aname")}</NavLink>
                                        )
                                    }
                                })()
                            }

                            {
                                (()=>{
                                    if(localStorage.getItem("Aid")){
                                        return(
                                            <NavLink onClick={logout} className="nav-item nav-link">Logout</NavLink>
                                        )
                                    }
                                    else{
                                        return(
                                            <NavLink to="/alogin" className="nav-item nav-link">Alogin</NavLink>
                                        )
                                    }
                                })()
                            }
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href>
                                <small className="fa fa-search text-body" />
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href>
                                <small className="fa fa-user text-body" />
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href>
                                <small className="fa fa-shopping-bag text-body" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}

        </div>
    </div>
  )
}

export default Aheader