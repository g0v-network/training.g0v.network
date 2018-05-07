import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
          <AnchorLink  className="white link" href="/#about">About</AnchorLink>
          <AnchorLink  className="white link" href="/#trainers">Trainers</AnchorLink>
          <Link
            to="/team"
            className="white link"
          >
          Team
          </Link>
          <AnchorLink  className="white link" href="/#sponsor">Sponsor</AnchorLink>
          <AnchorLink className="white link" href="/#tickets">Get Tickets</AnchorLink>          
      </div>
    </nav>
  )
}

Nav.propTypes = {

}

export default Nav
