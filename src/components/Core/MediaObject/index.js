import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const MediaObject = ({icon, blurb, title}) => {

  return (
    <article
      className="pv3 ph4 w-30">
      <i className="w3 h3 db bg-near-white br-100 near-black">{icon}</i>
      <h3>{title}</h3>
      <p>{blurb}</p>
    </article>
  )
}

MediaObject.propTypes = {

}

export default MediaObject
