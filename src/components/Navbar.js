import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string.isRequired,
}

// Navbar.defaultProps = { //if the props are not written then these applied by default
//     title: 'Set title here',
//     about: 'About text here',
// } 

