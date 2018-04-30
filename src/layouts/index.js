import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import { Sidebar, Responsive, Menu } from 'semantic-ui-react';
import DefaultLayout from '../components/DefaultLayout';
import Search from '../components/Search';
import 'semantic-ui-css/semantic.min.css';
import 'prismjs/themes/prism-tomorrow.css';

class Layout extends Component {
  render() {
    const { children, data, sidebarVisible } = this.props;
    return (
      <Sidebar.Pushable>
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="right"
            visible={sidebarVisible}
            icon="labeled"
            vertical
          >
            <Menu.Item name="search">
              <Search
                postsInfo={data.allPosts.posts}
                searchData={data.siteSearchIndex}
              />
            </Menu.Item>
            <Menu.Item name="about">About</Menu.Item>
          </Sidebar>
        </Responsive>
        <Sidebar.Pusher dimmed={sidebarVisible} onClick={this.closeSidebar}>
          <DefaultLayout children={children} data={data} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
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
