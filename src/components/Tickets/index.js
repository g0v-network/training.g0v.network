import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import MediaObject from '../Core/MediaObject'

const TicketContainer = ({data}) => {

  return (
    <section
    className="pv3 ph4 pv5">
      <h1 className="tc fw3">Your ticket includes</h1>
        <div className="flex flex-wrap mw8 center">
        {data.map((perk, i) => (
          <MediaObject 
            title={perk.title} 
            blurb={perk.blurb} 
            icon={perk.icon}
            className="w-30"
          />
        ))}  
        </div>    
    </section>
  )
}

TicketContainer.propTypes = {

}

export default TicketContainer
