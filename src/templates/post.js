import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Card, Icon, Label, Header } from 'semantic-ui-react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Header>
              {post.frontmatter.title}
              <Header.Subheader>{post.frontmatter.date}</Header.Subheader>
            </Header>
          </Card.Header>
          <Card.Meta>
            <Label.Group>
              {post.frontmatter.tags.map((tag, index) => (
                <Link
                  className="ui label"
                  key={index}
                  to={`/tags/${kebabCase(tag)}`}
                >
                  {tag}
                </Link>
              ))}
            </Label.Group>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Card.Content>
      </Card>
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
