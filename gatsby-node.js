/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const categorySlug = '/posts';
    const postSlug = createFilePath({
      node,
      getNode,
      bastPath: 'blog-posts/posts',
    });
    const slug = categorySlug + postSlug;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`./src/templates/PostTemplate.js`);
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.posts.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          }, // additional data can be passed via context
        });
      });
      resolve();
    });
  });
};
