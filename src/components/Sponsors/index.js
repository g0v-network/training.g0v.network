import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import MediaObject from '../Core/MediaObject'

const Sponsors = ({data}) => {

  return (
    <section
    id="sponsor"
    className="pv3 ph4 pv5-l bg-light-green">
        <div
          className="lh-copy f4 pr6-l measure-l"
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
    </section>
  )
}

Sponsors.propTypes = {

}

export default Sponsors
