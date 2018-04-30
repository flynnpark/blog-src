import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import DefaultLayout from '../components/DefaultLayout';
import MobileLayout from '../components/MobileLayout';
import 'semantic-ui-css/semantic.min.css';
import 'prismjs/themes/prism-tomorrow.css';

const Layout = ({ children, data }) => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <MobileLayout children={children} data={data} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DefaultLayout children={children} data={data} />
      </Responsive>
    </div>
  );
};

Layout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    siteSearchIndex {
      index
    }
    recentTags: allMarkdownRemark(limit: 20) {
      tags: group(field: frontmatter___tags) {
        tagName: fieldValue
        postCount: totalCount
      }
    }
    allPosts: allMarkdownRemark {
      posts: edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;
