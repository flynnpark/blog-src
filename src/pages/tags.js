import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Breadcrumb } from 'semantic-ui-react';
import Seo from '../components/Seo';
import TagsList from '../components/TagsList';
import ProfileCard from '../components/ProfileCard';

const Tags = props => {
  const { numOfTags, tags } = props.data.allMarkdownRemark;
  return (
    <div>
      <Seo />
      <Breadcrumb style={{ marginBottom: '2em' }}>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>Tags</Breadcrumb.Section>
      </Breadcrumb>
      <TagsList tags={tags} numOfTags={numOfTags} />
    </div>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      numOfTags: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark {
      numOfTags: totalCount
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
