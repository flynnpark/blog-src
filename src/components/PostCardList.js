import React from 'react';
import PostCard from './PostCard';
import { Card, Icon, Segment, Item } from 'semantic-ui-react';

const PostCardList = ({ data }) => {
  const Posts = data
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) => <PostCard key={index} post={edge.node} />);
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Icon name="list" />
          Lastest Posts
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Item.Group divided>{Posts}</Item.Group>
      </Card.Content>
    </Card>
  );
};

export default PostCardList;
