import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const MediaObject = ({
    icon,
    blurb,
    title,
    className
  }) => {

  return (
    <article
      className={className}>
      {/* <i className="w3 h3 db bg-near-white br-100 near-black">{icon}</i> */}
      <h3 className="mb2 fw4 orange">{title}</h3>
      <p className="lh-copy">{blurb}</p>
    </article>
  )
}

MediaObject.propTypes = {

}

export default MediaObject
