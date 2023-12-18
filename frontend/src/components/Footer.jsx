import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Site footer */}
      <footer className="site-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                In the dynamic landscape of urban living, parking challenges have burgeoned into a prominent concern. ParkEasy seeks to introduce an innovative Online Parking Slot Booking System that leverages modern technologies to address urban
                congestion. ParkEasy focuses on creating a robust and user-centric solution for efficient parking management by booking slots.
              </p>
            </div>

            <div className="col-xs-6 col-md-3 mx-auto">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/slotlist">View Slots</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="/bookslot">
                    Book Slot
                  </a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>


                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2023 All Rights Reserved by
                <a href="/"> ParkEasy </a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="github" href="https://github.com/rasheeq123">
                    <i class="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/rizvi_rasheeq_7985/">
                    <i class="bi bi-instagram"></i>

                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/rasheeq-zehra-mern-developer/">
                    <i class="bi bi-linkedin"></i>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>




  )
}

export default Footer