import React from 'react';
import Link from 'gatsby-link';
import { Menu, Container } from 'semantic-ui-react';

const NavigationBar = ({ siteTitle }) => {
  console.log(siteTitle);
  return (
    <Menu borderless fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            {siteTitle}
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link to="/about/">
            <Menu.Item as="a" name="About" />
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavigationBar;
