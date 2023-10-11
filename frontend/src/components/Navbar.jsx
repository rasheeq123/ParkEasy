import React from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext';


const Navbar = ({mycart}) => {

    const{loggedIn, setloggedIn, logout}= useAppContext();
    
   
    const showLoginOption=()=>{
        if(loggedIn){
            return (
             <li className="nav-item">
               <button className='btn btn-danger' onClick={logout} >  Logout</button>

            </li>
            );
        }
    }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary text-light ">
    <div className="container-fluid  ">
      <a className="navbar-brand" href="#">
        
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to = "/home">
                Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to = "/login">
                Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to = "/signup">
                Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to = "/slotlist">
                Slots
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to = "/bookslot">
                Book Slot
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to = "/about">
                About
            </NavLink>
          </li>
          {showLoginOption()}

          
        </ul>
        
      </div>
    </div>
  </nav>
</>

    
  )
}

export default Navbar