import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { Breadcrumb, Header, Icon, Divider } from 'semantic-ui-react';

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
    const tags = this.props.data.allMarkdownRemark.group;
    return (
      <div>
        <Breadcrumb>
          <Link className="section" to="/">
            Home
          </Link>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Tags</Breadcrumb.Section>
        </Breadcrumb>
        <Header as="h1">
          <Icon name="tags" />
          <Header.Content>Tags</Header.Content>
        </Header>
        <Divider />
        <TagsList tags={tags} />
      </div>
    );
  }
}

Tags.propTypes = {
  setTagCardVisible: PropTypes.func.isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
