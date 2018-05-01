const path = require('path');
const slug = require('slug');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(filter : { fileAbsolutePath: { regex: "/blog/" }}) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              name
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result
      .data
      .allMarkdownRemark
      .edges
      .forEach(({node}) => {
        createPage({
          path: node.frontmatter.path, 
          component: blogPostTemplate, 
          context: {}});
      });
  });
};