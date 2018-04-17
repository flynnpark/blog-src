import React from 'react';
import Link from 'gatsby-link';
import { Grid } from 'semantic-ui-react';
import PostCardList from '../components/PostCardList';
import ProfileCard from '../components/ProfileCard';
import TagsCard from '../components/TagsCard';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges, group },
  },
}) => {
  return (
    <Grid columns="equal">
      <Grid.Column width={13}>
        <PostCardList data={edges} />
      </Grid.Column>
      <Grid.Column width={3}>
        <ProfileCard />
        <TagsCard data={group} />
      </Grid.Column>
    </Grid>
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
