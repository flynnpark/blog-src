import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import { Card, Icon, Item } from 'semantic-ui-react';

const PostCardList = ({ posts }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Icon name="list" />
          Lastest Posts
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Item.Group divided>
          {posts
            .filter(edge => !!edge.node.frontmatter.date)
            .map((edge, index) => <PostCard key={index} post={edge.node} />)}
        </Item.Group>
      </Card.Content>
    </Card>
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
