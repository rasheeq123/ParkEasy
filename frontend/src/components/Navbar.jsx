import React from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext';


const Navbar = ({ mycart }) => {

  const { loggedIn, setloggedIn, logout } = useAppContext();


  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button className='btn btn-danger' onClick={logout} >  Logout</button>

        </li>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">
          Navbar
        </a>
        <button
    className="navbar-toggler"
    type="button"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
          <i className="fas fa-bars text-white" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <div className="hori-selector">
        <div className="left" />
        <div className="right" />
      </div>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/slotlist">
                Slots
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bookslot">
                Book Slot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manageslot">
                Manage Slot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {showLoginOption()}


          </ul>

        </div>
      
    </nav >
</>

    
  )
}

export default Navbar