import React from 'react';
import Link from 'gatsby-link';
import PostCardList from '../components/PostCardList';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return <PostCardList posts={edges} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
