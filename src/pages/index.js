import React from 'react'
import Link from 'gatsby-link'

import Speakers from '../components/Speakers'
import Organizers from '../components/Organizers'
import TicketsContainer from '../components/Tickets'


const IndexPage = ({ data }) => (
  <div>
    {console.log("index page", data)}
    <section className="w-60 f3 lh-copy ml5 pl5 mt6">
      <p>In the spirit of international exchange and with the support of the Taiwanese government, we are pleased to announce the first English language opportunity to learn the facilitation methods that power the award-winning vTaiwan open consultation process and Participatory Officers program.</p> 
      <p>Audrey Tang, Taiwan’s Digital Minister will be here in person with other members of Taiwan’s Public Digital Innovation and Service team (PDIS) and Participatory Officers (PO) program.</p>
    </section>
    <Speakers data={data.speakersContent.edges} />
    <TicketsContainer data={data.ticketsContent.edges[1].node.tickets} />
    <Organizers data={data.organizersContent.edges} />
  </div>
)

export default IndexPage

export const query = graphql `
  query IndexPageQuery {
    ticketsContent:  allDataYaml  {
      edges {
        node {
          tickets {
            title
            blurb
          }
        }
      }
    }

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