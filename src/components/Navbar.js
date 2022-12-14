import React from 'react'
import PropTypes from 'prop-types'

//It show the heading on navingation bar
export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.Title}</a>
           <h5 className='navbar-brand position-absolute top-20 start-50 translate-middle-x fs-2'>All Records</h5> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>  
    </>
  )
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,     //to check that we don't need undefined title
    About: PropTypes.string.isRequired   
};

Navbar.defaultProps ={
    Title: "CRUD Application",
    About: "About"   
}

