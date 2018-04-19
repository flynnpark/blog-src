import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Menu, Container } from 'semantic-ui-react';

const NavigationBar = ({ siteTitle }) => {
  return (
    <Menu borderless fixed="top" inverted size="huge">
      <Container>
        <Link className="header item" to="/">
          {siteTitle}
        </Link>

        <Menu.Menu position="right">
          <Menu.Item as="a" name="About" />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

NavigationBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default NavigationBar;
