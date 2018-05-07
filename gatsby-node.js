/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

const CONTENT_PER_PAGE = 10;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const postSlug = createFilePath({
      node,
      getNode,
      basePath: 'blog-posts/contents',
    });
    const slug = postSlug;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve('./src/templates/post.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            excerpt(pruneLength: 200)
            frontmatter {
              date(formatString: "YYYY. MM. DD. HH:mm")
              title
              cover {
                childImageSharp {
                  resize(width: 300) {
                    coverImage: src
                  }
                }
              }
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const numOfPosts = result.data.allMarkdownRemark.totalCount;

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: './src/templates/posts.js',
      pageLength: CONTENT_PER_PAGE,
      pathPrefix: 'posts/pages',
      context: {
        listHeader: 'Posts',
        numOfPosts,
      },
    });

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      });
    });

    let tags = [];
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    tags = _.uniq(tags);

    tags.forEach(tag => {
      const tagPosts = result.data.allMarkdownRemark.edges.filter(edge =>
        edge.node.frontmatter.tags.includes(tag)
      );

      createPaginatedPages({
        edges: tagPosts,
        createPage: createPage,
        pageTemplate: './src/templates/posts.js',
        pageLength: CONTENT_PER_PAGE,
        pathPrefix: `tags/${_.kebabCase(tag)}`,
        context: {
          listHeader: tag,
          numOfPosts: tagPosts.length,
        },
      });
    });
  });
};
