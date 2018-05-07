import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import MediaObject from '../Core/MediaObject'

const Day1 = ({data}) => {

  return (
    <aside
    className="event-overview ph3 flex-m flex-wrap-m">
      {data.map((perk, i) => (
        <MediaObject 
          title={perk.title} 
          blurb={perk.blurb} 
          icon={perk.icon}
          className="event-item mb4 w-50-m pa3-m"
        />
      ))}  
    </aside>
  )
}

Day1.propTypes = {

}

export default Day1
