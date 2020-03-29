import PropTypes from 'prop-types'
import React from 'react'
// import img3 from '../images/img3.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-hospital"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>PRIMARY HEALTH CARE CLINICS MANAGEMENT SYSTEM</h1>
        <p>
          Primary Health Care Management System.
          <br />
          An effective system for collection, Management and manupulation of
          Primary Health care clinics data.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Registration
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About us
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
