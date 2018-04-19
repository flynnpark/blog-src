import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Item, Label } from 'semantic-ui-react';

const PostCard = ({ post }) => {
  const { tags } = post.frontmatter;
  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Link to={post.fields.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
          </Link>
        </Item.Header>
        <Item.Meta>{tags.map(tag => <Label>{tag}</Label>)}</Item.Meta>
        <Item.Description>{post.excerpt}</Item.Description>
      </Item.Content>
    </Item>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
  }).isRequired,
};

export default PostCard;
