import React from 'react';
import Link from 'gatsby-link';
import { Item } from 'semantic-ui-react';

const PostListItem = ({ post }) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Link to={post.fields.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
          </Link>
        </Item.Header>
        <Item.Meta>Test</Item.Meta>
        <Item.Description>Test for what?</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default PostListItem;
