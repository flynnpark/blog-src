import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { Breadcrumb } from 'semantic-ui-react';

import { actionCreators } from '../state/store';

import TagsList from '../components/TagsList';
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
    const { numOfTags, tags } = this.props.data.allMarkdownRemark;
    return (
      <div>
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
  }
}

Tags.propTypes = {
  setTagCardVisible: PropTypes.func.isRequired,
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
    allMarkdownRemark {
      numOfTags: totalCount
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
