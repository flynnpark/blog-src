import React from 'react';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon, Item } from 'semantic-ui-react';
import PostCardList from '../components/PostCardList';

const Posts = ({ data }) => {
  const { numOfPosts, posts } = data.allMarkdownRemark;
  return (
    <div>
      <Breadcrumb style={{ marginBottom: '2em' }}>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>Posts</Breadcrumb.Section>
      </Breadcrumb>
      <PostCardList listHeader="Posts" numOfPosts={numOfPosts} posts={posts} />
    </div>
  );
};

export default Posts;

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
