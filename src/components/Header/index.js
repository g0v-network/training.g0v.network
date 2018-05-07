import React from 'react'
import Link from 'gatsby-link'

import Nav from '../Nav'


const Header = ({ data, siteTitle }) => (
  <header
    className="pb4-m pb5-l relative"
  >
    <Nav />
    <div className="site-header-background"></div>
      <h1 className="white fw3 lh-tight f2 f1-m f-subheadline-l z-1 relative w-60-l pl3 pl4-m pl5-l pv3 pb4-m mt4 mb0">
        {siteTitle}
      </h1>
      <h2 className="white fw4 lh-title f3 f2-l z-1 relative pl3 pl4-m pl5-l mt0">
        <span className="db fw5 mb3 light-yellow">June 11-12, 2018</span>
        <span className= "db lh-title f3 yellow"> Prime Produce<br />424 W 54 th St <span className="db">New York, NY 10019</span></span>
      </h2>
  </header>
)

export default Header
