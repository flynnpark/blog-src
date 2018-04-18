import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { Breadcrumb } from 'semantic-ui-react';

import { actionCreators } from '../state/store';

import TagsCard from '../components/TagsCard';
import ProfileCard from '../components/ProfileCard';

class Tags extends Component {
  componentDidMount() {
    const { setTagCardVisible } = this.props;
    setTagCardVisible(false);
  }

  componentWillUnmount() {
    const { setTagCardVisible } = this.props;
    setTagCardVisible(true);
  }

  render() {
    const tags = this.props.data.allMarkdownRemark.group;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Tags</Breadcrumb.Section>
        </Breadcrumb>
        <TagsCard data={tags} />
      </div>
    );
  }
}

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTagCardVisible: visible => {
      dispatch(actionCreators.setTagCardVisible(visible));
    },
  };
};

export default connect(null, mapDispatchToProps)(Tags);

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
