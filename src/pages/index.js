import React from 'react'
import Link from 'gatsby-link'

import DayOverview from '../components/About/DayOverview'
import Day1 from '../components/About/Day1'
import Trainers from '../components/Trainers'
import Sponsors from '../components/Sponsors'
import Organizers from '../components/Organizers'
import TicketsContainer from '../components/Tickets'


class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    
    return (
      <div>
        <section id="#about" className="w-60-l f4 f3-l lh-copy ml5-l ph3 pv4-m measure-wide-m pl4-m pl5-l mt6 mt5-m mb5-l">
          <p>In the spirit of international exchange and with the support of the Taiwanese government, we are pleased to announce the first English language opportunity to learn the facilitation methods that power the award-winning vTaiwan open consultation process and Participatory Officers program. vTaiwan and PO network bring people directly into governance and helps lawmakers implement decisions with a greater degree of legitimacy. </p> 
          <p>Audrey Tang, Taiwan’s Digital Minister will be here in person with other members of Taiwan’s Public Digital Innovation and Service team (PDIS) and Participatory Officers (PO) program to conduct a two-day workshop in New York City.</p>
        </section>
    
        <DayOverview data={data.eventContent.edges[0].node.event.day1} flip={false} className="mb4" />
        <DayOverview data={data.eventContent.edges[0].node.event.day2} flip={true} />
    
        <Trainers data={data.trainersContent.edges} />
        <TicketsContainer data={data} />
        <Sponsors data={data.sponsorsContent.edges[0].node} />    
      </div>
    )
  }
}

export default IndexPage

export const query = graphql `
  query IndexPageQuery {
    eventContent: allDataYaml(filter: { id: { regex: "/event/"}}) {
      edges {
        node {
          event {
            day1 {
              day
              photo
              event
              about
              overview {
                title
                blurb
                icon
              }
            }
            day2 {
              day
              photo
              event
              about
              overview {
                title
                blurb
                icon
              }
            }
          }
        }
      }
    }

    sponsorsContent:  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/about/sponsor/"}}) {
      edges {
        node {
          html
          frontmatter {
            key
          }
        }
      }
    }

    ticketsContent:  allDataYaml(filter: { id: { regex: "/tickets/"}})  {
      edges {
        node {
          tickets {
            title
            blurb
            icon
          }
        }
      }
    }

    applyContent:   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/about/apply/"}}) {
      edges {
        node {
          html
          frontmatter {
            key
          }
        }
      }
    }

    trainersContent: allMarkdownRemark(filter : { fileAbsolutePath: { regex: "/content\/trainers/" }}) {
      edges {      
        node {
          html              
          frontmatter {
            key
            name
            role
            links {
              twitter
              website
            }
            photo {
              childImageSharp {
                sizes(
                  maxWidth: 600,
                  maxHeight: 500,
                  cropFocus: CENTER,
                  duotone: {
                    highlight: "#0ec4f1",
                    shadow: "#5533ff",
                    opacity: 50
                  }
                ) {
              	...GatsbyImageSharpSizes
              }
            }
            }
          }
        }
      }
    }
  }
`