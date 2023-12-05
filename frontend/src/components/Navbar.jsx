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
      <nav className="navbar navbar-expand-lg  bg-dark  " >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">

            <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill" data-title>
              ParkEasy <i className="bi bi-ev-front-fill"></i>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse center " id="navbarSupportedContent">
            <div className="navbar-nav mx-auto ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item active">
                  <NavLink className="nav-link  " to="/">
                    <div className="position-relative py-2 px-3 text-bg-secondary border border-secondary rounded-pill">
                      Home
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">
                    <div className="  position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Login
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      SignUp
                    </div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/slotlist">
                    <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Slots
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bookslot">
                    <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Book SLot
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/manageslot">
                    <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Manage Slot
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">

                    <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      About
                    </div>
                  </NavLink>
                </li>
              
                {showLoginOption()}
              </ul>

            </div>
              <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill " data-tilt>
                    ParkEasy <i className="bi bi-ev-front-fill"></i>
                  </div>
          </div>
        </div>
      </nav >
    </>



  )
}

export default Navbar