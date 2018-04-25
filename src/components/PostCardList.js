import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Header, Divider, Icon, Item } from 'semantic-ui-react';
import PostCard from './PostCard';

const PostCardList = ({ listHeader, numOfPosts, posts, type }) => {
  const subHeader = `A collection of ${numOfPosts} ${type && 'latest'} post${
    numOfPosts === 1 ? '' : 's'
  }`;
  return (
    <div>
      <Header as="h1">
        <Header.Content>{listHeader}</Header.Content>
        {numOfPosts && <Header.Subheader>{subHeader}</Header.Subheader>}
      </Header>
      <Item.Group divided style={{ marginTop: '2.5em' }}>
        {posts
          .filter(edge => !!edge.node.frontmatter.date)
          .map((post, index) => <PostCard key={index} post={post.node} />)}
      </Item.Group>
    </div>
  );
};

PostCardList.propTypes = {
  listHeader: PropTypes.string.isRequired,
  numOfPosts: PropTypes.number.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        excerpt: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          date: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string.isRequired),
        }).isRequired,
      }).isRequired,
    })
  ),
};

export default PostCardList;
