import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const Layout = ({ children, data }) => (
  <div className="avenir overflow-hidden">
  {console.log(data)}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: `${data.site.siteMetadata.description}`
        },
      ]}
    >
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
    </Helmet>
    <Header data={data} siteTitle={data.site.siteMetadata.title} />
    <main className="relative z-2 mt4-l black-60">
      {children()}
    </main>
    <Footer data={data} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
