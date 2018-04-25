import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Index } from 'elasticlunr';
import { Menu, Container } from 'semantic-ui-react';
import Search from './Search';
import SearchItem from './SearchItem';

const NavigationBar = props => {
  const { siteTitle, postsInfo, searchData } = props;
  return (
    <Menu borderless fixed="top" size="huge">
      <Container>
        <Link className="header item" to="/">
          {siteTitle}
        </Link>
        <Menu.Item as="a">About</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Search postsInfo={postsInfo} searchData={searchData} />
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
