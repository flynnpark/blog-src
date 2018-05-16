import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearch } from 'react-instantsearch/dom';

const Search = props => {
  const { algolia } = props;
  return (
    <InstantSearch
      appId={algolia.appId}
      apiKey={algolia.searchOnlyApiKey}
      indexName={algolia.indexName}
    >
      {/* Search widgets will go there */}
    </InstantSearch>
  );
};

export default Search;
