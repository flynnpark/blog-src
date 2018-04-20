import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Icon, Label, Header, Divider, Breadcrumb } from 'semantic-ui-react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Breadcrumb>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Link className="section" to="/posts">
          Posts
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>{post.frontmatter.title}</Breadcrumb.Section>
      </Breadcrumb>
      <Header as="h1">
        {post.frontmatter.title}
        <Header.Subheader>{post.frontmatter.date}</Header.Subheader>
      </Header>
      <Label.Group>
        {post.frontmatter.tags.map((tag, index) => (
          <Link className="ui label" key={index} to={`/tags/${kebabCase(tag)}`}>
            {tag}
          </Link>
        ))}
      </Label.Group>
      <Divider />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        tags
      }
    }
  }
`;
