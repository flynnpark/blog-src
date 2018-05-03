import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Item, Label, Header } from 'semantic-ui-react';

const PostCard = ({ post }) => {
  const { tags } = post.frontmatter;
  return (
    <Item style={{ paddingTop: '1.2em', paddingBottom: '1.2em' }}>
      <Item.Content>
        <Item.Header>
          <Header as={Link} size="small" to={post.fields.slug}>
            {post.frontmatter.title}
            <Header.Subheader>{post.frontmatter.date}</Header.Subheader>
          </Header>
        </Item.Header>
        <Item.Meta>
          <Label.Group>
            {tags.map((tag, index) => (
              <Link
                className="ui label"
                key={index}
                to={`/tags/${kebabCase(tag)}`}
                style={{ marginTop: '0.3em', marginBottom: '0.3em' }}
              >
                {tag}
              </Link>
            ))}
          </Label.Group>
        </Item.Meta>
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
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
  }).isRequired,
};

export default PostCard;
