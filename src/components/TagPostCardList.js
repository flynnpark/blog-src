import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Item } from 'semantic-ui-react';
import PostCard from './PostCard';

const TagPostCardList = ({ tag, totalCount, posts }) => {
  const tagInfo = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with '${tag}'`;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Icon name="tag" />
          {tag}
        </Card.Header>
        <Card.Meta>{tagInfo}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Item.Group divided>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
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
