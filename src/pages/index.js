import React from 'react'
import Link from 'gatsby-link'

import Speakers from '../components/Speakers'
import Organizers from '../components/Organizers'

const IndexPage = ({ data }) => (
  <div>
    {console.log("index page", data)}
    <Speakers data={data.speakersContent.edges} />
    <Organizers data={data.organizersContent.edges} />
  </div>
)

export default IndexPage

export const query = graphql `
  query IndexPageQuery {
    speakersContent: allMarkdownRemark(filter : { fileAbsolutePath: { regex: "/content\/speakers/" }}) {
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