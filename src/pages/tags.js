import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Grid, Breadcrumb } from 'semantic-ui-react';
import TagsCard from '../components/TagsCard';
import ProfileCard from '../components/ProfileCard';

const Tags = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <div>
      <Helmet title={title} />
      <Grid columns="equal">
        <Grid.Column width={13}>
          <Breadcrumb>
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Tags</Breadcrumb.Section>
          </Breadcrumb>
          <TagsCard data={group} />
        </Grid.Column>
        <Grid.Column width={3}>
          <ProfileCard />
        </Grid.Column>
      </Grid>
    </div>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
