import React from 'react';
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

export default PostCardList;
