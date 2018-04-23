import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Breadcrumb, Header, Icon } from 'semantic-ui-react';
import PostCardList from '../components/PostCardList';

const TagDetail = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { numOfPosts, posts } = data.allMarkdownRemark;
  return (
    <div>
      <Breadcrumb style={{ marginBottom: '2em' }}>
        <Link className="section" to="/">
          Home
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Link className="section" to="/tags">
          Tags
        </Link>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>{tag}</Breadcrumb.Section>
      </Breadcrumb>
      <PostCardList listHeader={tag} numOfPosts={numOfPosts} posts={posts} />
    </div>
  );
};

TagDetail.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      numOfPosts: PropTypes.number.isRequired,
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
  }).isRequired,
};

export default TagDetail;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      numOfPosts: totalCount
      posts: edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
