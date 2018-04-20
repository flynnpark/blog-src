import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon, Item } from 'semantic-ui-react';
import PostCard from './PostCard';

const TagPostCardList = ({ tag, totalCount, posts }) => {
  const tagInfo = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with '${tag}'`;
  return (
    <Item.Group divided>
      {posts.map((post, index) => <PostCard key={index} post={post.node} />)}
    </Item.Group>
  );
};

TagPostCardList.propTypes = {
  tag: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
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
          author: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ),
};

export default TagPostCardList;
