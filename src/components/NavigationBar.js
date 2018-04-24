import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Menu, Container, Input, Search } from 'semantic-ui-react';

const NavigationBar = ({ siteTitle }) => {
  return (
    <Menu borderless fixed="top" inverted size="huge">
      <Container>
        <Link className="header item" to="/">
          {siteTitle}
        </Link>
        <Menu.Item as="a">About</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Search as={Input} placeholder="Search..." size="mini" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

NavigationBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default NavigationBar;
