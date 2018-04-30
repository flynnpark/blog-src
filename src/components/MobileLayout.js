import React, { Component } from 'react';
import { Sidebar } from 'semantic-ui-react';
import DefaultLayout from './DefaultLayout';

class MobileLayout extends Component {
  render() {
    const { children, data } = this.props;
    return (
      <Sidebar.Pushable>
        <Sidebar>
          <div />
        </Sidebar>
        <Sidebar.Pusher>
          <DefaultLayout children={children} data={data} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default MobileLayout;
