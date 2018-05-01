import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon, Item } from 'semantic-ui-react';
import Seo from '../components/Seo';
import PostCardList from '../components/PostCardList';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

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
        <Breadcrumb.Section active>Posts</Breadcrumb.Section>
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

export default IndexPage;
