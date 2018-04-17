import React from 'react';
import Link from 'gatsby-link';
import { Header, Icon, Segment, Item } from 'semantic-ui-react';
import PostListItem from '../components/PostListItem';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) => <PostListItem key={index} post={edge.node} />);
  return (
    <div>
      <Header as="h2" attached="top">
        <Icon name="list" />
        <Header.Content>Lastest Posts</Header.Content>
      </Header>
      <Segment attached="bottom">
        <Item.Group divided>{Posts}</Item.Group>
      </Segment>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`;
