import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a> will reload the page */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* /<a> will reload the page, use link */}
              <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/theme">{props.theme}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="themeTogggleSwitch" onClick={props.toggleTheme}/>
              <label className={`form-check-label text-${props.altMode}`} htmlFor="themeTogggleSwitch"><i className={`bi ${props.themeIcon}`}></i></label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired

}
Navbar.defaultProps = {
  title: "set-title-here",
  home: "set-home-here",
  about: "set-about-here"
}