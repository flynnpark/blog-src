import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider, Icon, Item } from 'semantic-ui-react';
import PostCard from './PostCard';

const PostCardList = ({ posts }) => {
  return (
    <div>
      <Header as="h1">
        <Icon name="list" />
        <Header.Content>Lastest Posts</Header.Content>
      </Header>
      <Divider />
      <Item.Group divided>
        {posts
          .filter(edge => !!edge.node.frontmatter.date)
          .map((edge, index) => <PostCard key={index} post={edge.node} />)}
      </Item.Group>
    </div>
  );
};

PostCardList.propTypes = {
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
    })
  ),
};

export default PostCardList;
