import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import DefaultLayout from '../components/DefaultLayout';
import '../semantic/dist/semantic.min.css';
import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../css/algolia.css';

class Layout extends Component {
  render() {
    const { children, data, sidebarVisible } = this.props;
    return <DefaultLayout children={children} data={data} />;
  }

  closeSidebar = () => {
    const { sidebarVisible, toggleSidebar } = this.props;
    if (sidebarVisible) {
      toggleSidebar(false);
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  const { sidebarVisible } = state;
  return { sidebarVisible };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidebar: visible => {
      dispatch(actionCreators.setSidebarVisible(visible));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
    recentTags: allMarkdownRemark(limit: 20) {
      tags: group(field: frontmatter___tags) {
        tagName: fieldValue
        postCount: totalCount
      }
    }
  }
`;
