import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon, Divider, Item } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

const Posts = ({ data }) => {
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
        <Icon name="pencil" />
        <Header.Content>Posts</Header.Content>
      </Header>
      <Divider />
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
