import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      <a href="https://bagwai.codes">
        {' '}
        &copy; Mubarak Daha Isa - CST/16/COM/0582{' '}
      </a>
      . Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
