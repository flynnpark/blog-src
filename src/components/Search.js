import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
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
      <Popup
        trigger={<SearchBox translations={{ placeholder: 'Search...' }} />}
        on="click"
        wide
        hideOnScroll
      >
        <Stats />
        <Pagination />
      </Popup>
    </InstantSearch>
  );
};

const Hit = props => {
  const { classes, hit } = props;

  return (
    <Link to={hit.fields.slug} className={classes.link}>
      {hit.frontmatter.title}
      {hit.frontmatter.subTitle && <span>{hit.frontmatter.subTitle}</span>}
    </Link>
  );
};

export default Search;
