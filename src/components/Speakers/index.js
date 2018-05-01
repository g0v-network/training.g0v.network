import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Person from '../Core/Person'

const Speakers = ({data}) => {

  return (
    <section
      className="pv3 ph4">
      <h1>Speakers/Trainers</h1>
        {data.map((speaker, i) => (
          <Person 
            name={speaker.node.frontmatter.name} 
            content={speaker.node.html} 
          />
        ))}      
    </section>
  )
}

Speakers.propTypes = {

}

export default Speakers
