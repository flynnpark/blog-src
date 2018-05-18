import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Segment, Item } from 'semantic-ui-react';
import {
  InstantSearch,
  SearchBox,
  Stats,
  Hits,
  Pagination,
} from 'react-instantsearch/dom';

const Search = props => {
  const { algolia } = props;
  return (
    <InstantSearch
      appId={algolia.appId}
      apiKey={algolia.searchOnlyApiKey}
      indexName={algolia.indexName}
    >
      <SearchBox translations={{ placeholder: 'Search...' }} />
      <div className="ais-SearchResult transition visible">
        <Hits />
        <Stats />
        <Pagination />
      </div>
    </InstantSearch>
  );
};

const Hit = props => {
  const { hit } = props;
  console.log(hit);
  return <span>{hit}</span>;
};

export default Search;
