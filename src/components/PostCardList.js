import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Header, Divider, Icon, Item } from 'semantic-ui-react';
import PostCard from './PostCard';

const PostCardList = ({ posts }) => {
  return (
    <div>
      <Header as="h1">
        <Header.Content>Recent Posts</Header.Content>
      </Header>
      <Item.Group divided>
        {posts
          .filter(edge => !!edge.node.frontmatter.date)
          .map((post, index) => <PostCard key={index} post={post.node} />)}
      </Item.Group>
      <Link to="/posts">
        <Icon name="arrow right" />View more posts
      </Link>
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
