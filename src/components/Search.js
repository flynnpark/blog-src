import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Index } from 'elasticlunr';
import {
  Input,
  Search as SearchComponent,
  Header,
  Label,
} from 'semantic-ui-react';
import SearchItem from './SearchItem';

class Search extends Component {
  state = {
    isLoading: false,
    simpleResults: [],
    rawResults: [],
    value: '',
  };

  static propTypes = {
    postsInfo: PropTypes.array,
    searchData: PropTypes.object,
  };

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
    const { postsInfo } = this.props;
    const currentResult = {
      id: resultProps.id,
      title: resultProps.title,
    };
    return SearchItem({
      ...this.state,
      postsInfo,
      currentResult,
    });
  };

  render() {
    const { isLoading, simpleResults, value } = this.state;
    return (
      <SearchComponent
        aligned="right"
        as={Input}
        loading={isLoading}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        resultRenderer={this.setCustomRenderer}
        results={simpleResults}
        size="mini"
        value={value}
      />
    );
  }
}

export default Search;
