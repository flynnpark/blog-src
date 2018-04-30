import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import Link from 'gatsby-link';
import { Index } from 'elasticlunr';
import { Menu, Container, Responsive, Button } from 'semantic-ui-react';
import Search from './Search';
import SearchItem from './SearchItem';

class NavigationBar extends Component {
  render() {
    const {
      siteTitle,
      postsInfo,
      searchData,
      sidebarVisible,
      toggleSidebar,
    } = this.props;
    return (
      <div>
        <Menu borderless fixed="top" size="huge">
          <Container>
            <Link className="header item" to="/">
              {siteTitle}
            </Link>
            <Responsive as={Menu.Item} minWidth="768">
              About
            </Responsive>

            <Menu.Menu position="right">
              <Responsive as={Menu.Item} minWidth="768">
                <Search postsInfo={postsInfo} searchData={searchData} />
              </Responsive>
              <Responsive as={Menu.Item} maxWidth="767">
                <Button basic icon="bars" onClick={toggleSidebar} />
              </Responsive>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { sidebarVisible } = state;
  return { sidebarVisible };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidebar: () => {
      dispatch(actionCreators.setSidebarVisible(!ownProps.sidebarVisible));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
