import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Person from '../Core/Person'


const Organizers = ({data}) => {

  return (
    <section
      className="pv3 ph4 ph5-l">
      <h1>Members of vNetwork include</h1>
        {data.map((organizer, i) => (
          <article className="mb4">
            <h2>{organizer.node.frontmatter.name}</h2>
            <div
              className="lh-copy f5 pr6-l measure-wide"
              dangerouslySetInnerHTML={{ __html: organizer.node.html }}
            />          
        </article>
        ))}      
    </section>
  )
}

Organizers.propTypes = {

}

export default Organizers
