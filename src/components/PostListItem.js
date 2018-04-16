import React from 'react';
import Link from 'gatsby-link';

const PostListItem = ({ post }) => {
  return (
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  );
};

export default PostListItem;
