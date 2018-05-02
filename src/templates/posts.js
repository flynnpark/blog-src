import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon, Item } from 'semantic-ui-react';
import Seo from '../components/Seo';
import PostCardList from '../components/PostCardList';

const IndexPage = ({ pathContext }) => {
  const {
    group,
    index,
    first,
    last,
    pageCount,
    pathPrefix,
    additionalContext,
  } = pathContext;
  const pageInfo = { index, first, last, pageCount, pathPrefix };
  return (
    <div>
      <Seo />
      <Breadcrumb style={{ marginBottom: '2em' }}>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>
          {additionalContext.listHeader}
        </Breadcrumb.Section>
      </Breadcrumb>
      <PostCardList
        listHeader={additionalContext.listHeader}
        numOfPosts={additionalContext.numOfPosts}
        posts={group}
        pageInfo={pageInfo}
      />
    </div>
  );
};

IndexPage.propTypes = {
  pathContext: PropTypes.shape({
    group: PropTypes.array,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    pathPrefix: PropTypes.string,
    additionalContext: PropTypes.shape({
      listHeader: PropTypes.string,
      numOfPosts: PropTypes.number,
    }),
  }).isRequired,
};

export default IndexPage;
