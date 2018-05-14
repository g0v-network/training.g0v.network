import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from "gatsby-image";
import {
  SocialIcon
} from 'react-social-icons';


const Person = ({name, content, photo, className, ...props}) => {
  const {
    role,
    links
  } = {...props}

  return (
    <article
      className={className}>
      <header className="person-core">
        <h3 className="fw4 f3 mb0 yellow">{name}</h3>
        <p>{role}</p>
        <ul>
          {links.map((a) => {
            <li>
              <SocialIcon key={Object.keys(a)} network={Object.keys(a)} url={Object.values(a)} />
              {a}
            </li>
          })}
        </ul>
      </header>
      <figure className="ma0 pa0">
        <Img sizes={photo} />
      </figure>
      <div className="person-content pl4 pl5-l pv4 pt6-l pr4 pr6-l">
        <div
          className="person-bio lh-copy f5 f4-l pr6-l near-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}

Person.propTypes = {

}

export default Person
