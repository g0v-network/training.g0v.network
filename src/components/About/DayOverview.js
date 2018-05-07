import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Day1 from './Day1'

const DayOverview = ({
  data,
  flip
}) => {

  const headerClass = flip === false ? "pl3 pl5-l pr4-l" : "pr3 pr5-l pl3 pl4-l"
  const aboutClass = flip === false ?   "pr6-l" : "pl4-l"


  let eventClass= `event event-day${data.day} mb5`

  return ( 
    <section className={eventClass}>
      <header className={`event-header pv4 pt3-l ${headerClass}`}>
        <h1 className="f2">
        <span className="db fw4 f4 yellow mb2">Day {data.day}</span>
        <span className="f2 light-yellow">{data.event}</span>
        </h1>
      </header>

      <article className={`event-about`}>
        <figure className="ma0 pa0"><img src={data.photo} width="600" /></figure>
        <div
          className = {
            `f4 lh-copy measure measure-wide-m pv4 pl3 pl4-m pr4 ${aboutClass}`
          }
          dangerouslySetInnerHTML={{ __html: data.about }}
        />    
      </article>
        
      <Day1 data={data.overview} /> 
    </section>
  )
}

DayOverview.propTypes = {

}

export default DayOverview
