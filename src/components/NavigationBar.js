import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import Link from 'gatsby-link';
import { Menu, Container, Responsive, Icon } from 'semantic-ui-react';
import Search from './Search';

class NavigationBar extends Component {
  render() {
    const {
      siteTitle,
      algolia,
      dropdownVisible,
      toggleDropdownVisible,
    } = this.props;
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
  dropdownVisible: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
  toggleDropdownVisible: PropTypes.func.isRequired,
};

export default NavigationBar;
