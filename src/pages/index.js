import React from 'react';
import Link from 'gatsby-link';
import { Icon } from 'semantic-ui-react';
import PostCardList from '../components/PostCardList';

const IndexPage = ({ data }) => {
  const { numOfPosts, posts } = data.allMarkdownRemark;
  return (
    <div>
      <PostCardList
        listHeader="Recent Posts"
        numOfPosts={numOfPosts}
        posts={posts}
        type={'recents'}
      />
      <div style={{ marginTop: '2em' }}>
        <Link to="/posts/pages">
          <Icon name="arrow right" />View more posts
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      numOfPosts: totalCount
      posts: edges {
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
