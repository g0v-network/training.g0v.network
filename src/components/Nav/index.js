import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Nav = () => {

  return (
    <nav
      role="contentinfo"
      className = "bg-dark-blue site-nav pv3 ph4 z-2 relative flex" >
      <Link
        to="/"
        className="white link w-50"
      >
       vNetwork
      </Link>

      <div
        className="flex flex-wrap justify-between w-100">
          <a  className="white link" href="/#about">About</a>
          <a  className="white link" href="/#trainers">Trainers</a>
          <Link
            to="/team"
            className="white link"
          >
          Team
          </Link>
          <a  className="white link" href="/#sponsor">Sponsor</a>
          <a className="white link" href="/#tickets">Get Tickets</a>          
      </div>
    </nav>
  )
}

Nav.propTypes = {

}

export default Nav
