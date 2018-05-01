import React from 'react'
import Link from 'gatsby-link'

import Nav from '../Nav'


const Header = ({ data, siteTitle }) => (
  <header
    className="pb5 relative"
  >
    <Nav data={data.dataYaml.nav} />
    <div className="site-header-background"></div>
      <h1 className="white fw3 lh-tight f-subheadline z-1 relative w-60 pl5 pv3 mt4 mb0">
        {siteTitle}
      </h1>
      <h2 className="white fw3 lh-title f2 z-1 relative pl5 light-yellow mt0">
        <span className="db">June 11-12, 2018</span>
        <span className="db">Prime Produce, NYC</span>
      </h2>
  </header>
)

export default Header
