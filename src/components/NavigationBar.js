import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import _ from 'lodash';
import kebabCase from 'lodash/kebabCase';
import { Index } from 'elasticlunr';
import {
  Menu,
  Container,
  Input,
  Search,
  Header,
  Label,
} from 'semantic-ui-react';

class NavigationBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    this.index = this.getOrCreateIndex();
    const rawResults = this.index
      .search(value)
      .map(({ ref }) => this.index.documentStore.getDoc(ref));
    const nextResults = [];
    rawResults.map(result => {
      const { title, tags } = result;
      const nextResult = {
        title,
      };
      nextResults.push(nextResult);
    });
    this.setState({
      isLoading: false,
      value,
      results: nextResults,
    });
  };

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchData.index);

  render() {
    const { isLoading, value, results } = this.state;
    const { siteTitle } = this.props;
    return (
      <Menu borderless fixed="top" inverted size="huge">
        <Container>
          <Link className="header item" to="/">
            {siteTitle}
          </Link>
          <Menu.Item as="a">About</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Search
                aligned="right"
                as={Input}
                placeholder="Search..."
                size="mini"
                loading={isLoading}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true,
                })}
                results={results}
                value={value}
              />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

NavigationBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default NavigationBar;
