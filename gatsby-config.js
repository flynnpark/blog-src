module.exports = {
  siteMetadata: {
    title: 'Flynndev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/blog-posts/posts/`,
      },
    },
  ],
};
