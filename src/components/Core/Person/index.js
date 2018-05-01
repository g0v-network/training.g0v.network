import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const Person = ({name, content}) => {

  return (
    <article
      className="pv3 ph4">
      <h3>{name}</h3>
      <div
        className="person-bio"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

Person.propTypes = {

}

export default Person
