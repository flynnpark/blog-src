import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import Link from 'gatsby-link';
import { Menu, Container, Responsive, Dropdown } from 'semantic-ui-react';
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
                <Search algolia={algolia} />
              </Responsive>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }

  openDropdown = () => {
    const { dropdownVisible, toggleDropdownVisible } = this.props;
    if (!dropdownVisible) {
      toggleDropdownVisible(true);
    }
  };

  closeDropdown = () => {
    const { dropdownVisible, toggleDropdownVisible } = this.props;
    if (dropdownVisible) {
      toggleDropdownVisible(false);
    }
  };
}

NavigationBar.propTypes = {
  dropdownVisible: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
  toggleDropdownVisible: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { dropdownVisible } = state;
  return { dropdownVisible };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDropdownVisible: visible => {
      dispatch(actionCreators.setDropdownVisible(visible));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
