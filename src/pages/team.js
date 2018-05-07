import React from 'react'
import Link from 'gatsby-link'

import Organizers from '../components/Organizers'


const TeamPage = ({ data }) => (
  <div>
    <Organizers data={data.organizersContent.edges} />    
  </div>
)

export default TeamPage

export const query = graphql `
  query TeamPageQuery {
    organizersContent: allMarkdownRemark(filter : { fileAbsolutePath: { regex: "/content\/organizers/" }}) {
      edges {      
        node {
          html              
          frontmatter {
            name
            role
          }
        }
      }
    }
  }
`