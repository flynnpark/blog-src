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
      trailingSlash: false,
    });
    const slug = postSlug;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('./src/templates/post.js');

  const allMarkdown = await graphql(`
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
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.erros);
    throw Error(allMarkdown.errors);
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges;
  const numOfPosts = allMarkdown.data.allMarkdownRemark.totalCount;

  // 포스트 리스트 생성
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

  // 포스트 페이지 생성
  posts.forEach(edge => {
    const slug = edge.node.fields.slug;
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });

  // 태그 추출
  let tags = [];
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  tags = _.uniq(tags);

  // 각 태그별 포스트 리스트 생성
  tags.forEach(tag => {
    const tagPosts = posts.filter(edge =>
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
};
