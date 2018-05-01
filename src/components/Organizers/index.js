import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Person from '../Core/Person'


const Organizers = ({data}) => {

  return (
    <section
      className="pv3 ph4">
      <h1>Members of vNetwork include</h1>
        {data.map((organizer, i) => (
          <Person 
            name={organizer.node.frontmatter.name} 
            content={organizer.node.html} 
          />
        ))}      
    </section>
  )
}

Organizers.propTypes = {

}

export default Organizers
