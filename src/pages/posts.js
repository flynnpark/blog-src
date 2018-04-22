import React from 'react';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon, Item } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

const Posts = ({ data }) => {
  const totalCount = data.allMarkdownRemark.totalCount;
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      <Breadcrumb>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>Posts</Breadcrumb.Section>
      </Breadcrumb>
      <Header as="h1">
        Posts<Header.Subheader>
          총 {totalCount}개의 글이 있습니다.
        </Header.Subheader>
      </Header>
      <Item.Group divided>
        {posts
          .filter(edge => !!edge.node.frontmatter.date)
          .map((post, index) => <PostCard key={index} post={post.node} />)}
      </Item.Group>
    </div>
  );
};

export default Posts;

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            tags
          }
        }
      }
    }
  }
`;
