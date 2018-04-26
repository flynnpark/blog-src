const globalConfig = require('./global-config');

module.exports = {
  siteMetadata: {
    title: globalConfig.siteTitle,
    description: globalConfig.description,
    siteUrl: globalConfig.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/blog-posts/contents/`,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: globalConfig.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-101787931-3',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'tags'],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
          },
        },
      },
    },
  ],
};
