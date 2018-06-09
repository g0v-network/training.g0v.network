import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { SocialIcon } from 'tachyons-react-social-icons';

const Organizers = ({data}) => {
  const organizers = data.filter(function(type) {
    return type.node.frontmatter.role === "organizer"
  })
  
  const partners = data.filter(function (type) {
    return type.node.frontmatter.type === "partner"
  }) 

  const about = data.filter(function (type) {
    return type.node.frontmatter.type === "about"
  })

  const intro = about.filter(function(role) {
    return role.node.frontmatter.role === "intro"
  })

  return (
    <section
      id="team"
      className="pv3 ph4-l">
        <section className="grid-m organizers grid-asym-list-with-photo-left">
          <header className="f3 header pv4 pt3-l pr3 pr5-l pl3">
            <h1 className="f2">
              <span className="f2 light-yellow">Organized by vNetwork</span>
            </h1>
          </header>
          <article className="content-overview">
            <figure className="ma0 pa0"><img src="/images/g0v-be-nobody.jpg" width="400" /></figure>
            <div
              className = {
                `f4 lh-copy measure measure-wide-m pv4 pl3 pl4-m pr4`
              }
            >
              vNetwork is a a collection of nobodies moved by the work in Taiwan to learn and bring the practices to their cities.

              Our group meets online and offline. Join us today by signing up
              for g0v slack.
            </div>
          </article>

          <div className="content-list ph4 ph0-l">
            {organizers.map((organizer, i) => (
              <article className="mb4 mb5-l">
                <h3 className="mb2 fw4 orange">{organizer.node.frontmatter.name}</h3>
                <div
                  className="lh-copy f5 measure-wide"
                  dangerouslySetInnerHTML={{ __html: organizer.node.html }}
                />  
                <footer>
                  {/* {organizer.node.frontmatter.social.map((service, i) => (
                    <SocialIcon url={service} className="w2 h2 mr2" />
                  ))} */}
                </footer>        
              </article>
            ))}      
          </div>
        </section>

        {/* <section className="grid-m organizers grid-asym-list-with-photo-right">
          <header className="f3 header pv4 pt3-l pl3 pl5-l pr4-l">
            <div dangerouslySetInnerHTML={{ __html: about[0].node.html }}>
            </div>
          </header>
          <div className="content-list">
            {partners.map((organizer, i) => (
              <article className="mb4 mb5-l">
                <h3 className="mb2 fw4 orange">{organizer.node.frontmatter.name}</h3>

                <div
                  className="lh-copy f5 measure-wide"
                  dangerouslySetInnerHTML={{ __html: organizer.node.html }}
                />          
              </article>
            ))}      
          </div>
        </section> */}

    </section>
  )
}

Organizers.propTypes = {

}

export default Organizers
