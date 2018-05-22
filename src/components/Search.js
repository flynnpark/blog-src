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

class Search extends Component {
  state = {
    resultsVisible: false,
  };
  openResults = () => {
    window.addEventListener('click', this.closeResults);
    this.setState({
      resultsVisible: true,
    });
  };
  closeResults = () => {
    window.removeEventListener('click', this.closeResults);
    this.setState({
      resultsVisible: false,
    });
  };
  render() {
    const { resultsVisible } = this.state;
    const { algolia } = this.props;
    return (
      <InstantSearch
        appId={algolia.appId}
        apiKey={algolia.searchOnlyApiKey}
        indexName={algolia.indexName}
      >
        <SearchBox
          translations={{ placeholder: 'Search...' }}
          onClick={e => {
            e.stopPropagation();
            this.openResults();
          }}
        />
        <div
          className={`ais-SearchResult transition ${
            resultsVisible ? 'visible' : ''
          }`}
        >
          <Hits hitComponent={Hit} onClick={this.closeResults} />
          <div onClick={e => e.stopPropagation()}>
            <Pagination onClick={e => e.stopPropagation()} />
            <Stats />
          </div>
        </div>
      </InstantSearch>
    );
  }
}

const Hit = props => {
  const { hit } = props;
  return (
    <Link className="item" to={hit.fields.slug}>
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
    </Link>
  );
};

export default Search;
