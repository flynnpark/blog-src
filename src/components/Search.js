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
      <div className="ui input search right aligned">
        <SearchBox translations={{ placeholder: 'Search...' }} />
        <div className="results transition visible" style={{ width: '36em' }}>
          <Hits hitComponent={Hit} />
          <Stats />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
};

const Hit = props => {
  console.log(props);
  const { classes, hit } = props;
  return (
    <Item className="ui input">
      <Item.Image
        size="tiny"
        src={hit.frontmatter.cover.childImageSharp.resize.coverImage}
      />
      <Item.Content className="ui input">
        <Item.Header>{hit.frontmatter.title}</Item.Header>
        <Item.Content>{hit.excerpt}</Item.Content>
      </Item.Content>
    </Item>
  );
};

export default Search;
