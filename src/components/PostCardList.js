import React from 'react';
import PostCard from './PostCard';
import { Header, Icon, Segment, Item } from 'semantic-ui-react';

const PostCardList = ({ data }) => {
  const Posts = data
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) => <PostCard key={index} post={edge.node} />);
  return (
    <div>
      <Header as="h2" attached="top">
        <Icon name="list" />
        <Header.Content>Lastest Posts</Header.Content>
      </Header>
      <Segment attached="bottom">
        <Item.Group divided>{Posts}</Item.Group>
      </Segment>
    </div>
  );
};

export default PostCardList;
