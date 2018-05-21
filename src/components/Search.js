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
        <Hits hitComponent={Hit} />
        <Pagination />
        <Stats />
      </div>
    </InstantSearch>
  );
};

const Hit = props => {
  const { hit } = props;
  console.log(hit);
  return (
    <div className="item">
      <div className="image">
        <img src={hit.frontmatter.cover.childImageSharp.resize.coverImage} />
      </div>
      <div className="content">
        <div className="header">
          <span className="main header">
            {hit.frontmatter.title}
            <div className="sub header">{hit.frontmatter.date}</div>
          </span>
        </div>
        <div className="meta">
          <div className="tags">
            {hit.frontmatter.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="description">{hit.excerpt}</div>
      </div>
    </div>
  );
};

export default Search;
