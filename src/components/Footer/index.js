import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ data, siteTitle }) => (
  <footer
    className="pa4 relative bg-dark-blue near-white flex"
  >
    <div><a rel="license" className="white link" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License"  src="https://i1.wp.com/i.creativecommons.org/l/by-sa/3.0/88x31.png" scale="0" width="88" height="31" /></a>
    
    <span>Content on this website is licensed under a <a className="white link" rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.</span></div>
  </footer>
)

export default Footer
