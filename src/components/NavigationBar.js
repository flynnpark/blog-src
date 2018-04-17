import React from 'react';
import Link from 'gatsby-link';
import { Menu, Container } from 'semantic-ui-react';

const NavigationBar = ({ siteTitle }) => {
  return (
    <Menu borderless fixed="top" inverted>
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

export default NavigationBar;
