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
      <nav className="navbar navbar-expand-lg  bg-dark  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">

            <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
              ParkEasy <i className="bi bi-ev-front-fill"></i> <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>
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
                    <div class="position-relative py-2 px-3 text-bg-secondary border border-secondary rounded-pill">
                      Home 
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">
                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Login 
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      SignUp 
                    </div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/slotlist">
                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Slots 
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bookslot">
                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Book SLot 
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/manageslot">
                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      Manage Slot 
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">

                    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                      About 
                    </div>
                  </NavLink>
                </li>
                {showLoginOption()}
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>



  )
}

export default Navbar