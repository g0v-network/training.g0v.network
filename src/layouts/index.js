import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './index.css'

const Layout = ({ children, data }) => (
  <div className="avenir">
  {console.log(data)}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} siteTitle={data.site.siteMetadata.title} />
    <main className="relative z-2 mt4">
      {children()}
    </main>
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
      }
    }
    dataYaml {
      nav {
        primaryLinks {
          title
          url
        }
      }
  }

  }
`
