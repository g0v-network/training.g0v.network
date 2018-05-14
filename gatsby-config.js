module.exports = {
  siteMetadata: {
    title : 'vTaiwan Open Consultation & Participation Officers Training',
    description: `Two-day training in New York City June 11-12 2018. Learn vTaiwan and Participatory Officer training from Audrey Tang, Digital Minister of Taiwan and members of PDIS Team. Limited space.`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //  {
    //    resolve: `gatsby-source-filesystem`,
    //    options: {
    //      name: `images`,
    //      path: `${__dirname}/content/images`,
    //    },
    //  },

    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json-data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `yaml-content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `markdown-content`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
        precision: 8,
      },
    },
  ],
}
