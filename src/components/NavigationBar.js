import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import Link from 'gatsby-link';
import { Menu, Container, Responsive, Icon } from 'semantic-ui-react';
import Search from './Search';

class NavigationBar extends Component {
  render() {
    const { siteTitle, algolia } = this.props;
    return (
      <div>
        <Menu borderless fixed="top" size="huge" inverted>
          <Container>
            <Menu.Item as={Link} header to="/">
              {siteTitle}
            </Menu.Item>
            <Menu.Item as={Link} to="/about/">
              About
            </Menu.Item>

            <Menu.Menu position="right">
              <Responsive
                as={Menu.Item}
                minWidth={Responsive.onlyTablet.minWidth}
              >
                <Search algolia={algolia} />
              </Responsive>
              <Responsive as={Menu.Item} {...Responsive.onlyMobile}>
                <Icon name="search" />
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
  algolia: PropTypes.shape({
    appId: PropTypes.string.isRequired,
    searchOnlyApiKey: PropTypes.string.isRequired,
    indexName: PropTypes.string.isRequired,
  }),
};

export default NavigationBar;
