const path = require('path')

module.exports = {
  siteMetadata: {
title : 'vTaiwan Open Consultation & Participation Officers Training',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json-data`,
        path: path.join(__dirname, `data`),
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `data`),
        name: `yaml-content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`),
        name: `markdown-content`,
      },
    },
  ],
}
