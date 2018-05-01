import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '../state/store';
import Link from 'gatsby-link';
import { Index } from 'elasticlunr';
import { Menu, Container, Responsive, Dropdown } from 'semantic-ui-react';
import Search from './Search';
import SearchItem from './SearchItem';

class NavigationBar extends Component {
  render() {
    const {
      siteTitle,
      postsInfo,
      searchData,
      dropdownVisible,
      toggleDropdownVisible,
    } = this.props;
    return (
      <div>
        <Menu borderless fixed="top" size="huge">
          <Container>
            <Link className="header item" to="/">
              {siteTitle}
            </Link>
            <Responsive
              as={Link}
              className="item"
              minWidth={Responsive.onlyTablet.minWidth}
              to="/About/"
            >
              About
            </Responsive>

            <Menu.Menu position="right">
              <Responsive
                as={Menu.Item}
                minWidth={Responsive.onlyTablet.minWidth}
              >
                <Search postsInfo={postsInfo} searchData={searchData} />
              </Responsive>
              <Responsive as={Menu.Item} {...Responsive.onlyMobile}>
                <Dropdown
                  basic
                  icon="bars"
                  open={dropdownVisible}
                  onClick={this.openDropdown}
                  onBlur={this.closeDropdown}
                >
                  <Dropdown.Menu>
                    <Search postsInfo={postsInfo} searchData={searchData} />
                    <Dropdown.Divider />
                    <Dropdown.Header content="Other menus" />
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/About/">
                      About
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
  siteTitle: PropTypes.string.isRequired,
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
