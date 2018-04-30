import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import { Sidebar, Menu } from 'semantic-ui-react';
import DefaultLayout from './DefaultLayout';
import Search from './Search';

class MobileLayout extends Component {
  render() {
    const { children, data, sidebarVisible, toggleSidebar } = this.props;
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          visible={sidebarVisible}
          icon="labeled"
          vertical
        >
          <Menu.Item name="search">
            <Search />
          </Menu.Item>
          <Menu.Item name="about">About</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarVisible} onClick={toggleSidebar}>
          <DefaultLayout children={children} data={data} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { sidebarVisible } = state;
  return { sidebarVisible };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidebar: () => {
      console.log(ownProps);
      dispatch(actionCreators.setSidebarVisible(!ownProps.sidebarVisible));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
