import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import MediaObject from '../Core/MediaObject'

const TicketContainer = ({data}) => {
  console.log(data)

  const applyContent = data.applyContent.edges[0].node
  const ticketContent = data.ticketsContent.edges[0].node.tickets

  return (
    <section
    id="#tickets"
    className="ph4 pl5-l pv4 flex-l skewed-section bg-near-white">
      <section className="w-50-l reset-skewed-section">
        <div
          className="measure-l lh-copy f4 pr5-l mt6"
          dangerouslySetInnerHTML={{ __html: applyContent.html }}
        />        
        
        <p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSei_8PmfURM9fGhhvHe9YiwSzPQvqBEQEE9cCMLXWXbe0-cqA/viewform"
            className="f5 fw5 link grow ph4 pv3 br3 mb2 dib white bg-purple"
          >
            Apply Today
          </a>
        </p>
      </section>
      <aside className="mt5 mt0-l w-50-l reset-skewed-section pt4-l pb5-l">
        <h2 className="tc-l fw3">Your ticket includes</h2>
        <div className="flex flex-column items-center">
        {ticketContent.map((perk, i) => (
          <MediaObject 
            title={perk.title} 
            blurb={perk.blurb} 
            icon={perk.icon}
            className="measure-wide-m measure-narrow-l"
          />
        ))}  
        </div>    
      </aside>
    </section>
  )
}

TicketContainer.propTypes = {

}

export default TicketContainer
