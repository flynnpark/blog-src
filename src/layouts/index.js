import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import DefaultLayout from '../components/DefaultLayout';
import '../semantic/dist/semantic.min.css';
import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'instantsearch.css/themes/reset.css';
import '../css/algolia.scss';

const Layout = ({ children, data, sidebarVisible }) => {
  return <DefaultLayout children={children} data={data} />;
};

export default Layout;

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
