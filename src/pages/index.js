import React from 'react';
import Link from 'gatsby-link';
import { Header, Icon, Segment } from 'semantic-ui-react';
import PostListItem from '../components/PostListItem';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostListItem key={edge.node.id} post={edge.node} />);
  return (
    <div>
      <Header as="h2" attached="top">
        <Icon name="list" />
        <Header.Content>Lastest Posts</Header.Content>
      </Header>
      <Segment attached="bottom">{Posts}</Segment>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
