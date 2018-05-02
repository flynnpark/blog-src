import React from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import {
  Container,
  Header,
  Divider,
  Icon,
  Item,
  Pagination,
} from 'semantic-ui-react';
import PostCard from './PostCard';

const PostCardList = ({ listHeader, numOfPosts, posts, type, pageInfo }) => {
  const subHeader = `A collection of ${numOfPosts} ${
    type !== undefined ? type : ''
  } post${numOfPosts === 1 ? '' : 's'}`;
  return (
    <div>
      <Header as="h1">
        <Header.Content>{listHeader}</Header.Content>
        {numOfPosts && <Header.Subheader>{subHeader}</Header.Subheader>}
      </Header>
      <Item.Group divided style={{ marginTop: '2.5em', marginBottom: '2.5em' }}>
        {posts
          .filter(edge => !!edge.node.frontmatter.date)
          .map((post, index) => <PostCard key={index} post={post.node} />)}
      </Item.Group>
      {type !== 'recents' && (
        <Container fluid textAlign="center">
          <Pagination
            defaultActivePage={pageInfo.index}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true,
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true,
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true,
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={pageInfo.pageCount}
            onPageChange={(e, { activePage }) => {
              const prefix = '/' + pageInfo.pathPrefix;
              if (activePage === 1) {
                navigateTo(prefix);
              } else {
                navigateTo(prefix + '/' + activePage);
              }
            }}
          />
        </Container>
      )}
    </div>
  );
};

PostCardList.propTypes = {
  listHeader: PropTypes.string.isRequired,
  numOfPosts: PropTypes.number.isRequired,
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
          tags: PropTypes.arrayOf(PropTypes.string.isRequired),
        }).isRequired,
      }).isRequired,
    })
  ),
  type: PropTypes.string,
  pageInfo: PropTypes.shape({
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    pathPrefix: PropTypes.string,
  }),
};

export default PostCardList;
