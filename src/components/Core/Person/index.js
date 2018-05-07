import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const Person = ({name, content, photo, className}) => {

  return (
    <article
      className={className}>
      <figure className="ma0 pa0">
        <img src={photo} className="h-100" />
      </figure>
      <div className="person-content pl4 pl5-l pv5 pt6-l pr4 pr6-l">
        <h3 className="fw4 f3 mb0 yellow">{name}</h3>
        <div
          className="person-bio lh-copy f5 f4-l pr6-l near-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}

Person.propTypes = {

}

export default Person
