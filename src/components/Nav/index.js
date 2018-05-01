import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const Nav = ({data}) => {

  return (
    <nav
      role="contentinfo"
      className="bg-dark-blue site-nav pv3 ph4">
      <div
        className="mw8 center flex flex-wrap justify-between items-start">
        {data.primaryLinks.map((link, i) => (
          <Link
            to={link.url}
            className="white link"
            key={i}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

Nav.propTypes = {

}

export default Nav
