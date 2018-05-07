const path = require('path')

module.exports = {
  siteMetadata: {
    title : 'vTaiwan Open Consultation & Participation Officers Training',
    description: `Two-day training in New York City June 11-12 2018. Learn vTaiwan and Participatory Officer training from Audrey Tang, Digital Minister of Taiwan and members of PDIS Team. Limited space.`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `blog`),
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-react-helmet`,
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
