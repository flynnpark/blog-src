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
    this.setState({
      isLoading: false,
      simpleResults: [],
      rawResults: [],
      value: '',
    });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    this.index = this.getOrCreateIndex();

    const rawResults = this.index
      .search(value)
      .map(({ ref }) => this.index.documentStore.getDoc(ref));
    const simpleResults = [];
    rawResults.map(({ title, tags }, index) => {
      const nextResult = {
        id: index,
        title,
      };
      simpleResults.push(nextResult);
    });

    this.setState({
      isLoading: false,
      value,
      simpleResults,
      rawResults,
    });
  };

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchData.index);

  setCustomRenderer = resultProps => {
    const { allPosts } = this.props;
    return CustomRenderer({
      ...this.state,
      allPosts,
      currentResult: resultProps,
    });
  };
  render() {
    const { isLoading, value, simpleResults } = this.state;
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
                resultRenderer={this.setCustomRenderer}
                results={simpleResults}
                value={value}
              />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const CustomRenderer = props => {
  const {
    currentResult: { id, title },
    allPosts: { edges },
    rawResults,
  } = props;
  const tags = rawResults[id].tags;
  const rawId = rawResults[id].id;
  const slug = edges.filter(edge => edge.node.id === rawId)[0].node.fields.slug;
  return (
    <Link to={slug}>
      <Header as="h5">{title}</Header>
      <Label.Group>
        {tags.map((tag, index) => (
          <Label key={index} size="mini">
            {tag}
          </Label>
        ))}
      </Label.Group>
    </Link>
  );
};

NavigationBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default NavigationBar;
