import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import slug from 'slug'

import Person from '../Core/Person'

const Speakers = ({data}) => {
  return (
    <section
      id="#trainers"
      className="bg-light-yellow mt6 trainer-section">
      {/* <h1 className="fw3 center tc">Trainers</h1> */}
        {data.map((speaker, i) => (
          <Person 
            name={speaker.node.frontmatter.name} 
            content={speaker.node.html}
            photo={speaker.node.frontmatter.photo}
            className={`trainer-item trainer-${speaker.node.frontmatter.key} w-100`}
          />
        ))}      
    </section>
  )
}

Speakers.propTypes = {

}

export default Speakers
